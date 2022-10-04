import { useState, useEffect} from 'react';

export default function useFetch(url) {
    
    //const cache = useRef({}); -- this is for APIS with limited request numbers
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    
    useEffect(() => {
        //if (!url) return; //nem biztos, hogy kell

        const fetchData = async () => {
            try {
                setStatus('fetching');
 
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setStatus('fetched');
                console.log('fetch done')
                
            } catch (error){
                console.log("error", error)
            }
        };

        fetchData();


    }, [url])
    
    return (status, data)
}
