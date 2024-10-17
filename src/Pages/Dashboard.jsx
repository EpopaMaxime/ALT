import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import SearchBar from '../Components/SearchBar';
import { 
  HiHome, 
  HiDocumentText, 
  HiScale, 
  HiChat, 
  HiUserGroup, 
  HiStar,
  HiBell,
  HiFolder,
  HiMenu,
  HiUpload,
  HiX,
  HiSearch
} from 'react-icons/hi';

const Dashboard = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarId, setAvatarId] = useState(null);
  const [theme, setTheme] = useState('');
  const [isExpert, setIsExpert] = useState(false);
  const [importer, setImporter] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [activeSearchCategory, setActiveSearchCategory] = useState('all');
  const sidebarRef = useRef(null);
  
  // New states for alerts
  const [alerts, setAlerts] = useState([]);
  const [readAlerts, setReadAlerts] = useState(() => {
    const saved = localStorage.getItem('readAlerts');
    return saved ? JSON.parse(saved) : [];
  });
  const [alertDropdownOpen, setAlertDropdownOpen] = useState(false);
  const [hasNewAlerts, setHasNewAlerts] = useState(false);
  
  const navigate = useNavigate(); // Hook for navigation

  // Fetch user data and alerts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // If no token, redirect to login or handle accordingly
          navigate('/');
          return;
        }

        const response = await axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        const userData = response.data;
        localStorage.setItem('iduser', userData.id);
        const iduser = userData.id;
        setTheme(userData.acf.theme);
        setImporter(userData.acf.importer);
        setIsExpert(['Avocat', 'Notaire'].includes(userData.acf.profession));

        if (userData.acf.avatar) {
          setAvatarId(userData.acf.avatar);
          const avatarResponse = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/media/${userData.acf.avatar}`);
          setAvatarUrl(avatarResponse.data.source_url);
        }

        // Fetch alerts
        const alertsResponse = await axios.get(
          `https://alt.back.qilinsa.com/wp-json/custom-api/v1/get-alerts?iduser=${iduser}`
        );
        const alertsData = alertsResponse.data;

        // Ensure alerts have 'recherche' and 'diff' fields
        const processedAlerts = alertsData.map(alert => ({
          ...alert,
          recherche: alert.recherche || '', // Default to empty string if undefined
          diff: alert.diff || [], // Default to empty array if undefined
        }));

        setAlerts(processedAlerts);

        // Determine if there are new alerts (diff !== 0 and not read)
        const newAlerts = processedAlerts.some(alert => 
          alert.diff.some(num => num !== 0) && !readAlerts.includes(alert.id)
        );
        setHasNewAlerts(newAlerts);
        
      } catch (error) {
        console.error('Error fetching user data or alerts:', error);
        // Optionally handle errors, e.g., redirect to login if unauthorized
      }
    };

    fetchUserData();
  }, [readAlerts, navigate]);

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle clicks outside sidebar and alert dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
      // Close alert dropdown if clicking outside
      if (!event.target.closest('.alert-dropdown') && !event.target.closest('.alert-button')) {
        setAlertDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Handle navigation for search
  const handleNavigation = (category) => {
    setActiveSearchCategory(category);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('conUserName');
    window.location.href = "/";
  };

 // Handle clicking on an individual alert
const handleAlertClick = async (alert) => {
  const { recherche, id } = alert;
  if (recherche.trim()) {
    try {
      // Perform search similar to Widget component
      const endpoints = [
        `https://alt.back.qilinsa.com/wp-json/wp/v2/legislations?search=${recherche}`,
        `https://alt.back.qilinsa.com/wp-json/wp/v2/decisions?search=${recherche}`,
        `https://alt.back.qilinsa.com/wp-json/wp/v2/articles?search=${recherche}`,
        `https://alt.back.qilinsa.com/wp-json/wp/v2/commentaires?search=${recherche}`
      ];

      const responses = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)));
      const resultIds = responses.flatMap(response => response.data.map(item => item.id));

      const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      const newHistory = [{ query: recherche, resultIds }, ...searchHistory.slice(0, 9)];
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));

      // Make POST request to create an alert
      const iduser = localStorage.getItem('iduser') || '22'; // Use '22' as default if no user ID
      const date = new Date().toISOString().split('T')[0]; // Format the date as YYYY-MM-DD

      const payload = {
        iduser,
        recherche,
        reponse: resultIds.join(','), // Join the result IDs
        date,
        diff: '0',
      };

      console.log('Payload sent:', payload);
      const createAlertResponse = await axios.post('https://alt.back.qilinsa.com/wp-json/custom-api/v1/create-alert', payload);
      console.log('Alert creation response:', createAlertResponse.data);

      // Navigate to search results
      navigate(`/dashboard/results?query=${encodeURIComponent(recherche)}`);

      // Mark the alert as read
      const updatedReadAlerts = [...readAlerts, id];
      setReadAlerts(updatedReadAlerts);
      localStorage.setItem('readAlerts', JSON.stringify(updatedReadAlerts));
      
      // Update 'hasNewAlerts'
      const stillNew = alerts.some(a => a.diff.some(num => num !== 0) && !updatedReadAlerts.includes(a.id));
      setHasNewAlerts(stillNew);
    } catch (error) {
      console.error('Error performing search or creating alert:', error);
    }
  }
};

  // Handle clicking "Afficher tout"
  const handleAfficherTout = () => {
    // Mark all current alerts as read
    const allAlertIds = alerts.map(alert => alert.id);
    const updatedReadAlerts = [...new Set([...readAlerts, ...allAlertIds])];
    setReadAlerts(updatedReadAlerts);
    localStorage.setItem('readAlerts', JSON.stringify(updatedReadAlerts));
    
    // Update 'hasNewAlerts'
    setHasNewAlerts(false);
    
    // Close the dropdown
    setAlertDropdownOpen(false);
    
    // Redirect to /dashboard/alertes
    navigate("/dashboard/alertes");
  };

  // Navigation items
  const navItems = [
    { to: "", icon: HiHome, text: "Accueil", category: "all" },
    { to: "decision", icon: HiDocumentText, text: "Décisions", category: "decision" },
    { to: "legislation", icon: HiScale, text: "Législations", category: "legislation" },
    { to: "commentaire", icon: HiChat, text: "Commentaires", category: "commentaire" },
    { to: "expert", icon: HiUserGroup, text: "Experts", category: "expert" },
    { to: "avis", icon: HiStar, text: "Donner un avis", category: "avis" },
    ...(importer ? [{ to: "legal-text-manager", icon: HiUpload, text: "Importer / Exporter", category: "legal-text-manager" }] : []),
    { to: "alertes", icon: HiBell, text: "Alertes", mobileOnly: true, category: "alertes" },
    { to: "dossier", icon: HiFolder, text: "Dossiers", mobileOnly: true, category: "dossier" },
  ];

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <aside ref={sidebarRef} className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r dark:border-gray-700`}>
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-10 w-10 rounded-full" alt="Logo" />
            <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">African Legal Tech</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <HiX className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <nav className="mt-5 px-2">
          {navItems.map((item) => (
            (!item.mobileOnly || (item.mobileOnly && window.innerWidth <= 1024)) && (
              item.to !== "alertes" ? (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === ""}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-2 text-base font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-green-600 bg-green-100 dark:bg-green-800 dark:text-white'
                        : 'text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-white hover:bg-green-50 dark:hover:bg-green-800'
                    } rounded-lg`
                  }
                  onClick={() => {
                    handleNavigation(item.category);
                    window.innerWidth <= 1024 && setSidebarOpen(false);
                  }}
                >
                  <item.icon className="w-6 h-6 mr-3" />
                  {item.text}
                </NavLink>
              ) : (
                // Custom Alert Button in Sidebar
                <div key={item.to} className="relative">
                  <button 
                    className={`flex items-center px-4 py-2 mt-2 text-base font-semibold transition-colors duration-200 ${
                      hasNewAlerts
                        ? 'text-green-600 bg-green-100 dark:bg-green-800 dark:text-white'
                        : 'text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-white hover:bg-green-50 dark:hover:bg-green-800'
                    } rounded-lg w-full alert-button`}
                    onClick={() => setAlertDropdownOpen(!alertDropdownOpen)}
                  >
                    <item.icon className="w-6 h-6 mr-3" />
                    {item.text}
                    {hasNewAlerts && (
                      <span className="absolute top-2 right-2 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                    )}
                  </button>

                  {/* Dropdown Menu in Sidebar */}
                  {alertDropdownOpen && (
                    <div className="absolute left-full top-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 alert-dropdown">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Alertes récentes</h3>
                        <ul className="mt-2">
                          {alerts.slice(0, 5).map(alert => (
                            <li 
                              key={alert.id} 
                              className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                              onClick={() => handleAlertClick(alert)}
                            >
                              <span>{alert.recherche}</span>
                              {alert.diff.some(num => num !== 0) && !readAlerts.includes(alert.id) && (
                                <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                              )}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 text-center">
                          <button 
                            className="text-blue-500 hover:underline"
                            onClick={handleAfficherTout}
                          >
                            Affiche tout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className={`flex items-center justify-between px-6 py-2 border-b dark:border-gray-700 dark:bg-gray-800 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
          <div className="flex items-center lg:w-1/3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 focus:outline-none lg:hidden">
              <HiMenu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center ml-4 lg:hidden">
              <img src={logo} className="h-8 w-8 rounded-full" alt="Logo" />
              <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-white">ALT</span>
            </Link>
          </div>
          
          <div className="flex-1 max-w-xl mx-auto">
            <SearchBar
              className="z-50 absolute"
              activeSearchCategory={activeSearchCategory}
              setActiveSearchCategory={setActiveSearchCategory}
            />
          </div>

          <div className="flex items-center lg:w-1/3 justify-end space-x-9">
            <div className="hidden lg:flex items-center space-x-9">
              {/* Updated Alert Icon in Navbar */}
              <div className="relative">
                <button 
                  className="flex flex-col items-center relative alert-button"
                  onClick={() => setAlertDropdownOpen(!alertDropdownOpen)}
                >
                  {hasNewAlerts && (
                    <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                  )}
                  <HiBell className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                  <span className="text-xs text-gray-700 dark:text-gray-300">Alertes</span>
                </button>

                {/* Dropdown Menu */}
                {alertDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 alert-dropdown">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Alertes récentes</h3>
                      <ul className="mt-2">
                        {alerts.slice(0, 5).map(alert => (
                          <li 
                            key={alert.id} 
                            className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                            onClick={() => handleAlertClick(alert)}
                          >
                            <span>{alert.recherche}</span>
                            {alert.diff.some(num => num !== 0) && !readAlerts.includes(alert.id) && (
                              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 text-center">
                        <button 
                          className="text-blue-500 hover:underline"
                          onClick={handleAfficherTout}
                        >
                          Affiche tout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Existing Dossier Link */}
              <NavLink to="dossier" className="flex flex-col items-center">
                <HiFolder className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                <span className="text-xs text-gray-700 dark:text-gray-300">Dossiers</span>
              </NavLink>
            </div>

            {/* User Account Dropdown */}
            <div className="flex flex-col items-center relative cursor-pointer group">
              <button className="flex flex-col items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={avatarUrl || "https://placehold.co/96x96"}
                  alt="user photo"
                />
                <span className="text-xs text-gray-700 dark:text-gray-300">Compte</span>
              </button>
              
              {/* Dropdown menu items */}
              <div className="top-[43px] z-20 absolute left-[-95px] w-[150px] mt-1 bg-white dark:bg-slate-800 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                <div className="py-[20px]"> 
                  <NavLink
                    to="profil"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Profil
                  </NavLink>
                  <NavLink
                    to="parametres"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Parametres
                  </NavLink>
                  {isExpert && (
                    <NavLink
                      to="parametres-expert"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Paramètres experts
                    </NavLink>
                  )}
                   <NavLink
                      to="recherche/historique"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Historique de Recherche
                    </NavLink>
                  <NavLink
                    to="aide"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Aide
                  </NavLink>
                  <a
                    onClick={() => setShowConfirm(true)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Déconnexion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-800">
          <div className="container mx-auto">
            <Outlet context={{ activeSearchCategory, setActiveSearchCategory }} />
          </div>
        </main>
      </div>

      {/* Logout confirmation modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">Confirmer la déconnexion</h2>
            <p className="mb-6 dark:text-gray-300">Êtes-vous sûr de vouloir vous déconnecter ?</p>
            <div className="flex justify-end">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" onClick={() => setShowConfirm(false)}>
                Annuler
              </button>
              <button className="px-4 py-2 ml-2 text-white bg-red-500 hover:bg-red-600 rounded-lg" onClick={handleLogout}>
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
