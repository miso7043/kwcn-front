import { Box, Container, Typography, Paper } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import { getSnakePathInfo } from "../../components/common/CurveSvg";
import HistoryCard from "../../components/ui/Card/HistoryCard";
import type { TimelineItem } from './locales/historyType';

interface HistoryDesktopProps {
  historyText: {
    timeline: TimelineItem[];
  };
}

const HistoryDesktop: React.FC<HistoryDesktopProps> = ({ historyText }) => {
  const timelineItems: TimelineItem[] = historyText.timeline;
  const timelineCount: number = timelineItems.length;
  
  // ====== 상단 변수 선언 ======
  const timelineBoxGap = 180; // 타임라인 아이템 세로 간격(px)
  const timelineSideMargin = 50; // 좌우 마진(px)
  const timelineBoxWidth = { xs: '100%', sm: '60%' };
  const timelineIconWidth = 134;
  const timelineIconDropShadow = '0 0 8px #fff8';
  const timelineBoxMinWidth = 260;
  const timelineBoxMaxWidth = 500;
  const timelineBoxRadius = 3;
  const timelineAppearX = 60; // px, 등장 트랜스폼 거리

  // SVG path info, height는 boxGap * timelineCount
  const { path, width } = getSnakePathInfo(timelineCount);
  const height = timelineBoxGap * timelineCount;

  // 각 타임라인 아이템의 등장 여부 상태
  const [visibleItems, setVisibleItems] = useState(Array(timelineCount).fill(false));
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLImageElement | null)[]>([]);

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

    // SVG 콘텐츠로 교체하고 애니메이션 적용
    const isLeft = index % 2 === 0;
    const svgPath = isLeft ? 
      'M135 12C135 12 35.9431 13.1886 30 12C24.0569 10.8114 22.2947 8.38428 19 3.99901C17.1755 1.57067 14.2712 0.999981 11 0.999981C5.47715 0.999981 1 5.47713 1 11C1 16.5228 5.47715 20 11 20C17 19 18.396 15.335 17 11C16.1535 8.37151 14.7614 7 12 7C9.23858 7 7 8.23858 7 11C7 13.7614 11 14.5 11 14.5' :
      'M1 12C1 12 100.057 13.1886 106 12C111.943 10.8114 113.705 8.38428 117 3.99901C118.824 1.57067 121.729 0.999981 125 0.999981C130.523 0.999981 135 5.47713 135 11C135 16.5228 130.523 20 125 20C119 19 117.604 15.335 119 11C119.846 8.37151 121.239 7 124 7C126.761 7 129 8.23858 129 11C129 13.7614 125 14.5 125 14.5';
    
    const gradientId = `paint0_linear_icon_${index}`;
    const gradientDirection = isLeft ? 'x1="135" y1="10.5" x2="1" y2="10.5"' : 'x1="1" y1="10.5" x2="135" y2="10.5"';

    // 임시 SVG를 만들어서 실제 경로 길이 측정
    const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tempPath.setAttribute('d', svgPath);
    tempSvg.appendChild(tempPath);
    document.body.appendChild(tempSvg);
    
    const pathLength = tempPath.getTotalLength();
    document.body.removeChild(tempSvg);

    const svgHTML = `
      <svg width="136" height="21" viewBox="0 0 136 21" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; filter: drop-shadow(0 0 8px #fff8);">
        <defs>
          <linearGradient id="${gradientId}" ${gradientDirection} gradientUnits="userSpaceOnUse">
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
          style="animation: drawIconPath${index} 2s ease-in-out 0.5s forwards;"
        />
      </svg>
      <style>
        @keyframes drawIconPath${index} {
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

  // 아이콘 경로
  const rightIcon = '/imgs/history/history_point2_2.svg';
  const leftIcon = '/imgs/history/history_point2_1.svg';

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 10, minHeight: height }}>
      {/* SVG 선 */}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', zIndex: 2, pointerEvents: 'none' }}
      >
        <defs>
          <linearGradient id="paint0_linear_2024_102" x1="0" y1="0" x2={width} y2={height} gradientUnits="userSpaceOnUse">
            <stop stopColor="#164311" />
            <stop offset="1" stopColor="#072730" />
          </linearGradient>
          {/* Glow 효과를 위한 필터 */}
          <filter id="glow" x="-20%" y="-20%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d={path}
          fill="none"
          stroke="url(#paint0_linear_2024_102)"
          strokeWidth={5}
          strokeLinecap="round"
          filter="url(#glow)"
        />
      </svg>

      {/* 타임라인 아이템 */}
      <Box sx={{ position: 'relative', width: '100%', height, mt: 6 }}>
        {timelineItems.map((item, idx) => {
          const isLeft = idx % 2 === 0;
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
                left: isLeft ? 0 : 'auto',
                right: isLeft ? 'auto' : 0,
                width: timelineBoxWidth,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: isLeft ? 'flex-end' : 'flex-start',
                opacity: show ? 1 : 0,
                transform: show
                  ? 'translateY(0)'
                  : isLeft
                    ? `translateX(-${timelineAppearX}px)`
                    : `translateX(${timelineAppearX}px)`,
                transition: 'opacity 0.7s, transform 0.7s',
                zIndex: 3,
                marginRight: isLeft ? `${timelineSideMargin}px` : 0,
                marginLeft: !isLeft ? `${timelineSideMargin}px` : 0,
              }}
            >
              {/* 좌측 아이콘 (우측 박스일 때만) */}
              {!isLeft && (
                <Box 
                  data-icon-index={idx}
                  sx={{ 
                    width: timelineIconWidth, 
                    minWidth: timelineIconWidth, 
                    mx: 2, 
                    display: { xs: 'none', sm: 'block' },
                    alignSelf: 'flex-start',
                    mt: '2.5rem',
                    opacity: show ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'
                  }}
                >
                  <img
                    src={rightIcon}
                    alt="point-right"
                    style={{ width: '100%', height: 'auto', filter: `drop-shadow(${timelineIconDropShadow})` }}
                  />
                </Box>
              )}
              
              {/* 내용 박스 */}
              <Paper 
                elevation={0} 
                onClick={() => handleCardOpen(item)}
                sx={{
                  mx: 5,
                  minWidth: timelineBoxMinWidth,
                  maxWidth: timelineBoxMaxWidth,
                  borderRadius: timelineBoxRadius,
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.9))',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.1),
                    0 4px 16px rgba(0, 0, 0, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.6)
                  `,
                  '&:hover': {
                    transform: 'translateY(-4px) scale(1.02)',
                    boxShadow: `
                      0 16px 50px rgba(0, 0, 0, 0.2),
                      0 8px 25px rgba(0, 0, 0, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8)
                    `,
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:active': {
                    transform: 'translateY(-2px) scale(1.01)',
                  },
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
                    borderRadius: '16px 16px 0 0'
                  },
                  '&::after': {
                    content: '"클릭하여 상세보기"',
                    position: 'absolute',
                    bottom: 8,
                    right: 16,
                    fontSize: '0.75rem',
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
                <Box sx={{ p: 3.5, position: 'relative' }}>
                  {/* 배경 장식 원 */}
                  <Box sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 80,
                    height: 80,
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
                      mb: 1.5,
                      color: '#fff',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
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
                      px: 2,
                      py: 0.8,
                      borderRadius: 20,
                      background: idx % 4 === 0 ? 
                        'linear-gradient(90deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))' :
                        idx % 4 === 1 ?
                        'linear-gradient(90deg, rgba(240, 147, 251, 0.15), rgba(245, 87, 108, 0.15))' :
                        idx % 4 === 2 ?
                        'linear-gradient(90deg, rgba(79, 172, 254, 0.15), rgba(0, 242, 254, 0.15))' :
                        'linear-gradient(90deg, rgba(67, 233, 123, 0.15), rgba(56, 249, 215, 0.15))',
                      border: `1px solid ${
                        idx % 4 === 0 ? 'rgba(102, 126, 234, 0.2)' :
                        idx % 4 === 1 ? 'rgba(240, 147, 251, 0.2)' :
                        idx % 4 === 2 ? 'rgba(79, 172, 254, 0.2)' :
                        'rgba(67, 233, 123, 0.2)'
                      }`
                    }}>
                      <Typography 
                        variant="caption" 
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#e2e8f0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
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
                    left: 24,
                    right: 24,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)'
                  }} />
                </Box>
              </Paper>
              
              {/* 우측 아이콘 (좌측 박스일 때만) */}
              {isLeft && (
                <Box 
                  data-icon-index={idx}
                  sx={{ 
                    width: timelineIconWidth, 
                    minWidth: timelineIconWidth, 
                    mx: 2, 
                    display: { xs: 'none', sm: 'block' },
                    alignSelf: 'flex-start',
                    mt: '2.5rem',
                    opacity: show ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'
                  }}
                >
                  <img
                    src={leftIcon}
                    alt="point-left"
                    style={{ width: '100%', height: 'auto', filter: `drop-shadow(${timelineIconDropShadow})` }}
                  />
                </Box>
              )}
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

export default HistoryDesktop;
