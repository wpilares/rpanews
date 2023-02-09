import { type ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
interface INews {
  title: string;
  summary: string;
}

export const HomePage = (): ReactElement => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(
        'https://api.newscatcherapi.com/v2/search',
        {
          params: {
            q: 'Bitcoin',
            lang: 'en',
            sort_by: 'relevancy',
            page: '1',
          },
          headers: {
            'x-api-key': 'pzflooiZkigZv3RHkvyQWg6cm9vbbEjkbqkIU4of_D8',
          },
        }
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
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
