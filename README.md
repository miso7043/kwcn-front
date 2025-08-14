# KCWN Website Frontend Structure

## 폴더 구조

```
kcwn-frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── imgs/
│   │   ├── logos/
│   │   │   ├── kcwn-logo.png
│   │   │   ├── canada-flag.png
│   │   │   └── korea-flag.png
│   │   ├── events/
│   │   ├── media/
│   │   └── backgrounds/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.module.scss
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── LanguageSwitch.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Footer.module.scss
│   │   │   ├── Layout/
│   │   │   │   ├── MainLayout.tsx
│   │   │   │   └── MainLayout.module.scss
│   │   │   ├── LoadingSpinner/
│   │   │   │   ├── LoadingSpinner.tsx
│   │   │   │   └── LoadingSpinner.module.scss
│   │   │   └── Modal/
│   │   │       ├── Modal.tsx
│   │   │       └── Modal.module.scss
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.scss
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Card.module.scss
│   │   │   ├── ImageGallery/
│   │   │   │   ├── ImageGallery.tsx
│   │   │   │   └── ImageGallery.module.scss
│   │   │   └── EventCard/
│   │   │       ├── EventCard.tsx
│   │   │       └── EventCard.module.scss
│   │   └── features/
│   │       ├── home/
│   │       │   ├── HeroSection.tsx
│   │       │   ├── UpcomingEvents.tsx
│   │       │   ├── FundingPlans.tsx
│   │       │   └── KoreanAssociation.tsx
│   │       ├── about/
│   │       │   ├── History.tsx
│   │       │   ├── FuturePlans.tsx
│   │       │   ├── Vision.tsx
│   │       │   ├── Mission.tsx
│   │       │   ├── LogoSignificance.tsx
│   │       │   └── PastPresidents.tsx
│   │       ├── events/
│   │       │   ├── EventList.tsx
│   │       │   ├── EventFilter.tsx
│   │       │   └── EventDetail.tsx
│   │       ├── media/
│   │       │   ├── MediaGrid.tsx
│   │       │   └── MediaItem.tsx
│   │       ├── information/
│   │       │   ├── TaxConsultation.tsx
│   │       │   └── JobAcademy/
│   │       │       ├── LectureList.tsx
│   │       │       └── LectureDetail.tsx
│   │       ├── involvement/
│   │       │   ├── VolunteerForm.tsx
│   │       │   └── DonateSection.tsx
│   │       └── auth/
│   │           ├── LoginForm.tsx
│   │           ├── MemberDashboard.tsx
│   │           └── ProtectedRoute.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── EventsPage.tsx
│   │   ├── MediaPage.tsx
│   │   ├── InformationPage.tsx
│   │   ├── GetInvolvedPage.tsx
│   │   ├── DonatePage.tsx
│   │   ├── MemberLoginPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── hooks/
│   │   ├── useApi.ts
│   │   ├── useAuth.ts
│   │   ├── useLanguage.ts
│   │   └── useLocalStorage.ts
│   ├── services/
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   ├── eventService.ts
│   │   └── mediaService.ts
│   ├── store/
│   │   ├── index.ts
│   │   ├── authSlice.ts
│   │   ├── languageSlice.ts
│   │   └── eventSlice.ts
│   ├── types/
│   │   ├── index.ts
│   │   ├── auth.ts
│   │   ├── event.ts
│   │   ├── media.ts
│   │   └── common.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   ├── dateUtils.ts
│   │   └── validation.ts
│   ├── styles/
│   │   ├── globals.scss
│   │   ├── variables.scss
│   │   ├── mixins.scss
│   │   └── reset.scss
│   ├── i18n/       다국어 설정 담당
│   │   ├── index.ts
│   │   └── resources.ts
│   ├── App.tsx
│   ├── App.module.scss
│   ├── index.tsx
│   └── react-app-env.d.ts
├── package.json
├── tsconfig.json
├── .env
├── .env.example
├── .gitignore
└── README.md
```

