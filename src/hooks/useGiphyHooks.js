import { useState, useEffect } from "react";

const endpoints = {
    TRENDING: 'https://api.giphy.com/v1/gifs/trending',
    SEARCH: 'https://api.giphy.com/v1/gifs/search',
}

export default function useGiphyHooks() {
    const [gifs, setGifs] = useState([]);

    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null)

    const [page, setPage] = useState(1);
    const nextPage = () => setPage(page+1);
    const prevPage = () => setPage(page-1);

    function makeURL({ q = ''}) {
        const API_KEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';

        const p = new URLSearchParams();
        p.append('offset', (page-1) * 15);
        p.append('limit', 15);
        p.append('api_key', API_KEY);
        p.append('q', q);
        
        return (q == '' ? endpoints.TRENDING : endpoints.SEARCH) + '?' + p.toString();
    }

    useEffect(searchGiphy, [page, setPage])

    async function searchGiphy(q = '') {
        setErr(null);
        setLoading(true);
        
        try {
            const url = makeURL({q});
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setGifs(data.data)

        } catch (e) {
            setErr('Something went wrong. Please make sure that you have connected to internet');
        }

        setLoading(false)
    }

    const getTrending = () => searchGiphy();

    return {
        // search based on url
        gifs,
        getTrending,
        searchGiphy,

        // pagination
        page, 
        setPage,
        prevPage,
        nextPage,

        // state
        loading,
        err,
    }
}