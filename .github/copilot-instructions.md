# KWCN Front-end Copilot Instructions

## Project Overview
Korean Women's Community Network (KWCN) front-end is a React 18 + TypeScript application built with Vite, featuring bilingual support (Korean/English) and focusing on community information, job academy resources, and member engagement.

## Architecture & Tech Stack

### Core Technologies
- **Framework**: React 18 + TypeScript (strict mode)
- **Build Tool**: Vite with SWC
- **Styling**: Material-UI (MUI) + Tailwind CSS hybrid approach
- **Routing**: React Router v6 with declarative route configuration
- **State Management**: Redux Toolkit (minimal usage, prefer React hooks)
- **Internationalization**: i18next with react-i18next
- **Icons**: Material-UI Icons + Lucide React

### Key Dependencies
```json
{
  "react": "^19.0.0",
  "@mui/material": "^6.1.6",
  "tailwindcss": "^3.4.14",
  "react-router-dom": "^6.28.0",
  "react-i18next": "^15.1.1",
  "@reduxjs/toolkit": "^2.3.0",
  "lucide-react": "^0.x.x",
  "react-hook-form": "^7.x.x",
  "axios": "^1.x.x"
}
```

### Additional Libraries
- **React Query**: Server state management
- **React Hook Form**: Form management  
- **Axios**: HTTP client
- **SCSS**: Advanced styling capabilities

## Project Structure & Conventions