## 주요 데이터 구조 (TypeScript Interfaces)

### 1. 공통 타입 (types/common.ts)

```typescript
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface MultiLanguageContent {
  en: string;
  ko: string;
}

export type Language = 'en' | 'ko';

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  total?: number;
}
```

### 2. 이벤트 타입 (types/event.ts)

```typescript
import { BaseEntity, MultiLanguageContent } from './common';

export interface Event extends BaseEntity {
  title: MultiLanguageContent;
  description: MultiLanguageContent;
  shortDescription: MultiLanguageContent;
  date: string;
  endDate?: string;
  location: MultiLanguageContent;
  image: string;
  gallery?: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
  category: 'cultural' | 'educational' | 'community' | 'fundraising';
  registrationRequired: boolean;
  registrationDeadline?: string;
  maxParticipants?: number;
  currentParticipants?: number;
  featured: boolean;
}

export interface EventFilter {
  status?: Event['status'];
  category?: Event['category'];
  year?: number;
  featured?: boolean;
}
```

### 3. 미디어 타입 (types/media.ts)

```typescript
import { BaseEntity, MultiLanguageContent } from './common';

export interface MediaItem extends BaseEntity {
  title: MultiLanguageContent;
  description?: MultiLanguageContent;
  type: 'image' | 'video' | 'document';
  url: string;
  thumbnail?: string;
  category: 'event' | 'activity' | 'news' | 'gallery';
  eventId?: string;
  featured: boolean;
  tags?: string[];
}

export interface MediaFilter {
  type?: MediaItem['type'];
  category?: MediaItem['category'];
  year?: number;
  featured?: boolean;
}
```

### 4. 인증 타입 (types/auth.ts)

```typescript
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'member' | 'volunteer';
  membershipStatus: 'active' | 'inactive' | 'pending';
  joinDate: string;
  profileImage?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
```

### 5. Job Academy 타입 (types/education.ts)

```typescript
import { BaseEntity, MultiLanguageContent } from './common';

export interface Lecture extends BaseEntity {
  title: MultiLanguageContent;
  description: MultiLanguageContent;
  content: MultiLanguageContent;
  instructor: string;
  duration: number; // minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'job-search' | 'interview' | 'resume' | 'networking' | 'skills';
  materials?: string[]; // file URLs
  videoUrl?: string;
  order: number;
  published: boolean;
}

export interface TaxConsultation extends BaseEntity {
  title: MultiLanguageContent;
  content: MultiLanguageContent;
  category: 'income-tax' | 'business-tax' | 'property-tax' | 'general';
  year: number;
  published: boolean;
}
```

### 6. 조직 정보 타입 (types/organization.ts)

```typescript
import { MultiLanguageContent } from './common';

export interface President {
  name: string;
  term: string;
  image?: string;
  bio?: MultiLanguageContent;
}

export interface FinancialRecord {
  year: number;
  revenue: number;
  expenses: number;
  grants: number;
  donations: number;
  summary: MultiLanguageContent;
}

export interface OrganizationInfo {
  vision: MultiLanguageContent;
  mission: MultiLanguageContent;
  history: MultiLanguageContent;
  futurePlans: MultiLanguageContent;
  logoSignificance: MultiLanguageContent;
  memberCount: number;
  pastPresidents: President[];
  financialRecords: FinancialRecord[];
}
```

### 7. 기부 타입 (types/donation.ts)

```typescript
export interface DonationAmount {
  value: number;
  label: string;
  isCustom?: boolean;
}

export interface DonationRequest {
  amount: number;
  donorName: string;
  donorEmail: string;
  message?: string;
  anonymous: boolean;
  recurring: boolean;
  frequency?: 'monthly' | 'quarterly' | 'annually';
}

export interface Donor {
  name: string;
  amount: number;
  date: string;
  anonymous: boolean;
  message?: string;
}
```

## 환경 변수 설정 (.env.example)

