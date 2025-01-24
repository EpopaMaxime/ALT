import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { ArrowLeft, ArrowRight, Upload, FileText, Check, AlertTriangle, Download, Edit, X, GripVertical, Link } from 'lucide-react';
import Papa from 'papaparse';
import axios from 'axios';
import Select from 'react-select';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const API_BASE_URL = "https://alt.back.qilinsa.com/wp-json/wp/v2";

const steps = [
  "Charger le fichier",
  "Prévisualisation",
  "Lier les textes",
  "Structurer la législation",
  "Confirmation"
];

const LegislationNode = React.memo(({ node, onEdit, onDelete, canEdit, onDragEnd }) => {
  return (
    <Reorder.Item value={node} id={node.id} onDragEnd={onDragEnd}>
      <div
        className={`flex items-center space-x-2 mb-2 p-2 border rounded ${
          canEdit ? 'cursor-move' : ''
        } ${node.type === 'Article' && node.linkedTextId ? 'bg-green-100' : ''}`} // <-- Conditional class added
      >
        {canEdit && <GripVertical className="text-gray-400" />}
        <span>{node.type}: {node.content}</span>
        {canEdit && (
          <>
            <button onClick={() => onEdit(node)} className="px-2 py-1 bg-blue-500 text-white rounded">
              <Edit className="w-4 h-4" />
            </button>
            <button onClick={() => onDelete(node)} className="px-2 py-1 bg-red-500 text-white rounded">
              <X className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </Reorder.Item>
  );
});


const ImportComplet = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [file, setFile] = useState(null);
  const [parsedLegislations, setParsedLegislations] = useState([]);
  const [selectedLegislationIndex, setSelectedLegislationIndex] = useState(null);
  const [error, setError] = useState(null);
  const [legislationStructures, setLegislationStructures] = useState([]);
  const [canEditStructure, setCanEditStructure] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isImportComplete, setIsImportComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [importStatus, setImportStatus] = useState(null);
  const [importError, setImportError] = useState(null);
  const [availableTexts, setAvailableTexts] = useState({});
  const [selectedLinkedTexts, setSelectedLinkedTexts] = useState([]);
  const [isEditingExisting, setIsEditingExisting] = useState(false);
  const [legislationStructure, setLegislationStructure] = useState([]);
  const [selectedLegislation, setSelectedLegislation] = useState(null);
  const [unstructuredArticles, setUnstructuredArticles] = useState([]);
  const [parsedArticles, setParsedArticles] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [importhistory, setImportHistory] = useState(null);
  const [commentsOptions, setCommentsOptions] = useState([]);
  const [decisionsOptions, setDecisionsOptions] = useState([]);
  const [historiquePostId, setHistoriquePostId] = useState(null);
  const [bulkLinkedTexts, setBulkLinkedTexts] = useState({
    commentaires: [],
    decisions: [],
  });

  // Fetch comments and decisions when the component mounts
  useEffect(() => {
    // Fetch comments
    axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/commentaires/')
      .then((response) => {
        const comments = response.data.map((comment) => ({
          value: comment.id,
          label: comment.title.rendered, // Adjust according to how you want to display the comment
        }));
        setCommentsOptions(comments);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });

    // Fetch decisions
    axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/decisions/')
      .then((response) => {
        const decisions = response.data.map((decision) => ({
          value: decision.id,
          label: decision.title.rendered, // Adjust according to how you want to display the decision
        }));
        setDecisionsOptions(decisions);
      })
      .catch((error) => {
        console.error('Error fetching decisions:', error);
      });
  }, []);

  const handleBulkLinkedText = (selected, type) => {
    setBulkLinkedTexts((prev) => ({
      ...prev,
      [type]: selected,
    }));
  };

  const generateFileName = () => {
    const now = new Date();
    const date = `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}`;
    const time = `${now.getHours()}h${now.getMinutes()}min`;
    return `LegislationComplet_${date}_${time}.csv`;
  };

  const checkExistingLegislations = async (legislations) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/legislations`);
      const existingLegislations = response.data;
      
      const updatedLegislations = legislations.map(legislation => {
        const existingLegislation = existingLegislations.find(existing => 
          existing.title.rendered === legislation.Titre_legislation
        );

        if (existingLegislation) {
          return { ...legislation, exists: true, id: existingLegislation.id };
        }

        return legislation;
      });

      return updatedLegislations;
    } catch (error) {
      console.error("Erreur lors de la vérification des législations existantes:", error);
      setError("Impossible de vérifier les législations existantes");
      return legislations;
    }
  };

  const handleFileChange = useCallback(async (event) => {
    const uploadedFile = event.target.files?.[0];
    // Stocker le nom du fichier avec le suffixe "- état: début"
    const exportFileName = generateFileName();
    const fileNameWithState = `${uploadedFile.name}_${exportFileName}`;
    setImportHistory(fileNameWithState);

    if (uploadedFile) {
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
            setParsedLegislations([]);
          } else if (cleanedData.length === 0) {
            setError("Le fichier CSV est vide");
            setParsedLegislations([]);
          } else if (!validateCSVStructure(cleanedData)) {
            setError("Le fichier choisi n'est pas une législation.");
            setParsedLegislations([]);
          } else {
            const checkedLegislations = await checkExistingLegislations(cleanedData);
            setParsedLegislations(checkedLegislations);
            const structures = buildLegislationStructures(checkedLegislations);
            setLegislationStructures(structures);
            setError(null);
          }
        }
      });
    }
  }, []);

  const validateCSVStructure = (data) => {
    const requiredColumns = ['Titre_legislation', 'Date_entree', 'Code_visee', 'Titre', 'Chapitre', 'Section', 'Article', 'Contenu_article','Contenu_article2'];
    return requiredColumns.every(column => data[0].hasOwnProperty(column));
  };

  const buildLegislationStructures = useCallback((data) => {
    const structures = [];
    let currentStructure = null;
    let currentTitle = '';
    let currentChapter = '';
    let currentSection = '';
    let currentArticle = '';
  
    data.forEach((row) => {
      if (!currentStructure || row.Titre_legislation !== currentStructure.Titre_legislation) {
        if (currentStructure) {
          structures.push(currentStructure);
        }
        currentStructure = {
          Titre_legislation: row.Titre_legislation,
          "Date d'entrée en vigueur": row.Date_entree,
          "Code visé": row.Code_visee,
          structure: [],
          exists: row.exists,
          id: row.id
        };
        currentTitle = '';
        currentChapter = '';
        currentSection = '';
        currentArticle = '';
      }
  
      if (row.Titre && row.Titre !== currentTitle) {
        currentTitle = row.Titre;
        currentStructure.structure.push({
          id: Math.random().toString(36).substr(2, 9),
          type: 'Titre',
          content: row.Titre,
        });
      }
  
      if (row.Chapitre && row.Chapitre !== currentChapter) {
        currentChapter = row.Chapitre;
        currentStructure.structure.push({
          id: Math.random().toString(36).substr(2, 9),
          type: 'Chapitre',
          content: row.Chapitre,
        });
      }
  
      if (row.Section && row.Section !== currentSection) {
        currentSection = row.Section;
        currentStructure.structure.push({
          id: Math.random().toString(36).substr(2, 9),
          type: 'Section',
          content: row.Section,
        });
      }
  
      if (row.Article && row.Article !== currentArticle) {
        currentArticle = row.Article;
        currentStructure.structure.push({
          id: Math.random().toString(36).substr(2, 9),
          type: 'Article',
          content: row.Article,
          contenu_article: row.Contenu_article || '', // Ajout du contenu_article
          contenu_article2: row.Contenu_article2 || '', // Ajout du contenu_article2
        });
      }
    });
  
    if (currentStructure) {
      structures.push(currentStructure);
    }
  
    return structures;
  }, []);

  const handleLegislationSelection = useCallback((index) => {
    if (!legislationStructures[index].exists) {
      setSelectedLegislationIndex(index);
    }
  }, [legislationStructures]);

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
          type_import: "Import_Complet", // Type d'import
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
      // const exportFileName = generateFileName();
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
          type_import: "Import_Complet", // Type d'import
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
      // const exportFileName = generateFileName();
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
          type_import: "Import_Complet", // Type d'import
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
          type_import: "Import_Complet", // Type d'import
          date: currentDate.toISOString().slice(0, 19).replace("T", " "), // AAAA-MM-JJ HH:mm:ss
          statut: "En-cours", // Statut défini sur "Terminé"
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

  const handleEdit = useCallback((node) => {
    const newContent = prompt("Entrez le nouveau contenu:", node.content);
    if (newContent !== null) {
      setLegislationStructures(prevStructures => {
        return prevStructures.map((structure, index) => {
          if (index === selectedLegislationIndex) {
            return {
              ...structure,
              structure: structure.structure.map((item) => 
                item.id === node.id ? { ...item, content: newContent } : item
              )
            };
          }
          return structure;
        });
      });
    }
  }, [selectedLegislationIndex]);

  const handleDelete = useCallback((node) => {
    setLegislationStructures(prevStructures => {
      return prevStructures.map((structure, index) => {
        if (index === selectedLegislationIndex) {
          return {
            ...structure,
            structure: structure.structure.filter((item) => item.id !== node.id)
          };
        }
        return structure;
      });
    });
  }, [selectedLegislationIndex]);

  const handleDrop = useCallback((event, targetIndex) => {
    event.preventDefault();
    
    // Parse the dropped text data
    const droppedText = JSON.parse(event.dataTransfer.getData('text/plain'));
  
    setLegislationStructures(prevStructures => {
      const newStructures = [...prevStructures];
      if (selectedLegislationIndex !== null) {
        const currentStructure = [...newStructures[selectedLegislationIndex].structure];
  
        // **Check for duplicates based on normalized content (case-insensitive)**
        const isDuplicate = currentStructure.some(
          (item) => 
            item.type === 'Article' && 
            item.content.trim().toLowerCase() === droppedText.label.trim().toLowerCase()
        );
  
        if (isDuplicate) {
          // **Optionally log the duplicate or show a non-blocking notification**
          console.warn(`L'article "${droppedText.label}" est déjà dans la structure.`);
          return prevStructures; // Do not add the duplicate
        }
  
        // **Add the dropped article to the structure**
        currentStructure.splice(targetIndex + 1, 0, {
          id: Math.random().toString(36).substr(2, 9),
          type: 'Article',
          content: droppedText.label.trim(),
          linkedTextId: droppedText.value
        });
  
        // **Update the structure with the new article**
        newStructures[selectedLegislationIndex].structure = currentStructure;
      }
      return newStructures;
    });
  
    // **Remove the dropped article from "Textes liés" only if it was added**
    setLegislationStructures(prevStructures => {
      const newStructures = [...prevStructures];
      if (selectedLegislationIndex !== null) {
        const currentStructure = newStructures[selectedLegislationIndex].structure;
        const wasAdded = currentStructure.some(
          (item) => 
            item.type === 'Article' && 
            item.content.trim().toLowerCase() === droppedText.label.trim().toLowerCase() &&
            item.linkedTextId === droppedText.value
        );
  
        if (wasAdded) {
          setSelectedLinkedTexts(prevSelected => 
            prevSelected.filter(text => text.value !== droppedText.value)
          );
        }
      }
      return newStructures;
    });
  
    // **Ensure the "Suivant" button remains enabled by not setting the error state**
    // If you had previously set an error for duplicates, remove or adjust that logic accordingly
  }, [selectedLegislationIndex]);
  
  // État pour stocker les catégories
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://alt.back.qilinsa.com/wp-json/wp/v2/categories_legislations');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    };

    fetchCategories();
  }, []);

  const [selectedCategoryName, setSelectedCategoryName] = useState('');

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategoryId(categoryId);

    const selectedCategory = categories.find(
      (category) => category.id === parseInt(categoryId, 10)
    );

    // Si une catégorie est sélectionnée, on met à jour le nom, sinon vide
    if (selectedCategory) {
      setSelectedCategoryName(selectedCategory.name);
    } else {
      setSelectedCategoryName('');
    }
  };

 
  const exportModifiedCSV = useCallback(() => {
    if (selectedLegislationIndex !== null) {
      const selectedLegislation = legislationStructures[selectedLegislationIndex];
      const userId = localStorage.getItem('iduser'); // Get the user ID from localStorage
      let currentTitle = '';
      let currentChapter = '';
      let currentSection = '';
  
      // Escape value and remove line breaks
      const escapeValue = (value, forceNoQuotes = false) => {
        if (typeof value !== 'string') return value; // Handle non-string values
        // Remove line breaks
        value = value.replace(/[\r\n]+/g, ' ');
        if (forceNoQuotes) return value;
        // If the value contains commas or double quotes, encapsulate it in double quotes
        if (value.includes(',') || value.includes('"')) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      };
  
      // Get the current date in 'YYYY-MM-DD' format
      const modificationDate = new Date().toISOString().split('T')[0];
  
      // Update the CSV header row to include User ID, Decisions, Comments, and Contenu_article columns
      const headerRow = 'Titre_legislation,Date_entree,Code_visee,Titre,Chapitre,Section,Article,Contenu_article,Contenu_article2,Categorie,Decision_IDs,Commentaire_IDs,UserId,Modification_date';
  
      // Gather all linked decision and comment IDs from bulkLinkedTexts
      const decisionIds = bulkLinkedTexts.decisions?.map(decision => decision.value).join(',') || '';
      const commentaireIds = bulkLinkedTexts.commentaires?.map(comment => comment.value).join(',') || '';
  
      // Format the legislationInfoRow to ensure consistent alignment
      const legislationInfoRow = [
        selectedLegislation.Titre_legislation,
        selectedLegislation["Date d'entrée en vigueur"],
        selectedLegislation["Code visé"],
        '', '', '', '', '', '', // Placeholders for Titre, Chapitre, Section, Article, Contenu_article, Contenu_article2
        selectedCategoryName || '', // Nom de la catégorie
        decisionIds,                 // Decision IDs
        commentaireIds,               // Commentaire IDs
        userId,
        modificationDate              // Add modification date
      ].map(value => escapeValue(value)).join(',');
  
      const exportData = selectedLegislation.structure.map((item) => {
        const baseInfo = [
          escapeValue(selectedLegislation.Titre_legislation), // Échapper Titre_legislation
          selectedLegislation["Date d'entrée en vigueur"],
          escapeValue(selectedLegislation["Code visé"]),
          '', // Titre
          '', // Chapitre
          '', // Section
          '', // Article
          '', // Contenu_article
          '', // Contenu_article2
          selectedCategoryName || '',  // Nom de la catégorie
          decisionIds,                 // Decision IDs
          commentaireIds,               // Commentaire IDs
          userId,
          modificationDate              // Add modification date
        ];
  
        switch (item.type) {
          case 'Titre':
            currentTitle = item.content;
            currentChapter = '';
            currentSection = '';
            baseInfo[3] = escapeValue(item.content); // Titre
            break;
          case 'Chapitre':
            currentChapter = item.content;
            currentSection = '';
            baseInfo[4] = escapeValue(item.content); // Chapitre
            break;
          case 'Section':
            currentSection = item.content;
            baseInfo[5] = escapeValue(item.content); // Section
            break;
          case 'Article':
            baseInfo[6] = escapeValue(item.linkedTextId ? item.linkedTextId : item.content); // Article
            baseInfo[7] = (item.contenu_article || ''); // Contenu_article
            baseInfo[8] = (item.contenu_article2 || ''); // Contenu_article2
            break;
        }
      
        // Update title, chapter, and section in the baseInfo array
        baseInfo[3] = escapeValue(currentTitle);
        baseInfo[4] = escapeValue(currentChapter);
        baseInfo[5] = escapeValue(currentSection);
      
        return baseInfo.map((value, index) => escapeValue(value, index < 4)).join(',');
      });
  
      // Ensure the first row aligns with the header if legislationInfoRow is included as the first row
      const allRows = [
        headerRow,
        legislationInfoRow,
        ...exportData
      ].join('\r\n');
  
      const blob = new Blob(["\uFEFF" + allRows], { type: 'text/csv;charset=utf-8;' });
      return { csv: allRows, blob };
    }
    return null;
  }, [legislationStructures, selectedLegislationIndex, selectedCategoryName, bulkLinkedTexts]);

  const exportModifiedCSV2 = useCallback(() => {
    if (selectedLegislationIndex !== null) {
        const selectedLegislation = legislationStructures[selectedLegislationIndex];
        const userId = localStorage.getItem('iduser'); // Get the user ID from localStorage
        let currentTitle = '';
        let currentChapter = '';
        let currentSection = '';

        // Escape value and remove line breaks
        const escapeValue = (value) => {
            if (typeof value !== 'string') return value; // Handle non-string values
            value = value?.toString().replace(/[\r\n]+/g, ' '); // Remove line breaks
            if (value.includes(',') || value.includes('"')) {
                return `"${value.replace(/"/g, '""')}"`; // Escape quotes and wrap
            }
            return value || ''; // Return value or empty string
        };

        // Get the current date in 'YYYY-MM-DD' format
        const modificationDate = new Date().toISOString().split('T')[0];

        // Header row
        const headerRow = [
            'Titre_legislation',
            'Date_entree',
            'Code_visee',
            'Titre',
            'Chapitre',
            'Section',
            'Article',
            'Contenu_article',
            'Contenu_article2',
            'Categorie',
            'Decision_IDs',
            'Commentaire_IDs',
            'UserId',
            'Modification_date'
        ].map(escapeValue).join(',');

        // Collect decision and comment IDs
        const decisionIds = bulkLinkedTexts.decisions?.map(decision => decision.value).join(',') || '';
        const commentaireIds = bulkLinkedTexts.commentaires?.map(comment => comment.value).join(',') || '';

        // Information row
        const legislationInfoRow = [
            selectedLegislation.Titre_legislation,
            selectedLegislation["Date d'entrée en vigueur"],
            selectedLegislation["Code visé"],
            '',
            '',
            '',
            '',
            '',
            '',
            selectedCategoryName || '',
            decisionIds,
            commentaireIds,
            userId,
            modificationDate
        ].map(escapeValue).join(',');

        // Data rows
        const exportData = selectedLegislation.structure.map((item, index) => {
            let baseInfo = [
                selectedLegislation.Titre_legislation,
                selectedLegislation["Date d'entrée en vigueur"],
                selectedLegislation["Code visé"],
                '',
                '',
                '',
                '',
                '',
                '',
                selectedCategoryName || '',
                decisionIds,
                commentaireIds,
                userId,
                modificationDate
            ];

            switch (item.type) {
                case 'Titre':
                    currentTitle = item.content;
                    currentChapter = '';
                    currentSection = '';
                    baseInfo[3] = item.content;
                    break;
                case 'Chapitre':
                    currentChapter = item.content;
                    currentSection = '';
                    baseInfo[4] = item.content;
                    break;
                case 'Section':
                    currentSection = item.content;
                    baseInfo[5] = item.content;
                    break;
                case 'Article':
                    baseInfo[6] = item.linkedTextId || item.content;
                    if (selectedLegislation.structure[index + 1]?.type === 'Contenu_article') {
                        baseInfo[7] = selectedLegislation.structure[index + 1].content;
                        if (selectedLegislation.structure[index + 2]?.type === 'Contenu_article2') {
                            baseInfo[8] = selectedLegislation.structure[index + 2].content;
                        }
                    }
                    break;
            }

            // Update title, chapter, and section
            baseInfo[3] = currentTitle;
            baseInfo[4] = currentChapter;
            baseInfo[5] = currentSection;

            return baseInfo.map(escapeValue).join(',');
        });

        // Combine rows
        const allRows = [
            headerRow,
            legislationInfoRow,
            ...exportData
        ].join('\r\n');

        const blob = new Blob(["\uFEFF" + allRows], { type: 'text/csv;charset=utf-8;' });
        return { csv: allRows, blob };
    }
    return null;
}, [legislationStructures, selectedLegislationIndex, selectedCategoryName, bulkLinkedTexts]);

  
  const handleExportClick = () => {
    const result = exportModifiedCSV();
    if (result) {
      const { blob } = result;
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
    }
  };
  
  const handleImportConfirmation = async () => {
    try {
      setImportStatus('pending');
      setImportError(null);
  
      const result = exportModifiedCSV();
      if (!result) {
        throw new Error("Aucune législation sélectionnée pour l'exportation");
      }

      const fileNameWithState = `${importhistory}`;
  
      const { csv } = result;
      const formData = new FormData();
      const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
      formData.append('file', blob, fileNameWithState);
  
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("Token d'authentification non trouvé");
      }
  
      // Choisir le bon endpoint en fonction de isEditingExisting
      const endpoint = isEditingExisting 
        ? 'https://alt.back.qilinsa.com/wp-json/wp/v2/editimportcompletelegisations'
        : 'https://alt.back.qilinsa.com/wp-json/wp/v2/importcompletelegislations';
  
      const response = await axios.post(endpoint, formData, {
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
      console.error("Erreur lors de l'importation:", error);
      setImportStatus('error');
      setImportError(error.message || "Une erreur est survenue lors de l'importation");
    }
  };
  

 

  const handleLinkedTextSelection = useCallback((selectedOptions) => {
    setSelectedLinkedTexts(selectedOptions);
  }, []);

  const handleEditExistingLegislation = async (index) => {
    setIsEditingExisting(true);
    setSelectedLegislationIndex(index);

    // Récupère l'ID de la législation
    const legislationId = legislationStructures[index]?.id;
    setSelectedLegislation(legislationId);

    // Vérifie que l'ID est défini avant de faire la requête
    if (legislationId) {
        try {
            const response = await fetch(`https://alt.back.qilinsa.com/wp-json/wp/v2/legislations/${legislationId}`);
            if (!response.ok) {
                throw new Error(`Erreur lors de la récupération de la législation: ${response.statusText}`);
            }

            const legislationData = await response.json();
            // Récupère la catégorie de la législation
            const categoryId = legislationData.categories_legislations?.[0];

            // Met à jour la catégorie sélectionnée
            setSelectedCategoryId(categoryId);
            console.log('Selected category ID:', categoryId);
        } catch (error) {
            console.error('Erreur lors de la récupération des données de législation:', error);
        }
    } else {
        console.error('ID de législation non valide');
    }
};


// useEffect(() => {
//   if (currentStep === 3 && selectedLegislation) {
//     setLoading(true);
//     const fetchLegislationStructure = async () => {
//       try {
//         const endpoints = ['titres', 'chapitres', 'sections', 'articles'];
//         const res = await axios.get(`${API_BASE_URL}/legislations/${selectedLegislation}`);
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
//       } catch (err) {
//         setError('Échec de la récupération de la structure de la législation');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLegislationStructure();
//   }
// }, [currentStep, selectedLegislation]);

const onDragEnd = ({ source, destination }) => {
  if (destination && source.index !== destination.index) {
    // Add logic to handle the drop and update selectedLegislation if needed
    setSelectedLegislation({ value: legislationStructures[destination.index].id });  // Example of setting new legislation
  }
};



  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-500">Charger le fichier CSV</h2>
            <div className="bg-white p-4 rounded-md shadow">
              <p className="text-sm text-gray-600 mb-2">
                Le fichier CSV doit contenir les colonnes suivantes : Titre_legislation, Date_entree, Code_visee, Titre, Chapitre, Section, Article
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
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <AlertTriangle className="w-5 h-5 inline mr-2" />
                {error}
              </div>
            )}
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-500">Prévisualisation des législations</h2>
            <div className="bg-white p-4 rounded-md shadow max-h-96 overflow-y-auto">
              {legislationStructures.map((legislation, index) => (
                <div key={index} className={`mb-4 p-3 border-b last:border-b-0 ${legislation.exists ? 'bg-red-100' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={`legislation-${index}`}
                        checked={selectedLegislationIndex === index}
                        onChange={() => handleLegislationSelection(index)}
                        disabled={legislation.exists}
                        className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <label htmlFor={`legislation-${index}`} className="text-sm font-medium text-gray-700">
                        {legislation.Titre_legislation}
                      </label>
                    </div>
                    {legislation.exists && (
                      <>
                        <span className="bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Existant</span>
                        <button
                          onClick={() => handleEditExistingLegislation(index)}
                          className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded hover:bg-blue-600 transition"
                        >
                          Modifier l'existant
                        </button>
                      </>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-blue-500">Date d'entrée : {legislation["Date d'entrée en vigueur"]}</p>
                  <p className="mt-1 text-xs text-green-500">Code visé : {legislation["Code visé"]}</p>
                  <p className="mt-1 text-xs">Nombre d'éléments : {legislation.structure.length}</p>
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
        <div className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Lier les commentaires :</label>
            <Select
              options={commentsOptions}
              value={bulkLinkedTexts.commentaires}
              onChange={(selected) => handleBulkLinkedText(selected, 'commentaires')}
              isMulti
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Lier les décisions :</label>
            <Select
              options={decisionsOptions}
              value={bulkLinkedTexts.decisions}
              onChange={(selected) => handleBulkLinkedText(selected, 'decisions')}
              isMulti
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
  case 3:
    return isEditingExisting ? (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-green-500">Structurer la législation</h2>
        
        {selectedLegislationIndex !== null && (
          <div className="flex space-x-4">
            {/* Existing Structure de la législation and Textes liés code */}
            <div className="w-2/3 border p-4 rounded">
              <h4 className="font-medium mb-2">Structure de la législation</h4>
              <Reorder.Group
                axis="y"
                onReorder={(newOrder) => {
                  setLegislationStructures(prevStructures => {
                    const newStructures = [...prevStructures];
                    newStructures[selectedLegislationIndex] = {
                      ...newStructures[selectedLegislationIndex],
                      structure: newOrder
                    };
                    return newStructures;
                  });
                }}
                values={legislationStructures[selectedLegislationIndex]?.structure || []}
              >
                {legislationStructures[selectedLegislationIndex]?.structure.map((node, index) => (
                  <div
                    key={node.id}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    <LegislationNode
                      node={node}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      canEdit={canEditStructure}
                      onDragEnd={() => {/* Optional: Add logic if needed */}}
                    />
                  </div>
                ))}
              </Reorder.Group>
            </div>
          </div>
        )}
  
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => {
              if (!canEditStructure) {
                setShowWarning(true);
              } else {
                setCanEditStructure(false);
              }
            }}
            className={`px-4 py-2 rounded-md ${
              canEditStructure
                ? 'bg-red-500 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            {canEditStructure ? 'Désactiver la modification' : 'Modifier la structure'}
          </button>
          <button
            onClick={handleExportClick}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            <Download className="h-4 w-4 inline mr-2" />
            Exporter le CSV modifié
          </button>
        </div>
  
        {/* **Add the error message display here** */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <AlertTriangle className="w-5 h-5 inline mr-2" />
            {error}
          </div>
        )}
  
        {showWarning && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4">Attention</h4>
              <p>Modifier la structure d'un texte juridique est une action conséquente. Êtes-vous sûr de vouloir continuer ?</p>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setShowWarning(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Annuler
                </button>
                <button
                  onClick={() => {
                    setCanEditStructure(true);
                    setShowWarning(false);
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    ) : (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-green-500">Structurer la législation</h2>
        <div className="mt-4">
          <label htmlFor="categorie" className="block mb-2 text-xl font-bold text-gray-700">
            Catégorie <span className="text-red-500">*</span>
          </label>
          <select
            id="categorie"
            className="border border-green-500 rounded p-2"
            value={selectedCategoryId || ''}
            onChange={handleCategoryChange}
          >
            <option value="">Sélectionner une catégorie</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {selectedLegislationIndex !== null && (
          <div className="flex space-x-4">
            {/* Existing Structure de la législation and Textes liés code */}
            <div className="w-2/3 border p-4 rounded">
              <h4 className="font-medium mb-2">Structure de la législation</h4>
              <Reorder.Group
                axis="y"
                onReorder={(newOrder) => {
                  setLegislationStructures(prevStructures => {
                    const newStructures = [...prevStructures];
                    newStructures[selectedLegislationIndex] = {
                      ...newStructures[selectedLegislationIndex],
                      structure: newOrder
                    };
                    return newStructures;
                  });
                }}
                values={legislationStructures[selectedLegislationIndex]?.structure || []}
              >
                {legislationStructures[selectedLegislationIndex]?.structure.map((node, index) => (
                  <div
                    key={node.id}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    <LegislationNode
                      node={node}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      canEdit={canEditStructure}
                      onDragEnd={() => {/* Optional: Add logic if needed */}}
                    />
                  </div>
                ))}
              </Reorder.Group>
            </div>
          </div>
        )}
  
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => {
              if (!canEditStructure) {
                setShowWarning(true);
              } else {
                setCanEditStructure(false);
              }
            }}
            className={`px-4 py-2 rounded-md ${
              canEditStructure
                ? 'bg-red-500 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            {canEditStructure ? 'Désactiver la modification' : 'Modifier la structure'}
          </button>
          <button
            onClick={handleExportClick}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            <Download className="h-4 w-4 inline mr-2" />
            Exporter le CSV modifié
          </button>
        </div>
  
        {/* **Add the error message display here** */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <AlertTriangle className="w-5 h-5 inline mr-2" />
            {error}
          </div>
        )}
  
        {showWarning && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4">Attention</h4>
              <p>Modifier la structure d'un texte juridique est une action conséquente. Êtes-vous sûr de vouloir continuer ?</p>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setShowWarning(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Annuler
                </button>
                <button
                  onClick={() => {
                    setCanEditStructure(true);
                    setShowWarning(false);
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  
        case 4:
          if (!legislationStructures.length || selectedLegislationIndex === null) return null;
          return (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-500">Confirmation</h2>
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="text-lg font-medium mb-2">Récapitulatif de l'importation</h3>
                <p className="text-green-500">Législation sélectionnée : {legislationStructures[selectedLegislationIndex].Titre_legislation}</p>
                {/* Affiche le nom de la catégorie sélectionnée */}
                {selectedCategoryName && (
                  <p className="text-green-500">Catégorie sélectionnée : {selectedCategoryName}</p>
                )}
                <p>Nombre d'éléments : {legislationStructures[selectedLegislationIndex].structure.length}</p>
                
                <h4 className="text-md font-medium mt-4 mb-2">Structure de la législation :</h4>
                <div className="max-h-60 overflow-y-auto">
                  {legislationStructures[selectedLegislationIndex].structure.map((item, index) => (
                    <div key={index} className="ml-4">
                      <p className={`${item.type === 'Article' && item.linkedTextId ? 'text-green-500' : ''}`}>
                        {item.type}: {item.content} {item.linkedTextId ? `(ID: ${item.linkedTextId})` : ''}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Display linked comments and decisions */}
        <h4 className="text-md font-medium mt-4 mb-2">Commentaires liés :</h4>
        <ul className="list-disc ml-6">
          {bulkLinkedTexts.commentaires && bulkLinkedTexts.commentaires.length > 0 ? (
            bulkLinkedTexts.commentaires.map((comment) => (
              <li key={comment.value} className="text-gray-700">{comment.label}</li>
            ))
          ) : (
            <li className="text-gray-500">Aucun commentaire lié</li>
          )}
        </ul>

        <h4 className="text-md font-medium mt-4 mb-2">Décisions liées :</h4>
        <ul className="list-disc ml-6">
          {bulkLinkedTexts.decisions && bulkLinkedTexts.decisions.length > 0 ? (
            bulkLinkedTexts.decisions.map((decision) => (
              <li key={decision.value} className="text-gray-700">{decision.label}</li>
            ))
          ) : (
            <li className="text-gray-500">Aucune décision liée</li>
          )}
        </ul>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Veuillez vérifier que toutes les informations ci-dessus sont correctes avant de procéder à l'importation.</p>
                <button
                  onClick={handleExportClick}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
                >
                  <Download className="inline-block mr-2 h-4 w-4" />
                  Exporter le CSV modifié
                </button>
              </div>
            </div>
          );
        
          default:
            return null;

    }
  };

  const renderStepIndicators = useCallback(() => (
    <div className="flex justify-between items-center overflow-x-auto pb-4">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center mx-2">
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep
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
      ))}
    </div>
  ), [currentStep]);

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

      {!isImportComplete && (
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
              disabled={importStatus === 'pending' || selectedLegislationIndex === null}
              className="px-4 py-2 bg-green-500 text-white rounded-md disabled:opacity-50"
            >
              {importStatus === 'pending' ? (
                'Importation en cours...'
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4 inline" /> Confirmer l'importation
                </>
              )}
            </button>
          ) : (
<button
  onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
  disabled={
    (currentStep === 0 && (!file || error)) ||               // Step 0: Disable if no file or if there's an error
    (currentStep === 1 && selectedLegislationIndex === null) || // Step 1: Check if legislation is selected
    (currentStep === 3 && (!selectedCategoryId || selectedCategoryId === ""))       // Step 2: Check if category is selected
  }
  className="px-4 py-2 bg-green-500 text-white rounded-md disabled:opacity-50"
>
  Suivant <ArrowRight className="ml-2 h-4 w-4 inline" />
</button>

          )}
        </div>
      )}

      {importStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Erreur!</strong>
          <span className="block sm:inline"> {importError}</span>
        </div>
      )}
    </div>
  );
};

export default ImportComplet;