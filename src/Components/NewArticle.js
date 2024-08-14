import React, { useEffect, useState } from 'react';
import '../Assets/NewsArticle.css';
import axios from 'axios';

const NewArticle = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news', {
                    params: {
                        apikey: 'pub_506421a56e996e41e03ec70e92f6d32dd94bf', // Your API key
                        category: 'entertainment',  // Fetching entertainment news
                        language: 'en'          // Specify the language
                    },
                });

                if (response.data && response.data.results) {
                    setArticles(response.data.results);
                } else {
                    console.error('Invalid API response:', response);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="container1">
            <main>
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <section className="news-section" key={index}>
                            <article>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                                <p>Source: {article.source_id}</p>
                                <p>Published: {new Date(article.pubDate).toLocaleDateString()}</p>
                            </article>
                            {article.image_url && (
                                <div>
                                    <img src={article.image_url} alt={article.title} className="main-image" />
                                </div>
                            )}
                        </section>
                    ))
                ) : (
                    <p>No articles available.</p>
                )}
            </main>
        </div>
    );
}

export default NewArticle;