import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const History = () => {
  const { t, ready } = useTranslation('history');

  // 번역이 아직 로드되지 않았을 경우 로딩 표시
  if (!ready) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  // 타임라인 데이터를 안전하게 가져오기
  const getTimelineData = (): TimelineItem[] => {
    try {
      const timelineData = t('timeline', { returnObjects: true });
      return Array.isArray(timelineData) ? (timelineData as TimelineItem[]) : [];
    } catch (error) {
      console.error('Failed to load timeline data:', error);
      return [];
    }
  };

  const timelineItems = getTimelineData();

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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 10 }}>
        {/* 헤더 섹션 */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            {t('title')}
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            {t('subtitle')}
          </Typography>
        </Box>

        {/* 연혁 타임라인 */}
        <Grid container spacing={4}>
          {timelineItems.map((item: TimelineItem, index: number) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  {item.year}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* 미션 및 비전 섹션 */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  {t('mission.title')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {t('mission.description')}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  {t('vision.title')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {t('vision.description')}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default History;
