import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import { historyEn as history_en } from './locales/history_en';
import { historyKo as history_ko } from './locales/history_ko';
import HistoryDesktop from './HistoryDesktop';
import HistoryMobile from './HistoryMobile';

const History = () => {
  const { language } = useLanguage();
  const historyText = React.useMemo(() => (language === 'ko' ? history_ko : history_en), [language]);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `url('/imgs/bgs/514343-PI8QLX-189_w3000-1.webp') center center/cover no-repeat`,
        display: 'flex',
        flexDirection: 'column',
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      {isMobile ? (
        <HistoryMobile historyText={historyText} />
      ) : (
        <HistoryDesktop historyText={historyText} />
      )}
    </Box>
  );
};

export default History;

