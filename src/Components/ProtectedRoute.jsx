import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import anime from '../assets/anime.svg';

const ProtectedRoute = ({ children }) => {
  const [actif, setActif] = useState(null); // null pour indiquer qu'on attend encore la réponse
  const [loading, setLoading] = useState(true); // pour indiquer si les données sont en cours de chargement

  const isLoggedIn = !!localStorage.getItem('token'); // Vérifie si l'utilisateur est connecté

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = response.data;
        setActif(userData.acf.compte_actif);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setActif(false); // En cas d'erreur, on considère le compte comme inactif pour renvoyer à l'authentification.
      } finally {
        setLoading(false); // Les données ont été récupérées ou une erreur s'est produite
      }
    };

    if (isLoggedIn) {
      fetchUserData();
    } else {
      setLoading(false); // Si non connecté, pas besoin de charger les données de l'utilisateur
    }
  }, [isLoggedIn]);

  // Pendant le chargement des données, on ne montre rien ou un spinner si besoin
  if (loading) return <div className="flex justify-center items-center h-screen"><img src={anime} alt="Loading..." /></div>;

  // Redirections basées sur l'état de connexion et le statut actif du compte
  if (!isLoggedIn) {
    return <Navigate to="/authform" />;
  }

  if (isLoggedIn && actif === false) {
    return <Navigate to="/comptedesactiver" />;
    
  }

  return children; // Si l'utilisateur est connecté et actif, on affiche le contenu protégé
};

export default ProtectedRoute;
