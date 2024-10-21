import { useState, useEffect } from 'react';
import { HiFolder, HiSearch, HiX } from 'react-icons/hi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Widget() {
  const [activeButton, setActiveButton] = useState('Tout');
  const [alerts, setAlerts] = useState([]); // State to store alerts
  const [iduser, setIduser] = useState(null); // State to store user ID
  const [isLoading, setIsLoading] = useState(true); // State to handle loading state, initialized to true
  const navigate = useNavigate();

  // Fetch user ID from the dashboard on component mount
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

  // Fetch alerts whenever activeButton or iduser changes
  useEffect(() => {
    const fetchAlerts = async () => {
      if (activeButton === 'Mots-clés' || activeButton === 'Tout') {
        if (iduser) {
          setIsLoading(true); // Set loading state to true when fetching data
          try {
            const response = await axios.get(
              `https://alt.back.qilinsa.com/wp-json/custom-api/v1/get-alerts?iduser=${iduser}`
            );
            setAlerts(response.data); // Store alerts in state
          } catch (error) {
            console.error('Error fetching alerts:', error);
          } finally {
            setIsLoading(false); // Set loading state to false after fetching data
          }
        }
      } else {
        setAlerts([]); // Clear alerts when other buttons are clicked
      }
    };
    fetchAlerts();
  }, [activeButton, iduser]);

  // Function to handle button clicks and update activeButton state
  const handleButtonClick = (label) => {
    setActiveButton(label);
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

  // Function to handle search when an alert item is clicked
const handleAlertClick = async (query) => {
  if (query.trim()) {
    try {
      const endpoints = [
        `https://alt.back.qilinsa.com/wp-json/wp/v2/legislations?search=${query}`,
        `https://alt.back.qilinsa.com/wp-json/wp/v2/decisions?search=${query}`,
        `https://alt.back.qilinsa.com/wp-json/wp/v2/articles?search=${query}`,
        `https://alt.back.qilinsa.com/wp-json/wp/v2/commentaires?search=${query}`
      ];

      const responses = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)));
      const resultIds = responses.flatMap(response => response.data.map(item => item.id));

      const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      const newHistory = [{ query, resultIds }, ...searchHistory.slice(0, 9)];
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));

      // Make POST request to create an alert
      const iduser = localStorage.getItem('iduser') || '22'; // Use '22' as default if no user ID
      const date = new Date().toISOString().split('T')[0]; // Format the date as YYYY-MM-DD

      const payload = {
        iduser,
        recherche: query,
        reponse: resultIds.join(','), // Join the result IDs
        date,
        diff: '0',
      };

      console.log('Payload sent:', payload);
      const createAlertResponse = await axios.post('https://alt.back.qilinsa.com/wp-json/custom-api/v1/create-alert', payload);
      console.log('Alert creation response:', createAlertResponse.data);

      // Navigate to search results
      navigate(`/dashboard/results?query=${encodeURIComponent(query)}`);
      
    } catch (error) {
      console.error('Error fetching search results or creating alert:', error);
    }
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

      {/* Alerts Section */}
      {(activeButton === 'Mots-clés' || activeButton === 'Tout') && (
        <div className="space-y-2 mb-4">
          {isLoading ? (
            <p className="text-gray-500">Chargement des alertes...</p>
          ) : alerts.length > 0 ? (
            alerts.map((alert) => {
              const diffCount = alert.diff.filter(num => num !== 0).length;

              return (
                <div
                  key={alert.id}
                  className="flex justify-between items-center border border-zinc-300 p-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleAlertClick(alert.recherche)}
                >
                  <div className="flex items-center">
                    <HiSearch className="text-xl mr-2" aria-hidden="true" />
                    <span className="flex items-center">
                      {alert.recherche}
                      {diffCount > 0 && (
                        <span className="ml-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                          {diffCount}
                        </span>
                      )}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteAlert(alert.id);
                    }}
                    className="text-red-500 hover:text-red-700"
                    aria-label={`Supprimer l'alerte ${alert.recherche}`}
                  >
                    <HiX className="text-xl" aria-hidden="true" />
                  </button>
                </div>
              );
            })
          ) : (
            !isLoading && <p className="text-gray-500">Aucune alerte trouvée.</p>
          )}
        </div>
      )}

      {activeButton === 'Tout' && (
        <>
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
        </>
      )}
    </div>
  );
}
