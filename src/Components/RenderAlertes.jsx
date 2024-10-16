import { useState, useEffect } from 'react';
import { HiFolder, HiOutlineRefresh, HiX } from 'react-icons/hi'; // Added icons
import axios from 'axios'; // For API calls

export default function Widget() {
  const [activeButton, setActiveButton] = useState('Tout');
  const [alerts, setAlerts] = useState([]); // State to store alerts
  const [iduser, setIduser] = useState(null); // State to store user ID

  // Fetch user ID from the dashboard
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = response.data;
        localStorage.setItem('iduser', userData.id);
        setIduser(userData.id);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  // Function to handle button clicks and fetch alerts when "Mots-clés" is clicked
  const handleButtonClick = async (label) => {
    setActiveButton(label);
    if (label === 'Mots-clés' && iduser) {
      try {
        const response = await axios.get(
          `https://alt.back.qilinsa.com/wp-json/custom-api/v1/get-alerts?iduser=${iduser}`
        );
        setAlerts(response.data); // Store alerts in state
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    }
  };

  // Function to delete an alert by its ID
  const deleteAlert = async (id) => {
    try {
      await axios.delete(`https://alt.back.qilinsa.com/wp-json/custom-api/v1/delete-alert/${id}`);
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id)); // Remove deleted alert
    } catch (error) {
      console.error('Error deleting alert:', error);
    }
  };

  return (
    <div className="min-h-screen pl-8 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <h1 className="text-2xl font-bold mb-4">Alertes</h1>
      <div className="flex space-x-2 mb-4">
        {['Tout', 'Mots-clés', 'Entreprises', 'Avocats', 'Dossiers', 'Lois et règlements', 'Lois en discussion', 'Commentaires'].map((label) => (
          <button
            key={label}
            className={`px-4 py-2 rounded ${activeButton === label ? 'bg-blue-500 text-white' : 'border border-zinc-300'}`}
            onClick={() => handleButtonClick(label)}
            aria-label={`Filtrer par ${label}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex items-center mb-4">
        <HiFolder className="text-xl" aria-hidden="true" />
        <span className="ml-2 font-semibold">À classer</span>
      </div>

      {activeButton === 'Mots-clés' && alerts.length > 0 && (
        <div className="space-y-2">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex justify-between items-center border border-zinc-300 p-2 rounded">
              <div className="flex items-center">
                <HiOutlineRefresh className="text-xl mr-2" aria-hidden="true" />
                <span>{alert.recherche}</span>
              </div>
              <button
                onClick={() => deleteAlert(alert.id)}
                className="text-red-500 hover:text-red-700"
                aria-label={`Supprimer l'alerte ${alert.recherche}`}
              >
                <HiX className="text-xl" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="bg-muted p-4 rounded-lg mb-4">
        <h2 className="text-lg font-semibold">Gardez toujours une longueur d’avance.</h2>
        <p className="text-muted-foreground">
          Pour recevoir vos décisions ou commentaires pertinents au fil de l’eau, créez des alertes à partir de vos recherches par mots-clés ou suivez des entreprises, des avocats et des cabinets.
        </p>
      </div>

      <div className="border-l border-zinc-300 pl-4">
        <h3 className="font-semibold mb-2">Avocats à suivre</h3>
        <ul>
          {['Arnaud CLERC', 'Fabrice BERNARD', 'Yasmina GOUDJIL', 'Christophe RUFFEL', 'Olivier DESCAMPS'].map((avocat) => (
            <li key={avocat} className="flex justify-between items-center mb-2">
              <span>{avocat}</span>
              <button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-1 rounded"
                aria-label={`Créer une alerte pour ${avocat}`}
              >
                Créer
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
