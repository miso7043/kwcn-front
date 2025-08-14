import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

interface MenuItem {
  nameKey: string;
  link: string | null;
  children?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    nameKey: "common:navigation.aboutUs",
    link: null,
    children: [
      { nameKey: "common:about.history", link: "/about/history" },
      { nameKey: "common:about.futurePlans", link: "/about/future" },
      { nameKey: "common:about.finance", link: "/about/finance" },
      { nameKey: "common:about.organization", link: "/about/organization" }
    ]
  },
  { nameKey: "common:navigation.events", link: "/events" },
  { nameKey: "common:navigation.media", link: "/media" },
  {
    nameKey: "common:navigation.information",
    link: null,
    children: [
      { nameKey: "common:information.tax", link: "/info/tax" },
      {
        nameKey: "common:information.jobAcademy",
        link: null,
        children: [
          { nameKey: "common:information.lecture1", link: "/info/jobacademy/lecture1" }
        ]
      },
      {
        nameKey: "common:information.suggestion",
        link: null,
        children: [
          { nameKey: "common:information.suggestionTax", link: "/info/suggestions/tax" }
        ]
      }
    ]
  },
  {
    nameKey: "common:navigation.getInvolved",
    link: null,
    children: [
      { nameKey: "common:getInvolved.volunteer", link: "/getinvolved/volunteer" }
    ]
  },
  { nameKey: "common:navigation.memberLogin", link: "/login" },
  { nameKey: "common:navigation.donateNow", link: "/donate" }
];

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false); // 로고 클릭 시 모바일 메뉴 닫기
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        <li key={item.nameKey} className={`dropdown ${level > 0 ? 'dropdown-sub' : ''} ${isMobileMenu ? 'mobile-dropdown' : ''}`}>
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
          onClick={() => handleMenuClick(item.link)}
        >
          {t(item.nameKey)}
        </Link>
      </li>
    );
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img 
            src="/imgs/logos/KCWN_logo1.png" 
            alt="KWCN Logo" 
            className="logo-desktop"
          />
          <img 
            src="/imgs/logos/KCWN_logo.svg" 
            alt="KWCN Logo" 
            className="logo-mobile"
          />
        </Link>
        
        {/* 데스크톱 메뉴 - CSS로 제어 */}
        <ul className="navbar-list">
          {menuData.map(item => renderMenuItem(item))}
        </ul>
        
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
      </div>
    </nav>
  );
};

export default Navbar;
