import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import anime from '../assets/anime.svg';
import DecisionList from './DecisionList';
import Astuces from './Astuces';

const RenderDecision = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const legislationId = searchParams.get('legislationId');
  const [decisions, setDecisions] = useState([]);
  const [filteredDecisions, setFilteredDecisions] = useState([]);
  const [visibleDecisions, setVisibleDecisions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (legislationId) {
      const fetchDecisions = async () => {
        setLoading(true);
        setError('');
        try {
          // Fetch all decisions
          const res = await axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/decisions', {
            params: { per_page: 100 },
          });
          setDecisions(res.data);
        } catch (err) {
          setError('Failed to fetch decisions');
        } finally {
          setLoading(false);
        }
      };
      fetchDecisions();
    } else {
      setLoading(false);
    }
  }, [legislationId]);

  useEffect(() => {
    if (legislationId && decisions.length > 0) {
      const filtered = decisions.filter(
        (decision) =>
          decision.acf.legislation_decision &&
          decision.acf.legislation_decision.includes(parseInt(legislationId, 10))
      );
      setFilteredDecisions(filtered);

      // Initialize visible decisions
      setVisibleDecisions(filtered.slice(0, itemsPerPage));
      setPage(1);
    }
  }, [decisions, legislationId]);

  const loadMoreDecisions = () => {
    const startIndex = page * itemsPerPage;
    const remaining = filteredDecisions.length - startIndex;

    if (remaining <= itemsPerPage) {
      // Load all remaining decisions
      setVisibleDecisions(filteredDecisions);
    } else {
      // Load the next batch of decisions
      setVisibleDecisions((prev) => [
        ...prev,
        ...filteredDecisions.slice(startIndex, startIndex + itemsPerPage),
      ]);
    }
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={anime} alt="Loading animation" />
      </div>
    );
  }

  if (error) return <p className="text-center text-red-500">{error}</p>;

  if (legislationId) {
    return (
      <div className="container mx-auto p-4">
        <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize dark:text-white">
          {filteredDecisions.length} Décisions liées à la législation
        </h3>
        <br />
        {filteredDecisions.length > 0 ? (
          <>
            <ul>
              {visibleDecisions.map((decision) => (
                <li key={decision.id} className="mb-4">
                  <h2 className="text-xl font-semibold">{decision.title.rendered}</h2>
                  <p className="text-sm font-medium leading-snug dark:text-gray-400 my-3">
                    {decision.acf.resume}
                  </p>
                  <Link
                    to={`${decision.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Lire la décision
                  </Link>
                </li>
              ))}
            </ul>

            {visibleDecisions.length < filteredDecisions.length && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={loadMoreDecisions}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {visibleDecisions.length + itemsPerPage >= filteredDecisions.length
                    ? 'Voir Tout'
                    : 'Voir Plus'}
                </button>
              </div>
            )}
          </>
        ) : (
          <p>Aucune décision trouvée pour cette législation.</p>
        )}
      </div>
    );
  } else {
    return (
      <div className="container mx-auto p-4">
        <Astuces page="decisions" />
      </div>
    );
  }
};

export default RenderDecision;
