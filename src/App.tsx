import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './i18n'; // i18n 초기화

import Navbar from './components/Navbar';
import Footer from './components/common/Footer/Footer';
import AppRoutes from './routes/AppRoutes';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#f50057' },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Navbar />
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          width: '100vw',
          bgcolor: 'background.default',
          px: 0,
        }}
      >
        <Container maxWidth={false} disableGutters sx={{ px: 0 }}>
          <AppRoutes />
        </Container>
      </Box>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
