import { type ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
interface INews {
  title: string;
  description: string;
}

export const HomePage = (): ReactElement => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=f8905f1c83fb4c43b8ba8eed4ad83c32'
      );
      setNews(response.data.articles);
      setLoading(false);
    };
    fetchData()
      .then(() => {
        console.log('Successfully request');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(news[0]);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
