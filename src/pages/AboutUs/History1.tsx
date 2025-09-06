// import { Box, Typography, Container, Paper } from '@mui/material';
// import { useTranslation } from 'react-i18next';

// interface TimelineItem {
//   year: string;
//   title: string;
//   description: string;
// }

// const History = () => {
//   const { t, ready } = useTranslation('history');

//   // 번역이 아직 로드되지 않았을 경우 로딩 표시
//   if (!ready) {
//     return (
//       <Box
//         sx={{
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="h4">Loading...</Typography>
//       </Box>
//     );
//   }

//   // 타임라인 데이터를 안전하게 가져오기
//   const getTimelineData = (): TimelineItem[] => {
//     try {
//       const timelineData = t('timeline', { returnObjects: true });
//       return Array.isArray(timelineData) ? (timelineData as TimelineItem[]) : [];
//     } catch (error) {
//       console.error('Failed to load timeline data:', error);
//       return [];
//     }
//   };

//   const timelineItems = getTimelineData();

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         background: `url('/imgs/bgs/514343-PI8QLX-189_w3000-1.webp') center center/cover no-repeat`,
//         display: 'flex',
//         flexDirection: 'column',
//         py: 8,
//         position: 'relative',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'rgba(0, 0, 0, 0.5)',
//           zIndex: 1,
//         },
//       }}
//     >
//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 10 }}>
//         {/* 헤더 섹션 */}
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
//             {t('title')}
//           </Typography>
//           <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
//             {t('subtitle')}
//           </Typography>
//         </Box>

//         {/* 연혁 타임라인 */}
//         <Box
//           sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             gap: 4,
//           }}
//         >
//           {timelineItems.map((item: TimelineItem, index: number) => (
//             <Box
//               key={index}
//               sx={{
//                 flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
//                 minWidth: 0,
//               }}
//             >
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 3,
//                   height: '100%',
//                   background: 'rgba(255, 255, 255, 0.95)',
//                   backdropFilter: 'blur(10px)',
//                   borderRadius: 2,
//                 }}
//               >
//                 <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
//                   {item.year}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }}>
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
//                   {item.description}
//                 </Typography>
//               </Paper>
//             </Box>
//           ))}
//         </Box>

//         {/* 미션 및 비전 섹션 */}
//         <Box sx={{ mt: 8 }}>
//           <Box
//             sx={{
//               display: 'flex',
//               gap: 4,
//               flexDirection: { xs: 'column', md: 'row' },
//               alignItems: 'stretch',
//             }}
//           >
//             <Box sx={{ flex: 1 }}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 4,
//                   background: 'rgba(255, 255, 255, 0.95)',
//                   backdropFilter: 'blur(10px)',
//                   borderRadius: 2,
//                   textAlign: 'center',
//                   height: '100%',
//                 }}
//               >
//                 <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
//                   {t('mission.title')}
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
//                   {t('mission.description')}
//                 </Typography>
//               </Paper>
//             </Box>
//             <Box sx={{ flex: 1 }}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 4,
//                   background: 'rgba(255, 255, 255, 0.95)',
//                   backdropFilter: 'blur(10px)',
//                   borderRadius: 2,
//                   textAlign: 'center',
//                   height: '100%',
//                 }}
//               >
//                 <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
//                   {t('vision.title')}
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
//                   {t('vision.description')}
//                 </Typography>
//               </Paper>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default History;


import { useRef } from 'react';
import { SVGDrawingAnimation } from '../../components/common/SVGDrawingAnimation';
import type { AnimationStep } from '../../components/common/SVGDrawingAnimation';

const animationSteps: AnimationStep[] = [
  { anitime: 1, delay: 1, pos: 30 },
  { anitime: 1, delay: 0.5, pos: 60 },
  { anitime: 1, delay: 0, pos: 100 }
];

const svgPath = "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80";

const History = () => {
  const resetFnRef = useRef<(() => void) | null>(null);

  return (
    <div className="p-6 flex flex-col items-center mt-14">
      <SVGDrawingAnimation
        svgPath={svgPath}
        animationSteps={animationSteps}
        strokeWidth={1}
        width={1200}
        height={600}
        onAnimationRef={(resetFn) => {
          resetFnRef.current = resetFn;
        }}
      />
    </div>
  );
};

export default History;
