import { Box, Container, Typography, Paper } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import HistoryCard from "../../components/ui/Card/HistoryCard";
import type { TimelineItem } from './locales/historyType';

interface HistoryMobileProps {
  historyText: {
    timeline: TimelineItem[];
  };
}

const HistoryMobile: React.FC<HistoryMobileProps> = ({ historyText }) => {
  const timelineItems: TimelineItem[] = historyText.timeline;
  const timelineCount: number = timelineItems.length;

  // ====== 상단 변수 선언 ======
  const timelineBoxGap = 150; // 타임라인 아이템 세로 간격(px)
  const timelineBoxMinWidth = 240;
  const timelineBoxMaxWidth = 400;
  const timelineBoxRadius = 3;
  const timelineAppearX = 30; // px, 등장 트랜스폼 거리

  // SVG path info - 단순한 세로 직선
  const height = timelineBoxGap * timelineCount;

  // 각 타임라인 아이템의 등장 여부 상태
  const [visibleItems, setVisibleItems] = useState(Array(timelineCount).fill(false));
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 카드 열기/닫기 함수
  const handleCardOpen = (item: TimelineItem) => {
    setSelectedItem(item);
    setIsCardOpen(true);
  };

  const handleCardClose = () => {
    setIsCardOpen(false);
    setSelectedItem(null);
  };

  // Intersection Observer로 각 아이템이 화면에 보일 때 애니메이션 시작
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const timeouts: NodeJS.Timeout[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = Math.sqrt(index) * 200;

              const timeout = setTimeout(() => {
                setVisibleItems(prev => {
                  if (prev[index]) return prev; // 이미 보이면 무시
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
                
                // 아이콘 SVG 애니메이션 시작
                animateIconSVG(index);
              }, delay);

              timeouts.push(timeout);
            }
          });
        },
        {
          threshold: 0.1, // 10%만 보여도 트리거
          rootMargin: '10px' // 10px 미리 트리거
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [timelineCount]);

  // 아이콘 SVG 애니메이션 함수
  const animateIconSVG = (index: number) => {
    // 해당 인덱스의 아이콘 컨테이너 찾기
    const iconContainer = document.querySelector(`[data-icon-index="${index}"]`);
    if (!iconContainer) return;

    // SVG 요소 찾기 (img 태그를 SVG로 교체할 예정)
    const imgElement = iconContainer.querySelector('img');
    if (!imgElement) return;

    // history_point1.svg의 경로
    const svgPath = 'M1 12C1 12 20.0569 13.1886 26 12C31.9431 10.8114 33.7053 8.38428 37 3.99901C38.8245 1.57067 41.7288 0.999981 45 0.999981C50.5228 0.999981 55 5.47713 55 11C55 16.5228 50.5229 20 45 20C39 19 37.604 15.335 39 11C39.8465 8.37151 41.2386 7 44 7C46.7614 7 49 8.23858 49 11C49 13.7614 45 14.5 45 14.5';
    
    const gradientId = `paint0_linear_mobile_icon_${index}`;

    // 임시 SVG를 만들어서 실제 경로 길이 측정
    const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tempPath.setAttribute('d', svgPath);
    tempSvg.appendChild(tempPath);
    document.body.appendChild(tempSvg);
    
    const pathLength = tempPath.getTotalLength();
    document.body.removeChild(tempSvg);

    const svgHTML = `
      <svg width="56" height="21" viewBox="0 0 56 21" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <defs>
          <linearGradient id="${gradientId}" x1="1" y1="10.5" x2="55" y2="10.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#123B1A"/>
            <stop offset="1" stop-color="#FFE520"/>
          </linearGradient>
        </defs>
        <path 
          d="${svgPath}" 
          stroke="url(#${gradientId})" 
          stroke-width="2" 
          stroke-linecap="round"
          fill="none"
          stroke-dasharray="${pathLength}"
          stroke-dashoffset="${pathLength}"
          style="animation: drawMobileIconPath${index} 1s ease-in-out 0.1s forwards;"
        />
      </svg>
      <style>
        @keyframes drawMobileIconPath${index} {
          from {
            stroke-dashoffset: ${pathLength};
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      </style>
    `;

    imgElement.outerHTML = svgHTML;
  };

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 10, minHeight: height }}>
      {/* SVG 선 - 세로 직선 */}
      <Box sx={{ position: 'absolute', left: 0, top: 0, zIndex: 10, width: 60, height }}>
        <svg
          ref={svgRef}
          width={60}
          height={height}
          viewBox={`0 0 60 ${height}`}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            pointerEvents: 'none'
          }}
          filter="url(#glow)"
        >
          <defs>
            <linearGradient id="paint0_linear_2024_102" x1="0" y1="0" x2="0" y2={height} gradientUnits="userSpaceOnUse">
              <stop stopColor="#164311" />
              <stop offset="1" stopColor="#072730" />
            </linearGradient>
            {/* Glow 효과를 위한 필터 */}
            <filter id="glow" x="-20%" y="-20%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <line
            x1="20"
            y1="0"
            x2="20"
            y2={height}
            stroke="url(#paint0_linear_2024_102)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </Box>

      {/* 타임라인 아이템 */}
      <Box sx={{ position: 'relative', width: '100%', height, ml: 3, mt: 6, pl: 8 }}>
        {timelineItems.map((item, idx) => {
          const top = timelineBoxGap * idx;
          const show = visibleItems[idx];
          return (
            <Box
              key={item.id}
              ref={(el: HTMLDivElement | null) => {
                itemRefs.current[idx] = el;
              }}
              sx={{
                position: 'absolute',
                top,
                left: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                opacity: show ? 1 : 0,
                transform: show ? 'translateY(0)' : `translateX(-${timelineAppearX}px)`,
                transition: 'opacity 0.7s, transform 0.7s',
                zIndex: 3,
              }}
            >

              {/* SVG 아이콘 포인트 */}
              <Box 
                data-icon-index={idx}
                sx={{
                  position: 'absolute',
                  left: -20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 40,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 4,
                  opacity: show ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              >
                <img
                  src="/imgs/history/history_point1.svg"
                  alt="timeline-point"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>

              {/* 내용 박스 */}
              <Paper
                elevation={0}
                onClick={() => handleCardOpen(item)}
                sx={{
                  ml: 3,
                  minWidth: timelineBoxMinWidth,
                  maxWidth: timelineBoxMaxWidth,
                  borderRadius: timelineBoxRadius,
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.9))',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.1),
                    0 4px 16px rgba(0, 0, 0, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.6)
                  `,
                  '&:hover': {
                    transform: 'translateY(-3px) scale(1.02)',
                    boxShadow: `
                      0 12px 40px rgba(0, 0, 0, 0.15),
                      0 6px 20px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8)
                    `,
                  },
                  '&:active': {
                    transform: 'translateY(-1px) scale(1.01)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: idx % 4 === 0 ?
                      'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' :
                      idx % 4 === 1 ?
                        'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)' :
                        idx % 4 === 2 ?
                          'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)' :
                          'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
                    borderRadius: '3px 3px 0 0'
                  },
                  '&::after': {
                    content: '"탭하여 상세보기"',
                    position: 'absolute',
                    bottom: 6,
                    right: 12,
                    fontSize: '0.7rem',
                    color: 'rgba(255, 255, 255, 0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover::after': {
                    opacity: 1,
                  }
                }}
              >
                {/* 메인 컨텐츠 영역 */}
                <Box sx={{ p: 2.5, position: 'relative' }}>
                  {/* 배경 장식 원 */}
                  <Box sx={{
                    position: 'absolute',
                    top: -15,
                    right: -15,
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: idx % 4 === 0 ?
                      'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))' :
                      idx % 4 === 1 ?
                        'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1))' :
                        idx % 4 === 2 ?
                          'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))' :
                          'linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.1))',
                    zIndex: 0
                  }} />

                  {/* 제목 */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: '#fff',
                      fontSize: '1rem',
                      lineHeight: 1.3,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* 시간 배지 */}
                  <Box sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <Box sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 12,
                      background: idx % 4 === 0 ?
                        'linear-gradient(90deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))' :
                        idx % 4 === 1 ?
                          'linear-gradient(90deg, rgba(240, 147, 251, 0.15), rgba(245, 87, 108, 0.15))' :
                          idx % 4 === 2 ?
                            'linear-gradient(90deg, rgba(79, 172, 254, 0.15), rgba(0, 242, 254, 0.15))' :
                            'linear-gradient(90deg, rgba(67, 233, 123, 0.15), rgba(56, 249, 215, 0.15))',
                      border: `1px solid ${idx % 4 === 0 ? 'rgba(102, 126, 234, 0.2)' :
                          idx % 4 === 1 ? 'rgba(240, 147, 251, 0.2)' :
                            idx % 4 === 2 ? 'rgba(79, 172, 254, 0.2)' :
                              'rgba(67, 233, 123, 0.2)'
                        }`
                    }}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: '#e2e8f0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.3px'
                        }}
                      >
                        {item.time}
                      </Typography>
                    </Box>
                  </Box>

                  {/* 하단 장식 라인 */}
                  <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 16,
                    right: 16,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)'
                  }} />
                </Box>
              </Paper>
            </Box>
          );
        })}
      </Box>
      
      {/* History Card 팝업 */}
      <HistoryCard
        open={isCardOpen}
        onClose={handleCardClose}
        item={selectedItem}
      />
    </Container>
  );
};

export default HistoryMobile;
