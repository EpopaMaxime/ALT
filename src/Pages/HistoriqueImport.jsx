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

  // Récupérer l'ID de l'utilisateur depuis localStorage
  const iduser = localStorage.getItem("iduser") || "22";

  useEffect(() => {
    const fetchHistorique = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        // Requête API pour récupérer tous les enregistrements
        const response = await axios.get(
          "https://alt.back.qilinsa.com/wp-json/wp/v2/historiqueimport",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Filtrer les enregistrements localement sur la base de `acf.auteur`
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

    // Filtrer par nom
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrer par type d'import
    if (selectedType) {
      filtered = filtered.filter((item) => item.acf.type_import === selectedType);
    }

    // Filtrer par statut
    if (selectedStatus) {
      filtered = filtered.filter((item) => item.acf.statut === selectedStatus);
    }

    // Filtrer par date
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

  return (
    <div className="p-6">
      {/* Barre de recherche et filtres */}
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
            <option value="Débuté">Débuté</option>
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

      {/* Messages d'erreur ou de chargement */}
      {loading && <p className="text-center text-gray-500">Chargement des données...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Tableau des données filtrées */}
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