### Directory Architecture
```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx       # Main navigation component with dropdown logic
│   ├── Navbar.css       # Navigation styling with blur effects
│   ├── ui/              # Generic UI components
│   │   ├── Button/      # Reusable button components
│   │   ├── Card/        # Card components and carousel
│   │   ├── EventCard/   # Event-specific card component
│   │   ├── GlassBox/    # Glass morphism UI components
│   │   ├── ImageGalleryHor/ # Standard image gallery components
│   │   └── ImageZoom/   # Image zoom functionality
│   ├── common/          # Shared business components
│   │   ├── Header/      # Header components and language switch
│   │   │   ├── Header.tsx
│   │   │   ├── LanguageSwitch.tsx
│   │   │   └── Navigation.tsx
│   │   ├── Footer/      # Site footer with contact info
│   │   ├── Layout/      # Layout wrapper components
│   │   │   └── MainLayout.tsx
│   │   ├── LoadingSpinner/ # Loading state components
│   │   ├── Modal/       # Modal dialog components
│   │   ├── Navigation/  # Navigation configuration
│   │   │   └── menuData.ts # Menu structure and routes
│   │   ├── Parallax.tsx # Parallax background component
│   │   ├── CurveSvg.ts  # SVG curve utilities
│   │   └── SVGDrawingAnimation.tsx # Animated SVG components
│   ├── features/        # Feature-specific components
│   │   ├── home/        # Home page sections
│   │   ├── about/       # About page components
│   │   ├── events/      # Event-related components
│   │   ├── media/       # Media gallery components
│   │   ├── information/ # Information page components
│   │   ├── involvement/ # Get involved components
│   │   └── auth/        # Authentication components
│   └── utils/           # Utility components and functions
│       ├── formatDate.ts # Date formatting utilities
│       ├── Util.tsx     # General utility functions
│       └── validateEmail.ts # Email validation
├── pages/               # Route-level components
│   ├── Home.tsx         # Main landing page
│   ├── Home.module.css  # Home page specific styles
│   ├── Events.tsx       # Events listing page
│   ├── Media.tsx        # Media gallery page
│   ├── About.tsx        # About overview page
│   ├── Information.tsx  # Information overview page
│   ├── Involvement.tsx  # Get involved page
│   ├── Login.tsx        # User login page
│   ├── MemberLogin.tsx  # Member-specific login
│   ├── Profile.tsx      # User profile page
│   ├── Register.tsx     # User registration
│   ├── DonateNow.tsx    # Donation page
│   ├── AboutUs/         # About section pages
│   │   ├── History.tsx       # Organization history
│   │   ├── History1.tsx      # Alternative history layout
│   │   ├── HistoryDesktop.tsx # Desktop-specific history
│   │   ├── HistoryMobile.tsx  # Mobile-specific history
│   │   ├── FuturePlans.tsx   # Future plans and vision
│   │   ├── Finance.tsx       # Financial records
│   │   ├── Organization.tsx  # Organizational structure
│   │   └── locales/          # About page translations
│   ├── Information/     # Information section pages
│   │   ├── JobAcademy.tsx    # Job academy overview
│   │   ├── CoopHousing.tsx   # Co-op housing information
│   │   ├── Suggestions.tsx   # Suggestions page
│   │   ├── JobAcademy/       # Job academy lecture pages
│   │   │   ├── Job1.tsx      # Lecture 1: 적성 파악 및 경력 탐색
│   │   │   ├── Job2.tsx      # Lecture 2: 노동시장 정보
│   │   │   ├── Job3.tsx      # Lecture 3: 이력서 작성
│   │   │   ├── Job4.tsx      # Lecture 4: 면접 준비
│   │   │   ├── Job5.tsx      # Lecture 5: 직장문화
│   │   │   ├── Job6.tsx      # Lecture 6: BC주 고용기준법
│   │   │   ├── Job7.tsx      # Lecture 7: 임금과 해고
│   │   │   ├── Job8.tsx      # Lecture 8: 보건의료 1
│   │   │   ├── Job9.tsx      # Lecture 9: 보건의료 2
│   │   │   ├── Job10.tsx     # Lecture 10: 유아교육
│   │   │   ├── Job11.tsx     # Lecture 11: 기술직
│   │   │   ├── Job12.tsx     # Lecture 12: 교육보조
│   │   │   ├── Job13.tsx     # Lecture 13: 사회복지
│   │   │   ├── Job14.tsx     # Lecture 14: 웹디자인/개발
│   │   │   ├── InfoSubComponent.tsx # Shared job academy components
│   │   │   └── locales/      # Job academy specific translations
│   │   └── TaxInfo/          # Tax information pages
│   │       └── BC_taxGuide.tsx # BC tax guide
│   ├── GetInvolved/     # Get involved section
│   │   └── Volunteer.tsx     # Volunteer information
│   └── homeLocales/     # Home page specific locale files
│       ├── home_en.ts        # English home content
│       └── home_ko.ts        # Korean home content
├── hooks/               # Custom React hooks
│   ├── useAuth.ts       # Authentication hook
│   ├── useEvent.ts      # Event management hook
│   └── useLanguage.ts   # Language switching hook
├── services/            # API and external service integrations
│   ├── api.ts           # Base API configuration
│   ├── authService.ts   # Authentication services
│   └── eventService.ts  # Event-related API calls
├── i18n/                # Internationalization configuration
│   ├── index.ts         # i18n setup and configuration
│   ├── resources.ts     # Resource loading configuration
│   └── locales/         # Language-specific content files
│       ├── ko/          # Korean translations
│       │   ├── common.json   # Common UI translations
│       │   ├── about.json    # About section translations
│       │   ├── events.json   # Events translations
│       │   └── history.json  # History content
│       └── en/          # English translations
│           ├── common.json   # Common UI translations
│           ├── about.json    # About section translations
│           └── events.json   # Events translations
├── store/               # Redux store configuration
│   ├── index.ts         # Store setup and configuration
│   ├── eventSlice.ts    # Event state management
│   └── userSlice.ts     # User state management
├── routes/              # Route definitions
│   └── AppRoutes.tsx    # Main routing configuration
├── types/               # TypeScript type definitions
│   ├── common.ts        # Common type definitions
│   ├── event.ts         # Event-related types
│   └── user.ts          # User-related types
├── utils/               # Utility functions
├── styles/              # Global styles and themes
│   └── global.scss      # Global SCSS styles
├── assets/              # Static assets and resources
├── App.tsx              # Main application component
├── App.css              # Application-level styles
├── main.tsx             # Application entry point
├── index.css            # Base styles
└── vite-env.d.ts        # Vite environment types
```

### Asset Organization (public/)
```
public/
├── imgs/               # Image resources
│   ├── logos/          # Brand logos and icons
│   ├── bgs/            # Background images (main-1.webp, main-2.webp, main-3.webp)
│   ├── events/         # Event photos and media
│   ├── jobacademy/     # Job academy related images
│   ├── history/        # Historical content images
│   └── media/          # General media files
├── locales/            # i18n locale files (legacy)
└── htaccess           # Apache configuration
```

### File Naming Conventions
- **React Components**: PascalCase (`JobAcademy.tsx`, `HistoryImgGallery.tsx`)
- **Hooks**: camelCase with `use` prefix (`useLanguage.ts`, `useEvent.ts`)
- **Services**: camelCase with service suffix (`authService.ts`, `eventService.ts`)
- **Types**: camelCase with `.ts` extension (`user.ts`, `event.ts`)
- **Styles**: kebab-case or module approach (`global.scss`, `Home.module.css`)

