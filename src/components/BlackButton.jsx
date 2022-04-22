import { Button, TextField, IconButton, createTheme, ThemeProvider } from "@mui/material";

const { palette } = createTheme();
const {augmentColor} = palette;
const createColor = mainClr => augmentColor({
  color: { main: mainClr }
})

const theme = createTheme({
  palette: {
    dark: createColor('#000')
  }
})

export default function BlackButton({children, ...other}) {
    return (
        <ThemeProvider theme={theme}>
            <Button color='dark' {...other}>{children}</Button>
        </ThemeProvider>
    )
}
