
import React from 'react';
import axios from 'axios';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T = unknown>(url: string): UseFetchResult<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    axios<T>(url)
      .then((res) => {
          setData(res.data)
          setLoading(false)
      })
      .catch((err) => {
          setError(err.message);
          setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}