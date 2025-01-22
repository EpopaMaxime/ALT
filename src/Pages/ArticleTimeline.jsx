import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArticleTimeline = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [versions, setVersions] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllArticles = async (url) => {
      let allArticles = [];
      let page = 1;
      let totalPages = 1;

      try {
        do {
          const response = await axios.get(`${url}/wp-json/wp/v2/articles?per_page=100&page=${page}`);
          allArticles = allArticles.concat(response.data);
          totalPages = parseInt(response.headers['x-wp-totalpages'], 10) || 1;
          page++;
        } while (page <= totalPages);
      } catch (error) {
        console.error('Error fetching all articles:', error);
      }

      return allArticles;
    };

    const fetchCurrentArticleAndVersions = async () => {
      try {
        const altUrl = 'https://alt.back.qilinsa.com';
        
        // Fetch current article
        const currentArticleResponse = await axios.get(`${altUrl}/wp-json/wp/v2/articles/${id}`);
        const currentArticleData = currentArticleResponse.data;
        setCurrentArticle(currentArticleData);

        // Fetch all articles with pagination
        const allArticles = await fetchAllArticles(altUrl);

        // Normalize title function
        const normalizeTitle = (title) => {
          return title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s]/g, '')
            .trim()
            .replace(/\s+/g, ' ');
        };

        const currentTitleNormalized = normalizeTitle(currentArticleData.title.rendered);

        // Determine current hierarchy ID
        const currentHierarchy = currentArticleData.acf.hierachie;
        let currentHierarchyId;
        if (Array.isArray(currentHierarchy) && currentHierarchy.length > 0) {
          currentHierarchyId = currentHierarchy[0];
        } else if (currentHierarchy) {
          currentHierarchyId = currentHierarchy;
        } else {
          currentHierarchyId = null;
        }

        // Filter articles
        const sameTitle = allArticles.filter(article => {
          const articleTitleNormalized = normalizeTitle(article.title.rendered);
          if (articleTitleNormalized !== currentTitleNormalized) return false;

          // Handle article's hierachie
          const articleHierarchy = article.acf.hierachie;
          let articleHierarchyIds = [];
          if (Array.isArray(articleHierarchy)) {
            articleHierarchyIds = articleHierarchy;
          } else if (articleHierarchy) {
            articleHierarchyIds = [articleHierarchy];
          }

          // Check hierarchy if current has one
          return !currentHierarchyId || articleHierarchyIds.includes(currentHierarchyId);
        });

        // Sort versions by date_entree
        const sortedVersions = sameTitle.sort((a, b) => {
          const dateA = a.acf.date_entree || '00000000';
          const dateB = b.acf.date_entree || '00000000';
          return dateA.localeCompare(dateB);
        });

        setVersions(sortedVersions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article versions:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchCurrentArticleAndVersions();
    }
  }, [id]);

  if (loading) return <div className="h-12 animate-pulse bg-gray-200 rounded"></div>;
  if (!currentArticle || versions.length === 0) return null;

  const formatDate = (dateString) => {
    const cleanDateString = (dateString || '').replace(/-/g, '');
    const year = cleanDateString.substring(0, 4) || '0000';
    const month = cleanDateString.substring(4, 6) || '01';
    const day = cleanDateString.substring(6, 8) || '01';

    const date = new Date(year, parseInt(month) - 1, day);
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    
    return `${date.getDate().toString().padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getYear = (dateString) => {
    return (dateString || '').substring(0, 4);
  };

  const handleBoxClick = (versionId) => {
    navigate(`/dashboard/article/${versionId}`);
  };

  return (
    <div className="mb-8 mt-4">
      <h3 className="text-lg font-semibold mb-4">Historique des versions</h3>
      <div className="relative">
        <div className="absolute h-1 bg-blue-200 bottom-6 left-0 right-0"></div>
        <div className="relative flex justify-between items-center gap-0 overflow-x-auto pb-0">
          {versions.map((version) => (
            <div 
              key={version.id}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => handleBoxClick(version.id)}
            >
              <div 
                className={`p-2 rounded-lg shadow-md w-32 h-16 flex flex-col items-center justify-center text-center text-sm border 
                  ${version.id === parseInt(id)
                    ? 'border-blue-400 text-blue-600'
                    : 'bg-white text-black dark:bg-gray-800 dark:text-white'
                  }`}
              >
                <div>Version</div>
                <div className="text-xs mt-1">
                  {formatDate(version.acf.date_entree)}
                </div>
              </div>
              <div className="h-12 w-0.5 bg-blue-200"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="mt-2 text-xs text-gray-500">{getYear(version.acf.date_entree)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleTimeline;