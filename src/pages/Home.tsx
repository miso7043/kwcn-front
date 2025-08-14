

import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `url('/imgs/bgs/514343-PI8QLX-189_w3000-1.webp') center center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        py: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('home.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {t('home.welcome')}
        </Typography>
      </Container>
    </Box>
  );
};


export default Home;
