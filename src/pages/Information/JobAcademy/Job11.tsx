import React from 'react';
import { useTranslation } from 'react-i18next';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SubSectionWithList, SmallTitleListComponent, BorderedListComponent, BoxListComponent, SimpleReferenceListComponent, MultiColumnListComponent, TitleDescriptionGridComponent, ThreeColumnStepComponent, TableComponent } from './InfoSubComponent';

const Job11: React.FC = () => {
  const { t } = useTranslation(['info_job11']);

  // Skilled Trades 관련 데이터
  const skilledTradesAdvantages = {
    title: "Skilled Trades의 장점",
    items: [
      "높은 급여와 안정적인 고용",
      "실무 중심의 교육과 즉시 적용 가능한 기술",
      "견습 기간 중에도 급여 지급",
      "지속적인 수요와 성장 가능성",
      "독립 사업 운영 기회",
      "전 캐나다에서 인정되는 자격"
    ],
    borderColor: "border-blue-500"
  };

  const itaBcInfo = {
    title: "주요 정보 출처",
    items: [
      "**ITA BC (Industry Training Authority BC)**에서 모든 Trades 관련 정보를 제공합니다.",
      "Trade Program 종류 정보",
      "자격 확보를 위한 교육 시간",
      "작업 기반 교육 시간 정보",
      "견습프로그램 검색"
    ],
    borderColor: "border-green-500"
  };

  // Automotive Service Technician 데이터
  const autoTechMainTasks = {
    title: "주요 업무",
    items: [
      "자동차 시스템 검사 및 진단",
      "기계적 문제 수리",
      "전기 및 전자 시스템 정비",
      "정기 점검 및 유지보수",
      "부품 교체 및 조정",
      "고객 상담 및 견적 제공"
    ],
    borderColor: "border-blue-500"
  };

  const autoTechRequiredSkills = {
    title: "필요 기술",
    items: [
      "기계 및 전자 시스템 이해",
      "진단 도구 사용 능력",
      "문제해결 능력",
      "정밀한 손 기술",
      "안전 절차 준수",
      "지속적인 기술 업데이트"
    ]
  };

  const autoTechBasicRequirements = {
    title: "기본 요구사항",
    items: [
      "**최소 조건:** 고등학교 졸업장",
      "BC주에서는 자격증이 필수가 아님",
      "하지만 자격증이 있으면 취업에 유리",
      "현장 경험과 교육 병행 권장"
    ]
  };

  const autoTechCertificationProcess = {
    title: "자격증 취득 방법",
    items: [
      "고용주(스폰서) 확보 후",
      "3-4년의 견습 프로그램 이수",
      "또는 업계 수년간 경험 후 추가 교육",
      "고등학교, 대학, 산업 과정 수강"
    ]
  };

  // BC주 교육기관 데이터
  const bcEducationInstitutions1 = [
    "BCIT",
    "Camosun College",
    "College of New Caledonia",
    "Coast Mountain College",
    "College of the Rockies",
    "Kwantlen Polytechnic University",
    "North Island College"
  ];

  const bcEducationInstitutions2 = [
    "Northern Lights College",
    "Okanagan College",
    "Thompson Rivers University",
    "University of the Fraser Valley",
    "Vancouver Community College",
    "Vancouver Island University"
  ];

  // Electrician 교육기관 데이터
  const electricianPublicInstitutions = [
    "British Columbia Institute of Technology (BCIT)",
    "Kwantlen Polytechnic University (KPU)",
    "University of Fraser Valley (UFV)"
  ];

  const electricianPrivateInstitutions = [
    "Electrical Joint Training Committee",
    "Sprott Shaw College",
    "Vancouver Career College"
  ];

  // Electrician 업무 및 분야 데이터
  const electricianMainTasks = {
    title: "주요 업무",
    items: [
      "전기 시스템 계획 및 설계",
      "전기 배선 설치 및 연결",
      "전기 시스템 검사 및 시험",
      "유지보수 및 수리",
      "안전 규정 준수",
      "전기 코드 및 규격 따르기"
    ]
  };

  const electricianApplicationAreas = {
    title: "적용 분야",
    items: [
      "주거용 건물",
      "상업 및 산업 시설",
      "교통 시설",
      "해양 시설",
      "엔터테인먼트 시설",
      "제어 시스템"
    ]
  };

  const electricianBasicRequirements = {
    title: "기본 요구사항",
    items: [
      "색상 구별 능력 (배선 작업을 위해)",
      "**최소 조건:** 최근 12학년 졸업생 (5년 이내)",
      "수학 11, 물리학 11",
      "영어 12 또는 커뮤니케이션 12"
    ]
  };

  const electricianApprenticeshipProgram = {
    title: "견습 프로그램 구성",
    items: [
      "레벨 1~4의 기술 교육",
      "레벨 3 test: 10주 (300시간) 교육 필수",
      "스폰서 동의 필요",
      "6,000시간의 작업 기반 교육 필수"
    ]
  };

  // Automotive vs Electrician 비교 데이터
  const automotiveAdvantages = [
    "상대적으로 낮은 진입 장벽",
    "자격증 선택사항",
    "자동차 산업 중심",
    "기술 발전에 따른 지속 학습"
  ];

  const electricianAdvantages = [
    "높은 전문성과 급여",
    "엄격한 안전 규정",
    "다양한 산업 분야 적용",
    "지속적인 수요 보장"
  ];

  // 기타 Skilled Trades 데이터
  const constructionTrades = {
    title: "건설 분야",
    items: [
      "Carpenter (목수)",
      "Plumber (배관공)",
      "HVAC Technician",
      "Heavy Equipment Operator",
      "Welder (용접공)"
    ]
  };

  const manufacturingTrades = {
    title: "제조 및 기술",
    items: [
      "Machinist (기계공)",
      "Millwright",
      "Industrial Mechanic",
      "Electronics Technician",
      "Instrumentation Technician"
    ]
  };

  const serviceTrades = {
    title: "서비스 분야",
    items: [
      "Cook (요리사)",
      "Baker (제빵사)",
      "Hairstylist",
      "Automotive Painter",
      "Landscape Horticulturist"
    ]
  };

  // 참고 자료 데이터
  const governmentAgencies = [
    "ITA BC (Industry Training Authority BC)",
    "WorkBC Skilled Trades 정보",
    "BC Ministry of Advanced Education",
    "Employment and Social Development Canada"
  ];

  const industryAssociations = [
    "BC Construction Association",
    "Electrical Contractors Association",
    "Automotive Retailers Association",
    "각 Trade별 Professional Association"
  ];

  // Career Options 데이터
  const careerOptions1 = [
    "Automotive service repair facilities",
    "Motor vehicle dealers",
    "Truck and trailer dealers"
  ];

  const careerOptions2 = [
    "Fleet maintenance companies",
    "Transportation companies",
    "Motor vehicle manufacturing companies"
  ];

  // Skilled Trades 전망 데이터
  const positiveFactors = [
    "캐나다 인프라 투자 증가",
    "기술자 부족으로 인한 높은 수요",
    "견습 기간 중에도 급여 지급",
    "대학 학위 없이도 높은 급여",
    "독립 사업 운영 기회"
  ];

  const considerations = [
    "물리적으로 요구되는 작업",
    "안전사고 위험성",
    "날씨나 환경의 영향",
    "지속적인 기술 업데이트 필요",
    "초기 견습 기간의 낮은 급여"
  ];

  // 성공 요인 데이터
  const successFactors = {
    title: "성공 요인",
    items: [
      "**실무 능력:** 이론보다 실제 기술 중요",
      "**안전 의식:** 작업 안전 규정 철저 준수",
      "**지속 학습:** 기술 발전에 따른 업데이트",
      "**체력:** 물리적 작업 수행 능력",
      "**문제해결:** 창의적 해결책 도출",
      "**팀워크:** 다른 기술자들과의 협력"
    ]
  };

  // 참고 웹사이트 데이터
  const referenceWebsites = [
    {
      title: "**ITA BC 메인:** www.itabc.ca",
      description: "기술직 전반에 대한 모든 정보"
    },
    {
      title: "**Trade Programs:** Search Programs",
      description: "구체적인 프로그램별 정보 검색"
    }
  ];

  // Training & Apprenticeships 데이터
  const trainingApprenticeships = [
    {
      title: "IBEW 213",
      description: "ejtc.org/apprenticeships/prerequisites-for-apprenticeship/"
    },
    {
      title: "BC Hydro",
      description: "bchydro.com/careers/students_grads/apprenticeships/electrician.html"
    }
  ];

  // 견습 과정 시작 방법 데이터
  const apprenticeshipSteps = [
    {
      title: "중등학교에서 시작",
      description: "고등학교 재학 중 관련 프로그램 참여"
    },
    {
      title: "대학 기관 프로그램",
      description: "대학 및 기술 기관의 초급 교육 프로그램"
    },
    {
      title: "현장에서 시작",
      description: "현장에서 일하며 견습 프로그램 시작",
      textColor: "text-green-200"
    }
  ];

  // 필요 서류 테이블 데이터
  const requiredDocuments = {
    title: "필요 서류",
    headers: ["서류명", "내용", "용도"],
    rows: [
      ["Application Form", "개인정보 및 시험 스케줄링", "Challenge option"],
      ["Employer Declaration", "관련 업무 경험 증명", "경력 인정"],
      ["Statutory Declaration", "자영업/업무경험 증명", "고용주 연락 불가시"]
    ]
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
            {t('info_job11:title')}
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
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 11</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {t('info_job11:lectureSubtitle').split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < t('info_job11:lectureSubtitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* Skilled Trade 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Skilled Trades Overview
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 mb-6">
                  Trades (기술직)은 캐나다에서 높은 수요와 안정적인 고용을 제공하는 분야입니다.
                  전문 기술을 바탕으로 한 실무 중심의 직업으로, 견습프로그램(Apprenticeship)을 통해
                  실제 현장 경험을 쌓으면서 자격을 취득할 수 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={skilledTradesAdvantages.title}
                  items={skilledTradesAdvantages.items}
                  borderColor={skilledTradesAdvantages.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={itaBcInfo.title}
                  items={itaBcInfo.items}
                  borderColor={itaBcInfo.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">참고 웹사이트</h3>
                <TitleDescriptionGridComponent items={referenceWebsites} />
              </div>
            </div>
          </section>

          {/* Automotive Service Technician */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Skilled Trades 01: Automotive Service Technician
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Automotive Service Technician이 하는 일</h3>
                <p className="text-gray-200 mb-6">
                  자동차 기술자, 트럭 및 버스 메카닉은 자동차, 버스 및 상업용 운송 트럭을 수리하는 일을 합니다.
                  자동차 기술자의 업무는 기계, 전기 및 전자 시스템과 차량 부품을 검사, 진단 및 수리하는 일이며,
                  메카닉의 경우 메카닉 유닛에 대한 수리, 교체를 담당하게 됩니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={autoTechMainTasks.title}
                  items={autoTechMainTasks.items}
                />

                <BoxListComponent
                  title={autoTechRequiredSkills.title}
                  items={autoTechRequiredSkills.items}
                />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Automotive Service Technician이 되는 방법</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <BoxListComponent
                    title={autoTechBasicRequirements.title}
                    items={autoTechBasicRequirements.items}
                  />

                  <BoxListComponent
                    title={autoTechCertificationProcess.title}
                    items={autoTechCertificationProcess.items}
                  />
                </div>

                <ThreeColumnStepComponent
                  title="견습 과정 시작 방법"
                  steps={apprenticeshipSteps}
                />

                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <h4 className="text-white font-bold mb-3">BC주 내 교육기관</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SmallTitleListComponent
                      title=""
                      items={bcEducationInstitutions1}
                      textColor="text-gray-200"
                    />
                    <SmallTitleListComponent
                      title=""
                      items={bcEducationInstitutions2}
                      textColor="text-gray-200"
                    />
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="text-white font-bold mb-3">Career Options</h4>
                  <MultiColumnListComponent
                    title=""
                    columns={[careerOptions1, careerOptions2]}
                    bgColor="bg-transparent"
                    gridCols="grid-cols-1 md:grid-cols-2"
                    padding="p-0"
                    marginBottom="mb-0"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Electrician */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Skilled Trades 02: Electrician
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Electrician이 하는 일</h3>
                <p className="text-gray-200 mb-6">
                  건설 전기 기사는 전기 시스템을 계획, 설계, 조립, 설치, 변경, 수리, 검사, 확인, 시운전,
                  연결, 운영, 유지 관리 및 폐기합니다. 전기 시스템은 주거, 상업, 기관, 산업, 교통,
                  해양 및 엔터테인먼트 환경에서 난방, 조명, 전력, 경보, 보안, 통신 및 제어를 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={electricianMainTasks.title}
                  items={electricianMainTasks.items}
                />

                <BoxListComponent
                  title={electricianApplicationAreas.title}
                  items={electricianApplicationAreas.items}
                />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Electrician이 되는 방법</h3>

                {/* 방법 1: 견습프로그램 */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">방법 1: 견습프로그램</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <BoxListComponent
                      title={electricianBasicRequirements.title}
                      items={electricianBasicRequirements.items}
                      titleColor="text-white"
                    />

                    <BoxListComponent
                      title={electricianApprenticeshipProgram.title}
                      items={electricianApprenticeshipProgram.items}
                      titleColor="text-white"
                    />
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg mb-6">
                    <h4 className="text-white font-bold mb-3">Foundation (기초 프로그램)</h4>
                    <p className="text-gray-200 mb-4">
                      Foundation 프로그램은 레벨 2에 직접 진입할 수 있는 지식과 기술을 제공하여
                      고용주의 후원 없이 경력을 시작할 수 있는 대체 경로를 제공합니다.
                    </p>
                    <p className="text-gray-200 text-sm">
                      이는 산업 교육 기관을 통한 직업으로의 대체 경로를 의미합니다.
                    </p>
                  </div>
                </div>

                {/* 교육기관 */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">Electrician 교육기관</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h4 className="text-white font-bold mb-3">Public Institutions</h4>
                      <SmallTitleListComponent
                        title=""
                        items={electricianPublicInstitutions}
                        textColor="text-gray-200"
                      />
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h4 className="text-white font-bold mb-3">Private Institutions</h4>
                      <SmallTitleListComponent
                        title=""
                        items={electricianPrivateInstitutions}
                        textColor="text-gray-200"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h5 className="text-white font-bold mb-3">Training & Apprenticeships</h5>
                    <TitleDescriptionGridComponent
                      items={trainingApprenticeships}
                      titleClass="font-semibold mb-2"
                    />
                  </div>
                </div>

                {/* 방법 2: 자격인증시험 */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">방법 2: 자격인증시험</h4>

                  <p className="text-gray-200 mb-6">
                    해당 기술 분야에 실제 상당한 업무 경험이 있는 경우, 경력인정 신청을 통해
                    캐나다 자격인증 시험을 볼 자격을 획득할 수 있습니다.
                  </p>

                  <TableComponent
                    title={requiredDocuments.title}
                    headers={requiredDocuments.headers}
                    rows={requiredDocuments.rows}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Skilled Trades 선택 가이드 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Skilled Trades 선택 가이드
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">Automotive vs Electrician</h3>
                  <div className="space-y-4">
                    <BorderedListComponent
                      title="Automotive Technician"
                      items={automotiveAdvantages}
                      borderColor="border-blue-400"
                      titleColor="text-blue-300"
                    />
                    <BorderedListComponent
                      title="Electrician"
                      items={electricianAdvantages}
                      borderColor="border-green-400"
                      titleColor="text-green-300"
                    />
                  </div>
                </div>

                <BoxListComponent
                  title={successFactors.title}
                  items={successFactors.items}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">Skilled Trades 전망</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2">긍정적 요인:</h4>
                    <ul className="space-y-1 text-sm">
                      {positiveFactors.map((factor, index) => (
                        <li key={index}>• {factor}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2">고려사항:</h4>
                    <ul className="space-y-1 text-sm">
                      {considerations.map((consideration, index) => (
                        <li key={index}>• {consideration}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 기타 Skilled Trades */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                기타 인기 Skilled Trades
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BoxListComponent
                  title={constructionTrades.title}
                  items={constructionTrades.items}
                  titleColor="text-white"
                />

                <BoxListComponent
                  title={manufacturingTrades.title}
                  items={manufacturingTrades.items}
                  titleColor="text-white"
                />

                <BoxListComponent
                  title={serviceTrades.title}
                  items={serviceTrades.items}
                  titleColor="text-white"
                />
              </div>
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                참고 자료 및 연락처
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleReferenceListComponent
                  title="정부 기관"
                  items={governmentAgencies.map(agency => `• ${agency}`)}
                />
                <SimpleReferenceListComponent
                  title="업계 단체"
                  items={industryAssociations.map(association => `• ${association}`)}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200 text-sm">
                  Skilled Trades는 실무 중심의 안정적인 직업입니다. 자세한 정보는 ITA BC와
                  각 교육기관의 공식 웹사이트를 참고하시고, 개인 적성과 관심사를 고려하여
                  적합한 분야를 선택하시기 바랍니다.
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={11} />
        </div>
      </div>
    </div>
  );
};

export default Job11;

