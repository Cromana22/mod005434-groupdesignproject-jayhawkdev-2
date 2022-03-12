import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [response, setResponse] = useState(null)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => 
    {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const doFetch = async () => 
        {
            try
            {
                const res = await fetch(url, {method: 'GET', credentials: 'include'});   
                const json = await res.json();
                if (!signal.aborted) { setResponse(json); }
            } 
            catch (e)
            {
                if (!signal.aborted) { setError(e.message); }
            } 
            finally
            {
                if (!signal.aborted) { setLoading(false); }
            }
        };

        doFetch();
        return () => { abortController.abort(); };
    }, []);
    
    return { response, error, loading };
};

export default useFetch;