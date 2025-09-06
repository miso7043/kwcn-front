import React, { useMemo } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HistoryImgGallery from '../ImageGallery/HistoryImgGallery';
import type { HistoryImage } from '../ImageGallery/HistoryImgGallery';
import type { TimelineItem } from '../../../pages/AboutUs/locales/historyType';

interface HistoryCardProps {
    open: boolean;
    onClose: () => void;
    item: TimelineItem | null;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ open, onClose, item }) => {
    // item.id에 해당하는 이미지들 찾기
    const galleryImages = useMemo(() => {
        if (!item) return [];
        
        // 가능한 이미지 파일들 목록 (실제 파일 시스템에 있는 것들 기반)
        const availableImages = [
            'event_001.webp', 
            'event_002.webp', 
            'event_003.webp', 
            'event_004.webp',
            'event_005.webp', 
            'event_006.webp', 
            'event_007.webp', 
            'event_008.webp',
            'event_009_1.webp', 'event_009_2.webp', 'event_009_3.webp', 'event_009_4.webp',
            'event_009_5.webp', 'event_009_6.webp', 'event_009_7.webp', 'event_009_8.webp',
            'event_009_9.webp', 'event_009_10.webp', 'event_009_11.webp', 'event_009_12.webp',
            'event_009_13.webp', 'event_009_14.webp', 'event_009_15.webp', 'event_009_16.webp',
            'event_009_17.webp', 'event_009_18.webp', 'event_009_19.webp',
            'event_010.webp', 
            'event_011.webp', 
            'event_012.webp', 
            'event_013.webp',
            'event_014.webp', 
            'event_015.webp', 
            'event_016.webp', 
            'event_017.webp',
            'event_018_1.webp', 'event_018_2.webp', 'event_018_3.webp', 'event_018_4.webp',
            'event_018_5.webp', 'event_018_6.webp', 'event_018_7.webp', 'event_018_8.webp',
            'event_019.webp'
        ];

        // item.id와 일치하는 이미지들 필터링
        const matchingImages = availableImages.filter(filename => {
            // 파일명에서 확장자를 제거하고 item.id와 비교
            const baseName = filename.replace('.webp', '');
            // exact match 또는 prefix match (예: event_009와 event_009_1)
            return baseName === item.id || baseName.startsWith(item.id + '_');
        });

        // HistoryImage 형태로 변환
        return matchingImages.map((filename, index) => ({
            src: `/imgs/history/${filename}`,
            alt: `${item.title} 이미지 ${index + 1}`,
            title: filename.includes('_') ? `${item.title} - ${index + 1}` : item.title
        }));
    }, [item]);

    if (!item) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.98), rgba(51, 65, 85, 0.95))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: `
            0 20px 60px rgba(0, 0, 0, 0.3),
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
                }
            }}
        >
            <DialogTitle
                sx={{
                    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    position: 'relative',
                    pr: 6
                }}
            >
                {item.title}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 4 }}>
                {/* 이미지 갤러리 */}
                {galleryImages.length > 0 && (
                    <Box sx={{ my: 2 }}>
                        <HistoryImgGallery images={galleryImages} />
                    </Box>
                )}

                {/* 시간 배지 */}
                <Box sx={{ mb: 3 }}>
                    <Box sx={{
                        display: 'inline-flex',
                        px: 3,
                        py: 1,
                        borderRadius: 20,
                        background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.15), rgba(21, 128, 61, 0.15))',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        mt: 2
                    }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: '#22c55e',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                            }}
                        >
                            {item.time}
                        </Typography>
                    </Box>
                </Box>

                {/* 장소 정보 */}
                {item.place && (
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            px: 2,
                            py: 0.8,
                            borderRadius: 12,
                            background: 'linear-gradient(90deg, rgba(79, 172, 254, 0.15), rgba(0, 242, 254, 0.15))',
                            border: '1px solid rgba(79, 172, 254, 0.2)'
                        }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    color: '#4facfe',
                                    letterSpacing: '0.3px'
                                }}
                            >
                                📍 {item.place}
                            </Typography>
                        </Box>
                    </Box>
                )}

                {/* 내용 - description 배열 */}
                {item.description && item.description.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                        {item.description.map((desc, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={{
                                    color: '#e2e8f0',
                                    lineHeight: 1.7,
                                    fontSize: '1.1rem',
                                    mb: index < item.description.length - 1 ? 2 : 0,
                                    //   textAlign: 'justify'
                                }}
                            >
                                {desc}
                            </Typography>
                        ))}
                    </Box>
                )}

                {/* 하단 장식 라인 */}
                <Box sx={{
                    mt: 4,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
                    borderRadius: 1
                }} />
            </DialogContent>
        </Dialog>
    );
};

export default HistoryCard;
