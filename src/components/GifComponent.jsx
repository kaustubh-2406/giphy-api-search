import { Box, Typography } from '@mui/material';

import Masonry from '@mui/lab/Masonry';
import useGiphyHooks from '../hooks/useGiphyHooks.js'

import image from '../../assets/loading.gif'
import GiphCard from './GiphyCard.jsx';

export default function GifComponent() {
    const { gifs, loading, err } = useGiphyHooks();

    return (
        <main>
            <Box textAlign={'center'}>
              {loading ? <img src={image} width='150' />: 
              (<>
                {err && <Typography color='error' variant='h5'> {err} </Typography>} 
                {!err && <Masonry columns={{xs: 1, sm: 2, md: 3}} spacing={4}>
                  {gifs.map(gif => <GiphCard key={gif.id} gif={gif} />)}
                </Masonry>
                }
              </>)}
            </Box>
        </main>
    )
}