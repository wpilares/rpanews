import { type ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
interface INews {
  description: string;
}

export const HomePage = (): ReactElement => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(
        'http://api.mediastack.com/v1/news?access_key=45ec65b7767d89b885ef44fac437db6a&country=us'
      );
      setNews(response.data.data);
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

  return <> {loading ? <p></p> : <>{news[0].description}</>}</>;
};
