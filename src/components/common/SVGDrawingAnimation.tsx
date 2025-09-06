import React, { useState, useEffect, useRef } from 'react';

export interface AnimationStep {
  anitime: number; // 애니메이션 지속 시간 (초)
  delay: number;   // 다음 단계까지 멈춤 시간 (초)
  pos: number;     // 그릴 위치 퍼센트 (0-100)
}

export interface SVGDrawingAnimationProps {
  svgPath: string;
  animationSteps: AnimationStep[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  gradient?: {
    id: string;
    stops: Array<{
      offset: number;
      color: string;
    }>;
  };
  onAnimationRef?: (resetFn: () => void) => void;
  className?: string;
}

export const SVGDrawingAnimation: React.FC<SVGDrawingAnimationProps> = ({
  svgPath,
  animationSteps,
  width = 1200,
  height = 600,
  strokeWidth = 10,
  gradient = {
    id: 'paint0_linear_2019_5',
    stops: [
      { offset: 0, color: '#164311' },
      { offset: 1, color: '#072730' }
    ]
  },
  onAnimationRef,
  className = ''
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [viewBox, setViewBox] = useState('0 0 1200 600'); // 기본 viewBox

  // SVG 경로의 총 길이 및 경로 크기 계산
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);

      // 경로의 경계 상자를 계산하여 viewBox 설정
      const bbox = pathRef.current.getBBox();
      setViewBox(`${bbox.x - strokeWidth} ${bbox.y - strokeWidth} ${bbox.width + strokeWidth * 2} ${bbox.height + strokeWidth * 2}`);
    }
  }, [svgPath, strokeWidth]);

  // 애니메이션 시작 함수
  const startAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentProgress(0);

    let currentStepIndex = 0;

    const executeStep = () => {
      if (currentStepIndex >= animationSteps.length) {
        setIsAnimating(false);
        return;
      }

      const step = animationSteps[currentStepIndex];
      const startProgress = currentStepIndex > 0
        ? animationSteps[currentStepIndex - 1].pos
        : 0;

      // 애니메이션 실행
      const startTime = Date.now();
      const animateProgress = () => {
        const elapsed = (Date.now() - startTime) / 1000; // 초 단위
        const progress = Math.min(elapsed / step.anitime, 1);

        const currentPos = startProgress + (step.pos - startProgress) * progress;
        setCurrentProgress(currentPos);

        if (progress < 1) {
          requestAnimationFrame(animateProgress);
        } else {
          // 애니메이션 완료 후 지연 시간
          if (step.delay > 0) {
            setTimeout(() => {
              currentStepIndex++;
              executeStep();
            }, step.delay * 1000);
          } else {
            currentStepIndex++;
            executeStep();
          }
        }
      };

      requestAnimationFrame(animateProgress);
    };

    executeStep();
  };

  // 애니메이션 리셋 함수
  const resetAnimation = () => {
    setIsAnimating(false);
    setCurrentProgress(0);
  };

  // 컴포넌트 마운트 시 자동으로 애니메이션 시작
  useEffect(() => {
    if (pathLength > 0) {
      const timer = setTimeout(() => {
        startAnimation();
      }, 100); // 100ms 후 시작 (렌더링 완료 후)

      return () => clearTimeout(timer);
    }
  }, [pathLength]);

  // 외부에서 resetAnimation 함수를 사용할 수 있도록 ref 전달
  useEffect(() => {
    // 컴포넌트가 렌더링되었는지 확인
    if (onAnimationRef) {
      onAnimationRef(resetAnimation);
    }
  }, [onAnimationRef]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full h-auto"
      >
        <defs>
          <linearGradient
            id={gradient.id}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            {gradient.stops.map((stop, index) => (
              <stop
                key={index}
                offset={stop.offset}
                stopColor={stop.color}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={svgPath}
          stroke={`url(#${gradient.id})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength - (pathLength * currentProgress / 100),
            transition: 'none'
          }}
        />
      </svg>
    </div>
  );
};

// // 사용 예제 컴포넌트
// const App: React.FC = () => {
//   const svgPath = "M7.00001 5.99989C-17 4.39989 219 114 583 114C947 114 1203 5.99989 1203 5.99989";
  
//   const animationSteps: AnimationStep[] = [
//     { anitime: 1, delay: 1.5, pos: 30 },
//     { anitime: 1, delay: 2, pos: 50 },
//     { anitime: 1, delay: 1.5, pos: 75 },
//     { anitime: 1, delay: 0, pos: 100 }
//   ];

//   // 외부에서 resetAnimation을 호출할 수 있는 참조 저장
//   let resetAnimationRef: (() => void) | null = null;

//   const handleAnimationRef = (resetFn: () => void) => {
//     resetAnimationRef = resetFn;
//   };

//   // 예시: 3초 후 애니메이션 리셋 (실제 사용시에는 필요에 따라 호출)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (resetAnimationRef) {
//         resetAnimationRef();
//       }
//     }, 10000); // 10초 후 리셋

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <SVGDrawingAnimation 
//         svgPath={svgPath}
//         animationSteps={animationSteps}
//         onAnimationRef={handleAnimationRef}
//       />
//     </div>
//   );
// };

// export default App;