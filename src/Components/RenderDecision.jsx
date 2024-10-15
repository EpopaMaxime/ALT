// RenderDecision.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import anime from '../assets/anime.svg';
import DecisionList from './DecisionList'; // Ensure the path is correct
import Astuces from './Astuces'; // Import the Astuces component

const RenderDecision = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const legislationId = searchParams.get('legislationId');

  const [decisions, setDecisions] = useState([]);
  const [filteredDecisions, setFilteredDecisions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Only fetch decisions if a legislationId is present
    if (legislationId) {
      const fetchDecisions = async () => {
        setLoading(true);
        setError('');
        try {
          const res = await axios.get('https://alt.back.qilinsa.com/wp-json/wp/v2/decisions');
          setDecisions(res.data);
        } catch (err) {
          setError('Failed to fetch decisions');
        } finally {
          setLoading(false);
        }
      };

      fetchDecisions();
    } else {
      // If no legislationId, no need to fetch decisions
      setLoading(false);
    }
  }, [legislationId]);

  useEffect(() => {
    if (legislationId && decisions.length > 0) {
      const filtered = decisions.filter(decision => 
        decision.acf.legislation_decision && decision.acf.legislation_decision.includes(parseInt(legislationId, 10))
      );
      setFilteredDecisions(filtered);
    }
  }, [decisions, legislationId]);

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
        <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize dark:text-white"> +{filteredDecisions.length} Décisions liées à la législation</h3>
        <br/>

        {filteredDecisions.length > 0 ? (
          <ul>
            {filteredDecisions.map((decision) => (
              <li key={decision.id} className="mb-4">
                <h2 className="text-xl font-semibold">{decision.title.rendered}</h2>
                <p className="text-sm font-medium leading-snug dark:text-gray-400 my-3">{decision.acf.resume}</p>
                <Link 
                  to={`${decision.id}`} 
                  className="text-blue-500 hover:underline"
                >
                  Lire la décision
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune décision trouvée pour cette législation.</p>
        )}
        {/* Optional back link */}
        {/* <div className="mt-4">
          <Link to={`/dashboard/legislation/${legislationId}`} className="text-blue-500 hover:underline">
            Retour à la législation
          </Link>
        </div> */}
      </div>
    );
  } else {
    // If no legislationId, render the Astuces component
    return (
      <div className="container mx-auto p-4">
        <Astuces page="decisions" />
      </div>
    );
  }
};

export default RenderDecision;
