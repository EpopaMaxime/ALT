import React, { useState, useEffect } from "react";
import axios from "axios";

const LegislationPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Assume the token is stored in localStorage or comes from props
  const token = localStorage.getItem("token");

  // Function to fetch legislation data with token authentication
  const fetchLegislation = async () => {
    try {
      const response = await axios.get("https://alt.back.qilinsa.com/wp-json/wp/v2/get-legislation/27706", {
        headers: {
          Authorization: `Bearer ${token}` // Pass the token in the Authorization header
        }
      });
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch legislation data");
      setLoading(false);
    }
  };

  // UseEffect to fetch data when the component mounts
  useEffect(() => {
    fetchLegislation();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="legislation-page flex">
      {/* Sidebar for the summary */}
      <div className="lg:col-span-1 dark:bg-gray-700 p-4 rounded-xl shadow lg:sticky lg:top-0 lg:max-h-screen">
        <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <a href={`#section-${item.id}`} className="text-blue-500 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content with legislation details */}
      <div className="content w-3/4 p-4">
        <h1>Legislation Details</h1>
        {data.length === 0 ? (
          <p>No legislation data available</p>
        ) : (
          <div>
            {data.map((item) => (
              <div key={item.id} id={`section-${item.id}`} className="legislation-item mb-8">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="line-clamp-3">{item.content || " "}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LegislationPage;
