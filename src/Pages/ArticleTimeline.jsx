import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const ArticleTimeline = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [versions, setVersions] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentArticleAndVersions = async () => {
      try {
        const altUrl = 'https://alt.back.qilinsa.com';
    
        // Fetch the current article
        const currentArticleResponse = await axios.get(`${altUrl}/wp-json/wp/v2/articles/${id}`);
        const currentArticleData = currentArticleResponse.data;
        setCurrentArticle(currentArticleData);
    
        // Fetch all articles
        const allArticlesResponse = await axios.get(`${altUrl}/wp-json/wp/v2/articles?per_page=100`);
        const allArticles = allArticlesResponse.data;
    
        // Function to normalize titles
        const normalizeTitle = (title) => {
          return title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, ' '); // Replace multiple spaces with a single space
        };
    
        // Normalized current article title
        const currentTitleNormalized = normalizeTitle(currentArticleData.title.rendered);
    
        // Filter articles with the same normalized title and Hierarchy_ID
        const sameTitle = allArticles.filter(article => {
          const articleHierarchyIds = article.acf.hierachie;
          const currentHierarchyId = currentArticleData.acf.hierachie[0];
          return (
            normalizeTitle(article.title.rendered) === currentTitleNormalized &&
            articleHierarchyIds.includes(currentHierarchyId)
          );
        });
    
        // Sort by date_entree
        const sortedVersions = sameTitle.sort((a, b) => {
          const dateA = a.acf.date_entree;
          const dateB = b.acf.date_entree;
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
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    
    const date = new Date(year, parseInt(month) - 1, day);
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    
    return `${date.getDate().toString().padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Function to extract the year from the date_entree field
  const getYear = (dateString) => {
    return dateString.substring(0, 4); // Extract the year
  };

  const handleBoxClick = (versionId) => {
    navigate(`/dashboard/article/${versionId}`); // Navigate to the article page based on its ID
  };

  return (
    <div className="mb-8 mt-4">
      <h3 className="text-lg font-semibold mb-4">Historique des versions</h3>
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute h-1 bg-blue-200 bottom-6 left-0 right-0"></div>

        {/* Version boxes and dots */}
        <div className="relative flex justify-between items-center gap-0 overflow-x-auto pb-0">
          {versions.map((version, index) => (
            <div 
              key={version.id}
              className={`relative flex flex-col items-center cursor-pointer`} // Add cursor-pointer for hover effect
              onClick={() => handleBoxClick(version.id)} // Add onClick to handle redirection
            >
              {/* Version box with date inside */}
              <div 
                className={`p-2 rounded-lg shadow-md w-32 h-16 flex flex-col items-center justify-center text-center text-sm border 
                  ${version.id === parseInt(id)
                    ? 'border-blue-400 text-blue-600' // Blue border for selected version
                    : 'bg-white text-black dark:bg-gray-800 dark:text-white'
                  }`}
              >
                <div>Version</div>
                <div className="text-xs mt-1">
                  {formatDate(version.acf.date_entree)}
                </div>
              </div>

              {/* Line connecting the version box to the dot */}
              <div className="h-12 w-0.5 bg-blue-200"></div>

              {/* Dot on the X-axis */}
              <div 
                className={`w-4 h-4 rounded-full bg-blue-500`}
              ></div>

              {/* Year below the dot */}
              <div className="mt-2 text-xs text-gray-500">{getYear(version.acf.date_entree)}</div> {/* New Year Display */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleTimeline;