## Internationalization (i18n) Patterns

### Language System Architecture
- **Supported Languages**: Korean (ko) and English (en)
- **Default Language**: Browser detection with fallback to Korean
- **Storage**: localStorage persistence (`i18nextLng` key)
- **Detection Order**: localStorage → browser language → Korean fallback

### Language Switching Pattern
```typescript
// Always use useLanguage hook for language operations
const { language, setLanguage } = useLanguage();

// Language-dependent content loading with useMemo optimization
const homeText = useMemo(() => (language === 'ko' ? homeKo : homeEn), [language]);

// For text with line breaks
const content = renderWithLineBreaks(homeText.section.property);
```

### Important Update (2025-08-25)
- `react-i18next` integration for actual language switching functionality
- Improved from static value return to dynamic language changing

### Browser Language Mapping
```typescript
const browserLangMap: { [key: string]: string } = {
  'ko': 'ko', 'ko-KR': 'ko',
  'en': 'en', 'en-US': 'en', 'en-CA': 'en', 'en-GB': 'en'
};
```

### Locale File Organization
- **Directory Structure**: `src/i18n/locales/{language}/{namespace}.json`
- **Content Organization**: Feature-based namespaces (home, about, jobacademy)
- **Fallback Strategy**: Missing translations fall back to Korean

### Component i18n Integration
```typescript
// Standard pattern for internationalized components
import { useLanguage } from '@/hooks/useLanguage';

const MyComponent = () => {
  const { language } = useLanguage();
  
  // Conditional content rendering
  return (
    <div>
      {language === 'ko' ? '한국어 내용' : 'English Content'}
    </div>
  );
};
```

## Component Development Patterns

### Material-UI + Tailwind Hybrid Approach
- **MUI Components**: Use for complex interactive elements (modals, form controls, navigation)
- **Tailwind Classes**: Use for layout, spacing, and simple styling
- **Responsive Design**: Prefer MUI's `sx` prop with breakpoint objects

```typescript
// Preferred styling pattern
<Box sx={{
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: { xs: 2, md: 4 },
  p: { xs: 2, sm: 3, md: 4 }
}} className="bg-gradient-to-r from-gray-900 to-gray-800">
```

### Image Gallery Components
- **HistoryImgGallery**: Full-featured gallery with zoom, pan, keyboard navigation
- **ImageGallery**: Standard gallery for content display
- **Props Interface**: Always define `HistoryImage` or similar interfaces
- **Features**: Modal zoom, keyboard controls, responsive design, error handling

### Navigation Patterns
- **JobAcademyNavigation**: Reusable navigation component for lecture series
- **Responsive Design**: Mobile-first with collapsible navigation
- **Active State**: Visual indicators for current page/section

### Error Handling in Components
```typescript
// Standard image error handling
<img
  src={imageSrc}
  alt={imageAlt}
  onError={(e) => {
    console.error('Image failed to load:', imageSrc);
    e.currentTarget.style.display = 'none';
  }}
/>
```

## Page Component Patterns

### Complex Page Structure (Job Academy Example)
```typescript
const JobLecture = () => {
  const { language } = useLanguage();
  
  return (
    <Container maxWidth="lg">
      {/* Navigation */}
      <JobAcademyNavigation />
      
      {/* Content Section */}
      <Paper sx={{ p: { xs: 3, md: 6 } }}>
        {/* Bilingual Title */}
        <Typography variant="h3" component="h1">
          {language === 'ko' ? '강의 제목' : 'Lecture Title'}
        </Typography>
        
        {/* Language-dependent content */}
        {language === 'ko' ? <KoreanContent /> : <EnglishContent />}
        
        {/* Media Gallery */}
        <HistoryImgGallery images={lectureImages} />
      </Paper>
    </Container>
  );
};
```

### Content Organization Strategy
- **Separate Components**: Create `KoreanContent` and `EnglishContent` components for complex layouts
- **Inline Conditionals**: Use for simple text differences
- **Image Arrays**: Organize media by feature with proper alt text and titles

## Routing & Navigation

### Route Configuration Pattern
```typescript
// AppRoutes.tsx pattern
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/*" element={<AboutRoutes />} />
    <Route path="/information/*" element={<InformationRoutes />} />
    {/* Nested routing for complex sections */}
  </Routes>
);
```