```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:8000/api
REACT_APP_API_VERSION=v1

# Authentication
REACT_APP_JWT_SECRET=your-jwt-secret-key

# External Services
REACT_APP_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXXX
REACT_APP_PAYPAL_CLIENT_ID=your-paypal-client-id

# Feature Flags
REACT_APP_ENABLE_DONATIONS=true
REACT_APP_ENABLE_MEMBER_LOGIN=true

# Development
REACT_APP_DEBUG_MODE=true
```

## 주요 라이브러리 구성 (package.json dependencies)

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "react-redux": "^8.0.0",
    "react-i18next": "^12.1.0",
    "i18next": "^22.4.0",
    "axios": "^1.3.0",
    "react-hook-form": "^7.43.0",
    "react-query": "^3.39.0",
    "date-fns": "^2.29.0",
    "classnames": "^2.3.0",
    "sass": "^1.58.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/node": "^18.14.0",
    "typescript": "^4.9.0",
    "eslint": "^8.34.0",
    "@typescript-eslint/eslint-plugin": "^5.53.0",
    "prettier": "^2.8.0"
  }
}
```

# 각 파일의 기능 설명

## 1. Components

### common/ (공통 컴포넌트)
- **Header.tsx**: 상단 네비게이션 바, 로고, 언어 선택 버튼
- **Navigation.tsx**: 메뉴 구조, 모바일 햄버거 메뉴, 드롭다운 메뉴
- **LanguageSwitch.tsx**: 영어/한국어 전환 토글 (국기 아이콘)
- **Footer.tsx**: 하단 정보, 저작권, 소셜 링크, 연락처
- **MainLayout.tsx**: 전체 페이지 레이아웃 래퍼 (Header + Content + Footer)
- **LoadingSpinner.tsx**: 로딩 애니메이션 컴포넌트
- **Modal.tsx**: 팝업창, 이미지 확대보기, 확인 대화상자

### ui/ (재사용 UI 컴포넌트)
- **Button.tsx**: 다양한 스타일의 버튼 (Primary, Secondary, Ghost 등)
- **Card.tsx**: 카드 형태의 컨테이너 (이벤트, 미디어 아이템 등)
- **ImageGallery.tsx**: 이미지 그리드, 라이트박스, 썸네일 네비게이션
- **EventCard.tsx**: 이벤트 정보 카드 (날짜, 제목, 설명, 상태)

### features/ (기능별 컴포넌트)

#### home/
- **HeroSection.tsx**: 메인 배너, 소개 메시지, CTA 버튼
- **UpcomingEvents.tsx**: 예정된 이벤트 목록 (최대 3-4개)
- **FundingPlans.tsx**: 펀딩 계획 및 기부 정보 소개
- **KoreanAssociation.tsx**: 한인회 연결 링크 섹션

#### about/
- **History.tsx**: KCWN 역사 및 활동 내용 타임라인
- **FuturePlans.tsx**: 향후 계획 및 목표 설명
- **Vision.tsx**: 비전 선언문 및 목표
- **Mission.tsx**: 미션 및 핵심 가치
- **LogoSignificance.tsx**: 로고 의미 및 상징성 설명
- **PastPresidents.tsx**: 역대 회장 목록 및 프로필

#### events/
- **EventList.tsx**: 이벤트 목록, 페이지네이션, 정렬 기능
- **EventFilter.tsx**: 카테고리, 연도, 상태별 필터링
- **EventDetail.tsx**: 개별 이벤트 상세 정보, 등록 버튼

#### media/
- **MediaGrid.tsx**: 반응형 미디어 그리드 (PC 3열, 모바일 1열)
- **MediaItem.tsx**: 개별 미디어 아이템, 호버 효과, 타이틀 오버레이

#### information/
- **TaxConsultation.tsx**: 세무 상담 정보, FAQ, 연락처
- **LectureList.tsx**: Job Academy 강의 목록 (Lecture 1-14)
- **LectureDetail.tsx**: 개별 강의 상세 정보, 동영상 플레이어

#### involvement/
- **VolunteerForm.tsx**: 봉사자 지원 폼, 유효성 검사
- **DonateSection.tsx**: 기부 옵션, 금액 선택, PayPal 연동

#### auth/
- **LoginForm.tsx**: 회원 로그인 폼, 에러 처리
- **MemberDashboard.tsx**: 회원 전용 대시보드, 프로필 정보
- **ProtectedRoute.tsx**: 로그인 필요 페이지 보호 컴포넌트

## 2. Pages (페이지 컴포넌트)
- **HomePage.tsx**: 메인 페이지 구성, 여러 섹션 조합
- **AboutPage.tsx**: 소개 페이지, 탭 네비게이션으로 구성
- **EventsPage.tsx**: 이벤트 목록 및 필터링 페이지
- **MediaPage.tsx**: 미디어 갤러리 페이지
- **InformationPage.tsx**: 정보 페이지 (Tax, Job Academy)
- **GetInvolvedPage.tsx**: 참여 방법 페이지 (봉사, 기부)
- **DonatePage.tsx**: 독립적인 기부 전용 페이지
- **MemberLoginPage.tsx**: 회원 로그인 페이지
- **NotFoundPage.tsx**: 404 에러 페이지

## 3. Hooks (커스텀 훅)
- **useApi.ts**: API 호출 로직, 에러 처리, 로딩 상태
- **useAuth.ts**: 인증 상태 관리, 로그인/로그아웃 처리
- **useLanguage.ts**: 다국어 전환, 현재 언어 상태
- **useLocalStorage.ts**: 로컬 스토리지 데이터 관리

## 4. Services (API 서비스)
- **api.ts**: Axios 인스턴스, 인터셉터, 기본 설정
- **authService.ts**: 인증 관련 API (로그인, 토큰 갱신)
- **eventService.ts**: 이벤트 CRUD 작업, 필터링, 검색
- **mediaService.ts**: 미디어 업로드, 조회, 삭제

## 5. Store (상태 관리)
- **index.ts**: Redux store 설정, 미들웨어 구성
- **authSlice.ts**: 사용자 인증 상태 (user, token, isAuthenticated)
- **languageSlice.ts**: 현재 선택된 언어 (en/ko)
- **eventSlice.ts**: 이벤트 목록, 필터 상태, 캐싱

## 6. Types (TypeScript 타입)
- **index.ts**: 모든 타입 re-export
- **auth.ts**: 사용자, 로그인 관련 타입
- **event.ts**: 이벤트 데이터 구조
- **media.ts**: 미디어 아이템 타입
- **common.ts**: 공통 인터페이스, API 응답 형식

## 7. Utils (유틸리티)
- **constants.ts**: 앱 전체 상수 (API URL, 언어 코드 등)
- **helpers.ts**: 공통 헬퍼 함수 (텍스트 처리, URL 생성 등)
- **dateUtils.ts**: 날짜 포맷팅, 계산 함수
- **validation.ts**: 폼 유효성 검사 규칙

## 8. Styles (스타일링)
- **globals.scss**: 전역 스타일, 폰트, 기본 태그 스타일
- **variables.scss**: 색상, 크기, 브레이크포인트 변수
- **mixins.scss**: 재사용 가능한 SCSS 믹스인
- **reset.scss**: CSS 리셋, 브라우저 기본 스타일 제거

## 9. i18n (국제화)
- **index.ts**: i18n 라이브러리 초기화, 언어 감지
- **resources.ts**: 번역 리소스 로딩, 네임스페이스 관리

## 10. 메인 파일들
- **App.tsx**: 라우터 설정, 전역 컴포넌트 (Layout, Provider)
- **index.tsx**: ReactDOM 렌더링, Provider 래핑
- **react-app-env.d.ts**: TypeScript 환경 타입 정의

이 구조는 KCWN 웹사이트의 요구사항에 맞춰 설계되었으며, 확장성과 유지보수성을 고려했습니다. 각 기능별로 모듈화되어 있어 개발과 관리가 용이할 것입니다.