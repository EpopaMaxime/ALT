import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import anime from '../assets/anime.svg';

const ProtectedRoute = ({ children }) => {
  const [actif, setActif] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isApiReachable, setIsApiReachable] = useState(true); // Gestion de l’accessibilité de l’API

  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    const checkApiConnectivity = async (retry = false) => {
      try {
        await axios.options('https://alt.back.qilinsa.com/wp-json/wp/v2/users/me');
        setIsApiReachable(true);
      } catch (error) {
        if (!retry) {
          // En cas d'échec initial, on réessaie une fois
          await checkApiConnectivity(true);
        } else {
          console.error('API non accessible après deux tentatives :', error);
          setIsApiReachable(false);
        }
      }
    };

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = response.data;
        setActif(userData.acf.compte_actif);
      } catch (error) {
        console.error('Erreur de récupération des données :', error);
        setActif(false);
      } finally {
        setLoading(false);
      }
    };

    const initDataFetch = async () => {
      if (isLoggedIn && isOnline) {
        await checkApiConnectivity();
        if (isApiReachable) {
          fetchUserData();
        } else {
          setLoading(false); // Ne continue pas si l'API n'est pas accessible
        }
      } else {
        setLoading(false);
      }
    };

    initDataFetch();

    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, [isLoggedIn, isOnline, isApiReachable]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={anime} alt="Loading..." />
      </div>
    );
  }

  if (!isOnline) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Vous êtes hors ligne. Veuillez vérifier votre connexion Internet.</p>
      </div>
    );
  }

  if (!isApiReachable) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Connexion au serveur impossible. Veuillez réessayer plus tard.</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/authform" />;
  }

  if (isLoggedIn && actif === false) {
    return <Navigate to="/comptedesactiver" />;
  }

  return children;
};

export default ProtectedRoute;