### Job Academy URL Structure
- **Pattern**: `/information/jobacademy/job{number}`
- **Examples**: `/information/jobacademy/job1`, `/information/jobacademy/job14`
- **Navigation**: Use programmatic navigation with React Router hooks

## State Management Guidelines

### Prefer React Hooks Over Redux
- **Local State**: useState for component-specific state
- **Shared State**: useContext for cross-component communication
- **Data Fetching**: Custom hooks with useEffect and useState
- **Redux Usage**: Only for truly global application state (user auth, theme)

### Redux Store Configuration
```typescript
// store/index.ts
export const store = configureStore({
  reducer: {
    auth: authSlice,
    language: languageSlice,
    events: eventSlice,
  },
});

// Main slices
// - authSlice: User authentication state
// - languageSlice: Multi-language state management
// - eventSlice: Event data management
```

### Custom Hooks Pattern
```typescript
// Example custom hook structure
export const useEvent = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await eventService.getEvents();
      setEvents(data);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return { events, loading, fetchEvents };
};
```

## Home Component Development Guidelines

### Component Structure & Dependencies
```tsx
import { useState, useEffect, useMemo } from "react";
import Parallax from "../components/common/Parallax";
import { ArrowRight } from "lucide-react";
import useLanguage from '../hooks/useLanguage';
import { homeEn } from "./homeLocales/home_en";
import { homeKo } from "./homeLocales/home_ko";
import { renderWithLineBreaks } from "../components/utils/Util";
```

### State Management Pattern
```typescript
const [showTitle, setShowTitle] = useState(false);
const [showSubtitle, setShowSubtitle] = useState(false);
const { language } = useLanguage();
const homeText = useMemo(() => (language === 'ko' ? homeKo : homeEn), [language]);
```

### Section Structure & Styling

#### Hero Section
- **Background**: `/imgs/bgs/main-1.webp`
- **Overlay**: `bg-black opacity-50`
- **Animation Timing**: Title 500ms, Subtitle 1500ms, Buttons 2000ms
- **Typography Rules**:
  - Korean: `text-5xl md:text-7xl`
  - English: `text-3xl md:text-5xl`

#### Mission Section
- **Layout**: 3-column grid (`grid md:grid-cols-3`)
- **Card Style**: `bg-gray-50/10` with `p-6` or `p-8`
- **Icon Style**: `text-red-600` color
- **Text**: Title `text-white`, Description `text-gray-300`

#### Vision Section (Parallax)
- **Background**: Parallax with `/imgs/bgs/main-2.webp`
- **Layout**: 4-column grid (`grid md:grid-cols-4`)
- **Icon Background**: `bg-gradient-to-br from-gray-200/30 to-gray-500/30 rounded-full p-6`

#### Programs Section
- **Layout**: 3-column grid
- **Card Hover**: `hover:shadow-lg transition duration-300`
- **Icon Style**: `bg-red-600 text-white p-3 rounded-full`
- **CTA**: ArrowRight icon from Lucide React

#### Cultural Section (Parallax)
- **Background**: Parallax with `/imgs/bgs/main-3.webp`
- **Layout**: 3-column grid with flexbox items

### Animation Implementation
```typescript
useEffect(() => {
  const timer1 = setTimeout(() => setShowTitle(true), 500);
  const timer2 = setTimeout(() => setShowSubtitle(true), 1500);
  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}, []);

// Animation classes
const animationClass = showTitle 
  ? "translate-y-0 opacity-100" 
  : "translate-y-20 opacity-0";
const transitionClass = "transition-all duration-1000";
```

### New Section Template
```tsx
<section className="relative z-20 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-white mb-12">
      {homeText.newSection.heading}
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {homeText.newSection.items.map((item, i) => (
        <div key={i} className="bg-gray-50/10 p-8 rounded-lg hover:shadow-lg transition duration-300">
          <div className="bg-red-600 text-white p-3 rounded-full inline-block mb-4">
            <item.icon className="h-6 w-6" />
          </div>
          <h3 className="text-2xl text-white font-semibold mb-4">{item.title}</h3>
          <p className="text-gray-300 mb-6">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Styling & Design System

### Color Scheme & Theming
- **Primary Brand**: `text-red-600` (KWCN brand color)
- **Background**: Dark gradient theme (`from-gray-900 to-gray-800`)
- **Secondary Colors**: Green accent (`#22c55e`, `#16a34a`)
- **Text Colors**: 
  - Primary: `text-white`
  - Secondary: `text-gray-200`
  - Body: `text-gray-300`
