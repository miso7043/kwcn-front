import React from 'react';
import { useTranslation } from 'react-i18next';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import {
  SimpleTitleListComponent,
  SmallTitleListComponent,
  SubSectionWithList,
  BoxListComponent,
  MultiColumnListComponent,
  SimpleReferenceListComponent,
  TableComponent
} from './InfoSubComponent';

const Job10: React.FC = () => {
  const { t } = useTranslation();

  // ECE 주요 업무 및 필요 기술 데이터
  const eceMainTasks = {
    title: "주요 업무",
    items: [
      "교육 프로그램 기획 및 실행",
      "아동의 지적, 신체적 발달 지원",
      "사회적, 정서적 성장 도움",
      "실내외 학습 환경 조성",
      "교육 자료 및 프로젝트 개발",
      "학부모와의 정기적 소통"
    ],
    borderColor: "border-blue-500"
  };

  const eceSkills = {
    title: "필요 기술",
    items: [
      "아동 발달 심리학 이해",
      "교육 프로그램 설계 능력",
      "창의적 교육 방법 개발",
      "관찰 및 기록 능력",
      "효과적인 소통 스킬",
      "인내심과 공감 능력"
    ],
    borderColor: "border-green-500"
  };

  // ECE 자격증 단계 데이터
  const eceAssistant = {
    title: "ECE Assistant",
    items: [
      "**교육기간:** 4과목 이수",
      "**역할:** 기초 보조업무",
      "**자격:** 입문 레벨",
      "**기간:** 약 6개월"
    ],
    borderColor: "border-blue-500"
  };

  const eceCertificate = {
    title: "ECE Certificate",
    items: [
      "**교육기간:** 1년 Certificate 과정",
      "**포함:** 실습 과정 포함",
      "**역할:** 독립적 ECE 업무",
      "**자격:** 정규 ECE"
    ],
    borderColor: "border-green-500"
  };

  const eceDiploma = {
    title: "ECE Diploma",
    items: [
      "**교육기간:** 총 2년",
      "**구성:** ECE 자격증 + 1년 추가",
      "**전문분야:** IT, Special Needs",
      "**역할:** 전문 ECE"
    ],
    borderColor: "border-yellow-500"
  };

  // ECE 교육과정 데이터
  const eceEducationPeriods = [
    "ECE Assistant: 6개월",
    "ECE 기준: 1년",
    "ECE IT: 2년 소요"
  ];

  const eceAdmissionRequirements = [
    "고등학교 졸업 (High School Diploma)",
    "캐나다 English 12 (12학년 영어) B 이상",
    "공인 영어 점수 (IELTS Academic 6.0/6.5)",
    "또는 교육기관 자체 영어 인증 시험"
  ];

  // Montessori Training 데이터
  const montessoriOverview = [
    "개별활동 중심 수업 진행",
    "학습효과 높은 프로그램",
    "교육기간: About 1 year",
    "교육 후 전망: 몬테소리 유치원/학교 교사"
  ];

  const montessoriRequirements = [
    "ECE + BA 학위",
    "추천서",
    "IELTS 6.0",
    "MTCBC, NAMC, AMS 등 교육기관"
  ];

  // ECE 분야 전망 데이터
  const ecePositiveFactors = [
    "정부의 childcare 정책 확대",
    "$10/day childcare 프로그램",
    "지속적인 수요 증가",
    "다양한 진로 발전 기회",
    "의미있는 사회적 기여"
  ];

  const eceConsiderations = [
    "상대적으로 낮은 급여 수준",
    "높은 책임감과 스트레스",
    "지속적인 전문 개발 필요",
    "체력적 요구사항",
    "법규 준수와 안전 관리"
  ];

  // 교육기관 데이터
  const publicColleges = [
    "Camosun College",
    "Capilano University",
    "Douglas College",
    "Langara College",
    "Northern Lights College",
    "Vancouver Community College"
  ];

  const privateColleges = [
    "CDI College",
    "Montessori Training Centre of BC",
    "Sprott Shaw College",
    "Vancouver Career College"
  ];

  // ECE Career Options 데이터
  const eceDirectCareers = [
    "Education Assistant",
    "School Teacher (Kindergarten 또는 저학년 담당)",
    "Licensing Officer (Fraser Health 등 소속)",
    "Montessori Teacher",
    "Daycare Centre 운영 (사업)"
  ];

  const eceWorkEnvironments = [
    "공립/사립 유치원",
    "어린이집 (Daycare Centre)",
    "몬테소리 학교",
    "지역사회 센터",
    "가정 어린이집 (Family Daycare)",
    "초등학교 (보조교사)"
  ];

  // ECE 성공 가이드 데이터
  const eceSuccessFactors = [
    "**영어 실력:** 아이들, 학부모, 동료와의 소통",
    "**창의성:** 흥미로운 교육 활동 개발",
    "**인내심:** 아이들의 개별적 성장 속도 이해",
    "**관찰력:** 아동 발달 상황 정확한 파악",
    "**협력 능력:** 팀워크와 학부모 소통",
    "**지속 학습:** 교육 이론과 방법 업데이트"
  ];

  const eceChallenges = [
    "높은 수준의 영어 의사소통 필요",
    "문화적 다양성에 대한 이해",
    "체력적으로 요구되는 업무",
    "지속적인 자격 갱신과 교육",
    "학부모와의 효과적 소통",
    "법적 책임과 아동 안전 관리"
  ];

  // School Districts 데이터
  const schoolDistrictsColumns = [
    ["Coast Mountain College", "Northern Lights College"],
    ["Burnaby School District", "Delta School Board"],
    ["Maple Ridge School District"]
  ];

  // 관련 업무 경력 예시 데이터
  const koreanExperienceColumns = [
    ["아동학습지 교사", "유치원 교사", "어린이 영어학원 강사"],
    ["어린이집 교사", "놀이학교 교사", "기타 아동교육 관련 업무"]
  ];

  // 한국경력 인정 자격 요건 데이터
  const koreanQualificationRequirements = [
    "**학력:** 한국 관련전공 4년제 대학 졸업",
    "**인정 전공:** 교육학, 간호학, 사회복지학 등 (Credit 인정)",
    "**경력:** 아동교육 관련 업무 경력 보유시 캐나다 ECE 교육과정 면제 가능",
    "**주의사항:** 최근 관련 법안 강화 추세"
  ];

  // 타주 자격 대응표 데이터
  const provinceQualificationTableData = {
    title: "협정 체결 주별 자격 대응표",
    headers: ["주/준주", "Level 1", "Level 2", "Level 3"],
    rows: [
      ["Alberta", "Child Dev. Assistant", "Child Dev. Worker/Level2", "Child Dev. Worker/Level3"],
      ["Manitoba", "Child Care Assistant", "ECE2", "ECE3"],
      ["Ontario", "N/A", "ECE", "ECE"],
      ["Saskatchewan", "ECE Ⅰ", "ECE Ⅱ", "ECE Ⅲ"]
    ]
  };

  // 참고 자료 데이터
  const governmentAgencies = [
    "Ministry of Children and Family Development",
    "BC Government Early Learning 웹사이트",
    "WorkBC ECE 직업 정보",
    "EducationPlanner BC"
  ];

  const educationAssociations = [
    "ECEBC (Early Childhood Educators of BC)",
    "각 교육기관 ECE 프로그램 정보",
    "Montessori Training Centre of BC",
    "Child Care Human Resources Sector Council"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Lecture 10</h1>
          <p className="text-xl text-gray-300 mb-8">Education Career - Early Childhood Educator (ECE)</p>
          <div className="w-32 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto p-8">
          {/* ECE 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Early Childhood Educator (ECE)
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">ECE가 하는 일</h3>
                <p className="text-gray-200 mb-6">
                  ECE는 신생아부터 만 5세까지의 어린 아이들을 돌보는 일을 합니다.
                  아이들의 지적, 신체적, 사회적 그리고 정서적 성장을 위한 교육프로그램을 만들고 실행합니다.
                  또한 아동발달 상황 문서작성, 아이들을 위한 교실내외부 교육환경 관리, 교안개발 및 학부모와의 상담등을 진행합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={eceMainTasks.title}
                  items={eceMainTasks.items}
                  borderColor={eceMainTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={eceSkills.title}
                  items={eceSkills.items}
                  borderColor={eceSkills.borderColor}
                  titleColor="text-white"
                />
              </div>
            </div>
          </section>

          {/* ECE 자격증 단계 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                ECE Certificates (유아교육 자격증)
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <p className="text-gray-200 mb-8">
                ECE는 교육기간 및 경력에 따라 3 단계의 자격을 획득하게 됩니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <SubSectionWithList
                  title={eceAssistant.title}
                  items={eceAssistant.items}
                  borderColor={eceAssistant.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={eceCertificate.title}
                  items={eceCertificate.items}
                  borderColor={eceCertificate.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={eceDiploma.title}
                  items={eceDiploma.items}
                  borderColor={eceDiploma.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/15 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">전문 분야 자격</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2">ECE Infant and Toddler (ECE IT)</h4>
                    <p>영유아(0-3세) 전문 교육자 자격으로, 특별한 케어가 필요한 연령대를 담당</p>
                  </div>
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2">ECE Special Needs</h4>
                    <p>특별한 요구사항이 있는 아동들을 위한 전문 교육자 자격</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ECE 취득 프로세스 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                ECE Certificates 취득 프로세스
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 mb-6">
                  ECE 단계별 교육 과정 수료 후 Ministry of Children and Family Development Registry에 신청서를 제출합니다.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg mb-8">
                <h3 className="text-white text-xl font-bold mb-4">필요 증빙서류</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2 text-green-300">✓ 공증된 수료 증명서</h4>
                    <p>A certified true copy of your credential</p>
                  </div>
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2 text-green-300">✓ 공증된 성적표</h4>
                    <p>An official copy of your transcripts from the institution</p>
                  </div>
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2 text-green-300">✓ 실습/경력 증명</h4>
                    <p>Proof of practicum or work experience</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ECE가 되는 방법들 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                ECE가 되는 방법
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              {/* 방법 1: BC주 정부인가 교육프로그램 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">방법 1: BC주 정부인가 교육프로그램 이수</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <BoxListComponent
                    title="Public Colleges"
                    items={publicColleges}
                  />

                  <BoxListComponent
                    title="Private Colleges"
                    items={privateColleges}
                  />
                </div>

                <MultiColumnListComponent
                  title="School Districts"
                  columns={schoolDistrictsColumns}
                />

                <div className="bg-cyan-700/10 p-6 rounded-lg">
                  <h4 className="text-white font-bold mb-3">ECE 교육과정 Overview</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SmallTitleListComponent
                      title="교육기간"
                      items={eceEducationPeriods}
                    />
                    <SmallTitleListComponent
                      title="입학 조건"
                      items={eceAdmissionRequirements}
                    />
                  </div>
                </div>
              </div>

              {/* 방법 2: 한국경력 인정 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">방법 2: 한국경력 인정</h3>

                <BoxListComponent
                  title="자격 요건"
                  items={koreanQualificationRequirements}
                  titleColor="text-white"
                  spacing="space-y-2"
                  marginBottom="mb-6"
                />

                <MultiColumnListComponent
                  title="관련 업무 경력 예시"
                  columns={koreanExperienceColumns}
                  gridCols="grid-cols-1 md:grid-cols-2"
                  spacing="space-y-2"
                  marginBottom=""
                />
              </div>

              {/* 방법 3: 타주 자격 전환 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">방법 3: 타주 자격 전환</h3>

                <p className="text-gray-200 mb-6">
                  BC주 ECE 자격인정 협정(Federal Provincial Agreement on Internal Trade Certificate Equivalencies)이
                  가능한 타주에서 자격취득 후 BC주로 전환합니다.
                </p>

                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <TableComponent
                    title={provinceQualificationTableData.title}
                    headers={provinceQualificationTableData.headers}
                    rows={provinceQualificationTableData.rows}
                  />
                  <p className="text-gray-400 text-xs mt-4">
                    * 미협정주: New Brunswick, Northwest Territories, Nunavut, Quebec
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ECE Career Options */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                ECE Career Options
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="직접 관련 직업"
                  items={eceDirectCareers}
                  titleColor="text-white text-xl"
                  spacing="space-y-2"
                />

                <BoxListComponent
                  title="근무 환경"
                  items={eceWorkEnvironments}
                  titleColor="text-white text-xl"
                  spacing="space-y-2"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">Montessori Training in Canada</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SimpleTitleListComponent
                    title="프로그램 개요:"
                    items={montessoriOverview}
                  />
                  <SimpleTitleListComponent
                    title="입학 조건 (공통):"
                    items={montessoriRequirements}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 성공 가이드 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                ECE 성공 가이드
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="성공 요인"
                  items={eceSuccessFactors}
                  titleColor="text-white text-xl"
                  spacing="space-y-2"
                />

                <BoxListComponent
                  title="도전 요소"
                  items={eceChallenges}
                  titleColor="text-white text-xl"
                  spacing="space-y-2"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">ECE 분야 전망</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SimpleTitleListComponent
                    title="긍정적 요인:"
                    items={ecePositiveFactors}
                  />
                  <SimpleTitleListComponent
                    title="고려사항:"
                    items={eceConsiderations}
                  />
                </div>
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
                  title="교육기관 및 협회"
                  items={educationAssociations.map(association => `• ${association}`)}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200 text-sm">
                  ECE는 아이들의 미래를 만들어가는 의미있는 직업입니다.
                  자세한 정보는 BC 주정부와 각 교육기관의 공식 웹사이트를 참고하시고,
                  개인 상황에 맞는 상담을 받으시기 바랍니다.
                </p>
              </div>
            </div>
          </section>


          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={10} />
        </div>
      </div>
    </div>
  );
};

export default Job10;

