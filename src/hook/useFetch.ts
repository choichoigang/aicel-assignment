import { useEffect, useState } from "react";

function useFetch(url: string, options: RequestInit) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function resetFetchState() {
    setError(null);
    setResponse(null);
    setIsLoading(true);
  }

  useEffect(() => {
    async function fetchData() {
      resetFetchState();

      try {
        const res = await fetch(url, options);
        const json = await res.json();

        if (json.error) throw { message: json.error };

        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { response, error, isLoading };
}

export default useFetch;
