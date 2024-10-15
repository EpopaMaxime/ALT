import React, { useState } from 'react';
import axios from 'axios';
import { HiUserPlus, HiCheck } from 'react-icons/hi';
import PropTypes from 'prop-types';

const FollowButton = ({ iduser, searchTerm }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    if (isFollowing || isLoading) return;

    setIsFollowing(true);
    setIsLoading(true);

    try {
      // Define the search term
      const recherche = searchTerm;

      // Define the current date in YYYY-MM-DD format
      const currentDate = new Date().toISOString().split('T')[0];

      // Function to fetch IDs from a given endpoint
      const fetchIds = async (endpoint) => {
        const response = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/${endpoint}?search=${encodeURIComponent(recherche)}`);
        return response.data.map(item => item.id).join(', ');
      };

      // Fetch IDs from all four endpoints
      const [decisionsIds, legislationsIds, commentairesIds, articlesIds] = await Promise.all([
        fetchIds('decisions'),
        fetchIds('legislations'),
        fetchIds('commentaires'),
        fetchIds('articles')
      ]);

      // Combine all IDs into a single string
      const reponse = [decisionsIds, legislationsIds, commentairesIds, articlesIds]
        .filter(ids => ids) // Remove empty strings
        .join(', ');

      // Prepare the JSON payload
      const payload = {
        iduser: iduser.toString(),
        recherche,
        reponse,
        date: currentDate,
        diff: ""
      };

      // Make the POST request
      await axios.post('https://alt.back.qilinsa.com/wp-json/custom-api/v1/create-alert', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Optionally, handle success (e.g., show a success message)
      console.log('Follow action successful:', payload);
    } catch (error) {
      console.error('Error during follow action:', error);
      // Revert the follow state if there's an error
      setIsFollowing(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleFollow}
      disabled={isFollowing || isLoading}
      className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
        isFollowing
          ? 'bg-green-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-green-600'
      }`}
    >
      {isFollowing ? (
        <>
          <HiCheck className="w-5 h-5 mr-2" />
          Suivi
        </>
      ) : (
        <>
          <HiUserPlus className="w-5 h-5 mr-2" />
          Suivre
        </>
      )}
    </button>
  );
};

FollowButton.propTypes = {
  iduser: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default FollowButton;
