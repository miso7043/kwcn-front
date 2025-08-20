import React from 'react';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SubSectionWithList, ReferenceListComponent } from './InfoSubComponent';

const Job6: React.FC = () => {
  // 고용기준법 적용 제외 사례 데이터
  const exclusionCases = {
    title: "포함되지 않는 경우",
    items: [
      "노동조합 - 단체 협약으로 직장 표준 설정",
      "독립 계약자 - 자영업 근로자",
      "전문가 - 일부 전문 협회 회원",
      "특정 규정이 적용되는 부문",
      "제외된 직업 유형"
    ],
    borderColor: "border-red-500"
  };

  // 고용기준법과 관련 없는 문제들 데이터
  const unrelatedIssues = {
    title: "관련 없는 문제들",
    items: [
      "직장 안전 또는 부상 → WorkSafeBC",
      "인권 또는 차별 → 인권법",
      "소액 청구 분쟁",
      "직장 내 괴롭힘",
      "고용 보험",
      "범죄 행위 → 경찰 신고"
    ],
    borderColor: "border-yellow-500"
  };

  // 확실하지 않은 경우 할 수 있는 일 데이터
  const uncertaintyActions = {
    title: "확실하지 않은 경우 할 수 있는 일",
    items: [
      "솔루션 탐색기 사용",
      "Employment Standards 연락하기",
      "불만제출"
    ],
    borderColor: "border-green-500"
  };

  // 고용주의 의무 데이터
  const employerObligations = {
    title: "고용주의 의무",
    items: [
      "작업장 표준 명확하게 전달",
      "BC주에서 일하기 포스터 게시",
      "고용 조건 서면으로 전달",
      "임금이나 고용 조건 허위 정보 금지"
    ],
    borderColor: "border-blue-500"
  };

  // 특별 규칙이 필요한 경우 데이터
  const specialRulesRequired = {
    title: "특별 규칙이 필요한 경우",
    items: [
      "15세 미만 청소년 채용",
      "고용 기관 사용",
      "가사 노동자 채용",
      "농장 노동자 채용",
      "임시 외국인 근로자 채용"
    ],
    borderColor: "border-purple-500"
  };

  // 근무 시간 관련 데이터들
  const standardWorkHours = {
    title: "표준 근무 시간",
    items: [
      "하루 8시간",
      "일주일 40시간",
      "일주일: 일요일~토요일",
      "평균 계약 시 다를 수 있음"
    ],
    borderColor: "border-yellow-500"
  };

  const overtime = {
    title: "초과 근무",
    items: [
      "하루 8시간 초과 시",
      "일주일 40시간 초과 시",
      "1.5배 또는 2배 임금",
      "12시간 초과 시 2배"
    ],
    borderColor: "border-orange-500"
  };

  const minimumWorkHours = {
    title: "최소 근무 시간",
    items: [
      "최소 2시간 이상 스케줄",
      "출근 시 일이 없어도 임금 지급",
      "최저 일일 급여 보장"
    ],
    borderColor: "border-green-500"
  };

  const breakTime = {
    title: "휴식 시간",
    items: [
      "매주 최소 32시간 연속 휴식",
      "교대 근무 사이 최소 8시간",
      "5시간 이상 연속 근무 시 30분 식사시간",
      "분할 교대는 12시간 이내 완료"
    ],
    borderColor: "border-blue-500"
  };

  const travelTime = {
    title: "출장 시간",
    items: [
      "통근은 일반적으로 무급",
      "고용주 차량 운전 시 유급",
      "작업장 간 이동 시 유급",
      "지역 외 출장 시 유급"
    ],
    borderColor: "border-indigo-500"
  };

  // 휴가 관련 데이터들
  const vacationTypes = {
    title: "휴가 종류",
    items: [
      "연례 휴가: 1년 근무 후 유급 휴가",
      "결근: 가족 책임, 배심원 의무 (무급)",
      "병가: 본인/가족 질병 시 (무급)",
      "출산/육아 휴가: 최대 18개월 (무급)"
    ],
    borderColor: "border-red-500"
  };

  const importantPoints = {
    title: "중요 사항",
    items: [
      "고용주는 병가 지불 의무 없음",
      "유급 병가는 혜택으로 제공 가능",
      "법정 공휴일 = 휴일이 아닐 수 있음",
      "법정 공휴일 급여 계산법 적용"
    ],
    borderColor: "border-orange-500"
  };

  // 참고 자료 데이터
  const referenceData = {
    leftColumn: {
      items: [
        "고용 기준법 적용 여부",
        "직원 채용 가이드",
        "근무 시간 및 초과근무"
      ]
    },
    rightColumn: {
      items: [
        "휴가 및 휴직 정보",
        "Employment Standards 연락처",
        "BC 주정부 근로기준법"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Lecture 6</h1>
          <p className="text-xl text-gray-300 mb-8">BC 고용기준법 (Employment Standards)</p>
          <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto p-8">
          {/* 고용기준법 적용 여부 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                1. 고용 기준법이 당신에게 적용됩니까?
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 text-lg mb-6">
                  직장에서 발생하는 모든 문제가 고용 기준법과 관련이 있는 것은 아닙니다.
                  모든 직장 또는 모든 형태의 업무가 BC 고용 기준법에 포함되는 것은 아닙니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ">
                <SubSectionWithList
                  title={exclusionCases.title}
                  items={exclusionCases.items}
                  borderColor={exclusionCases.borderColor}
                />

                <SubSectionWithList
                  title={unrelatedIssues.title}
                  items={unrelatedIssues.items}
                  borderColor={unrelatedIssues.borderColor}
                />

                <SubSectionWithList
                  title={uncertaintyActions.title}
                  items={uncertaintyActions.items}
                  borderColor={uncertaintyActions.borderColor}
                />
              </div>
            </div>
          </section>

          {/* 직원 채용 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                2. 직원 채용
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 text-lg mb-6">
                  고용주는 최저 임금, 최소 근로 시간, 휴가 및 급여, 법정 공휴일 및 고용 종료를
                  포함한 모든 최소 기준을 충족하는 고용 계약을 제공해야 합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={employerObligations.title}
                  items={employerObligations.items}
                  borderColor={employerObligations.borderColor}
                />

                <SubSectionWithList
                  title={specialRulesRequired.title}
                  items={specialRulesRequired.items}
                  borderColor={specialRulesRequired.borderColor}
                />
              </div>

              <div className="bg-yellow-900 border border-yellow-600 p-4 rounded-lg">
                <p className="text-yellow-200">
                  <strong>중요:</strong> 고용주와 직원은 고용기준법에 맞지 않는 근무조건에 동의할 수 없습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 근무 시간 및 초과 근무 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                3. 근무 시간 및 초과 근무
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={standardWorkHours.title}
                  items={standardWorkHours.items}
                  borderColor={standardWorkHours.borderColor}
                />

                <SubSectionWithList
                  title={overtime.title}
                  items={overtime.items}
                  borderColor={overtime.borderColor}
                />

                <SubSectionWithList
                  title={minimumWorkHours.title}
                  items={minimumWorkHours.items}
                  borderColor={minimumWorkHours.borderColor}
                />

                <SubSectionWithList
                  title={breakTime.title}
                  items={breakTime.items}
                  borderColor={breakTime.borderColor}
                />

                <SubSectionWithList
                  title={travelTime.title}
                  items={travelTime.items}
                  borderColor={travelTime.borderColor}
                />
              </div>
            </div>
          </section>

          {/* 휴가 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                4. 휴가 (Taking Time Off)
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SubSectionWithList
                  title={vacationTypes.title}
                  items={vacationTypes.items}
                  borderColor={vacationTypes.borderColor}
                />

                <SubSectionWithList
                  title={importantPoints.title}
                  items={importantPoints.items}
                  borderColor={importantPoints.borderColor}
                />
              </div>
            </div>
          </section>

          {/* 참고 링크 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                참고 자료
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <ReferenceListComponent
                leftColumn={referenceData.leftColumn}
                rightColumn={referenceData.rightColumn}
              />
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-white text-sm">
                  위 내용은 브리티시 콜롬비아 주정부가 제공하는 근로기준법을 번역한 것입니다.
                  자세한 사항은 BC 주정부 공식 웹사이트를 참고해주시기 바랍니다.
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <div className="container mx-auto px-4 pb-8">
            <JobAcademyNavigation currentJobId={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job6;

