import React from 'react';
import { useTranslation } from 'react-i18next';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, SimpleReferenceListComponent, MultiColumnListComponent, TitledTwoColumnListComponent, InfoBoxComponent } from './InfoSubComponent';

const Job12: React.FC = () => {
  const { t } = useTranslation(['info_job12']);

  // EA 관련 데이터
  const eaMainTasks = {
    title: "주요 업무",
    items: [
      "초/중등 학교 교사와 함께 학생의 학습 활동 지원",
      "학생들의 행동 관리 및 생활 지도",
      "학생 발달 상황 모니터링 및 기록",
      "담임 교사에게 학생 상황 보고",
      "교실 내 수업 보조 활동",
      "특별한 도움이 필요한 학생 개별 지원"
    ],
    borderColor: "border-blue-500"
  };

  const eaWorkEnvironment = {
    title: "근무 환경",
    items: [
      "**교실 내:** 수업 보조 및 학습 지원",
      "**체육관:** 체육 활동 중 학생 관리",
      "**도서관:** 독서 활동 및 연구 지원",
      "**필드 트립:** 교외 활동 중 학생 감독",
      "**특수교육:** 특별한 요구사항이 있는 학생 지원",
      "**방과후:** 추가 학습 프로그램 지원"
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
            {t('info_job12:title')}
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
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 12</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {t('info_job12:lectureSubtitle').split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < t('info_job12:lectureSubtitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* EA 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                Education Assistant (EA)
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">EA가 하는 일</h3>
                <p className="text-gray-200 mb-6">
                  Education Assistant는 초등학교와 중등학교에서 교사를 지원하여 학생들의 학습 활동과
                  행동 관리를 돕는 중요한 역할을 합니다. 교실 내외에서 학생들을 관리하고 감독하며,
                  개별 학생의 발달 상황을 모니터링하여 담임 교사에게 보고하는 업무를 담당합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={eaMainTasks.title}
                  items={eaMainTasks.items}
                  borderColor={eaMainTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={eaWorkEnvironment.title}
                  items={eaWorkEnvironment.items}
                  borderColor={eaWorkEnvironment.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">EA의 중요성</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "학생에게 미치는 영향:",
                    items: [
                      "개별적 관심과 지원 제공",
                      "학습 동기 향상",
                      "사회적 기술 발달 도움",
                      "학교 적응력 향상"
                    ]
                  }}
                  rightColumn={{
                    title: "교육 시스템에서의 역할:",
                    items: [
                      "교사의 업무 부담 경감",
                      "포용적 교육 환경 조성",
                      "다양한 학습 요구 충족",
                      "안전한 학교 환경 유지"
                    ]
                  }}
                />
              </div>
            </div>
          </section>

          {/* EA 자격 요건 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                EA 자격 요건
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="기본 자격 요건"
                  items={[
                    "**학력:** 고등학교 졸업",
                    "**자격증:** EA Certificate 필수",
                    "**교육:** Education Assistant Program 과정 이수",
                    "**운전면허:** Driver's License"
                  ]}
                />

                <BoxListComponent
                  title="선호 추가 자격"
                  items={[
                    "**응급처치:** First Aid Certificate",
                    "**위기 개입:** Non-Violent Crisis Intervention",
                    "**특수교육:** Special Needs 관련 교육",
                    "**언어:** 다국어 구사 능력"
                  ]}
                />
              </div>

              <InfoBoxComponent
                title="왜 이런 자격이 필요한가?"
                description="EA는 학생들과 직접적으로 상호작용하며, 때로는 위기 상황이나 응급 상황에 대처해야 합니다. 또한 다양한 배경을 가진 학생들과 소통하고, 특별한 도움이 필요한 학생들을 지원해야 하므로 전문적인 교육과 자격이 필요합니다."
                items={[
                  "**안전성:** 학생들의 안전을 보장하기 위한 응급처치 능력",
                  "**전문성:** 교육학적 지식과 아동 발달 이해",
                  "**신뢰성:** 범죄 경력 조회를 통한 신원 확인",
                  "**소통:** 학생, 교사, 학부모와의 효과적 의사소통"
                ]}
                bgColor="bg-cyan-700/10"
              />
            </div>
          </section>

          {/* BC주 정부인가 학교 프로그램 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                BC주 정부인가 학교 프로그램
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <p className="text-gray-200 mb-8">
                BC주에서 EA가 되기 위해서는 정부에서 인가한 교육기관의 Education Assistant Program을
                이수해야 합니다. 다양한 Public College와 Private Institution에서 프로그램을 제공합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="주요 Public Colleges"
                  items={[
                    "**BCIT:** Education Assistant Certificate",
                    "**Camosun College:** Education Assistant Program",
                    "**Douglas College:** Education Assistant Certificate",
                    "**Langara College:** Education Assistant Program",
                    "**VCC:** Education Assistant Certificate",
                    "**Northern Lights College:** EA Program",
                    "**Okanagan College:** Education Assistant"
                  ]}
                />

                <BoxListComponent
                  title="Private Institutions"
                  items={[
                    "**CDI College:** Education Assistant Diploma",
                    "**Sprott Shaw College:** EA Certificate",
                    "**Vancouver Career College:** EA Program",
                    "**Discovery Community College:** EA Course",
                    "**Stenberg College:** Education Assistant",
                    "",
                    "* 학교별로 프로그램 구성과 기간이 다를 수 있으므로 지원 전 반드시 확인 필요"
                  ]}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">프로그램 선택 시 고려사항</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "Public vs Private:",
                    items: [
                      "**Public:** 상대적으로 저렴한 학비",
                      "**Public:** 정부 지원 프로그램 다양",
                      "**Private:** 유연한 시간표",
                      "**Private:** 더 빠른 수료 가능"
                    ]
                  }}
                  rightColumn={{
                    title: "프로그램 내용:",
                    items: [
                      "아동 발달 심리학",
                      "특수교육 기초",
                      "교실 관리 기법",
                      "행동 지원 전략",
                      "실습 (Practicum)"
                    ]
                  }}
                />
              </div>
            </div>
          </section>

          {/* 교육프로그램 공통 입학요건 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                교육프로그램 공통 입학요건
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="학력 요건"
                  items={[
                    "**기본:** 고등학교 졸업 (High School Diploma)",
                    "**또는:** 상응하는 학력 소지자",
                    "**성인:** Adult Basic Education (ABE) 12 수료",
                    "**해외:** 캐나다 동등 학력 인정"
                  ]}
                />

                <BoxListComponent
                  title="영어 요건"
                  items={[
                    "**캐나다 졸업생:** English 12 영어 성적",
                    "**영어시험:** IELTS Academic 6.0/6.5",
                    "**대안:** 교육기관 자체 영어 시험",
                    "**조건부:** ESL 과정 선수 이수 가능"
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="추가 요구사항"
                  items={[
                    "**자원봉사:** 아동 관련 봉사활동 시간",
                    "**범죄경력조회:** Criminal Record Check",
                    "**아동보호:** Child Protection Check",
                    "**추천서:** 2-3명의 추천인"
                  ]}
                />

                <BoxListComponent
                  title="학교별 차이점"
                  items={[
                    "**봉사시간:** 학교마다 요구 시간 상이",
                    "**영어점수:** 기관별 최소 점수 차이",
                    "**면접:** 일부 학교는 면접 진행",
                    "**대기자명단:** 인기 프로그램은 대기 필요"
                  ]}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">지원 전 준비사항</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">1. 기초 준비</h3>
                    <ul className="space-y-1">
                      <li>• 영어 능력 평가</li>
                      <li>• 학력 증명서 준비</li>
                      <li>• 자원봉사 활동 시작</li>
                      <li>• 추천인 섭외</li>
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">2. 서류 준비</h3>
                    <ul className="space-y-1">
                      <li>• 범죄경력조회서</li>
                      <li>• 의료검진서</li>
                      <li>• 예방접종 기록</li>
                      <li>• 신원확인서류</li>
                    </ul>
                  </div>
                  <div className="text-purple-200">
                    <h3 className="font-semibold mb-2">3. 지원 과정</h3>
                    <ul className="space-y-1">
                      <li>• 학교별 요건 확인</li>
                      <li>• 지원 마감일 체크</li>
                      <li>• 입학 상담 참여</li>
                      <li>• 재정 지원 신청</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EA 진로 전망 및 발전 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                EA 진로 전망 및 발전
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title="취업 전망"
                  items={[
                    "**수요 증가:** 포용적 교육 정책 확대",
                    "**안정적 고용:** 공공 부문 일자리",
                    "**지역별 기회:** 전 BC주 학교에서 필요",
                    "**다양한 환경:** 정규/특수/사립학교",
                    "**파트타임:** 유연한 근무 형태 가능"
                  ]}
                />

                <BoxListComponent
                  title="발전 경로"
                  items={[
                    "**경력 쌓기:** 다양한 학년/환경 경험",
                    "**전문화:** 특수교육, 행동지원 전문",
                    "**추가 자격:** 교사 자격 취득",
                    "**리더십:** 수석 EA, 프로그램 코디네이터",
                    "**상담 분야:** 학교 상담사로 발전"
                  ]}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">성공을 위한 조언</h3>
                <TitledTwoColumnListComponent
                  leftColumn={{
                    title: "개인적 자질:",
                    items: [
                      "인내심과 공감 능력",
                      "효과적인 의사소통 기술",
                      "문제 해결 능력",
                      "팀워크와 협력 정신",
                      "지속적인 학습 의지"
                    ]
                  }}
                  rightColumn={{
                    title: "전문성 개발:",
                    items: [
                      "아동 발달에 대한 깊은 이해",
                      "다양한 교육 기법 습득",
                      "기술 활용 능력 향상",
                      "문화적 민감성 개발",
                      "위기 상황 대응 능력"
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
                참고 자료 및 연락처
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleReferenceListComponent
                  title="정부 및 교육 기관"
                  items={[
                    "• BC Ministry of Education",
                    "• Make a Future BC",
                    "• WorkBC - Education Assistant 정보",
                    "• EducationPlanner BC",
                    "• BC Public School Employers' Association"
                  ]}
                />
                <SimpleReferenceListComponent
                  title="전문 단체 및 자료"
                  items={[
                    "• CUPE BC (교육지원직 노조)",
                    "• 각 교육기관 EA Program 정보",
                    "• Vancouver Public Library 직업 가이드",
                    "• BC Teachers' Federation 자료"
                  ]}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200">
                  Education Assistant는 학생들의 성장과 발달에 직접적으로 기여하는 의미있는 직업입니다.
                  자세한 정보는 BC주 교육부와 각 교육기관의 공식 웹사이트를 참고하시고,
                  개인의 적성과 관심사를 고려하여 신중하게 선택하시기 바랍니다.
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <div className="container mx-auto px-4 pb-8">
            <JobAcademyNavigation currentJobId={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job12;

