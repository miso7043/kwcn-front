import React from 'react';
import type { ReactNode } from 'react';

interface ParallaxProps {
  bgImage: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
}

const Parallax: React.FC<ParallaxProps> = ({
  bgImage,
  children,
  className = '',
  overlayClassName = 'bg-black/60',
  contentClassName = 'container mx-auto px-4 text-center',
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* 배경 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className={`absolute inset-0 ${overlayClassName}`}></div>
      </div>
      {/* 컨텐츠 */}
      <div className={`relative z-10 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Parallax;