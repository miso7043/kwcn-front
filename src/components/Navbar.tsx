import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLanguage from '../hooks/useLanguage';
import LanguageSwitch from './common/Header/LanguageSwitch';
import './Navbar.css';
import { menuData, type MenuItem } from './common/Navigation/menuData';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const subMenuBackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (link: string | null) => {
    if (link) {
      setActiveMenu(link);
      setIsMobileMenuOpen(false); // 모바일에서 메뉴 클릭 시 메뉴 닫기
      // 페이지 이동 후 스크롤 맨 위로 이동
      setTimeout(() => {
        window.scrollTo({ top: 0}); //, behavior: 'smooth' });
      }, 0);
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false); // 로고 클릭 시 모바일 메뉴 닫기
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 드롭다운 호버 시 sub-menu-back 위치 계산
  const handleDropdownMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    const dropdown = event.currentTarget;
    const dropdownContent = dropdown.querySelector('.dropdown-content') as HTMLElement;
    const subMenuBack = subMenuBackRef.current;
    
    if (dropdownContent && subMenuBack) {
      const dropdownRect = dropdown.getBoundingClientRect();
      const navbarRect = dropdown.closest('.navbar')?.getBoundingClientRect();
      
      if (navbarRect) {
        // navbar를 기준으로 한 상대적 위치 계산
        const relativeLeft = dropdownRect.left - navbarRect.left;
        const relativeTop = dropdownRect.bottom - navbarRect.top;
        
        // 크기 측정을 위한 함수
        const measureAndApply = () => {
          // 드롭다운 콘텐츠를 일시적으로 표시하여 실제 크기 측정
          const originalDisplay = dropdownContent.style.display;
          const originalVisibility = dropdownContent.style.visibility;
          dropdownContent.style.display = 'block';
          dropdownContent.style.visibility = 'hidden'; // 보이지 않지만 크기는 측정 가능
          
          // 실제 드롭다운 콘텐츠의 크기 측정
          const contentRect = dropdownContent.getBoundingClientRect();
          const actualWidth = contentRect.width || 220; // 최소 너비 보장
          const actualHeight = contentRect.height || 50; // 최소 높이 보장
          
          // 원래 상태로 복원
          dropdownContent.style.display = originalDisplay;
          dropdownContent.style.visibility = originalVisibility;
          
          // sub-menu-back 위치와 크기 설정
          subMenuBack.style.display = 'block';
          subMenuBack.style.left = `${relativeLeft}px`;
          subMenuBack.style.top = `${relativeTop}px`;
          subMenuBack.style.width = `${actualWidth}px`; // 실제 너비
          subMenuBack.style.height = `${actualHeight}px`; // 실제 높이
        };
        
        // 즉시 측정 시도
        measureAndApply();
        
        // CSS 애니메이션이나 렌더링 지연을 고려한 재측정
        setTimeout(measureAndApply, 50);
      }
    }
  };

  const handleDropdownMouseLeave = () => {
    // 드롭다운에서 마우스가 나갈 때 약간의 지연을 두고 확인
    setTimeout(() => {
      const subMenuBack = subMenuBackRef.current;
      if (subMenuBack) {
        // 현재 hover 상태인 드롭다운이 있는지 확인
        const hoveredDropdown = document.querySelector('.dropdown:hover');
        
        // hover 상태인 드롭다운이 없으면 sub-back 숨김
        if (!hoveredDropdown) {
          subMenuBack.style.display = 'none';
        }
      }
    }, 100); // 마우스 이동 간의 지연을 고려
  };

  // navbar 전체에서 마우스가 나갈 때 모든 백그라운드 숨김
  const handleNavbarMouseLeave = () => {
    setTimeout(() => {
      const subMenuBack = subMenuBackRef.current;
      if (subMenuBack) {
        subMenuBack.style.display = 'none';
      }
    }, 150);
  };

  const renderMenuItem = (item: MenuItem, level: number = 0, isMobileMenu: boolean = false) => {
    const isActive = location.pathname === item.link;
    const hasChildren = item.children && item.children.length > 0;
    
    // 서브메뉴 중 하나가 활성화되어 있는지 확인
    const hasActiveChild = hasChildren && item.children?.some(child => 
      child.link === location.pathname || 
      (child.children && child.children.some(grandChild => grandChild.link === location.pathname))
    );

    if (hasChildren) {
      return (
        <li 
          key={item.nameKey} 
          className={`dropdown ${level > 0 ? 'dropdown-sub' : ''} ${isMobileMenu ? 'mobile-dropdown' : ''}`}
          onMouseEnter={!isMobileMenu ? handleDropdownMouseEnter : undefined}
          onMouseLeave={!isMobileMenu ? handleDropdownMouseLeave : undefined}
        >
          <span 
            className={`menu-item ${hasActiveChild ? 'active' : ''} ${activeMenu === item.link ? 'clicked' : ''}`}
          >
            {t(item.nameKey)}
          </span>
          <ul className={`${level > 0 ? 'dropdown-content-sub' : 'dropdown-content'} ${isMobileMenu ? 'mobile-dropdown-content' : ''}`}>
            {item.children?.map(child => renderMenuItem(child, level + 1, isMobileMenu))}
          </ul>
        </li>
      );
    }

    return (
      <li key={item.nameKey}>
        <Link 
          to={item.link!} 
          className={`menu-item ${isActive ? 'active' : ''} ${activeMenu === item.link ? 'clicked' : ''}`}
          onClick={() => {
            handleMenuClick(item.link);
          }}
        >
          {t(item.nameKey)}
        </Link>
      </li>
    );
  };

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${language === 'en' ? 'lang-en' : 'lang-ko'}`}
      onMouseLeave={handleNavbarMouseLeave}
    >
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <div className="logo-desktop"></div>
          <img 
            src="/imgs/logos/KCWN_logo.svg" 
            alt="KWCN Logo" 
            className="logo-mobile"
          />
        </Link>
        
        {/* 데스크톱 메뉴 - CSS로 제어 */}
        <div className="navbar-right">
          <ul className="navbar-list">
            {menuData.map(item => renderMenuItem(item))}
          </ul>
          <LanguageSwitch 
            isScrolled={isScrolled}
          />
        </div>
        
        {/* 모바일 햄버거 버튼 - CSS로 제어 */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      
      {/* 모바일 메뉴 - CSS로 제어 */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-list">
          {menuData.map(item => renderMenuItem(item, 0, true))}
        </ul>
        <div className="mobile-language-switch">
          <LanguageSwitch 
            isScrolled={true}
          />
        </div>
      </div>

      <div className="sub-back" ref={subMenuBackRef}></div>
    </nav>
  );
};

export default Navbar;
