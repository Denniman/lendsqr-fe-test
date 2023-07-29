import { useState, useEffect } from "react";
import { IUser } from "@app/models";

export const useFetch = (url: string) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { error, data, isLoading };
};
