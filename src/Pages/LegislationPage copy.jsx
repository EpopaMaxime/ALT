import React, { useState, useEffect } from 'react';
import axios from 'axios';
import anime from '../assets/anime.svg';
import { useParams } from 'react-router-dom';

const LegislationPage = ({ legislationId }) => {
    const { id } = useParams();
    const [legislationData, setLegislationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [related, setRelated] = useState([]);
    const [decisions, setDecisions] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchLegislationData = async () => {
            try {
                const response = await axios.get(`https://alt.back.qilinsa.com/wp-json/wp/v2/get-legislation/${id}`);
                const { data } = response.data;

                setLegislationData(data[0]); // Législation principale
                setRelated(data[1]?.related || []);
                setDecisions(data[1]?.decision || []);
                setComments(data[1]?.commentaire || []);
            } catch (err) {
                setError('Erreur lors de la récupération des données');
            } finally {
                setLoading(false);
            }
        };

        fetchLegislationData();
    }, [legislationId]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <img src={anime} alt="Loading animation" />
          </div>
        );
    }


    if (error) {
        return <div>{error}</div>;
    }

    if (!legislationData) {
        return <div>Aucune donnée disponible</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
            <div className="flex-1 container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-1 dark:bg-gray-700 p-4 rounded-xl shadow lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto">
                    <h2 className="text-xl font-bold mb-6">Sommaire</h2>
                    <ul className="space-y-4">
                        {/* Législation principale */}
                        <li>
                            <a
                                onClick={() => scrollToSection('legislation')}
                                className="cursor-pointer text-blue-500 text-sm dark:text-blue-200 hover:underline"
                            >
                                Législation principale
                            </a>
                        </li>
                        {/* Sections liées */}
                        {related.length > 0 && (
                            <li>
                                <h3 className="font-semibold">Sections Liées</h3>
                                <ul>
                                    {related.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                onClick={() => scrollToSection(`related-${item.id}`)}
                                                className="cursor-pointer text-blue-500 text-sm dark:text-blue-200 hover:underline"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                        {/* Décisions */}
                        {decisions.length > 0 && (
                            <li>
                                <h3 className="font-semibold">Décisions</h3>
                                <ul>
                                    {decisions.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                onClick={() => scrollToSection(`decision-${item.id}`)}
                                                className="cursor-pointer text-blue-500 text-sm dark:text-blue-200 hover:underline"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                        {/* Commentaires */}
                        {comments.length > 0 && (
                            <li>
                                <h3 className="font-semibold">Commentaires</h3>
                                <ul>
                                    {comments.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                onClick={() => scrollToSection(`comment-${item.id}`)}
                                                className="cursor-pointer text-blue-500 text-sm dark:text-blue-200 hover:underline"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-3 dark:bg-gray-800 p-6 rounded shadow overflow-y-auto">
                    <div className="text-lg leading-relaxed">
                        {/* Legislation Title */}
                        <h1 className="text-3xl font-bold mb-4" id="legislation">{legislationData.title}</h1>

                        {/* Dates */}
                        <div className="mb-6">
                            <p><strong>Code: </strong>{legislationData.code}</p>
                            <p><strong>Date d'entrée en vigueur: </strong>{legislationData.date_entree}</p>
                            <p><strong>Date de modification: </strong>{legislationData.date_modif}</p>
                        </div>

                        {/* Législation Content */}
                        <div>{legislationData.content}</div>

                        {/* Sections Liées */}
                        {related.length > 0 && (
                            <div className="my-8">
                                <h2 className="text-2xl font-bold" id="related">Sections Liées</h2>
                                {related.map((item) => (
                                    <div key={item.id} id={`related-${item.id}`} className="mb-6">
                                        {item.post_type === "article" ? (
                                            // Si le post_type est 'article', rendre le titre comme un lien
                                            <h3 className="text-xl font-semibold">
                                                <a href={`/dashboard/article/${item.id}`} className="text-blue-500 hover:underline">
                                                    {item.title}
                                                </a>
                                            </h3>
                                        ) : (
                                            // Sinon, afficher simplement le titre
                                            <h3 className="text-xl font-semibold">{item.title}</h3>
                                        )}
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}


                        {/* Décisions */}
                        {decisions.length > 0 && (
                            <div className="my-8">
                                <h2 className="text-2xl font-bold" id="decisions">Décisions</h2>
                                {decisions.map((item) => (
                                    <div key={item.id} id={`decision-${item.id}`} className="mb-6">
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Commentaires */}
                        {comments.length > 0 && (
                            <div className="my-8">
                                <h2 className="text-2xl font-bold" id="comments">Commentaires</h2>
                                {comments.map((item) => (
                                    <div key={item.id} id={`comment-${item.id}`} className="mb-6">
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LegislationPage;
