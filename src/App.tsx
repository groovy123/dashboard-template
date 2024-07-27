import { useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import KeiAppBar from './components/KeiAppBar';
import KeiDrawer from './components/KeiDrawer';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
import KaimePage from './pages/KaimePage';
import JockeyPage from './pages/JockeyPage';
import SyutsubahyoPage from './pages/SyutsubahyoPage';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
      {'Copyright © '}
      {'XXX'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  // Dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const defaultTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <KeiAppBar 
          isOpen={open} toggleDrawer={toggleDrawer} 
          toggleDarkMode={toggleDarkMode} toggleDarkTheme={toggleDarkTheme} />

        <KeiDrawer 
          isOpen={open} toggleDrawer={toggleDrawer} />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            width: '100%',
          }}
        >
          <Toolbar />
          <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>

            <Routes>
              <Route path='/' element={<DashboardPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/kaime' element={<KaimePage />} />
              <Route path='/syutsubahyo' element={<SyutsubahyoPage />} />
              <Route path='/kisyulist' element={<JockeyPage />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>

            <Copyright />
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}