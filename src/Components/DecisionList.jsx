// DecisionList.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const DecisionList = ({ decisions }) => {
  // Function to decode HTML entities
  const decodeHTMLEntities = (text) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  };

  // Function to extract the last part of the title
  const extractLastPart = (text) => {
    const parts = decodeHTMLEntities(text).split(' – ');
    return parts[parts.length - 1];
  };

  return (
    <ul className="space-y-4">
      {decisions.map(decision => (
        <li key={decision.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">
            {extractLastPart(decision.title.rendered)}
          </h2>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(decision.content.rendered) }}
          />
          <Link to={`/decision/${decision.id}`} className="text-blue-500 hover:underline mt-2 block">
            Lire la décision
          </Link>
        </li>
      ))}
    </ul>
  );
};

// Define propTypes for DecisionList
DecisionList.propTypes = {
  decisions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.shape({
        rendered: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.shape({
        rendered: PropTypes.string.isRequired,
      }).isRequired,
      acf: PropTypes.shape({
        legislation_decision: PropTypes.arrayOf(PropTypes.number),
      }),
    })
  ).isRequired,
};

export default DecisionList;
