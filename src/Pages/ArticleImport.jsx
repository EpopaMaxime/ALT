import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Upload, FileText, Check, AlertTriangle, Download, Edit, Trash, X, GripVertical, Link } from 'lucide-react';
import Papa from 'papaparse';
import axios from 'axios';
import Select from 'react-select';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const API_BASE_URL = "https://alt.back.qilinsa.com/wp-json/wp/v2";

const steps = [
  "Charger le fichier",
  "Prévisualisation",
  "Lier les textes",
  "Structurer la législation",
  "Confirmation"
];

const removeAccentsAndLowerCase = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const formatDate = (date) => {
  if (date.includes('/')) {
    const [day, month, year] = date.split('/');
    return `${year}${month}${day}`;
  }
  return date.replace(/-/g, '');
};

const ArticleImport = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [file, setFile] = useState(null);
  const [parsedArticles, setParsedArticles] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [error, setError] = useState(null);
  const [selectedLinkedTexts, setSelectedLinkedTexts] = useState({});
  const [availableTexts, setAvailableTexts] = useState({});
  const [selectedLegislation, setSelectedLegislation] = useState(null);
  const [bulkSelection, setBulkSelection] = useState(false);
  const [bulkLinkedTexts, setBulkLinkedTexts] = useState({ commentaires: [], decisions: [] });
  const [legislationStructure, setLegislationStructure] = useState([]);
  const [unstructuredArticles, setUnstructuredArticles] = useState([]);
  const [isImportComplete, setIsImportComplete] = useState(false)
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedTexts, setSelectedTexts] = useState([]);
  const [importStatus, setImportStatus] = useState(null);
  const [importError, setImportError] = useState(null);
  const [importhistory, setImportHistory] = useState(null);
  const [historiquePostId, setHistoriquePostId] = useState(null);
  const [loadingLegislation, setLoadingLegislation] = useState(false); // Track loading state
  const [hasFetchedLegislation, setHasFetchedLegislation] = useState(false); // Track if legislations are fetched
  const API_BASE_URL = "https://alt.back.qilinsa.com/wp-json/wp/v2";

  // Fetch legislations on component mount (unchanged)
  useEffect(() => {
    const fetchLegislations = async () => {
      setLoadingLegislation(true);
      try {
        const res = await axios.get(`${API_BASE_URL}/legislations`);
        setAvailableTexts((prev) => ({ ...prev, Législation: res.data }));
      } catch (err) {
        setError("Échec de la récupération des législations disponibles.");
      } finally {
        setLoadingLegislation(false);
      }
    };
    fetchLegislations();
  }, []);



  const generateFileName = () => {
    const now = new Date();
    const date = `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}`;
    const time = `${now.getHours()}h${now.getMinutes()}min`;
    return `Articles_${date}_${time}.csv`;
  };

  const onDragEnd = useCallback((result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === 'unstructured' && destination.droppableId === 'unstructured') {
      return;
    }

    if (source.droppableId === 'structure' && destination.droppableId === 'structure') {
      if (source.index !== destination.index) {
        const sourceList = [...legislationStructure];
        const [removed] = sourceList.splice(source.index, 1);
        sourceList.splice(destination.index, 0, removed);

        const updatedSourceList = sourceList.map((item, index) => ({
          ...item,
          position: index + 1
        }));

        setLegislationStructure(updatedSourceList);
      }
      return;
    }

    const sourceList = source.droppableId === 'structure' ? [...legislationStructure] : [...unstructuredArticles];
    const destList = destination.droppableId === 'structure' ? [...legislationStructure] : [...unstructuredArticles];

    const [removed] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, { ...removed, isDroppedToStructure: destination.droppableId === 'structure' });

    const updatedDestList = destList.map((item, index) => ({
      ...item,
      position: index + 1
    }));

    if (source.droppableId !== destination.droppableId) {
      if (destination.droppableId === 'structure') {
        setLegislationStructure(updatedDestList);
        setUnstructuredArticles(sourceList);
      } else {
        setUnstructuredArticles(updatedDestList);
        setLegislationStructure(sourceList.map((item, index) => ({
          ...item,
          position: index + 1
        })));
      }
    }
  }, [legislationStructure, unstructuredArticles]);


  useEffect(() => {
    if (currentStep === 3 && selectedLegislation) {
      setLoading(true);
      const fetchLegislationStructure = async () => {
        try {
          // Use the new legislation endpoint
          const res = await axios.get(
            `${API_BASE_URL}/get-legislation/${selectedLegislation.value}`
          );
          
          // Extract main data and related structure elements
          const mainData = res.data.data[0];
          const relatedElements = res.data.data[1]?.related || [];
  
          // Map related elements to include endpoint from type
          const structureWithTypes = relatedElements.map(item => ({
            ...item,
            endpoint: `${item.type}s`, // Convert type to endpoint (e.g., 'titre' -> 'titres')
          }));
  
          // Add positions and set structure
          setLegislationStructure(
            structureWithTypes.map((item, index) => ({ 
              ...item, 
              position: index + 1 
            }))
          );
  
          // Keep existing unstructured articles logic
          setUnstructuredArticles(
            selectedArticles.map(index => ({
              id: index.toString(),
              title: parsedArticles[index].Title
            }))
          );
        } catch (err) {
          setError('Échec de la récupération de la structure de la législation');
        } finally {
          setLoading(false);
        }
      };
  
      fetchLegislationStructure();
    }
  }, [currentStep, selectedLegislation, selectedArticles, parsedArticles]);
  const handleFileChange = useCallback((event) => {
    const uploadedFile = event.target.files?.[0];

    // Stocker le nom du fichier avec le suffixe "date et heure"
    const exportFileName = generateFileName();
    const fileNameWithState = `${uploadedFile.name}_${exportFileName}`;
    setImportHistory(fileNameWithState);

    if (!uploadedFile || !selectedLegislation?.value) {
      setError("Veuillez sélectionner la législation avant d'importer le fichier");
      return;
    }

    setFile(uploadedFile);
    Papa.parse(uploadedFile, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const cleanedData = results.data.map(row => {
          const cleanedRow = {};
          Object.keys(row).forEach(key => {
            cleanedRow[key.trim()] = row[key];
          });

          return cleanedRow;
        });

        if (results.errors.length > 0) {
          setError(`Erreur de parsing CSV: ${results.errors[0].message}`);
          setParsedArticles([]);
        } else if (cleanedData.length === 0) {
          setError("Le fichier CSV est vide");
          setParsedArticles([]);
        } else if (!validateCSVStructure(cleanedData)) {
          setError("Le fichier choisi n'est pas un article.");
          setParsedArticles([]);
        } else {
          await checkExistingArticles(cleanedData, selectedLegislation.value);
        }
      }
    });
  }, [selectedLegislation]);

  //let historiquePostId = null; // Stocke l'identifiant du post créé

  const SaveHistoryDebut = async (event = null) => {
    if (event) {
      event.preventDefault();
    }
  
    try {
      const token = localStorage.getItem('token');
      const iduser = localStorage.getItem('iduser');
      const currentDate = new Date();
  
      // Formater la date en JJ/MM/AAAA HH:mm
      const formattedDate = currentDate.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
  
      const fileNameWithState = `${importhistory}`;

      // Fonction pour uploader le fichier
    const uploadFile = async (file) => {
      const formData = new FormData();
      formData.append('file', file); // Ajouter le fichier au FormData
      formData.append('title', fileNameWithState); // Titre optionnel
      formData.append('status', 'publish'); // Statut de la publication

      const response = await axios.post(
        "https://alt.back.qilinsa.com/wp-json/wp/v2/media",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data.id; // Retourne l'identifiant du fichier uploadé
    };

    // Upload du fichier et récupération de son identifiant
    let fileId = null;
    if (file) {
      fileId = await uploadFile(file);
    }

  
      // Construire le JSON à envoyer
      const payload = {
        title: fileNameWithState, // Nom du fichier avec état et date
        acf: {
          type_import: "Article", // Type d'import
          date: currentDate.toISOString().slice(0, 19).replace("T", " "), // AAAA-MM-JJ HH:mm:ss
          statut: "Brouillon", // Statut défini sur "Brouillon"
          fichier_entrant: fileId, // Pas de fichier encore
          auteur: iduser, // ID de l'auteur
        },
        status: "publish", // Statut de la publication
      };
  
      // Envoyer la requête POST
      const response = await axios.post(
        "https://alt.back.qilinsa.com/wp-json/wp/v2/historiqueimport",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const historiquePostId = response.data.id; // Stocker l'identifiant du post créé
      setHistoriquePostId(historiquePostId);
      console.log("Post créé avec succès. ID:", historiquePostId);
    } catch (error) {
      console.error("Erreur lors de la création de l'historique début:", error);
    }
  };
  
  const SaveHistoryMapped = async (event = null) => {
    if (event) {
      event.preventDefault();
    }
  
    if (!historiquePostId) {
      console.error("Aucun identifiant de post trouvé. Veuillez exécuter SaveHistoryDebut d'abord.");
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      const iduser = localStorage.getItem('iduser');
      const currentDate = new Date();
  
      // Formater la date en JJ/MM/AAAA HH:mm
      const formattedDate = currentDate.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
  
      //const fileNameWithState = `${importhistory} - état: fin - ${formattedDate}`;
  
      // Générer le fichier CSV exporté
      const { blob } = exportModifiedCSV(); // Utilise la fonction exportModifiedCSV
      const fileNameWithState = `${importhistory}`;
  
      // Fonction pour uploader le fichier
      const uploadFile = async (fileBlob, fileName) => {
        const formData = new FormData();
        formData.append('file', fileBlob, fileName);
        formData.append('title', fileName); // Titre optionnel
        formData.append('status', 'publish'); // Statut de la publication
  
        const response = await axios.post(
          "https://alt.back.qilinsa.com/wp-json/wp/v2/media",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        return response.data.id; // Retourne l'identifiant du fichier uploadé
      };
  
      // Charger le fichier et obtenir son identifiant
      const fileId = await uploadFile(blob, fileNameWithState);
  
      // Construire le JSON à envoyer pour la mise à jour
      const payload = {
        title: fileNameWithState, // Nom du fichier avec état et date
        acf: {
          type_import: "Article", // Type d'import
          date: currentDate.toISOString().slice(0, 19).replace("T", " "), // AAAA-MM-JJ HH:mm:ss
          statut: "Brouillon", // Statut défini sur "Brouillon"
          fichier_sortant: fileId, // Identifiant du fichier importé
          auteur: iduser, // ID de l'auteur
        },
      };
  
      // Envoyer la requête PATCH pour mettre à jour le post
      const response = await axios.patch(
        `https://alt.back.qilinsa.com/wp-json/wp/v2/historiqueimport/${historiquePostId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Post mis à jour avec succès:", response.data);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'historique fin:", error);
    }
  };
  

  const SaveHistoryFin = async (event = null) => {
    if (event) {
      event.preventDefault();
    }
  
    if (!historiquePostId) {
      console.error("Aucun identifiant de post trouvé. Veuillez exécuter SaveHistoryDebut d'abord.");
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      const iduser = localStorage.getItem('iduser');
      const currentDate = new Date();
  
      // Formater la date en JJ/MM/AAAA HH:mm
      const formattedDate = currentDate.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
  
      //const fileNameWithState = `${importhistory} - état: fin - ${formattedDate}`;
  
      // Générer le fichier CSV exporté
      const { blob } = exportModifiedCSV(); // Utilise la fonction exportModifiedCSV
      const fileNameWithState = `${importhistory}`;
  
      // Fonction pour uploader le fichier
      const uploadFile = async (fileBlob, fileName) => {
        const formData = new FormData();
        formData.append('file', fileBlob, fileName);
        formData.append('title', fileName); // Titre optionnel
        formData.append('status', 'publish'); // Statut de la publication
  
        const response = await axios.post(
          "https://alt.back.qilinsa.com/wp-json/wp/v2/media",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        return response.data.id; // Retourne l'identifiant du fichier uploadé
      };
  
      // Charger le fichier et obtenir son identifiant
      const fileId = await uploadFile(blob, fileNameWithState);

      // Construire le JSON à envoyer pour la mise à jour
      const payloadDemande = {
        title: fileNameWithState, // Nom du fichier avec état et date
        acf: {
          type_import: "Article", // Type d'import
          date: currentDate.toISOString().slice(0, 19).replace("T", " "), // AAAA-MM-JJ HH:mm:ss
          statut: "Demande-envoyé", // Statut défini sur "Demande-envoyé"
          fichier_sortant: fileId, // Identifiant du fichier importé
          auteur: iduser, // ID de l'auteur
        },
      };
  
      // Construire le JSON à envoyer pour la mise à jour
      const payload = {
        title: fileNameWithState, // Nom du fichier avec état et date
        acf: {
          type_import: "Article", // Type d'import
          date: currentDate.toISOString().slice(0, 19).replace("T", " "), // AAAA-MM-JJ HH:mm:ss
          statut: "En-cours", // Statut défini sur "En-cours"
          fichier_sortant: fileId, // Identifiant du fichier importé
          auteur: iduser, // ID de l'auteur
        },
      };

      // Envoyer la requête PATCH pour mettre à jour le post
      const responseDemande = await axios.patch(
        `https://alt.back.qilinsa.com/wp-json/wp/v2/historiqueimport/${historiquePostId}`,
        payloadDemande,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Envoyer la requête PATCH pour mettre à jour le post
      const response = await axios.patch(
        `https://alt.back.qilinsa.com/wp-json/wp/v2/historiqueimport/${historiquePostId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Import Demandé:", responseDemande.data);
      console.log("Post mis à jour avec succès:", response.data);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'historique fin:", error);
    }
  };
  
  

  useEffect(() => {
    if (importhistory) {
      // Appeler la fonction SaveHistoryDebut dès que l'importation debute
      SaveHistoryDebut();
    }
  }, [importhistory]);

  useEffect(() => {
    if (isImportComplete) {
      // Appeler la fonction SaveHistoryFin dès que l'importation est terminée
      SaveHistoryFin();
    }
  }, [isImportComplete]);

  useEffect(() => {
    if (currentStep === 4) {
      SaveHistoryMapped();
     
    }
  }, [currentStep]);

  const formatDateFromCSV = (dateStr) => {
    // Convert from DD/MM/YYYY to YYYYMMDD
    const [day, month, year] = dateStr.split('/');
    return `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`;
  };

  const validateCSVStructure = (data) => {
    const requiredColumns = ['Title', 'Content', 'Date_entree'];
    return requiredColumns.every(column => data[0].hasOwnProperty(column) && data[0][column] !== '');
  };

  const checkExistingArticles = async (articles, selectedLegislationId) => {
    try {
      const articleChecks = await Promise.all(
        articles.map(async (article) => {
          try {
            // Improved normalization with better regex and case insensitivity
            const normalizeTitleForSearch = (title) => {
              const normalizedTitle = title.trim().toLowerCase();
              
              // Enhanced regex to capture article numbers with spaces/hyphens
              const articleNumberMatch = normalizedTitle.match(/article[\s-]*(\d+)/i);
              
              return {
                fullTitle: normalizedTitle,
                articleNumber: articleNumberMatch?.[1] || null
              };
            };
  
            const currentArticle = normalizeTitleForSearch(article.Title);
            
            // Use article number for search if available
            const searchTerm = currentArticle.articleNumber 
              ? `Article ${currentArticle.articleNumber}`
              : currentArticle.fullTitle;
  
            const searchResponse = await axios.get(
              `https://alt.back.qilinsa.com/wp-json/wp/v2/articles?search=${encodeURIComponent(searchTerm)}`
            );
  
            const formatDateToServerFormat = (date) => {
              const [day, month, year] = date.split("/");
              return `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`;
            };
  
            const formattedCsvDate = formatDateToServerFormat(article.Date_entree);
            let result = { ...article };
            const matchingArticles = searchResponse.data;
  
            // Convert legislation IDs to numbers for accurate comparison
            const targetLegislationId = Number(selectedLegislationId);
  
            for (const existingArticle of matchingArticles) {
              const existingLegislationIds = existingArticle.acf.Legislation_ou_titre_ou_chapitre_ou_section
                .map(id => Number(id));
  
              if (!existingLegislationIds.includes(targetLegislationId)) continue;
  
              const existingTitle = normalizeTitleForSearch(existingArticle.title.rendered);
              
              // Compare article numbers if available, otherwise full titles
              const titleMatches = currentArticle.articleNumber
                ? currentArticle.articleNumber === existingTitle.articleNumber
                : currentArticle.fullTitle === existingTitle.fullTitle;
  
              if (titleMatches) {
                const existingDate = existingArticle.acf.date_entree;
                
                if (existingDate === formattedCsvDate) {
                  return {
                    ...article,
                    exists: true,
                    id: existingArticle.id
                  };
                } else {
                  // Track potential new version but keep checking for exact matches
                  result = {
                    ...article,
                    newVersion: true,
                    originalId: existingArticle.id
                  };
                }
              }
            }
  
            return result;
          } catch (error) {
            console.error(`Error checking article "${article.Title}":`, error);
            return article;
          }
        })
      );
  
      setParsedArticles(articleChecks);
      setError(null);
    } catch (error) {
      console.error("Erreur lors de la vérification des articles existants:", error);
      setError("Impossible de vérifier les articles existants");
    }
  };

  const handleArticleSelection = useCallback((index) => {
    const article = parsedArticles[index];
    if (article.exists) {
      return;
    }
    setSelectedArticles(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  }, [parsedArticles]);

  const handleLinkedText = useCallback((selectedIndex, newLinkedTexts, type) => {
    setSelectedLinkedTexts(prev => {
      const updatedLinkedTexts = { ...prev };
      if (!updatedLinkedTexts[selectedIndex]) {
        updatedLinkedTexts[selectedIndex] = [];
      }
      updatedLinkedTexts[selectedIndex] = updatedLinkedTexts[selectedIndex]
        .filter(text => text.type !== type)
        .concat(newLinkedTexts);
      return updatedLinkedTexts;
    });
  }, []);

  const handleBulkSelection = useCallback((select) => {
    setBulkSelection(select);
    if (!select) {
      setSelectedLinkedTexts({});
    }
  }, []);

  const handleBulkLinkedText = useCallback((selectedOptions, type) => {
    setBulkLinkedTexts(prev => ({
      ...prev,
      [type]: selectedOptions
    }));
    if (bulkSelection) {
      const newSelectedLinkedTexts = {};
      selectedArticles.forEach(selectedIndex => {
        newSelectedLinkedTexts[selectedIndex] = [
          ...(newSelectedLinkedTexts[selectedIndex] || []),
          ...selectedOptions
        ];
      });
      setSelectedLinkedTexts(newSelectedLinkedTexts);
    }
  }, [bulkSelection, selectedArticles]);

  const exportModifiedCSV = useCallback(() => {
    const exportData = selectedArticles.map(index => {
      const article = parsedArticles[index];
      const exportRow = { ...article };
      const linkedTexts = selectedLinkedTexts[index] || [];
      const decisions = linkedTexts.filter(t => t.type === "Décision").map(t => t.value);
      const commentaires = linkedTexts.filter(t => t.type === "Commentaire").map(t => t.value);
      exportRow.ID_decision = decisions.join(',');
      exportRow.ID_commentaire = commentaires.join(',');
      if (selectedLegislation) {
        exportRow.ID_legislation = selectedLegislation.value;
      }
      const structureItem = legislationStructure.find(item => item.id === index.toString());
      if (structureItem) {
        exportRow.Position_legislation = structureItem.position;
        // Ajout de l'ID hiérarchique
        const hierarchyId = findHierarchyId(structureItem.position);
        exportRow.Hierarchy_ID = hierarchyId || null; // Récupérer l'ID hiérarchique
      }
      // Add the user ID to the exportRow
      exportRow.UserId = localStorage.getItem('iduser');
      return exportRow;
    });
    const csv = Papa.unparse(exportData, {
      encoding: 'UTF-8'
    });
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csv], { type: 'text/csv;charset=utf-8;' });
    return { csv, blob };
  }, [selectedArticles, parsedArticles, selectedLinkedTexts, selectedLegislation, legislationStructure]);

  const findHierarchyId = (position) => {
    const hierarchyIds = [];

    for (let pos = position - 1; pos >= 0; pos--) {
      const section = legislationStructure.find(item => item.position === pos && item.endpoint === 'sections');
      const chapter = legislationStructure.find(item => item.position === pos && item.endpoint === 'chapitres');
      const title = legislationStructure.find(item => item.position === pos && item.endpoint === 'titres');

      if (section) {
        // Ajouter l'ID de la section et continuer pour trouver le chapitre et titre
        hierarchyIds.unshift(section.id);
        continue;
      } else if (chapter) {
        // Ajouter l'ID du chapitre et continuer pour trouver le titre
        hierarchyIds.unshift(chapter.id);
        continue;
      } else if (title) {
        // Ajouter l'ID du titre et retourner le tableau
        hierarchyIds.unshift(title.id);
        break;
      }
    }

    return hierarchyIds.length > 0 ? hierarchyIds : null;
  };


  const fetchAvailableTexts = useCallback(async () => {
    const textTypes = ["Législation", "Décision", "Commentaire"];
    const texts = {};
    for (const type of textTypes) {
      try {
        const response = await axios.get(`${API_BASE_URL}/${removeAccentsAndLowerCase(type)}s?per_page=100`);
        texts[type] = response.data.map(item => ({
          value: item.id.toString(),
          label: item.title?.rendered || item.acf?.titre || 'Sans titre',
          type
        }));
      } catch (err) {
        console.error(`Erreur lors de la récupération des ${type}s:`, err);
        texts[type] = [];
      }
    }
    setAvailableTexts(texts);
  }, []);

  useEffect(() => {
    fetchAvailableTexts();
  }, [fetchAvailableTexts]);

  useEffect(() => {
    if (currentStep === 2) {
      const newSelectedLinkedTexts = {};
      selectedArticles.forEach(index => {
        const article = parsedArticles[index];
        const linkedTexts = [];

        if (article.ID_commentaire) {
          const commentaireIds = article.ID_commentaire.split(',');
          commentaireIds.forEach(id => {
            const commentaire = availableTexts["Commentaire"]?.find(t => t.value === id);
            if (commentaire) {
              linkedTexts.push(commentaire);
            }
          });
        }

        if (article.ID_decision) {
          const decisionIds = article.ID_decision.split(',');
          decisionIds.forEach(id => {
            const decision = availableTexts["Décision"]?.find(t => t.value === id);
            if (decision) {
              linkedTexts.push(decision);
            }
          });
        }

        if (linkedTexts.length > 0) {
          newSelectedLinkedTexts[index] = linkedTexts;
        }
      });

      setSelectedLinkedTexts(newSelectedLinkedTexts);

      if (parsedArticles.length >

        0 && parsedArticles[0].ID_legislation) {
        const legislationId = parsedArticles[0].ID_legislation;
        const legislation = availableTexts["Législation"]?.find(t => t.value === legislationId);
        if (legislation) {
          setSelectedLegislation(legislation);
        }
      }
    }
  }, [currentStep, selectedArticles, parsedArticles, availableTexts]);

  // useEffect(() => {
  //   if (currentStep === 3 && selectedLegislation) {
  //     setLoading(true);
  //     const fetchLegislationStructure = async () => {
  //       try {
  //         const endpoints = ['titres', 'chapitres', 'sections', 'articles'];
  //         const res = await axios.get(`${API_BASE_URL}/legislations/${selectedLegislation.value}`);
  //         const identifiers = res.data.acf.titre_ou_chapitre_ou_section_ou_articles || [];

  //         const fetchData = async (id) => {
  //           for (let endpoint of endpoints) {
  //             try {
  //               const res = await axios.get(`${API_BASE_URL}/${endpoint}/${id}`);
  //               if (res.data) return { ...res.data, endpoint, id };
  //             } catch (err) {
  //               // Continue to the next endpoint if not found
  //             }
  //           }
  //           return null;
  //         };

  //         const detailsData = await Promise.all(identifiers.map(fetchData));
  //         const successfulItems = detailsData.filter(item => item !== null);
  //         setLegislationStructure(successfulItems.map((item, index) => ({ ...item, position: index + 1 })));
  //         setUnstructuredArticles(selectedArticles.map(index => ({ id: index.toString(), title: parsedArticles[index].Title })));
  //       } catch (err) {
  //         setError('Échec de la récupération de la structure de la législation');
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchLegislationStructure();
  //   }
  // }, [currentStep, selectedLegislation, selectedArticles, parsedArticles]);

  const handleExportClick = () => {
    const { blob } = exportModifiedCSV();
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', generateFileName());
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleImportConfirmation = async () => {
    try {
      setImportStatus('pending');
      setImportError(null);

      const fileNameWithState = `${importhistory}`;

      const { csv } = exportModifiedCSV();
      const formData = new FormData();
      const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csv], { type: 'text/csv;charset=utf-8;' });
      formData.append('file', blob, fileNameWithState);

      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token d\'authentification non trouvé');
      }

      const response = await axios.post('https://alt.back.qilinsa.com/wp-json/wp/v2/importarticles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });

      if (response.status === 200) {
        setImportStatus('success');
        setIsImportComplete(true);
      } else {
        throw new Error('Réponse inattendue du serveur');
      }
    } catch (error) {
      console.error('Erreur lors de l\'importation:', error);
      setImportStatus('error');
      setImportError(error.message || 'Une erreur est survenue lors de l\'importation');
    }
  };

  const isStepValid = useCallback(() => {
    // Add debug logging
    const logValidation = (step, result) => {
      console.log(`Step ${step} validation:`, result);
      return result;
    };

    switch (currentStep) {
      case 0:
        return logValidation(
          0,
          Array.isArray(parsedArticles) &&
          parsedArticles.length > 0 &&
          error === null &&
          !!selectedLegislation // Check if a legislation is selected
        );

      case 1: {
        // Make sure we have both arrays and they're not empty
        if (!Array.isArray(selectedArticles) || !Array.isArray(parsedArticles)) {
          return logValidation(1, false);
        }

        // If we only have one article, check if it's marked as existing
        if (parsedArticles.length === 1) {
          const singleArticle = parsedArticles[0];
          // If the article exists (has the "Existant" badge), return false to disable the button
          if (singleArticle && singleArticle.exists) {
            return logValidation(1, false);
          }
        }

        // Check if we have any valid selected articles
        const hasValidSelection = selectedArticles.length > 0 &&
          selectedArticles.some(index => {
            const article = parsedArticles[index];
            return article && !article.exists;
          });

        return logValidation(1, hasValidSelection);
      }

      case 2: {
        // Ensure we have a legislation selected
        if (!selectedLegislation) {
          return logValidation(2, false);
        }

        // if (bulkSelection) {
        //   // For bulk selection, verify we have at least one selection
        //   const hasBulkLinks = (
        //     bulkLinkedTexts.commentaires.length > 0 || 
        //     bulkLinkedTexts.decisions.length > 0
        //   );
        //   return logValidation(2, hasBulkLinks);
        // } else {
        //   // For individual selection, verify each selected article has links
        //   const hasIndividualLinks = selectedArticles.every(index => 
        //     selectedLinkedTexts[index]?.length > 0
        //   );
        //   return logValidation(2, hasIndividualLinks);
        // }
        return logValidation(2, true);  //Uncomment the one up and remove this line of code to use the other condition up
      }

      case 3: {
        // Check if legislation is selected
        const hasLegislation = Boolean(selectedLegislation?.value);

        // Check if unstructured articles list is empty
        const isUnstructuredEmpty = Array.isArray(unstructuredArticles) &&
          unstructuredArticles.length === 0;

        // Button should only be enabled if we have legislation selected AND
        // the unstructured articles list is empty
        return logValidation(3, hasLegislation && isUnstructuredEmpty);
      }

      case 4:
        return logValidation(4, true);

      default:
        return logValidation('default', false);
    }
  }, [
    currentStep,
    parsedArticles,
    selectedArticles,
    error,
    selectedLegislation,
    // bulkSelection,
    // bulkLinkedTexts,
    // selectedLinkedTexts,
    unstructuredArticles, // Added new dependency
  ]);

  const buttonSection = (
    <div className="flex justify-between">
      <button
        onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
        disabled={currentStep === 0}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
      >
        <ArrowLeft className="mr-2 h-4 w-4 inline" /> Précédent
      </button>

      {currentStep === steps.length - 1 ? (
        <button
          onClick={handleImportConfirmation}
          disabled={importStatus === 'pending' || !parsedArticles.length}
          className="px-4 py-2 bg-green-500 text-white rounded-md disabled:opacity-50 flex items-center"
        >
          {importStatus === 'pending' ? (
            'Importation en cours...'
          ) : (
            <>
              <FileText className="mr-2 h-4 w-4" /> Confirmer l'importation
            </>
          )}
        </button>
      ) : (
        <button
          onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={!isStepValid()}
          className={`px-4 py-2 rounded-md transition-colors duration-200 flex items-center ${isStepValid()
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'px-4 py-2 bg-green-500 text-white rounded-md disabled:opacity-50'
            }`}
        >
          Suivant <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      )}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lier à une législation : <span className="text-red-500">*</span>
              </label>
              {loadingLegislation ? (
                <div className="text-sm text-gray-500">Chargement des législations...</div>
              ) : (
                <Select
                  options={availableTexts["Législation"] || []}
                  value={selectedLegislation}
                  onChange={(selected) => setSelectedLegislation(selected)}
                  className="w-full"
                />
              )}
            </div>
            <h2 className="text-xl font-semibold text-green-500">Charger le fichier CSV</h2>
            <div className="bg-white p-4 rounded-md shadow">
              <p className="text-sm text-gray-600 mb-2">
                Le fichier CSV doit contenir les colonnes suivantes : Title, Content, Date_entree (obligatoires),
                ID_decision, ID_commentaire, ID_legislation, Position_legislation (optionnelles)
              </p>
              <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">Fichier CSV</label>
              <input
                id="file-upload"
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </div>
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <AlertTriangle className="w-5 h-5 inline mr-2" />
                {error}
              </div>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-500">Prévisualisation des articles</h2>
            <p className="text-sm text-gray-500">Nombre d'éléments : {parsedArticles.length}</p>
            <div className="bg-white p-4 rounded-md shadow max-h-96 overflow-y-auto">
              <div className="flex justify-between mb-4">
                <button
                  onClick={() => setSelectedArticles(parsedArticles.map((_, index) => index).filter(index => !parsedArticles[index].exists))}
                  className="text-green-500"
                >
                  Tout sélectionner
                </button>
                <button
                  onClick={() => setSelectedArticles([])}
                  className="text-green-500"
                >
                  Tout désélectionner
                </button>
              </div>
              {parsedArticles.map((article, index) => (
                <div key={index} className={`mb-4 p-3 border-b last:border-b-0 ${article.exists ? 'bg-red-100' : article.newVersion ? 'bg-green-100' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`article-${index}`}
                        checked={selectedArticles.includes(index)}
                        onChange={() => handleArticleSelection(index)}
                        disabled={article.exists}
                        className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`article-${index}`} className="text-sm font-medium text-gray-700">
                        {article.Title} - <span className="text-gray-500">{article.Date_entree}</span>
                      </label>
                    </div>
                    {article.exists && (
                      <span className="bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Existant</span>
                    )}
                    {article.newVersion && (
                      <span className="bg-green-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Nouvelle version</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{article.Content.substring(0, 100)}...</p>
                  {article.newVersion && (
                    <p className="mt-1 text-xs text-green-600">Nouvelle version de l'article (ID: {article.originalId})</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-500">Lier les textes</h2>
            <div className="bg-white p-4 rounded-md shadow">
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={bulkSelection}
                    onChange={(e) => handleBulkSelection(e.target.checked)}
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Liaison en bloc</span>
                </label>
              </div>
              {bulkSelection ? (
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lier les commentaires en bloc :</label>
                    <Select
                      options={availableTexts["Commentaire"] || []}
                      value={bulkLinkedTexts.commentaires}
                      onChange={(selected) => handleBulkLinkedText(selected, 'commentaires')}
                      isMulti
                      className="w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lier les décisions en bloc :</label>
                    <Select
                      options={availableTexts["Décision"] || []}
                      value={bulkLinkedTexts.decisions}
                      onChange={(selected) => handleBulkLinkedText(selected, 'decisions')}
                      isMulti
                      className="w-full"
                    />
                  </div>
                </div>
              ) : (
                selectedArticles.map((selectedIndex) => {
                  const article = parsedArticles[selectedIndex]
                  return (
                    <div key={selectedIndex} className="border rounded-md p-4 mb-4">
                      <h4 className="font-medium mb-2">{article.Title}</h4>
                      {["Commentaire", "Décision"].map(type => {
                        const linkedIds = article[`ID_${type.toLowerCase()}`]
                        const preselectedOptions = linkedIds
                          ? availableTexts[type].filter(text => linkedIds.split(',').includes(text.value))
                          : []
                        return (
                          <div key={type} className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">{`Lier ${type}s:`}</label>
                            <Select
                              options={availableTexts[type] || []}
                              value={selectedLinkedTexts[selectedIndex]?.filter(text => text.type === type) || preselectedOptions}
                              onChange={(selectedOptions) => handleLinkedText(selectedIndex, selectedOptions, type)}
                              isMulti
                              className="w-full"
                            />
                          </div>
                        )
                      })}
                    </div>
                  )
                })
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <DndProvider backend={HTML5Backend}>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-500">Structurer la législation</h2>
              {!selectedLegislation && (
                <p className="text-red-500">Veuillez d'abord sélectionner une législation à l'étape précédente.</p>
              )}
              {loading ? (
                <div className="text-center">
                  <p>Chargement de la structure de la législation...</p>
                </div>
              ) : (
                <div className="bg-white p-4 rounded-md shadow">
                  <p className="mb-4">Structuration de la législation : {selectedLegislation?.label}</p>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-2/3">
                      <h3 className="text-lg font-medium mb-2">Structure de la législation</h3>
                      <ul className="min-h-[400px] max-h-[400px] border-2 border-dashed border-gray-300 p-4 rounded-md overflow-y-auto">
                        {legislationStructure.map((item, index) => (
                          <li
                            key={item.id}
                            className={`p-2 rounded flex items-center mb-2 ${item.isDroppedToStructure ? 'bg-green-100' : 'bg-gray-100'
                              }`}
                            draggable
                            onDragStart={(e) => {
                              e.dataTransfer.setData('text/plain', JSON.stringify({ id: item.id, index, compartment: 'structure' }));
                            }}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                              e.preventDefault();
                              const droppedItem = JSON.parse(e.dataTransfer.getData('text/plain'));
                              onDragEnd({
                                source: { index: droppedItem.index, droppableId: droppedItem.compartment },
                                destination: { index, droppableId: 'structure' }
                              });
                            }}
                          >
                            <GripVertical className="mr-2 text-gray-500" />
                            <span>{item.title?.rendered || item.acf?.titre || item.title || 'Sans titre'}</span>
                            <span className="ml-auto text-sm text-gray-500">Position: {item.position}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                    <div className="w-full md:w-1/3">
                      <h3 className="text-lg font-medium mb-2">Articles à importer</h3>
                      <ul className="min-h-[400px] max-h-[400px] border-2 border-dashed border-gray-300 p-4 rounded-md overflow-y-auto">
                        {unstructuredArticles.map((item, index) => (
                          <li
                            key={item.id}
                            className="bg-blue-100 p-2 rounded flex items-center mb-2"
                            draggable
                            onDragStart={(e) => {
                              e.dataTransfer.setData('text/plain', JSON.stringify({ id: item.id, index, compartment: 'unstructured' }));
                            }}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                              e.preventDefault();
                              const droppedItem = JSON.parse(e.dataTransfer.getData('text/plain'));
                              onDragEnd({
                                source: { index: droppedItem.index, droppableId: droppedItem.compartment },
                                destination: { index, droppableId: 'unstructured' }
                              });
                            }}
                          >
                            <GripVertical className="mr-2 text-gray-500" />
                            <span>{item.title || 'Sans titre'}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DndProvider>
        );
      case 4:
        if (!parsedArticles.length || !selectedArticles.length) return null
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-500">Confirmation</h2>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-medium mb-2">Récapitulatif de l'importation</h3>
              <p>Nombre d'articles sélectionnés : {selectedArticles.length}</p>
              <p>Législation liée : {selectedLegislation?.label || "Aucune"}</p>

              <h4 className="text-md font-medium mt-4 mb-2">Articles et leurs liaisons :</h4>
              {bulkSelection ? (
                <div>
                  <ul className="list-disc list-inside">
                    {selectedArticles.map((index) => (
                      <li
                        key={index}
                        className={`p-2 rounded ${legislationStructure.some(item => item.id === index.toString()) ? 'bg-green-100' : ''
                          }`}
                      >
                        {parsedArticles[index].Title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2">
                    <h5 className="font-medium">Commentaires liés :</h5>
                    <ul className="list-disc list-inside ml-4">
                      {bulkLinkedTexts.commentaires.map((comment, i) => (
                        <li key={i}>{comment.label}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h5 className="font-medium">Décisions liées :</h5>
                    <ul className="list-disc list-inside ml-4">
                      {bulkLinkedTexts.decisions.map((decision, i) => (
                        <li key={i}>{decision.label}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                selectedArticles.map((index) => {
                  const article = parsedArticles[index];
                  const structureItem = legislationStructure.find(item => item.id === index.toString());
                  return (
                    <div
                      key={index}
                      className={`mb-4 p-3 rounded-md ${structureItem ? 'bg-green-100' : 'bg-gray-50'
                        }`}
                    >
                      <h5 className="font-medium">{article.Title}</h5>
                      <p className="text-sm text-gray-500">Position : {structureItem ? structureItem.position : 'Non définie'}</p>
                      {["Commentaire", "Décision"].map(type => (
                        <div key={type}>
                          <h6 className="font-medium text-sm mt-2">{type}s liés :</h6>
                          <ul className="list-disc list-inside ml-4">
                            {selectedLinkedTexts[index]?.filter(text => text.type === type).map((text, i) => (
                              <li key={i}>{text.label}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  );
                })
              )}


              {selectedLegislation && (
                <div className="mt-4">
                  <h4 className="text-md font-medium mb-2">Structure finale de la législation :</h4>
                  <ol className="list-decimal list-inside">
                    {legislationStructure.map((item, index) => (
                      <li key={index}>
                        {item.title?.rendered || item.acf?.titre || item.title || 'Sans titre'}
                        {item.endpoint === 'articles' && ` (Article importé)`}
                        <span className="ml-2 text-sm text-gray-500">Position: {item.position}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">Veuillez vérifier que toutes les informations ci-dessus sont correctes avant de procéder à l'importation.</p>
              <button
                onClick={handleExportClick}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                <Download className="inline-block mr-2 h-4 w-4" />
                Exporter le nouveau fichier
              </button>
            </div>
          </div>
        );
      default:
        return null
    }
  }

  const renderStepIndicators = useCallback(() => (
    <div className="flex justify-between items-center overflow-x-auto pb-4">
      {steps.map((step, index) => {
        if (index === 5 && selectedType !== "Législation") return null
        return (
          <div key={step} className="flex flex-col items-center mx-2">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${index < currentStep
                  ? 'bg-green-500 text-white'
                  : index === currentStep
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-gray-200 text-gray-400'
                }`}
              initial={false}
              animate={{
                scale: index === currentStep ? 1.2 : 1,
                transition: { type: 'spring', stiffness: 500, damping: 30 }
              }}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm">{index + 1}</span>
              )}
            </motion.div>
            <span className="text-xs mt-1 whitespace-nowrap">{step}</span>
          </div>
        )
      })}
    </div>
  ), [steps, currentStep, selectedType])

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-6">
      {!isImportComplete && renderStepIndicators()}

      <AnimatePresence mode="wait">
        {!isImportComplete ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg border p-4 md:p-6 shadow-sm"
          >
            {renderStepContent()}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="flex flex-col items-center gap-4 p-6 bg-green-100 rounded-lg"
          >
            <Check className="w-16 h-16 text-green-500" />
            <h2 className="text-2xl font-bold text-green-700">Importation en cours...</h2>
            <p className="text-center text-green-600">
              Votre importation a été prise en compte et sera exécutée en arrière-plan.
              Cela peut prendre plusieurs heures. Nous vous tiendrons informé de l'avancement.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isImportComplete && buttonSection}

      {importStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Erreur!</strong>
          <span className="block sm:inline"> {importError}</span>
        </div>
      )}
    </div>
  )
}

export default ArticleImport