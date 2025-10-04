import React from 'react';
import './Card.scss';

export interface CardData {
  id: string;
  title: string;
  description: string;
  image?: string;
  content?: React.ReactNode;
  info?: string; // 추가 정보 텍스트
  contentColor?: string; // 정보 텍스트 색상
}

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}

interface CardCarouselProps {
  cards: CardData[];
  title?: string;
  titleColor?: string; // 제목 색상 (기본값: text-white)
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  visibleCount?: number; // 보여줄 카드 개수 (기본값: 3, 화면 크기에 따라 자동 조정됨)
}

// 개별 Card 컴포넌트
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  return (
    <div className={`card card--${variant} ${className}`}>
      {children}
    </div>
  );
};

// CSS 전용 Card Carousel/Swiper 컴포넌트
export const CardCarousel: React.FC<CardCarouselProps> = ({
  cards,
  title,
  titleColor = 'text-white',
  showArrows = true,
  showDots = true,
  className = '',
  visibleCount = 3
}) => {
  const carouselId = React.useMemo(() => `carousel-${Math.random().toString(36).substr(2, 9)}`, []);
  
  // 현재 스크롤 위치 상태
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  // 카드 너비와 마진을 고려한 계산
  const cardWidth = 320; // 기본 카드 너비 (px)
  const cardMargin = 24; // 카드 간격 (gap: 1.5rem = 24px)
  const scrollPadding = 48; // 스크롤 영역 패딩: 24px * 2 (좌우)
  
  // 화면 크기 상태
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 카드 애니메이션을 위한 Intersection Observer
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 카드가 뷰포트에 들어오면 애니메이션 클래스 추가
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1, // 10% 보이면 트리거
        rootMargin: '50px' // 50px 미리 트리거
      }
    );

    // 모든 카드 아이템을 관찰 대상에 추가
    const cardItems = document.querySelectorAll(`#${carouselId} .card-carousel__item`);
    cardItems.forEach((item) => observer.observe(item));

    return () => {
      cardItems.forEach((item) => observer.unobserve(item));
    };
  }, [carouselId, cards.length]); // cards.length 변경시 재실행

  // 실제 컨테이너 폭에 맞는 카드 개수 계산
  const getOptimalVisibleCount = React.useCallback(() => {
    // 캐러셀 전체 패딩 계산 (CSS 파일과 동일하게)
    let carouselPadding = 160; // 기본: 80px * 2 (좌우)
    
    if (windowWidth <= 480) {
      carouselPadding = 40; // 20px * 2
    } else if (windowWidth <= 767) {
      carouselPadding = 120; // 60px * 2
    }
    
    // 실제 사용 가능한 컨테이너 폭
    const availableWidth = windowWidth - carouselPadding - scrollPadding;
    
    // 요청된 카드 개수부터 시작해서 줄여가며 맞는 개수 찾기
    let optimalCount = Math.min(visibleCount, 4); // 최대 4개 제한
    
    while (optimalCount > 1) {
      // 해당 개수의 카드들이 필요로 하는 총 너비
      const requiredWidth = (cardWidth * optimalCount) + (cardMargin * (optimalCount - 1));
      
      if (requiredWidth <= availableWidth) {
        break; // 맞으면 이 개수 사용
      }
      
      optimalCount--; // 안 맞으면 개수 줄이기
    }
    
    return Math.max(1, optimalCount); // 최소 1개
  }, [windowWidth, visibleCount, cardWidth, cardMargin, scrollPadding]);

  // 실제 적용될 카드 개수
  const actualVisibleCount = getOptimalVisibleCount();
  
  // 컨테이너 너비 계산
  const totalContainerWidth = (cardWidth * actualVisibleCount) + (cardMargin * (actualVisibleCount - 1)) + scrollPadding;
  
  // 스크롤 함수들
  const scrollToPrevious = () => {
    const container = document.getElementById(carouselId);
    if (!container) return;
    
    const newIndex = Math.max(0, currentIndex - 1);
    const scrollAmount = (cardWidth + cardMargin) * newIndex;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    setCurrentIndex(newIndex);
  };
  
  const scrollToNext = () => {
    const container = document.getElementById(carouselId);
    if (!container) return;
    
    const maxIndex = Math.max(0, cards.length - actualVisibleCount);
    
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    const scrollAmount = (cardWidth + cardMargin) * newIndex;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    setCurrentIndex(newIndex);
  };
  
  const scrollToIndex = (index: number) => {
    const container = document.getElementById(carouselId);
    if (!container) return;
    
    const scrollAmount = (cardWidth + cardMargin) * index;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  return (
    <div 
      className={`card-carousel ${className}`}
      style={{
        '--visible-count': actualVisibleCount,
        '--card-width': `${cardWidth}px`,
        '--card-margin': `${cardMargin}px`,
        '--container-width': `${totalContainerWidth}px`
      } as React.CSSProperties}
    >
      {title && <h2 className={`card-carousel__title ${titleColor}`}>{title}</h2>}
      
      <div className="card-carousel__container">
        {/* 스크롤 영역 */}
        <div 
          className="card-carousel__scroll"
          id={carouselId}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="card-carousel__item"
              id={`${carouselId}-item-${index}`}
              style={{
                '--item-index': index,
                '--total-items': cards.length,
                width: `${cardWidth}px`,
                flexShrink: 0,
                anchorName: `--card-${index}`
              } as React.CSSProperties}
            >
              <Card variant="elevated" className="card-carousel__card">
                {card.image && (
                  <div className="card__image">
                    <img src={card.image} alt={card.title} />
                  </div>
                )}
                <div className="card__content">
                  <h3 className="card__title">{card.title}</h3>
                  <p className={`card__description ${card.contentColor || 'text-gray-300'}`}>{card.description}</p>
                  {card.info && (
                    <p className={`text-sm ${card.contentColor || 'text-gray-300'} mb-2 card__info`}>
                      {card.info}
                    </p>
                  )}
                  {card.content && (
                    <div className="card__extra-content">
                      {card.content}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* 네비게이션 화살표 */}
        {showArrows && cards.length > 1 && (
          <>
            <button 
              className="card-carousel__arrow card-carousel__arrow--prev"
              onClick={scrollToPrevious}
              disabled={currentIndex === 0}
              aria-label="Previous cards"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button 
              className="card-carousel__arrow card-carousel__arrow--next"
              onClick={scrollToNext}
              disabled={currentIndex >= Math.max(0, cards.length - actualVisibleCount)}
              aria-label="Next cards"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* 인디케이터 점들 */}
      {showDots && cards.length > 1 && (
        <div className="card-carousel__dots">
          {(() => {
            const maxIndex = Math.max(0, cards.length - actualVisibleCount);
            const dotCount = maxIndex + 1;
            
            return Array.from({ length: dotCount }, (_, index) => (
              <button
                key={index}
                className={`card-carousel__dot ${currentIndex === index ? 'card-carousel__dot--active' : ''}`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ));
          })()}
        </div>
      )}

      {/* CSS 앵커 기반 스크롤 버튼들 (선택사항) */}
      <div className="card-carousel__anchor-buttons" style={{ display: 'none' }}>
        {cards.map((_, index) => (
          <a
            key={index}
            href={`#${carouselId}-item-${index}`}
            className="card-carousel__anchor-button"
            aria-label={`Scroll to card ${index + 1}`}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

// 기본 내보내기는 개별 Card 컴포넌트
export default Card;
