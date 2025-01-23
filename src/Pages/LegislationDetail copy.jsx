import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import anime from '../assets/anime.svg';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


const checkArticleId = async (id) => {
  try {
    const response = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/articles/${id}`);
    return true; // If the API returns a valid article, we assume the ID is valid
  } catch (error) {
    if (error.response && error.response.data.message === "Invalid post ID.") {
      // Handle invalid article ID
      // console.log("Invalid post ID.");
      return false;
    } else {
      // Handle other possible errors
      console.error("Error checking article ID:", error);
      return false;
    }
  }
};


const LegislationDetail = () => {
  const { id } = useParams();
  const [legislation, setLegislation] = useState(null);
  const [details, setDetails] = useState([]);
  const [decisions, setDecisions] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [code, setCode] = useState('');

  const endpoints = ['titres', 'chapitres', 'sections', 'articles'];

  // Function to decode HTML entities
  const decodeHTMLEntities = (text) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  };

  useEffect(() => {
    const fetchLegislation = async () => {
      try {
        const res = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/legislations/${id}`);
        setLegislation(res.data);
  
        // Fetch category name
        if (res.data.categories_legislations.length > 0) {
          const categoryId = res.data.categories_legislations[0];
          const categoryRes = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/categories_legislations/${categoryId}`);
          setCategoryName(categoryRes.data.name);
        }
  
            // Format and set entry date
            const entryDateRaw = res.data.acf.date_entree || '';
            let formattedDate = '';

            if (entryDateRaw) {
              // Trim any leading/trailing whitespace
              const sanitizedDateRaw = entryDateRaw.trim();
            
              if (sanitizedDateRaw.includes('-')) {
                // Handle "YYYY-MM-DD" format
                const [year, month, day] = sanitizedDateRaw.split('-');
            
                // Parse values correctly
                const parsedDay = parseInt(day, 10);
                const parsedMonth = parseInt(month, 10); // Month is 1-12
                const parsedYear = parseInt(year, 10);
            
                console.log("Raw input:", entryDateRaw);
                console.log("Parsed day:", parsedDay, "Parsed month:", parsedMonth, "Parsed year:", parsedYear);
            
                // Format the date correctly
                if (!isNaN(parsedDay) && !isNaN(parsedMonth) && !isNaN(parsedYear)) {
                  formattedDate = `${parsedDay} ${new Date(parsedYear, parsedMonth - 1).toLocaleString('fr-FR', { month: 'long' }).toUpperCase()} ${parsedYear}`;
                } else {
                  console.error("Invalid date components:", { day, month, year });
                }
              } else {
                console.error("Invalid date format:", entryDateRaw);
              }
            
              // Set the formatted date
              setEntryDate(formattedDate);
            } else {
              console.error("Entry date is empty or undefined:", entryDateRaw);
            }
            

  
        // Fetch the "code" field
        const code = res.data.acf.code || '';
        setCode(code);
  
        const identifiers = res.data.acf.titre_ou_chapitre_ou_section_ou_articles || [];
        const decisionIdentifiers = res.data.acf.decision ? res.data.acf.decision : [];
        const commentIdentifiers = res.data.acf.commentaire ? res.data.acf.commentaire : [];
  
        const fetchData = async (id) => {
          for (let endpoint of endpoints) {
            try {
              const res = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/${endpoint}/${id}`);
              if (res.data) return { ...res.data, endpoint };
            } catch (err) {
              // Continue to the next endpoint if not found
            }
          }
          return null; // Return null if data not found in any endpoint
        };
  
        const fetchDecisions = async (id) => {
          try {
            const res = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/decisions/${id}`);
            return res.data;
          } catch (err) {
            return null; // Return null if decision not found
          }
        };
  
        const fetchComments = async (id) => {
          try {
            const res = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/commentaires/${id}`);
            return res.data;
          } catch (err) {
            return null; // Return null if comment not found
          }
        };
  
        const detailsData = await Promise.all(identifiers.map(fetchData));
        const decisionsData = await Promise.all(decisionIdentifiers.map(fetchDecisions));
        const commentsData = await Promise.all(commentIdentifiers.map(fetchComments));
  
        const uniqueArticles = detailsData
        .filter(Boolean)
        .reduce((acc, currentArticle) => {
          // Normalize the current article title by removing extra spaces
          const normalizedCurrentTitle = currentArticle.title.rendered
            .replace(/\s+/g, ' ')  // Replace multiple spaces with single space
            .trim();               // Remove leading/trailing spaces
      
          // Get the title ID from the first item in the `acf.hierachie` array
          const currentTitleId = currentArticle.acf.hierachie?.[0];
      
          // Find if an article with the same normalized title and title ID exists
          const existingArticle = acc.find(article => {
            const normalizedExistingTitle = article.title.rendered
              .replace(/\s+/g, ' ')
              .trim();
            const existingTitleId = article.acf.hierachie?.[0];
            return normalizedCurrentTitle === normalizedExistingTitle && currentTitleId === existingTitleId;
          });
      
          if (existingArticle) {
            // Convert date strings to numbers for proper comparison
            const existingDate = parseInt(existingArticle.acf.date_entree, 10);
            const newDate = parseInt(currentArticle.acf.date_entree, 10);
      
            if (!isNaN(newDate) && !isNaN(existingDate)) {
              if (newDate > existingDate) {
                // Replace the existing article with the current one if the date is newer
                return [
                  ...acc.filter(article => 
                    !(article.title.rendered.replace(/\s+/g, ' ').trim() === normalizedCurrentTitle && 
                      article.acf.hierachie?.[0] === currentTitleId)
                  ),
                  currentArticle
                ];
              }
            }
            // If dates are invalid or the new date is not greater, keep the existing article
            return acc;
          }
      
          // If no existing article found, add the current article to the list
          return [...acc, currentArticle];
        }, []);
      
      setDetails(uniqueArticles);
      
        setDecisions(decisionsData.filter(Boolean));
        setComments(commentsData.filter(Boolean));
      } catch (err) {
        setError('Failed to fetch legislation or details');
      } finally {
        setLoading(false);
      }
    };
  
    fetchLegislation();
  }, [id]);
  

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={anime} alt="Loading animation" />
      </div>
    );
  }

  if (error) return <p className="text-center text-red-500">{error}</p>;

  if (!legislation) return <p className="text-center">Législation non trouvée.</p>;

  return (
    <div className="min-h-screen flex flex-col bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="flex-1 container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1 dark:bg-gray-700 p-4 rounded-xl shadow lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto">
          <h2 className="text-xl font-bold mb-6">Autour de la décision</h2>
          <ul className="space-y-4">
            {/* Commentaires Link */}
            <li>
              <a
                onClick={() => scrollToSection('comments')}
                className="flex justify-between items-center cursor-pointer text-blue-500 text-sm dark:text-blue-200 hover:underline"
              >
                <span>Commentaires</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {comments.length}
                </span>
              </a>
            </li>
            {/* Décisions Link */}
            <li>
              <a
                onClick={() => scrollToSection('decisions')}
                className="flex justify-between items-center cursor-pointer text-blue-500 text-sm dark:text-blue-200 hover:underline"
              >
                <span>Décisions</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {decisions.length}
                </span>
              </a>
            </li>
            <br/>
            {/* Sommaire */}
            <li>
            <h2 className="text-xl font-bold mb-6">Sommaire</h2>
              <ul className="space-y-2">
                {details.map((item, index) => (
                  <li key={index}>
                    <a
                      onClick={() => scrollToSection(`detail-${item.id}`)}
                      className="cursor-pointer text-blue-500 text-sm dark:text-blue-200 hover:underline"
                    >
                      {parse(item.title.rendered)}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 dark:bg-gray-800 p-6 rounded shadow overflow-y-auto">
          <div className="text-lg leading-relaxed">
            {/* Legislation Title */}
            <h1 className="text-3xl font-bold mb-4">{decodeHTMLEntities(legislation.title.rendered)}</h1>

            {/* Heading Label */}
            <h2 className="text-2xl font-semibold mb-4">
          {categoryName === 'loi' ? 'Sur la' : 'Sur le'} {categoryName}
           </h2>

            {/* Dates */}
            <div className="mb-6">
            <p>
                <strong>Entrée en vigueur:</strong> Le {entryDate}
              </p>
              {/* <p>
                <strong>Dernière modification:</strong> {new Date(legislation.modified).toLocaleDateString()}
              </p> */}
              <p>
                <strong>Code visés:</strong> {code}
              </p>
            </div>

            {comments.length > 0 && (
  <div id="comments" className="mb-8">
    <h2 className="text-2xl font-bold mb-4">
      Commentaires ({comments.length})
    </h2>
    {comments.slice(0, 3).map((comment, index) => (
      <div key={index} className="mb-4" id={`comment-${comment.id}`}>
        <h3 className="text-xl font-semibold mb-2">{parse(comment.title.rendered)}</h3>
        <a href={comment.acf.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {comment.acf.url}
        </a>
        <div
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(comment.content.rendered) }}
        />
      </div>
    ))}
    {/* Afficher tout Link */}
    {comments.length > 3 && (
      <div className="flex justify-end mt-4">
        <Link to={`/dashboard/commentaire?legislationId=${id}`} className="text-blue-500 hover:underline">
          Afficher tout ({comments.length})
        </Link>
      </div>
    )}
  </div>

  
    )}
   <div className="w-full border-t border-gray-300 my-8"></div>



            {/* Décisions */}
            {decisions.length > 0 && (
              <div id="decisions" className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Décisions ({decisions.length})
                </h2>
                {decisions.slice(0, 3).map((decision, index) => (
                  <div key={index} className="mb-4" id={`decision-${decision.id}`}>
                    <h3 className="text-xl font-semibold mb-2">{decision.title.rendered}</h3>
                    <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(decision.content.rendered) }} />
                  </div>
                ))}
                {/* Afficher tout Link */}
                    {decisions.length > 3 && (
                      <div className="flex justify-end mt-4">
                        <Link to={`/dashboard/decision?legislationId=${id}`} className="text-blue-500 hover:underline">
                          Afficher tout ({decisions.length})
                        </Link>
                      </div>
                    )}
              </div>
            )}
               <div className="w-full border-t border-gray-300 my-8"></div>

            <br/>

            {/* Sommaire */}
            <div id="sommaire" className="mb-8">

              {details.map((item, index) => (
                <div key={index} className="mb-6" id={`detail-${item.id}`}>
                <Link 
                      to="#"
                      className="hover:text-green-500"
                      onClick={async (e) => {
                        e.preventDefault();
                        const isValid = await checkArticleId(item.id);
                        if (isValid) {
                          window.location.href = `/dashboard/article/${item.id}`;
                        }
                      }}
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {parse(item.title.rendered)}
                      </h3>
                </Link>

                  <Link to={`/dashboard/article/${item.id}`}><div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(item.content.rendered) }} /></Link>
                  
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LegislationDetail;
