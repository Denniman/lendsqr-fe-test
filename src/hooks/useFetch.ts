import { useState, useEffect } from "react";
import { IUser } from "@app/models";

export const useFetch = (url: string) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { error, data, isLoading };
};
