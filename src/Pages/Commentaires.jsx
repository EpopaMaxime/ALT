import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom';
import parse from 'html-react-parser'; // Ensure this dependency is installed
import anime from '../assets/anime.svg'; // Ensure you have an appropriate loading spinner

const Commentaires = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const legislationId = searchParams.get('legislationId');

  const [Commentaires, setCommentaires] = useState([]);
  const [totalCommentaires, setTotalCommentaires] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCommentaires = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/commentaires');
        let fetchedCommentaires = res.data;

        if (legislationId) {
          const legislationIdNum = parseInt(legislationId, 10);
          fetchedCommentaires = fetchedCommentaires.filter(comment =>
            comment.acf.legislation_commentaire.includes(legislationIdNum)
          );
        }

        setCommentaires(fetchedCommentaires);
        setTotalCommentaires(fetchedCommentaires.length); // Set the total number of comments
      } catch (err) {
        setError('Failed to fetch Commentaires');
      } finally {
        setLoading(false);
      }
    };

    fetchCommentaires();
  }, [legislationId]);

  return (
    <div>
      <div className="mr-6 lg:w-[1200px] mt-8 py-2 flex-shrink-0 flex flex-col bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text rounded-lg">
        <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize dark:text-white">
          <span>
          {totalCommentaires} Commentaires {legislationId ? ` trouve sure la législation ` : ''}
          </span>
          <button className="ml-2">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
            </svg>
          </button>
        </h3>
        <div>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <img src={anime} alt="Loading" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <>
              <ul className="pt-1 pb-2 px-3 overflow-y-auto">
                {Commentaires.length > 0 ? (
                  Commentaires.map((commentaire) => (
                    <li key={commentaire.id} className="mt-2">
                      <NavLink to={`${commentaire.id}`} className="pt-5 flex flex-col justify-between dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between font-semibold capitalize dark:text-gray-100">
                          <span>{commentaire.title?.rendered || 'No Title'}</span>
                        </div>
                      </NavLink>
                      {commentaire.acf.url && (
                        <a href={commentaire.acf.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                          {commentaire.acf.url}
                        </a>
                      )}
                      <div className="text-sm font-medium leading-snug dark:text-gray-400 my-3">
                        {parse(commentaire.excerpt?.rendered) || 'No Excerpt'}
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="mt-2 text-center">Aucun commentaire trouvé.</li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Commentaires;
