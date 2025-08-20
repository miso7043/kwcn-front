import React from 'react';
import { useTranslation } from 'react-i18next';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SubSectionWithList, TitledTwoColumnListComponent, SmallTitleListComponent, SimpleTwoColumnListComponent, BorderedListComponent, SimpleTitleListComponent } from './InfoSubComponent';

const Job9: React.FC = () => {
  const { t } = useTranslation();

  // MOA 관련 데이터
  const moaMainTasks = {
    title: "주요 업무",
    items: [
      "환자 진료기록 정리 및 관리",
      "진료예약 스케줄링",
      "의료비 청구 및 보험 처리",
      "환자 접수 및 안내",
      "의료진과 환자 간 소통 지원",
      "병원 행정업무 전반"
    ],
    borderColor: "border-blue-500"
  };

  const moaRequiredSkills = {
    title: "필요 기술",
    items: [
      "의료 용어 이해",
      "컴퓨터 및 소프트웨어 활용",
      "고객 서비스 스킬",
      "정확한 문서 작성 능력",
      "다중 업무 처리 능력",
      "기밀유지 의식"
    ],
    borderColor: "border-green-500"
  };

  const moaEducationOverview = {
    title: "교육과정 Overview",
    items: [
      "**교육기간:** 1년 이내",
      "**졸업 조건:** 3주 실습 (practicum) 필수",
      "본인이 직접 실습 기관을 찾아야 함",
      "실무 중심의 교육과정"
    ],
    borderColor: "border-purple-500"
  };

  const moaAdmissionRequirements = {
    title: "입학 조건",
    items: [
      "고등학교 졸업 Diploma",
      "최소 12학년 영어 B 이상",
      "영문 타자 25 WPM (1분당 25타) 요구",
      "기본적인 컴퓨터 활용 능력"
    ],
    borderColor: "border-red-500"
  };

  // MOA Career Options 데이터
  const moaCareerOptions = [
    { title: "General Office Administrator", description: "의료사무 전반 관리" },
    { title: "Medical office supervisor/manager", description: "의료사무실 관리 책임자" },
    { title: "Medical billing specialist", description: "의료비 청구 전문가" },
    { title: "Medical secretary", description: "의료 비서" },
    { title: "Medical stenographer", description: "의료 속기사" },
    { title: "Ward secretary", description: "병동 비서" },
    { title: "Ward secretary – hospital", description: "병원 병동 비서" },
    { title: "기타 의료 행정 분야", description: "다양한 의료 행정 직종" }
  ];

  // Rehabilitation Assistant 관련 데이터
  const rehabMainTasks = {
    title: "주요 업무",
    items: [
      "물리치료사/작업치료사 계획 실행",
      "환자 운동 지도 및 감독",
      "치료 기구 사용법 교육",
      "환자 자가 운동 안내",
      "회복 과정 모니터링 및 기록",
      "치료 진행상황 보고"
    ],
    borderColor: "border-blue-500"
  };

  const rehabWorkEnvironment = {
    title: "근무 환경",
    items: [
      "병원 재활 치료실",
      "물리치료 클리닉",
      "재활 전문 센터",
      "요양원 및 장기요양시설",
      "스포츠 의학 센터",
      "지역사회 보건소"
    ],
    borderColor: "border-green-500"
  };

  const rehabEducationOverview = {
    title: "교육과정 Overview",
    items: [
      "**교육기간:** 21개월 - 2년 Full-time diploma",
      "Occupational Therapy Assistant 자격증",
      "Physiotherapist Assistant Accreditation",
      "이론과 실습을 병행한 종합 교육"
    ],
    borderColor: "border-purple-500"
  };

  const rehabAdmissionRequirements = {
    title: "입학 조건",
    items: [
      "고등학교 졸업 Diploma 이상",
      "12학년 영어 B 이상",
      "수학 또는 과학 성적 (학교별 상이)",
      "TOEFL 90, IELTS 6.5 또는 자체 영어시험"
    ],
    borderColor: "border-red-500"
  };

  // 영어 및 수학/과학 요구사항
  const englishRequirements = [
    "TOEFL iBT: 90점",
    "IELTS Overall: 6.5",
    "학교별 자체 영어 시험"
  ];

  const mathScienceRequirements = [
    "CDI: 자체 Math test",
    "VCC: Biology 12 C+ 이상",
    "별도 Course Credit 취득 가능"
  ];

  // Rehab Career Options 데이터
  const rehabDirectCareers = [
    { title: "Occupational Therapy Assistant (OTA)", description: "작업치료사 보조" },
    { title: "Physical Therapist Assistant (PTA)", description: "물리치료사 보조" },
    { title: "Physiotherapist Assistant", description: "물리치료사 어시스턴트" },
    { title: "Rehabilitation Assistant", description: "재활 보조사" }
  ];

  const rehabAdvancedCareers = [
    { title: "Behavioral Support Worker", description: "행동 지원 전문가" },
    { title: "Occupational Therapist (석사 후)", description: "작업치료사" },
    { title: "Physical Therapist (석사 후)", description: "물리치료사" },
    { title: "Physiotherapist (석사 후)", description: "물리치료사" }
  ];

  // 기타 헬스케어 진로
  const dentalCareers = {
    title: "치과 분야",
    items: [
      "Dental Hygienist",
      "Dental Office Assistant",
      "Denturist/Dental Technician"
    ],
    borderColor: "border-blue-500"
  };

  const medicalTechCareers = {
    title: "의료 기술 분야",
    items: [
      "Medical Laboratory Assistant",
      "Medical Device Reprocessing Technician",
      "Medical Transcriptionist",
      "Pharmacy Technician"
    ],
    borderColor: "border-green-500"
  };

  const careCareers = {
    title: "간병 및 케어",
    items: [
      "HCA for Acute Care",
      "Personal Support Worker",
      "Community Health Worker"
    ],
    borderColor: "border-purple-500"
  };

  const successFactors = {
    title: "성공 요인",
    items: [
      "**영어 실력:** 의료용어와 전문용어 이해",
      "**소통 능력:** 환자와 의료진과의 효과적 소통",
      "**정확성:** 의료정보 처리의 정확성",
      "**인내심:** 환자 대응 시 필요",
      "**지속 학습:** 의료기술 발전에 따른 업데이트",
      "**팀워크:** 의료팀과의 협력"
    ],
    borderColor: "border-yellow-500"
  };

  // 참고 자료 데이터
  const moaReferences = [
    { title: "EducationPlanner BC 웹사이트", description: "교육기관 정보" },
    { title: "각 교육기관 MOA 프로그램 정보", description: "프로그램 세부사항" },
    { title: "WorkBC 직업 정보", description: "취업 정보" },
    { title: "BC Ministry of Health", description: "보건부 정보" }
  ];

  const rehabReferences = [
    { title: "OTAPTA (Occupational Therapy Association)", description: "작업치료 협회" },
    { title: "Physiotherapy Association of BC", description: "물리치료 협회" },
    { title: "각 교육기관 프로그램 정보", description: "교육과정 정보" },
    { title: "Health Authority 채용 정보", description: "채용 공고" }
  ];

  // 교육기관 데이터
  const privateColleges = [
    "CDI College",
    "Sprott Shaw College",
    "Discovery Community College",
    "기타 다수 교육기관"
  ];

  // Rehab Career Options 세분화
  const rehabDirectCareersOptions = [
    "Occupational Therapy Assistant (OTA)",
    "Physical Therapist Assistant (PTA)",
    "Physiotherapist Assistant",
    "Rehabilitation Assistant"
  ];

  const rehabAdvancedCareersOptions = [
    "Behavioral Support Worker",
    "Occupational Therapist (석사 후)",
    "Physical Therapist (석사 후)",
    "Physiotherapist (석사 후)"
  ];

  // MOA Career Options 리스트 데이터
  const moaCareerOptionsLeft = [
    "General Office Administrator",
    "Medical office supervisor/manager",
    "Medical billing specialist",
    "Medical secretary"
  ];

  const moaCareerOptionsRight = [
    "Medical stenographer",
    "Ward secretary",
    "Ward secretary – hospital",
    "기타 의료 행정 분야"
  ];

  // MOA vs Rehab Assistant 비교 데이터
  const moaAdvantages = [
    "짧은 교육기간 (1년 이내)",
    "사무업무 중심",
    "상대적으로 낮은 물리적 요구",
    "안정적인 사무환경"
  ];

  const rehabAdvantages = [
    "긴 교육기간 (2년)",
    "직접적인 환자 케어",
    "물리적 활동 포함",
    "높은 전문성과 책임"
  ];

  // 헬스케어 분야 전망 데이터
  const positiveFactors = [
    "고령화 사회로 인한 지속적 수요 증가",
    "안정적인 고용과 직업 보장",
    "다양한 전문 분야로 발전 가능",
    "사회적 기여도가 높은 의미있는 일"
  ];

  const considerations = [
    "높은 영어 요구수준",
    "지속적인 교육과 자격 갱신",
    "감정적 스트레스 관리 필요",
    "의료법규와 윤리 준수"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Lecture 9</h1>
          <p className="text-xl text-gray-300 mb-8">Healthcare Career 03 & 04</p>
          <div className="w-32 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto p-8">
          {/* MOA - Medical Office Assistant */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Healthcare Career 03: Medical Office Assistant (MOA)
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">MOA가 하는 일</h3>
                <p className="text-gray-200 text-lg mb-6">
                  MOA는 병원이 잘 운영되게 하는 모든 사무관련 일을 진행합니다. 환자의 진료기록 정리와
                  진료예약 관리, 각종 의료비 청구 및 보험사에 보험료 청구 등이 포함됩니다.
                  또한, 환자를 응대하는 것 그리고 병원내의 모든 정보를 입력하고 관리하는 일도 MOA의 역할입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={moaMainTasks.title}
                  items={moaMainTasks.items}
                  borderColor={moaMainTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={moaRequiredSkills.title}
                  items={moaRequiredSkills.items}
                  borderColor={moaRequiredSkills.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">MOA가 되는 방법</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <SubSectionWithList
                    title={moaEducationOverview.title}
                    items={moaEducationOverview.items}
                    borderColor={moaEducationOverview.borderColor}
                    titleColor="text-white"
                  />

                  <SubSectionWithList
                    title={moaAdmissionRequirements.title}
                    items={moaAdmissionRequirements.items}
                    borderColor={moaAdmissionRequirements.borderColor}
                    titleColor="text-white"
                  />
                </div>

                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <h4 className="text-white text-lg font-bold mb-3">주요 교육기관</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SmallTitleListComponent
                      title="Private Colleges"
                      items={privateColleges}
                    />
                    <div className="text-gray-200">
                      <p className="mb-2">**추가 정보:**</p>
                      <p className="text-sm">
                        EducationPlanner BC를 통해 더 많은 교육기관을 찾아보실 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <SimpleTwoColumnListComponent
                  title="MOA Career Options"
                  leftColumnItems={moaCareerOptionsLeft}
                  rightColumnItems={moaCareerOptionsRight}
                />
              </div>
            </div>
          </section>

          {/* Rehab Assistant */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Healthcare Career 04: Rehabilitation Assistant
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Rehab Assistant가 하는 일</h3>
                <p className="text-gray-200 text-lg mb-6">
                  Rehab Assistant는 물리치료사 또는 작업치료사가 세운 계획에 맞춰 실제 환자들의 운동작업을
                  진행함으로써 치료사를 지원합니다. 환자들에게 기구 사용법 교육, 환자의 운동활동 리드,
                  스스로 운동하는 방법에 대한 안내 뿐 아니라 환자의 운동활동을 기록 등을 통해
                  환자의 회복과정을 모니터하는 역할을 합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={rehabMainTasks.title}
                  items={rehabMainTasks.items}
                  borderColor={rehabMainTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={rehabWorkEnvironment.title}
                  items={rehabWorkEnvironment.items}
                  borderColor={rehabWorkEnvironment.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Rehab Assistant 교육과정</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <SubSectionWithList
                    title={rehabEducationOverview.title}
                    items={rehabEducationOverview.items}
                    borderColor={rehabEducationOverview.borderColor}
                    titleColor="text-white"
                  />

                  <SubSectionWithList
                    title={rehabAdmissionRequirements.title}
                    items={rehabAdmissionRequirements.items}
                    borderColor={rehabAdmissionRequirements.borderColor}
                    titleColor="text-white"
                  />
                </div>

                <div className="bg-sky-700/20 p-6 rounded-lg mb-6">
                  <h4 className="text-white text-lg font-bold mb-3">영어 요구사항 예시</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TitledTwoColumnListComponent
                      leftColumn={{
                        title: "**공인 영어 시험:**",
                        items: englishRequirements
                      }}
                      rightColumn={{
                        title: "**수학/과학 요구사항:**",
                        items: mathScienceRequirements
                      }}
                    />
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="text-white text-lg font-bold mb-3">Rehab Assistant Career Options</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SmallTitleListComponent
                      title="직접 관련 직업"
                      items={rehabDirectCareersOptions}
                      textColor="text-gray-200"
                    />
                    <SmallTitleListComponent
                      title="발전 가능한 진로"
                      items={rehabAdvancedCareersOptions}
                      textColor="text-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 기타 헬스케어 진로 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                기타 헬스케어 진로 옵션
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SubSectionWithList
                  title={dentalCareers.title}
                  items={dentalCareers.items}
                  borderColor={dentalCareers.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={medicalTechCareers.title}
                  items={medicalTechCareers.items}
                  borderColor={medicalTechCareers.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={careCareers.title}
                  items={careCareers.items}
                  borderColor={careCareers.borderColor}
                  titleColor="text-white"
                />
              </div>
            </div>
          </section>

          {/* 헬스케어 진로 선택 가이드 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                헬스케어 진로 선택 가이드
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">MOA vs Rehab Assistant</h3>
                  <div className="space-y-4">
                    <BorderedListComponent
                      title="MOA (의료사무보조)"
                      items={moaAdvantages}
                      borderColor="border-blue-400"
                      titleColor="text-blue-300"
                    />
                    <BorderedListComponent
                      title="Rehab Assistant (재활보조)"
                      items={rehabAdvantages}
                      borderColor="border-green-400"
                      titleColor="text-green-300"
                    />
                  </div>
                </div>

                <SubSectionWithList
                  title={successFactors.title}
                  items={successFactors.items}
                  borderColor={successFactors.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-grey-900 border border-grey-600 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">헬스케어 분야 전망</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SimpleTitleListComponent
                    title="긍정적 요인:"
                    items={positiveFactors}
                  />
                  <SimpleTitleListComponent
                    title="고려사항:"
                    items={considerations}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                참고 자료 및 연락처
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <TitledTwoColumnListComponent
                leftColumn={{
                  title: "**MOA 관련 정보:**",
                  items: [
                    "EducationPlanner BC 웹사이트",
                    "각 교육기관 MOA 프로그램 정보",
                    "WorkBC 직업 정보",
                    "BC Ministry of Health"
                  ]
                }}
                rightColumn={{
                  title: "**Rehab Assistant 관련 정보:**",
                  items: [
                    "OTAPTA (Occupational Therapy Association)",
                    "Physiotherapy Association of BC",
                    "각 교육기관 프로그램 정보",
                    "Health Authority 채용 정보"
                  ]
                }}
              />
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                <p className="text-blue-200 text-sm">
                  헬스케어 분야는 전문성과 책임감이 요구되는 분야입니다. 자세한 정보는 각 교육기관과
                  관련 협회의 공식 웹사이트를 참고하시고, 개인 상황에 맞는 상담을 받으시기 바랍니다.
                </p>
              </div>
            </div>
          </section>


          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={9} />
        </div>
      </div>
    </div>
  );
};

export default Job9;

