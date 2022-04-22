import { Box } from '@mui/material';

import SearchComponent from './SearchComponent.jsx';
import PaginationComponent from './Pagination.jsx';
import GifComponent from './GifComponent.jsx';

function App() {

  return (
    <>
      <Box sx={{ borderRadius: '16px' }} padding='2rem 2rem' margin='2rem auto' width='90%' bgcolor='white' rounded='sm'>
      <h2 style={{ textAlign: 'center' }}>GIPHY Search</h2> 
        <SearchComponent />
        <GifComponent />
        <PaginationComponent />
      </Box>
    </>
  )
}

export default App
