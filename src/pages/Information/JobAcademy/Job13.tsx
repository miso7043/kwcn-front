import React from 'react';
import { useTranslation } from 'react-i18next';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, TitledTwoColumnListComponent, MultiColumnListComponent, SimpleReferenceListComponent } from './InfoSubComponent';

const Job13: React.FC = () => {
  const { t } = useTranslation(['info_job13']);

  // Community Worker 관련 데이터
  const communityWorkerMainTasks = {
    title: "주요 업무",
    items: [
      "개별 상담 및 사례 관리",
      "그룹 프로그램 기획 및 운영",
      "지역사회 자원 연결 및 조정",
      "클라이언트 사정(Assessment) 및 서비스 계획",
      "위기 개입 및 긴급 지원",
      "지역사회 교육 및 워크샵 진행",
      "정책 연구 및 개선 활동"
    ],
    borderColor: "border-blue-500"
  };

  const serviceTargets = {
    title: "서비스 대상",
    items: [
      "**아동 및 청소년:** 보호와 발달 지원",
      "**가족:** 가족 갈등 해결 및 기능 강화",
      "**여성:** 폭력 피해자 및 한부모 가정",
      "**노인:** 독립 생활 지원 및 돌봄",
      "**장애인:** 접근성 향상 및 권익 보호",
      "**이민자/난민:** 정착 지원 및 통합",
      "**노숙자:** 주거 및 생활 안정 지원",
      "**정신건강:** 회복 및 사회복귀 지원"
    ],
    borderColor: "border-green-500"
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {t('info_job13:title')}
          </h1>
        </div>
      </div>

      {/* Lecture 1 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 13</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {t('info_job13:lectureSubtitle').split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < t('info_job13:lectureSubtitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* Community Worker 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Community Worker (지역사회복지사)
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Community Worker가 하는 일</h3>
                <p className="text-gray-200 mb-6">
                  Community Worker는 다양한 인구 집단과 함께 일하며, 지역사회 내 비영리 조직에서
                  개인과 가족, 그룹의 삶의 질 향상을 위해 노력하는 전문가입니다.
                  사회적 취약계층을 지원하고 지역사회 자원을 연결하여 포용적이고 지속가능한
                  지역사회 발전에 기여합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={communityWorkerMainTasks.title}
                  items={communityWorkerMainTasks.items}
                  borderColor={communityWorkerMainTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={serviceTargets.title}
                  items={serviceTargets.items}
                  borderColor={serviceTargets.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">Community Worker의 가치와 원칙</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "핵심 가치:",
                    items: [
                      "**인간의 존엄성:** 모든 개인의 내재적 가치 인정",
                      "**사회정의:** 불평등 해소와 공정성 추구",
                      "**인권:** 기본권 보장과 옹호",
                      "**다양성:** 문화적 차이와 정체성 존중"
                    ]
                  }}
                  rightColumn={{
                    title: "실천 원칙:",
                    items: [
                      "**클라이언트 중심:** 당사자의 자기결정권 존중",
                      "**강점 기반:** 개인과 지역의 역량 강화",
                      "**협력적 접근:** 다분야 전문가와의 팀워크",
                      "**지속적 학습:** 전문성 개발과 혁신"
                    ]
                  }}
                />
              </div>
            </div>
          </section>

          {/* 근무 환경 및 분야 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                근무 환경 및 분야
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="비영리 조직"
                  items={[
                    "**사회복지관:** 종합적 지역사회 서비스",
                    "**상담센터:** 전문 상담 및 치료 서비스",
                    "**여성단체:** 여성과 아동 보호 및 지원",
                    "**정신건강센터:** 정신질환 회복 지원",
                    "**장애인단체:** 장애인 권익 옹호 및 서비스",
                    "**이민자 지원기관:** 정착 및 통합 서비스"
                  ]}
                />

                <BoxListComponent
                  title="공공 부문"
                  items={[
                    "**보건당국:** 지역 보건 및 복지 서비스",
                    "**지방정부:** 지역사회 개발 프로그램",
                    "**학교:** 학교 사회복지사",
                    "**병원:** 의료 사회복지사",
                    "**교정시설:** 재활 및 사회복귀 지원",
                    "**아동보호:** 아동 안전 및 가족 지원"
                  ]}
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">특수 분야 및 전문성</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">임상 분야</h3>
                    <ul className="space-y-1">
                      <li>• 정신건강 상담</li>
                      <li>• 가족치료</li>
                      <li>• 그룹 치료</li>
                      <li>• 위기 개입</li>
                      <li>• 트라우마 치료</li>
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">지역사회 조직</h3>
                    <ul className="space-y-1">
                      <li>• 지역사회 개발</li>
                      <li>• 사회 운동 조직</li>
                      <li>• 정책 분석 및 옹호</li>
                      <li>• 자원 개발</li>
                      <li>• 네트워크 구축</li>
                    </ul>
                  </div>
                  <div className="text-blue-200">
                    <h3 className="font-semibold mb-2">연구 및 교육</h3>
                    <ul className="space-y-1">
                      <li>• 사회문제 연구</li>
                      <li>• 프로그램 평가</li>
                      <li>• 지역사회 교육</li>
                      <li>• 전문가 교육</li>
                      <li>• 정책 연구</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 자격 및 교육 요건 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                자격 및 교육 요건
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="교육 요건"
                  items={[
                    "**최소:** 사회복지학 학사 (BSW)",
                    "**선호:** 사회복지학 석사 (MSW)",
                    "**관련전공:** 심리학, 사회학, 인류학",
                    "**특수분야:** 아동복지, 정신건강, 지역개발",
                    "**평생교육:** 지속적 전문 교육 필수"
                  ]}
                />

                <BoxListComponent
                  title="전문 자격"
                  items={[
                    "**BC주:** BC College of Social Workers 등록",
                    "**캐나다:** CASW 회원 자격",
                    "**추가:** 상담 관련 전문 자격증",
                    "**언어:** 다문화 서비스를 위한 언어 능력",
                    "**특수:** 분야별 전문 인증 (예: 정신건강)"
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="실무 경험"
                  items={[
                    "**현장실습:** 학위 과정 중 필수 실습",
                    "**자원봉사:** 관련 분야 자원봉사 경험",
                    "**인턴십:** 졸업 후 수습 기간",
                    "**지도감독:** 경험 있는 사회복지사의 슈퍼비전",
                    "**지속교육:** 정기적 보수교육 참여"
                  ]}
                />

                <BoxListComponent
                  title="개인적 자질"
                  items={[
                    "**공감능력:** 타인의 고통에 대한 이해",
                    "**의사소통:** 효과적인 대화 및 경청 기술",
                    "**문제해결:** 복잡한 상황에 대한 분석력",
                    "**인내심:** 장기적인 변화 과정에 대한 이해",
                    "**윤리의식:** 전문적 윤리와 가치 준수"
                  ]}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">BC주 주요 교육기관</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">학사 프로그램 (BSW):</h3>
                    <ul className="space-y-1">
                      <li>• University of British Columbia (UBC)</li>
                      <li>• Simon Fraser University (SFU)</li>
                      <li>• University of Victoria (UVic)</li>
                      <li>• Thompson Rivers University (TRU)</li>
                      <li>• University of Northern BC (UNBC)</li>
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">석사 프로그램 (MSW):</h3>
                    <ul className="space-y-1">
                      <li>• UBC School of Social Work</li>
                      <li>• SFU School of Social Work</li>
                      <li>• UVic School of Social Work</li>
                      <li>• Royal Roads University (일부 과정)</li>
                      <li>• 온라인 프로그램 (일부 대학)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 진로 발전 및 전망 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                진로 발전 및 전망
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="초급에서 고급까지"
                  items={[
                    "**초급:** 사례관리, 직접 서비스 제공",
                    "**중급:** 프로그램 개발, 팀 리더십",
                    "**고급:** 정책 개발, 조직 관리",
                    "**전문가:** 컨설턴트, 연구자, 교육자",
                    "**관리직:** 기관장, 부서장"
                  ]}
                />

                <BoxListComponent
                  title="전문 분야 발전"
                  items={[
                    "**임상:** 심리치료사, 가족치료사",
                    "**정책:** 정책 분석가, 옹호 전문가",
                    "**연구:** 사회복지 연구원, 교수",
                    "**국제:** 국제개발, 인도주의 활동",
                    "**기업:** 기업 사회책임, EAP 상담"
                  ]}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">취업 시장 전망</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "긍정적 요인:",
                    items: [
                      "고령화 사회로 인한 수요 증가",
                      "정신건강 서비스 확대",
                      "다문화 사회의 사회통합 필요",
                      "정부의 사회복지 투자 확대",
                      "코로나19 이후 사회안전망 강화"
                    ]
                  }}
                  rightColumn={{
                    title: "도전 요소:",
                    items: [
                      "예산 제약으로 인한 일자리 제한",
                      "높은 업무 스트레스와 번아웃",
                      "상대적으로 낮은 보수 수준",
                      "지속적인 전문 교육 필요",
                      "복잡한 사회문제 증가"
                    ]
                  }}
                />
              </div>
            </div>
          </section>

          {/* 급여 및 근무 조건 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                급여 및 근무 조건
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="급여 수준 (BC주 기준)"
                  items={[
                    "**신입:** $45,000 - $55,000 (연봉)",
                    "**경력:** $55,000 - $75,000",
                    "**고급:** $75,000 - $95,000",
                    "**관리직:** $85,000 - $120,000+",
                    "**컨설턴트:** 시간당 $50 - $150"
                  ]}
                />

                <BoxListComponent
                  title="근무 조건"
                  items={[
                    "**근무시간:** 주 35-40시간 (일반적)",
                    "**유연성:** 탄력근무, 재택근무 가능",
                    "**야간/주말:** 위기상황 시 필요",
                    "**복리후생:** 건강보험, 연금, 유급휴가",
                    "**교육지원:** 지속교육 비용 지원"
                  ]}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">업무의 보람과 도전</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "보람 있는 점:",
                    items: [
                      "개인과 가족의 삶에 직접적 도움",
                      "사회정의 실현에 기여",
                      "지역사회 변화 주도",
                      "다양한 사람들과의 만남",
                      "지속적인 학습과 성장",
                      "의미 있는 일에 대한 만족감"
                    ]
                  }}
                  rightColumn={{
                    title: "도전적인 점:",
                    items: [
                      "높은 정서적 부담",
                      "복잡한 사회문제 대응",
                      "제한된 자원과 시간",
                      "관료주의적 제약",
                      "클라이언트의 저항이나 갈등",
                      "업무 스트레스와 번아웃 위험"
                    ]
                  }}
                />
              </div>
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                참고 자료 및 연락처
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleReferenceListComponent
                  title="전문 단체"
                  items={[
                    "• BC College of Social Workers (BCCSW)",
                    "• Canadian Association of Social Workers (CASW)",
                    "• BC Association of Social Workers (BCASW)",
                    "• Community Social Planning Council",
                    "• United Way BC"
                  ]}
                />
                <SimpleReferenceListComponent
                  title="정부 기관 및 자료"
                  items={[
                    "• BC Ministry of Social Development",
                    "• WorkBC - Social Worker 정보",
                    "• EducationPlanner BC",
                    "• Make a Future BC",
                    "• BC Non-Profit Housing Association"
                  ]}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200">
                  Community Worker는 사회의 가장 취약한 계층을 지원하고 지역사회 전체의 복리 증진에
                  기여하는 중요한 직업입니다. 자세한 정보는 BC College of Social Workers와
                  각 대학의 사회복지학과 웹사이트를 참고하시고, 개인의 가치관과 적성을 신중히
                  고려하여 선택하시기 바랍니다.
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <div className="container mx-auto px-4 pb-8">
            <JobAcademyNavigation currentJobId={13} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job13;

