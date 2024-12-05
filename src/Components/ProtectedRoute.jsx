import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import anime from '../assets/anime.svg';

const ProtectedRoute = ({ children }) => {
  const [actif, setActif] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isApiReachable, setIsApiReachable] = useState(true);
  const [redirectToAuth, setRedirectToAuth] = useState(false);

  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    const checkApiConnectivity = async (retry = false) => {
      try {
        await axios.options('https://alt.back.qilinsa.com/wp-json/wp/v2/users/me');
        setIsApiReachable(true);
        return true;
      } catch (error) {
        if (!retry) {
          // Réessayer une fois en cas d'échec initial
          return checkApiConnectivity(true);
        } else {
          console.error('API non accessible après deux tentatives :', error);
          setIsApiReachable(false);
          return false;
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
        if (error.response?.status === 403) {
          // Si le serveur retourne 403 Forbidden
          console.warn('Session expirée ou accès refusé. Redirection vers l\'authentification.');
          localStorage.removeItem('token');
          setRedirectToAuth(true);
        } else {
          console.error('Erreur de récupération des données :', error);
          setActif(false);
        }
      } finally {
        setLoading(false);
      }
    };

    const initDataFetch = async () => {
      if (isLoggedIn && isOnline) {
        const apiConnected = await checkApiConnectivity();
        if (apiConnected) {
          fetchUserData();
        } else {
          setLoading(false);
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
  }, [isLoggedIn, isOnline]);

  if (redirectToAuth) {
    return <Navigate to="/authform" />;
  }

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

  if (actif === false && isOnline === true && isApiReachable === true && redirectToAuth === false) {
    return <Navigate to="/comptedesactiver" />;
  }

  return children;
};

export default ProtectedRoute;
