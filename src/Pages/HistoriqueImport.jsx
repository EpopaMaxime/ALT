import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HistoriqueImport = () => {
  const [historique, setHistorique] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const historiqueData = response.data.acf.historique_import || "Aucun historique disponible.";
        setHistorique(historiqueData);
      } catch (err) {
        setError("Erreur lors de la récupération de l'historique.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistorique();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Chargement de l'historique...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Historique d'importation</h2>
      <pre className="whitespace-pre-wrap text-sm text-gray-800 bg-white p-4 rounded shadow-inner">
        {historique}
      </pre>
    </div>
  );
};

export default HistoriqueImport;
