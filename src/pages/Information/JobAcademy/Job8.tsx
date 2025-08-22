import React from 'react';
import { useTranslation } from 'react-i18next';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SubSectionWithList, ReferenceListComponent, InfoBoxComponent, StepGuideComponent, TitledTwoColumnListComponent, SingleTitledListComponent } from './InfoSubComponent';

const Job8: React.FC = () => {
  const { t } = useTranslation(['info_job8']);

  // 헬스케어 분야 장점 및 진로 옵션 데이터
  const healthcareAdvantages = {
    title: "헬스케어 분야의 장점",
    items: [
      "안정적인 고용 기회",
      "지속적인 수요 증가",
      "다양한 진로 선택",
      "사회적 기여 가능",
      "전문성 개발 기회"
    ],
    borderColor: "border-blue-500"
  };

  const careerOptions = {
    title: "주요 진로 옵션",
    items: [
      "Certified Dental Assistant (CDA)",
      "Healthcare Aide (HCA)",
      "Practical Nurse (PN/RPN/RN)",
      "Medical Office Assistant",
      "Pharmacy Technician"
    ],
    borderColor: "border-emerald-500"
  };

  // CDA 관련 데이터들
  const cdaPublicColleges = {
    title: "Public Colleges",
    items: [
      "Camosun College (Victoria)",
      "College of New Caledonia (Prince George)",
      "College of the Rockies (Cranbrook)",
      "Okanagan College (Kelowna)",
      "Vancouver Community College",
      "Vancouver Island University (Nanaimo)",
      "University of the Fraser Valley"
    ]
  };

  const cdaPrivateColleges = {
    title: "Private Colleges",
    items: [
      "CDI College (Burnaby, Surrey)",
      "Discovery Community College (Surrey)",
      "Sprott Shaw College (Surrey)",
      "Western Community College (Surrey)"
    ],
    borderColor: "border-cyan-500"
  };

  const cdaEducationOverview = {
    title: "CDA 교육과정 Overview",
    items: [
      "교육기간: 약 8개월 ~ 1년 미만 Full-time certificate",
      "매주/매 chapter 종료 후 자체 시험 실시",
      "기준 점수 미달시 3번의 재시험 기회",
      "2주간 실습 과정 (Practicum) 2회 진행 필수",
      "CDA 자격 취득시 구강 내 업무 수행 가능"
    ],
    borderColor: "border-emerald-500"
  };

  const cdaAdmissionRequirements = {
    title: "입학 조건",
    items: [
      "영어 12학년 과정",
      "생물 (Biology) 11, 12학년 과정",
      "캐나다 학교 미졸업자는 공인 영어 점수 필요",
      "예: IELTS Academic 6.0"
    ],
    borderColor: "border-yellow-500"
  };

  // HCA 관련 데이터들
  const hcaEducationOverview = {
    title: "HCA 교육과정 Overview",
    items: [
      "교육기간: 약 7개월 ~ 1년 미만 Full-time certificate",
      "과정 이수시 BC Care Aide & Community Health Worker Registry 자격 인정",
      "실습 과정 포함",
      "다양한 헬스케어 환경에서 근무 가능"
    ],
    borderColor: "border-emerald-500"
  };

  const hcaEnglishRequirements = {
    title: "영어 입학 조건",
    items: [
      "English 10 or equivalent (영어가 모국어인 경우)",
      "표준화된 영어 능력 시험 (영어가 모국어가 아닌 경우)",
      "TOEFL (IBT): 76",
      "IELTS: overall 6 with no score lower than 5.5",
      "CLBPT: R/W 6 & S/L 7",
      "CELPIP: R/W 6 & L/S 7"
    ],
    borderColor: "border-yellow-500"
  };

  const hcaPublicColleges = {
    title: "Public Colleges (Registry Full Recognition)",
    items: [
      "Burnaby School District – Continuing Education",
      "Camosun College",
      "Capilano University",
      "Douglas College",
      "Kwantlen Polytechnic University (KPU)",
      "Langara College",
      "Vancouver Community College",
      "University of Fraser Valley"
    ],
    borderColor: "border-sky-500"
  };

  const hcaPrivateColleges = {
    title: "Private Colleges",
    items: [
      "Cambria College",
      "Canadian Healthcare Academy",
      "CDI College",
      "Gateway College",
      "Heritage Community College",
      "Pacific Coast Community College",
      "Sprott Shaw College",
      "Stenberg College",
      "Western Community College"
    ],
    borderColor: "border-sky-500"
  };

  // CDA vs HCA 비교 및 커리어 팁 데이터
  const cdaVsHcaComparison = {
    title: "CDA vs HCA 비교",
    steps: [
      {
        stepTitle: "CDA (치과보조사)",
        stepDescription: "치과 전문 분야, 구강 내 업무 가능, 상대적으로 높은 전문성, 치과 클리닉 환경",
        borderColor: "border-blue-400",
        titleColor: "text-blue-300"
      },
      {
        stepTitle: "HCA (헬스케어 보조사)",
        stepDescription: "광범위한 헬스케어 지원, 다양한 근무 환경, 높은 수요, 간호 분야 진출 연계",
        borderColor: "border-green-400",
        titleColor: "text-green-300"
      }
    ]
  };

  const healthcareCareerTips = {
    title: "성공적인 헬스케어 커리어를 위한 팁",
    items: [
      "영어 실력 향상이 가장 중요",
      "인간적 소통 능력 개발",
      "지속적인 전문 교육 참여",
      "실습 기간 최대 활용",
      "네트워킹과 멘토링 활용",
      "문화적 이해와 적응"
    ],
    borderColor: "border-emerald-500"
  };

  const nextStepsPlan = {
    title: "다음 단계 계획",
    steps: [
      {
        stepTitle: "1. 준비 단계",
        stepDescription: "영어 능력 평가, 관심 분야 결정, 학교 정보 수집, 재정 계획 수립",
        borderColor: "border-blue-400",
        titleColor: "text-blue-300"
      },
      {
        stepTitle: "2. 지원 단계",
        stepDescription: "입학 요건 확인, 지원서 작성, 영어 시험 응시, 인터뷰 준비",
        borderColor: "border-green-400",
        titleColor: "text-green-300"
      },
      {
        stepTitle: "3. 학습 단계",
        stepDescription: "성실한 수업 참여, 실습 기회 활용, 자격 시험 준비, 취업 준비",
        borderColor: "border-yellow-400",
        titleColor: "text-yellow-300"
      }
    ]
  };

  // 참고 자료 데이터
  const referenceData = {
    leftColumn: {
      items: [
        "BC Dental Association 웹사이트",
        "CDSBC (College of Dental Surgeons of BC)",
        "NDAEB (National Dental Assisting Examining Board)",
        "각 교육기관 공식 웹사이트"
      ]
    },
    rightColumn: {
      items: [
        "BC Care Aide & Community Health Worker Registry",
        "Health Authority 채용 정보",
        "각 교육기관 프로그램 정보",
        "WorkBC 직업 정보"
      ]
    }
  };

  // HCA Career Options 데이터
  const hcaCareerOptions = {
    leftColumn: {
      title: "**직접 관련 직업: **",
      items: [
        "Home Health Care Worker",
        "Residential Care Attendant",
        "Health Care Assistant",
        "Community Support Worker",
        "Nursing Aide"
      ]
    },
    rightColumn: {
      title: "**발전 가능성: **",
      items: [
        "PN/RPN/RN Career 전향 시",
        "HCA 과정의 Credits 인정",
        "추가 전문 교육 기회",
        "관리직 진출 가능"
      ]
    }
  };

  // CDA 자격시험 관련 데이터
  const cdaExamProcess = {
    title: "시험 과정",
    items: [
      "공인 교육기관 과정 이수 후 국가고시 지원 자격 부여",
      "NDAEB(National Dental Assisting Examining Board) 필기 시험",
      "CDSBC 인증 (BC주)"
    ]
  };

  const cdaLevelClassification = {
    title: "레벨 구분",
    items: [
      "Level I - 치료의자 보조",
      "Level II - 구강 내 치료 보조",
      "교육, 훈련 및 면허를 통해 Level I에서 Level II로 승급"
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
            {t('info_job8:title')}
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
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 8</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {t('info_job8:lectureSubtitle').split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < t('info_job8:lectureSubtitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* 헬스케어 커리어 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Healthcare Career in Canada
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <p className="text-gray-200 text-lg mb-6">
                캐나다 헬스케어 분야는 다양한 기회를 제공하는 안정적이고 성장하는 산업입니다.
                특히 BC주에서는 CDA(Certified Dental Assistant)와 HCA(Healthcare Aide) 등의
                자격증을 통해 헬스케어 분야에 진출할 수 있습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SubSectionWithList
                  title={healthcareAdvantages.title}
                  items={healthcareAdvantages.items}
                  borderColor={healthcareAdvantages.borderColor}
                />

                <SubSectionWithList
                  title={careerOptions.title}
                  items={careerOptions.items}
                  borderColor={careerOptions.borderColor}
                />
              </div>
            </div>
          </section>

          {/* CDA - Certified Dental Assistant */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Healthcare Career 01: Certified Dental Assistant (CDA)
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">CDA가 하는 일</h3>
                <p className="text-gray-200 text-lg mb-6">
                  CDA는 BC Province에서 인정하는 College에서 Diploma 과정을 이수한 사람으로,
                  치과 의사나 치위생사 등의 지시하에 환자를 치료하는 치과의사 옆에서
                  치료과정에 필요한 지원활동을 할 수 있는 자격이 부여된 치과보조사입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="bg-cyan-700/10 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">CDA가 되는 방법</h3>
                  <p className="text-gray-200 mb-2">
                    아래의 대표적인 교육기관에서 과정을 이수하면 국가고시를 지원할 자격이 부여되며,
                    시험에 합격함으로써 자격을 획득할 수 있습니다.
                  </p>
                  <SingleTitledListComponent
                    title={cdaPublicColleges.title}
                    items={cdaPublicColleges.items}
                    titleClass="font-semibold mb-2"
                    textColor="text-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={cdaPrivateColleges.title}
                  items={cdaPrivateColleges.items}
                  borderColor={cdaPrivateColleges.borderColor}
                />

                <SubSectionWithList
                  title={cdaEducationOverview.title}
                  items={cdaEducationOverview.items}
                  borderColor={cdaEducationOverview.borderColor}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={cdaAdmissionRequirements.title}
                  items={cdaAdmissionRequirements.items}
                  borderColor={cdaAdmissionRequirements.borderColor}
                />

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">CDA 자격시험 Overview</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <SingleTitledListComponent
                      title={cdaExamProcess.title}
                      items={cdaExamProcess.items}
                      titleClass="mb-2 font-bold"
                      textColor="text-gray-200"
                    />
                    <SingleTitledListComponent
                      title={cdaLevelClassification.title}
                      items={cdaLevelClassification.items}
                      titleClass="mb-2 font-bold"
                      textColor="text-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HCA - Healthcare Aide */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Healthcare Career 02: Healthcare Aide (HCA)
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">HCA가 하는 일</h3>
                <p className="text-gray-200 text-lg mb-6">
                  HCA는 노인, 부상자, 장애인, 만성질환자 등 다양한 영역에서 정상적인 일상생활을
                  영위할 수 있도록 생활 전반을 지원하는 일을 합니다. In-home care, community support,
                  residential care facilities, long-term care facilities 등 다양한 곳에서 HCA를 필요로 합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={hcaEducationOverview.title}
                  items={hcaEducationOverview.items}
                  borderColor={hcaEducationOverview.borderColor}
                />

                <SubSectionWithList
                  title={hcaEnglishRequirements.title}
                  items={hcaEnglishRequirements.items}
                  borderColor={hcaEnglishRequirements.borderColor}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={hcaPublicColleges.title}
                  items={hcaPublicColleges.items}
                  borderColor={hcaPublicColleges.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={hcaPrivateColleges.title}
                  items={hcaPrivateColleges.items}
                  borderColor={hcaPrivateColleges.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">HCA Career Options</h3>
                <TitledTwoColumnListComponent
                  leftColumn={hcaCareerOptions.leftColumn}
                  rightColumn={hcaCareerOptions.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* 헬스케어 커리어 선택 가이드 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                헬스케어 커리어 선택 가이드
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <StepGuideComponent
                  title={cdaVsHcaComparison.title}
                  steps={cdaVsHcaComparison.steps}
                  bgColor="bg-gray-900"
                  textColor="text-white"
                />

                <SubSectionWithList
                  title={healthcareCareerTips.title}
                  items={healthcareCareerTips.items}
                  borderColor={healthcareCareerTips.borderColor}
                />
              </div>

              <InfoBoxComponent
                title={nextStepsPlan.title}
                description=""
                items={nextStepsPlan.steps.map(step => `${step.stepTitle}: ${step.stepDescription}`)}
                bgColor="bg-grey-900 border border-grey-600"
                textColor="text-grey-200"
              />
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                참고 자료 및 연락처
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-6">
                <ReferenceListComponent
                  leftColumn={{ items: ["CDA 관련 정보", ...referenceData.leftColumn.items] }}
                  rightColumn={{ items: ["HCA 관련 정보", ...referenceData.rightColumn.items] }}
                />
              </div>

              <div className="mt-6 p-4 bg-gray-900  rounded-lg">
                <p className="text-white text-sm">
                  헬스케어 분야는 지속적으로 성장하는 분야입니다. 자세한 정보는 각 교육기관과
                  관련 기관의 공식 웹사이트를 참고하시고, 개인 상황에 맞는 상담을 받으시기 바랍니다.
                </p>
              </div>
            </div>
          </section>


          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={8} />
        </div>
      </div>
    </div>
  );
};

export default Job8;

