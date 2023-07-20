import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, Typography, createTheme } from "@mui/material";
import Tareas from "./components/Tareas";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#8b6d9c",
      },
      secondary:{
        main:'#494d7e'
      },
      warning:{
        main:'#f2d3ab'
      },
      info:{
        main:'#c69fa5'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body{
            background-color: #272744;
            color:#fbf5ef;
          }
        `,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="App">
        <Typography variant="h4" textAlign="left" mt={4}>
          App de Tareas
        </Typography>
        <Tareas/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
