import React, { useState, useEffect } from "react";
import axios from "axios";

const HistoriqueImport = () => {
  const [historique, setHistorique] = useState([]);
  const [filteredHistorique, setFilteredHistorique] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const iduser = localStorage.getItem("iduser") || "22";

  useEffect(() => {
    const fetchHistorique = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "https://alt.back.qilinsa.com/wp-json/wp/v2/historiqueimport?per_page=100",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const filteredData = response.data.filter(
          (item) => item.acf && item.acf.auteur === parseInt(iduser, 10)
        );
        setHistorique(filteredData);
        setFilteredHistorique(filteredData);
      } catch (err) {
        setError("Erreur lors de la récupération de l'historique.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorique();
  }, [iduser]);

  useEffect(() => {
    let filtered = [...historique];

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter((item) => item.acf.type_import === selectedType);
    }

    if (selectedStatus) {
      filtered = filtered.filter((item) => item.acf.statut === selectedStatus);
    }

    if (dateFrom) {
      filtered = filtered.filter((item) => new Date(item.acf.date) >= new Date(dateFrom));
    }
    if (dateTo) {
      filtered = filtered.filter((item) => new Date(item.acf.date) <= new Date(dateTo));
    }

    setFilteredHistorique(filtered);
  }, [searchTerm, selectedType, selectedStatus, dateFrom, dateTo, historique]);

  const downloadFile = async (fileId) => {
    try {
      const fileUrlResponse = await axios.get(
        `https://alt.back.qilinsa.com/wp-json/wp/v2/media/${fileId}`
      );
      const fileUrl = fileUrlResponse.data.source_url;
      const fileName = fileUrlResponse.data.title.rendered;

      const fileResponse = await fetch(fileUrl);
      const fileBlob = await fileResponse.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(fileBlob);
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error("Erreur lors du téléchargement du fichier:", error);
    }
  };

  const resendFile = async (item) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Début du processus de renvoi du fichier...");
      console.log("Token récupéré :", token);
  
      // Télécharger le fichier sortant
      console.log("Téléchargement du fichier sortant...");
      const fileResponse = await fetch(
        `https://alt.back.qilinsa.com/wp-json/wp/v2/media/${item.acf.fichier_sortant}`
      );
      const fileBlob = await fileResponse.blob();
      console.log("Fichier téléchargé avec succès :", fileBlob);
  
      // Créer un objet FormData pour envoyer le fichier
      const formData = new FormData();
      formData.append("file", fileBlob, "fichier_sortant.csv");
      console.log("FormData créé avec le fichier téléchargé.");
  
      // Déterminer le bon endpoint en fonction du type d'import
      const endpoints = {
        Article: "https://alt.back.qilinsa.com/wp-json/wp/v2/importarticles",
        Legislation: "https://alt.back.qilinsa.com/wp-json/wp/v2/importlegislations",
        Commentaire: "https://alt.back.qilinsa.com/wp-json/wp/v2/importcommentaires",
        Decision: "https://alt.back.qilinsa.com/wp-json/wp/v2/importdecisions",
      };
  
      const endpoint = endpoints[item.acf.type_import];
      console.log("Endpoint sélectionné :", endpoint);
  
      if (endpoint) {
        // Envoyer le fichier au backend
        console.log("Envoi du fichier au backend...");
        await axios.post(endpoint, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Fichier envoyé avec succès au backend.");
  
        // Mettre à jour l'état du post (champ ACF `statut`)
        console.log("Mise à jour du statut du post à 'En-cours'...");
        await axios.post(
          `https://alt.back.qilinsa.com/wp-json/wp/v2/historiqueimport/${item.id}`,
          {
            acf: {
              statut: "En-cours",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Statut du post mis à jour avec succès.");
        alert("Fichier renvoyé et statut mis à jour avec succès !");
      } else {
        console.log("Type d'import inconnu :", item.acf.type_import);
        alert("Type d'import inconnu.");
      }
    } catch (error) {
      console.error("Erreur lors du processus de renvoi :", error);
      alert("Une erreur est survenue lors du renvoi du fichier.");
    }
  };
  
  

  return (
    <div className="p-6">
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="w-full sm:w-1/3">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Rechercher par nom"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-1/4">
          <select
            className="border p-2 w-full"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Type d'import</option>
            <option value="Article">Article</option>
            <option value="Legislation">Legislation</option>
            <option value="Decision">Decision</option>
            <option value="Commentaire">Commentaire</option>
          </select>
        </div>

        <div className="w-full sm:w-1/4">
          <select
            className="border p-2 w-full"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Statut</option>
            <option value="Brouillon">Brouillon</option>
            <option value="En-cours">En-cours</option>
            <option value="Terminé">Terminé</option>
            <option value="Echec">Echec</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <input
            type="date"
            className="border p-2 w-full sm:w-auto"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <input
            type="date"
            className="border p-2 w-full sm:w-auto"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>
      </div>

      {loading && <p className="text-center text-gray-500">Chargement des données...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {filteredHistorique.length === 0 && !loading && !error ? (
        <p className="text-center text-gray-500">Aucun historique trouvé pour cet utilisateur.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">Nom</th>
                <th className="px-4 py-2 border border-gray-300">Type Import</th>
                <th className="px-4 py-2 border border-gray-300">Date</th>
                <th className="px-4 py-2 border border-gray-300">Statut</th>
                <th className="px-4 py-2 border border-gray-300">Fichier Entrant</th>
                <th className="px-4 py-2 border border-gray-300">Fichier Sortant</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistorique.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-2 border border-gray-300">{item.title.rendered}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.acf.type_import}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.acf.date}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.acf.statut}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.acf.fichier_entrant ? (
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => downloadFile(item.acf.fichier_entrant)}
                      >
                        Télécharger
                      </button>
                    ) : (
                      "Non disponible"
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.acf.fichier_sortant ? (
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => downloadFile(item.acf.fichier_sortant)}
                      >
                        Télécharger
                      </button>
                    ) : (
                      "Non disponible"
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.acf.statut === "Brouillon" && item.acf.fichier_sortant && (
                      <button
                        className="text-green-500 hover:underline"
                        onClick={() => resendFile(item)}
                      >
                        Renvoyer
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HistoriqueImport;
