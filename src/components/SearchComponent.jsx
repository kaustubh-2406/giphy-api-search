import { useEffect, useRef, useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField, IconButton, createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import useGiphyHooks from "../hooks/useGiphyHooks";
import BlackButton from "./BlackButton";

export default function SearchComponent() {
  const {searchGiphy} = useGiphyHooks();

  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput(e.target.value.trim());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchGiphy(input);
  }
  
  const inputRef = useRef();
  const setInputRef = e => inputRef.current = e
  const inputFocusHandler = e => {
    if (e.ctrlKey && e.key == 'k') {
      e.preventDefault()
      inputRef.current?.focus()
    } 
  }

  useEffect(()=>{
    window.addEventListener('keydown', inputFocusHandler)
    return () => window.removeEventListener('keydown', inputFocusHandler)
  }, [inputRef.current])

  return (
  <form onSubmit={handleSubmit} >
    <Box sx={{ display: 'flex' }} gap='0.125rem' alignItems='center' my='3rem'>
      <TextField
        fullWidth 
        variant='outlined'
        autoComplete='off'
        inputRef={setInputRef} 
        onChange={handleChange}
        label='Enter Search Term.' 
      />
      
      <Box sx={{display: {xs: 'block', md: 'none'}}} >
        <IconButton 
          type='submit' 
          variant='contained' 
          color='primary'
        ><SearchIcon/></IconButton>
      </Box>
      
      <Box sx={{ display: {xs: 'none', md: 'block'} }} >
        <BlackButton 
          style={{ height: 56 }} 
          endIcon={<SearchIcon />} 
          type='submit' 
          variant='contained'
        >Search</BlackButton>
      </Box>
    </Box>
  </form>
  )
}
