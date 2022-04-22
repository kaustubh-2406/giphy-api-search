import { Box } from '@mui/material';
import { useState } from 'react';

import SearchComponent from './SearchComponent.jsx';
import PaginationComponent from './Pagination.jsx';
import GifComponent from './GifComponent.jsx';
import useGiphyHooks from '../hooks/useGiphyHooks.js';

function App() {
  const [q, setQ] = useState('');
  const {
    gifs, 
    setGifs,
    searchGiphy,
    page, 
    setPage,
    nextPage,
    prevPage, 
    loading, 
    err
  } = useGiphyHooks()

  return (
    <>
      <Box sx={{ borderRadius: '16px' }} padding='2rem 2rem' margin='2rem auto' width='90%' bgcolor='white' rounded='sm'>
      <h2 style={{ textAlign: 'center' }}>GIPHY Search</h2> 
        <SearchComponent q={q} setQ={setQ} searchGiphy={searchGiphy} setGif={setGifs} />
        <GifComponent gifs={gifs} loading={loading} err={err} />
        <PaginationComponent 
           page={page} loading={loading} nextPage={nextPage} prevPage={prevPage} setPage={setPage}
        />
      </Box>
    </>
  )
}

export default App
