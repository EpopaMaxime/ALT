import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArticleTimeline = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [versions, setVersions] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleVersions = async () => {
      try {
        const altUrl = 'https://alt.back.qilinsa.com';
  
        // Fetch the current article
        const currentArticleResponse = await axios.get(`${altUrl}/wp-json/wp/v2/articles/${id}`);
        const currentArticleData = currentArticleResponse.data;
        setCurrentArticle(currentArticleData);
  
        // Log the current article for debugging
        // console.log('Current Article:', currentArticleData);
  
        // Fetch legislation versions
        const legislationId = currentArticleData.acf?.Legislation_ou_titre_ou_chapitre_ou_section;
        if (!legislationId) {
          // console.error('No legislation ID found');
          setLoading(false);
          return;
        }
  
        // console.log('Legislation ID:', legislationId);
  
        const legislationResponse = await axios.get(`${altUrl}/wp-json/wp/v2/get-legislation/${legislationId}`);
        const legislationData = legislationResponse.data;
  
        // console.log('Legislation Data:', legislationData);
  
        // Extract all related articles with post_type: "article"
        const allRelatedArticles = legislationData.data
          .flatMap(item => item.related || [])
          .filter(article => article.post_type === 'article');
  
        // console.log('Filtered Articles (post_type: "article"):', allRelatedArticles);
  
        // Normalize the title of the current article
        const currentTitleNormalized = normalizeTitle(currentArticleData.title.rendered);
  
        // Find matching versions based on title and hierarchy
        const matchingVersions = allRelatedArticles.filter(article =>
          normalizeTitle(article.title) === currentTitleNormalized &&
          hasMatchingHierarchy(currentArticleData, article)
        );
  
        // console.log('Matching Versions:', matchingVersions);
  
        // Sort matching versions by date
        const sortedVersions = matchingVersions.sort((a, b) =>
          (a.date_entree || '00000000').localeCompare(b.date_entree || '00000000')
        );
  
        setVersions(sortedVersions);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching article versions:', error);
        setError(error);
        setLoading(false);
      }
    };
  
    const normalizeTitle = (title) => {
      return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/[^a-z0-9\s]/g, '') // Remove non-alphanumeric characters
        .trim()
        .replace(/\s+/g, ' '); // Replace multiple spaces with a single space
    };
  
    const hasMatchingHierarchy = (currentArticle, articleVersion) => {
      const currentHierarchy = currentArticle.acf?.hierachie || [];
      const versionHierarchy = articleVersion.hierachie || [];
  
      // Ensure both are arrays
      const currentHierarchyArray = Array.isArray(currentHierarchy) ? currentHierarchy : [currentHierarchy];
      const versionHierarchyArray = Array.isArray(versionHierarchy) ? versionHierarchy : [versionHierarchy];
  
      // Check for at least one common hierarchy ID
      return currentHierarchyArray.some(h => versionHierarchyArray.includes(h.toString()));
    };
  
    if (id) {
      fetchArticleVersions();
    }
  }, [id]);
  
  if (loading) return <div className="h-12 animate-pulse bg-gray-200 rounded">chargement...</div>;
  
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  
  if (!currentArticle) return <div>Aucun article trouvé</div>;
  
  if (versions.length === 0) return <div>Aucune version disponible</div>;

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
                  {formatDate(version.date_entree)}
                </div>
              </div>
              <div className="h-12 w-0.5 bg-blue-200"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="mt-2 text-xs text-gray-500">{getYear(version.date_entree)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleTimeline;