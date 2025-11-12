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
    <div>
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/history/historyBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            HISTORY
          </h1>
        </div>
      </div>

      <Box
        sx={{
          minHeight: '100vh',
          background: `url('/imgs/history/v805-kul-14.webp') center center/cover no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(241, 240, 247, 0.2) 0%, rgba(112, 125, 72, 0.7) 50%, rgba(241, 240, 247, 0.2) 100%)',
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
    </div>
  );
};

export default History;

