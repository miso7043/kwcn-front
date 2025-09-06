// const Finance = () => (
//   <div style={{ 
//     backgroundColor: '#000000', 
//     color: 'white', 
//     minHeight: '100vh', 
//     padding: '2rem' 
//   }}>
//     <h1>재정 기록</h1>
//     <p>KWCN의 재정 기록을 소개합니다.</p>
//   </div>
// );

// export default Finance;

import { getSnakePathInfo } from "../../components/common/CurveSvg";

const { path, viewBox, width, height } = getSnakePathInfo(4);

const Finance = () => (
  <div className="flex items-center justify-center min-h-screen">
    <svg width={width} height={height} viewBox={viewBox}>
      <defs>
        <linearGradient id="paint0_linear_2024_102" x1="0" y1="0" x2={width} y2={height} gradientUnits="userSpaceOnUse">
          <stop stopColor="#164311" />
          <stop offset="1" stopColor="#072730" />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke="url(#paint0_linear_2024_102)"
        strokeWidth={5}
        strokeLinecap="round" // 선 끝을 둥글게 설정
      />
    </svg>
  </div>
);

export default Finance;