- **Card Backgrounds**: `bg-gray-50/10` (10% opacity)
- **Overlays**: `bg-black opacity-50`

### Responsive Breakpoints (MUI)
- **xs**: 0px+ (mobile)
- **sm**: 600px+ (tablet)
- **md**: 900px+ (desktop)
- **lg**: 1200px+ (large desktop)

### Component Styling Best Practices
```typescript
// Preferred responsive styling pattern
sx={{
  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
  padding: { xs: 2, sm: 3, md: 4 },
  margin: { xs: '1rem 0', md: '2rem 0' }
}}
```

## TypeScript Type System

### Core Type Definitions
```typescript
// Base entity structure
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// Multi-language content structure
export interface MultiLanguageContent {
  en: string;
  ko: string;
}

// API response structure
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  total?: number;
}

// Event data structure
export interface Event extends BaseEntity {
  title: MultiLanguageContent;
  description: MultiLanguageContent;
  date: string;
  location: MultiLanguageContent;
  status: 'upcoming' | 'ongoing' | 'completed';
  category: 'cultural' | 'educational' | 'community' | 'fundraising';
  featured: boolean;
}

// Media item structure
export interface MediaItem extends BaseEntity {
  title: MultiLanguageContent;
  type: 'image' | 'video' | 'document';
  url: string;
  thumbnail?: string;
  category: 'event' | 'activity' | 'news' | 'gallery';
  featured: boolean;
}
```

## Development Guidelines

### TypeScript Best Practices
- **Strict Type Checking**: Enable all strict TypeScript options
- **Interface Definitions**: Define interfaces for all props and complex objects
- **Type Imports**: Use `import type` for type-only imports
- **Generic Components**: Use generics for reusable components

### Performance Optimization
- **Image Loading**: Implement error handling and lazy loading where appropriate
- **Code Splitting**: Use React.lazy for route-level code splitting
- **Memoization**: Use React.memo for expensive renders, useMemo for calculations

### Accessibility Guidelines
- **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
- **Alt Text**: Provide descriptive alt text for all images
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **ARIA Labels**: Use ARIA labels for complex components

### Error Handling Patterns
```typescript
// Component error boundaries
try {
  // Risky operation
} catch (error) {
  console.error('Operation failed:', error);
  // Graceful fallback UI
}

// Image error handling
onError={(e) => {
  console.error('Resource failed to load:', resourceUrl);
  e.currentTarget.style.display = 'none';
}}
```

## Integration Patterns

### API Integration
- **Service Layer**: Centralize API calls in `services/` directory
- **Error Handling**: Consistent error handling across all API calls
- **TypeScript**: Define response types for all API endpoints
- **Authentication**: Use authService for user-related operations

### Asset Management
- **Images**: Store in `public/imgs/` with organized subdirectories
- **Internationalization**: Store locale files in `public/locales/`
- **Build Assets**: Vite handles bundling and optimization automatically

### Environment Configuration
- **Development**: Vite dev server with hot reload
- **Production**: Vite build with SWC compilation
- **Environment Variables**: Use `.env` files with `VITE_` prefix

### Environment Variables Example
```env
VITE_APP_API_BASE_URL=http://localhost:8000/api
VITE_APP_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXXX
VITE_APP_ENABLE_DONATIONS=true
VITE_APP_ENABLE_MEMBER_LOGIN=true
```

## Code Generation Guidelines

### When Creating New Components
1. **Location**: Place in appropriate `src/components/` subdirectory
2. **Interface**: Define TypeScript interface for props
3. **Internationalization**: Include language switching if content is user-facing
4. **Styling**: Use MUI + Tailwind hybrid approach
5. **Responsive**: Design mobile-first with breakpoint considerations
6. **Error Handling**: Include appropriate error boundaries

### When Adding New Pages
1. **Directory**: Create in `src/pages/` with feature-based organization
2. **Routing**: Update route configuration in `AppRoutes.tsx`
3. **Navigation**: Add to relevant navigation components
4. **i18n**: Create locale files for any text content
5. **SEO**: Include proper meta tags and title management

### When Extending Internationalization
1. **Locale Files**: Add translations to both Korean and English locale files
2. **Fallback**: Ensure Korean fallback exists for all new content
3. **Testing**: Test language switching functionality
4. **Context**: Use existing `useLanguage` hook pattern

This instruction set provides the foundational knowledge for developing features consistently within the KWCN front-end architecture. Always prioritize user experience, accessibility, and maintainable code when implementing new features.