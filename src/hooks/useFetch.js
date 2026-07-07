import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => { 
        if (!url || url.trim() === "") {
            setError("URL is required");
            setLoading(false);
            return;
        }
        console.log("Fetching:", url);
        const fetchData = async () => {
            try {
                setError(null);
                setLoading(true);
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (error) {
                setError(error);
                setLoading(false);
            } finally {
                setLoading(false);
                
            }
        }
        fetchData();

    },[url]
    )
    return { data, loading, error };
}

export default useFetch
