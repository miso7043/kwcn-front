import React from 'react';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, TitledTwoColumnListComponent, MultiColumnListComponent, SimpleReferenceListComponent } from './InfoSubComponent';

const Job14: React.FC = () => {

  // 웹 디자이너/개발자 관련 데이터
  const strategyTasks = {
    title: "1. Strategy (전략)",
    items: [
      "비즈니스 목표 분석",
      "타겟 사용자 리서치",
      "경쟁사 분석",
      "프로젝트 기획 및 설계",
      "성과 지표 설정",
      "브랜드 전략 수립"
    ],
    borderColor: "border-blue-500"
  };

  const uiDesignTasks = {
    title: "2. UI Design",
    items: [
      "시각적 디자인 시스템",
      "레이아웃 및 구조 설계",
      "색상 및 타이포그래피",
      "아이콘 및 그래픽 요소",
      "반응형 디자인",
      "브랜드 아이덴티티 적용"
    ],
    borderColor: "border-green-500"
  };

  const uxDesignTasks = {
    title: "3. UX Design",
    items: [
      "사용자 경험 설계",
      "정보 구조 설계",
      "와이어프레임 제작",
      "프로토타입 개발",
      "사용성 테스트",
      "접근성 고려"
    ],
    borderColor: "border-purple-500"
  };

  const developmentTasks = {
    title: "4. Development",
    items: [
      "Frontend 개발",
      "Backend 시스템 구축",
      "데이터베이스 설계",
      "API 개발 및 연동",
      "성능 최적화",
      "유지보수 및 업데이트"
    ],
    borderColor: "border-red-500"
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Lecture 14</h1>
          <p className="text-xl text-gray-300 mb-8">Graphic Designer & Web Developer - 그래픽 디자이너 및 웹 개발자</p>
          <div className="w-32 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto p-8">
          {/* 웹 디자이너/개발자 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-purple-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Web Designer/Developer가 하는 일
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 mb-6">
                  웹 디자이너와 웹 개발자는 디지털 시대의 핵심 전문가로서, 사용자 경험을 중시하는
                  웹사이트와 웹 애플리케이션을 기획, 디자인, 개발하는 역할을 담당합니다.
                  창의성과 기술력을 결합하여 브랜드의 디지털 정체성을 구현하고,
                  사용자와 비즈니스 목표를 연결하는 중요한 역할을 합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <SubSectionWithList
                  title={strategyTasks.title}
                  items={strategyTasks.items}
                  borderColor={strategyTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={uiDesignTasks.title}
                  items={uiDesignTasks.items}
                  borderColor={uiDesignTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={uxDesignTasks.title}
                  items={uxDesignTasks.items}
                  borderColor={uxDesignTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={developmentTasks.title}
                  items={developmentTasks.items}
                  borderColor={developmentTasks.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">통합적 역할의 중요성</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "비즈니스 관점:",
                    items: [
                      "브랜드 가치 증진",
                      "고객 만족도 향상",
                      "매출 및 전환율 증대",
                      "경쟁 우위 확보",
                      "시장 점유율 확대"
                    ]
                  }}
                  rightColumn={{
                    title: "기술적 관점:",
                    items: [
                      "최신 웹 기술 적용",
                      "크로스 플랫폼 호환성",
                      "보안 및 성능 최적화",
                      "확장성 있는 구조 설계",
                      "유지보수성 향상"
                    ]
                  }}
                />
              </div>
            </div>
          </section>

          {/* 기술 스택 및 도구 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                주요 기술 스택 및 도구
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="Frontend 기술"
                  items={[
                    "**HTML:** 웹 구조와 콘텐츠 마크업",
                    "**CSS:** 스타일링 및 레이아웃 디자인",
                    "**JavaScript:** 동적 기능 및 상호작용",
                    "**React/Vue/Angular:** 프론트엔드 프레임워크",
                    "**Responsive Design:** 다양한 디바이스 대응",
                    "**Sass/Less:** CSS 전처리기"
                  ]}
                />

                <BoxListComponent
                  title="Backend 기술"
                  items={[
                    "**PHP:** 서버 사이드 스크립팅",
                    "**Node.js:** JavaScript 서버 환경",
                    "**Python/Django:** 웹 프레임워크",
                    "**MySQL/PostgreSQL:** 데이터베이스 관리",
                    "**API Development:** RESTful/GraphQL API",
                    "**Server Management:** 웹서버 구성 및 관리"
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="CMS 및 플랫폼"
                  items={[
                    "**WordPress:** 가장 널리 사용되는 CMS",
                    "**Drupal:** 고급 기능의 CMS",
                    "**Shopify:** 이커머스 플랫폼",
                    "**Webflow:** 비주얼 웹 디자인 도구",
                    "**Squarespace:** 올인원 웹사이트 빌더",
                    "**Custom CMS:** 맞춤형 콘텐츠 관리"
                  ]}
                />

                <BoxListComponent
                  title="디자인 도구"
                  items={[
                    "**Adobe Creative Suite:** Photoshop, Illustrator, XD",
                    "**Figma:** 협업형 UI/UX 디자인",
                    "**Sketch:** 인터페이스 디자인",
                    "**InVision:** 프로토타이핑 및 협업",
                    "**Canva:** 간편한 그래픽 디자인",
                    "**After Effects:** 모션 그래픽"
                  ]}
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">개발 환경 및 도구</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">개발 도구</h3>
                    <ul className="space-y-1">
                      <li>• Visual Studio Code</li>
                      <li>• Sublime Text</li>
                      <li>• PhpStorm/WebStorm</li>
                      <li>• Git/GitHub</li>
                      <li>• Docker</li>
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">테스팅 도구</h3>
                    <ul className="space-y-1">
                      <li>• Browser Dev Tools</li>
                      <li>• Lighthouse</li>
                      <li>• Jest/Cypress</li>
                      <li>• Postman</li>
                      <li>• GTmetrix</li>
                    </ul>
                  </div>
                  <div className="text-cyan-200">
                    <h3 className="font-semibold mb-2">배포 도구</h3>
                    <ul className="space-y-1">
                      <li>• Netlify</li>
                      <li>• Vercel</li>
                      <li>• AWS</li>
                      <li>• Google Cloud</li>
                      <li>• cPanel/WHM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 메트로 밴쿠버 지역 학교 프로그램 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                메트로 밴쿠버 지역 학교 프로그램
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="BCIT (British Columbia Institute of Technology)"
                  items={[
                    "**Digital Design & Development:** 2년 Diploma",
                    "**New Media Design & Web Development:** Certificate",
                    "**Web Technologies:** Part-time 과정",
                    "**Digital Visual Effects:** 전문 프로그램",
                    "**특징:** 실무 중심 교육, 업계 연계 강화"
                  ]}
                />

                <BoxListComponent
                  title="CDI College"
                  items={[
                    "**Web Design & Development:** Diploma 과정",
                    "**Graphic Design:** 종합 디자인 과정",
                    "**UI/UX Design:** 사용자 경험 전문",
                    "**Digital Marketing:** 마케팅 연계 과정",
                    "**특징:** 빠른 취업 준비, 실용적 커리큘럼"
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="Langara College"
                  items={[
                    "**Web & Mobile App Design/Development:** 2년 Diploma",
                    "**Studio Arts:** 디지털 아트 포함",
                    "**Continuing Studies:** 단기 집중 과정",
                    "**Certificate Programs:** 전문 기술 인증",
                    "**특징:** 소규모 클래스, 개별 지도"
                  ]}
                />

                <BoxListComponent
                  title="VCC (Vancouver Community College)"
                  items={[
                    "**Web Development:** Certificate 과정",
                    "**Graphic Design:** 시각 디자인 전문",
                    "**Digital Media:** 멀티미디어 제작",
                    "**Continuing Education:** 직업 재교육",
                    "**특징:** 저렴한 학비, 지역사회 밀착"
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="SFU (Simon Fraser University)"
                  items={[
                    "**Interactive Arts & Technology:** 학사/석사",
                    "**Computing Science:** 웹 개발 전공",
                    "**Communication:** 디지털 미디어",
                    "**Continuing Studies:** 전문가 과정",
                    "**특징:** 연구 중심, 혁신 기술 교육"
                  ]}
                />

                <BoxListComponent
                  title="UBC (University of British Columbia)"
                  items={[
                    "**Computer Science:** 웹 기술 전공",
                    "**Visual Arts:** 디지털 아트",
                    "**Human Computer Interaction:** UX 연구",
                    "**Extended Learning:** 단기 전문 과정",
                    "**특징:** 세계적 수준, 최신 연구 동향"
                  ]}
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">학교 선택 가이드</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "실무 중심 vs 이론 중심:",
                    items: [
                      "**실무 중심:** BCIT, CDI, VCC",
                      "**이론 중심:** UBC, SFU",
                      "**균형:** Langara College",
                      "**빠른 취업:** College/Private",
                      "**장기 발전:** University"
                    ]
                  }}
                  rightColumn={{
                    title: "고려사항:",
                    items: [
                      "학비 및 기간",
                      "취업률 및 졸업생 진로",
                      "커리큘럼 내용",
                      "실습 기회 및 포트폴리오",
                      "업계 네트워킹"
                    ]
                  }}
                />
              </div>
            </div>
          </section>

          {/* 관련 직업 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Web Designer/Developer 관련 직업
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <BoxListComponent
                  title="Creative & Design"
                  items={[
                    "Web Designer",
                    "UI/UX Designer",
                    "Graphic Designer",
                    "Visual Designer",
                    "Motion Graphics Designer",
                    "Art Director",
                    "Creative Director"
                  ]}
                />

                <BoxListComponent
                  title="Development"
                  items={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Full-Stack Developer",
                    "WordPress Developer",
                    "JavaScript Developer",
                    "Mobile App Developer",
                    "Software Engineer"
                  ]}
                />

                <BoxListComponent
                  title="Specialized Roles"
                  items={[
                    "E-commerce Specialist",
                    "SEO Specialist",
                    "Digital Marketing Designer",
                    "Web Content Manager",
                    "Quality Assurance Tester",
                    "Technical Writer",
                    "Project Manager"
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="고용 형태별 특징"
                  items={[
                    "**풀타임 직원:** 안정적 수입, 복리후생",
                    "**프리랜서:** 유연한 일정, 다양한 프로젝트",
                    "**계약직:** 특정 프로젝트 집중",
                    "**원격근무:** 지역 제약 없는 업무",
                    "**창업:** 디지털 에이전시 설립"
                  ]}
                />

                <BoxListComponent
                  title="급여 수준 (밴쿠버 기준)"
                  items={[
                    "**주니어:** $45,000 - $65,000",
                    "**미드레벨:** $65,000 - $90,000",
                    "**시니어:** $90,000 - $130,000+",
                    "**프리랜서:** $50 - $150/시간",
                    "**전문분야:** $100,000 - $200,000+"
                  ]}
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">진로 발전 경로</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">기술 전문가</h3>
                    <ul className="space-y-1">
                      <li>• Frontend Specialist</li>
                      <li>• Backend Architect</li>
                      <li>• DevOps Engineer</li>
                      <li>• Security Specialist</li>
                      <li>• Performance Expert</li>
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">관리 및 리더십</h3>
                    <ul className="space-y-1">
                      <li>• Team Lead</li>
                      <li>• Project Manager</li>
                      <li>• Creative Director</li>
                      <li>• CTO</li>
                      <li>• Agency Owner</li>
                    </ul>
                  </div>
                  <div className="text-orange-200">
                    <h3 className="font-semibold mb-2">비즈니스 발전</h3>
                    <ul className="space-y-1">
                      <li>• Consultant</li>
                      <li>• Entrepreneur</li>
                      <li>• Digital Strategist</li>
                      <li>• Product Manager</li>
                      <li>• Educator/Trainer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 성공을 위한 조언 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                성공을 위한 조언
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="포트폴리오 구축"
                  items={[
                    "**다양성:** 여러 스타일과 기술 시연",
                    "**품질:** 완성도 높은 프로젝트 선별",
                    "**과정 설명:** 문제 해결 과정 포함",
                    "**사용자 중심:** UX/UI 고려사항 설명",
                    "**반응형:** 모바일 호환성 시연",
                    "**정기 업데이트:** 최신 트렌드 반영"
                  ]}
                />

                <BoxListComponent
                  title="지속적 학습"
                  items={[
                    "**트렌드 파악:** 디자인/기술 트렌드 추적",
                    "**온라인 학습:** Coursera, Udemy, YouTube",
                    "**커뮤니티:** 개발자/디자이너 모임 참여",
                    "**오픈소스:** GitHub 프로젝트 기여",
                    "**컨퍼런스:** 업계 이벤트 참가",
                    "**실험:** 새로운 도구와 기법 시도"
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="네트워킹"
                  items={[
                    "**업계 이벤트:** 밋업, 컨퍼런스 참석",
                    "**온라인 커뮤니티:** Slack, Discord 그룹",
                    "**멘토링:** 경험자와의 관계 구축",
                    "**협업 프로젝트:** 팀 프로젝트 참여",
                    "**소셜 미디어:** LinkedIn, Twitter 활용",
                    "**지역 모임:** 밴쿠버 지역 개발자 그룹"
                  ]}
                />

                <BoxListComponent
                  title="비즈니스 스킬"
                  items={[
                    "**클라이언트 소통:** 요구사항 파악 및 설명",
                    "**프로젝트 관리:** 일정 및 예산 관리",
                    "**프레젠테이션:** 아이디어 효과적 전달",
                    "**협상:** 계약 조건 협의",
                    "**마케팅:** 개인 브랜드 구축",
                    "**재정 관리:** 수익 및 비용 관리"
                  ]}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">장기적 관점</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "트렌드 대응:",
                    items: [
                      "AI/ML 통합 기술 학습",
                      "모바일 퍼스트 접근법",
                      "접근성 및 포용성 디자인",
                      "성능 최적화 전문성",
                      "보안 인식 개발"
                    ]
                  }}
                  rightColumn={{
                    title: "개인 발전:",
                    items: [
                      "창의적 사고력 배양",
                      "문제 해결 능력 향상",
                      "적응력과 유연성",
                      "리더십 스킬 개발",
                      "글로벌 마인드셋"
                    ]
                  }}
                />
              </div>
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                참고 자료 및 리소스
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleReferenceListComponent
                  title="정부 및 교육 기관"
                  items={[
                    "• BC Institute of Technology (BCIT)",
                    "• WorkBC - Web Developer 정보",
                    "• EducationPlanner BC",
                    "• Make a Future BC",
                    "• Industry Training Authority (ITA)"
                  ]}
                />
                <SimpleReferenceListComponent
                  title="업계 단체 및 커뮤니티"
                  items={[
                    "• Vancouver Web Developers Meetup",
                    "• Creative BC",
                    "• BC Technology Association",
                    "• Design BC",
                    "• CodeCore Developer Bootcamp"
                  ]}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900  rounded-lg">
                <p className="text-gray-200">
                  웹 디자인과 개발 분야는 빠르게 변화하는 기술 환경에서 지속적인 학습과 적응이
                  필요한 분야입니다. 창의성과 기술력을 균형있게 발전시키며, 사용자 중심의
                  사고를 기르는 것이 성공의 열쇠입니다. 자세한 정보는 각 교육기관과
                  업계 전문가들의 조언을 참고하시기 바랍니다.
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <div className="container mx-auto px-4 pb-8">
            <JobAcademyNavigation currentJobId={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job14;

