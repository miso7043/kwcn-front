import React from 'react';
import { useTranslation } from 'react-i18next';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SubSectionWithList, ReferenceListComponent, InfoBoxComponent, StepGuideComponent } from './InfoSubComponent';

const Job7: React.FC = () => {
  const { t, i18n } = useTranslation(['info_job7']);
  const currentLanguage = i18n.language; // 언어 변경시 자동으로 리렌더링됨

  // 임금 관련 데이터들
  const paymentRules = {
    title: "급여 지불 규칙",
    items: [
      "한 달에 두 번 급여 지불",
      "지불 기간 최대 16일",
      "급여지불기간 종료 후 8일 이내 지급",
      "캐나다 통화로 지불",
      "현금, 수표, 은행계좌, 우편환 가능"
    ],
    borderColor: "border-blue-500"
  };

  const wageStandards = {
    title: "임금 기준",
    items: [
      "최저임금: 시간당 최소 기준",
      "최소 일일 지불: 2시간 미만 근무도 2시간 급여",
      "초과근무 수당: 표준 시간 초과 시",
      "법정휴일 급여: 자격 조건 충족 시"
    ],
    borderColor: "border-emerald-500"
  };

  const deductionsRecords = {
    title: "공제 및 기록",
    items: [
      "사업 비용은 임금에서 공제 불가",
      "고용주는 근무시간 기록 유지",
      "급여일마다 급여명세서 제공"
    ],
    borderColor: "border-yellow-500"
  };

  const tipsUniforms = {
    title: "팁 및 유니폼",
    items: [
      "고용주는 팁 수집 후 배포 가능",
      "유니폼은 고용주가 무료 제공",
      "복장 규정과 유니폼은 구분"
    ],
    borderColor: "border-purple-500"
  };

  const vacationPay = {
    title: "휴가 급여",
    items: [
      "유급 휴가 제공",
      "병가는 의무사항 아님",
      "법정공휴일 급여 계산법 적용"
    ],
    borderColor: "border-indigo-500"
  };

  // 사직/해고 관련 데이터들
  const employeeResignation = {
    title: "직원의 사직",
    items: [
      "통지 없이 언제든지 고용 종료 가능",
      "고용 기간에 대한 보상 없음",
      "고용주는 미리 통지를 원하지만 의무 아님",
      "최종 임금은 마지막 날부터 6일 이내"
    ],
    borderColor: "border-blue-500"
  };

  const employerTermination = {
    title: "고용주의 해고",
    items: [
      "서면 통지 및/또는 보상 지불",
      "정당한 사유 시 통지/보상 불필요",
      "최종 임금은 48시간 이내 지급",
      "근무 기간에 따른 서비스 보상"
    ],
    borderColor: "border-red-500"
  };

  const justCause = {
    title: "정당한 사유",
    items: [
      "심각한 범죄: 도둑질, 사기",
      "부정직한 행동",
      "다른 사람 공격이나 괴롭힘",
      "회사 규칙 위반"
    ],
    borderColor: "border-orange-500"
  };

  const layoff = {
    title: "레이오프 (정리해고)",
    items: [
      "업무량 부족이나 일이 없을 때",
      "주 임금의 50% 미만 시 해고 간주",
      "임시 해고: 최대 13주 (20주 기간 중)",
      "단체협약 대상자는 리콜 기간 적용"
    ],
    borderColor: "border-purple-500"
  };

  // 법정 공휴일 관련 데이터들
  const holidayReplacement = {
    title: "다른 날로 대체",
    items: [
      "고용주와 직원 서면 동의 시",
      "대체일은 법정공휴일과 동일하게 취급",
      "급여 계산법도 동일하게 적용",
      "미리 계획된 대체만 인정"
    ],
    borderColor: "border-yellow-500"
  };

  // 최종 임금 구성 데이터
  const finalWageComposition = {
    title: "최종 임금 구성",
    description: "정규 임금, 초과근무 수당, 법정휴일 급여, 서비스 기간 보상, 휴가 급여 포함",
    items: [
      "고용주 해고: 마지막 날 후 48시간 이내",
      "직원 사직: 마지막 날 후 6일 이내",
      "직원을 찾을 수 없는 경우: 60일 이내 Director에게 지불"
    ]
  };

  // 법정 휴일 급여 받기 단계 데이터
  const holidayPaySteps = {
    title: "법정 휴일 급여 받기",
    steps: [
      {
        stepTitle: "1단계: 자격 확인",
        stepDescription: "법정 공휴일 수당 자격을 갖추기 위한 기본 규칙 확인 및 포함되지 않은 직원 파악",
        borderColor: "border-blue-400",
        titleColor: "text-blue-300"
      },
      {
        stepTitle: "2단계: 급여 계산",
        stepDescription: "법정 휴일 급여 = 평균 일 급여. 근무하거나 휴가를 떠나는 경우 지급",
        borderColor: "border-green-400",
        titleColor: "text-green-300"
      }
    ]
  };

  // 참고 자료 데이터
  const referenceData = {
    leftColumn: {
      items: [
        "직장에서 임금 받기",
        "사퇴, 퇴직, 해고",
        "법정 공휴일"
      ]
    },
    rightColumn: {
      items: [
        "고용 기준법 상세 정보",
        "급여 계산 방법",
        "직원 권리와 의무"
      ]
    }
  };

  // 법정 공휴일 목록 데이터
  const bcHolidays = {
    leftColumn: {
      items: [
        "신정 (New Year's Day)",
        "가족의 날 (Family Day)",
        "성금요일 (Good Friday)",
        "빅토리아 데이 (Victoria Day)",
        "캐나다 데이 (Canada Day)"
      ]
    },
    rightColumn: {
      items: [
        "BC 데이 (BC Day)",
        "노동절 (Labour Day)",
        "추수감사절 (Thanksgiving)",
        "현충일 (Remembrance Day)",
        "크리스마스 (Christmas Day)"
      ]
    }
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
            {t('info_job7:title')}
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
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 7</h2>
        </div>
        <div className={`absolute left-[66%] ${currentLanguage === 'ko' ? 'top-[38%]' : 'top-[26%]'}`}>
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg ">
            {t('info_job7:lectureSubtitle').split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < t('info_job7:lectureSubtitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* 직장에서 임금 받기 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                1. 직장에서 임금 받기
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 text-lg mb-6">
                  직원은 자신이 하는 일에 대해 비용을 지불 받아야 합니다.
                  각 급여지불 기간에서 일한 시간 동안 최소한 최저 임금을 받아야 합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={paymentRules.title}
                  items={paymentRules.items}
                  borderColor={paymentRules.borderColor}
                />

                <SubSectionWithList
                  title={wageStandards.title}
                  items={wageStandards.items}
                  borderColor={wageStandards.borderColor}
                />

                <SubSectionWithList
                  title={deductionsRecords.title}
                  items={deductionsRecords.items}
                  borderColor={deductionsRecords.borderColor}
                />

                <SubSectionWithList
                  title={tipsUniforms.title}
                  items={tipsUniforms.items}
                  borderColor={tipsUniforms.borderColor}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={vacationPay.title}
                  items={vacationPay.items}
                  borderColor={vacationPay.borderColor}
                />

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">법정공휴일 급여 계산</h3>
                  <div className="text-white-200">
                    <p className="mb-2"><strong>공식:</strong> 총 임금 ÷ 근무일 수 = 법정 휴일 급여</p>
                    <p className="mb-2"><strong>법정공휴일 근무 시:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• 일한 시간의 1.5배 지급</li>
                      <li>• 12시간 초과 시 2배 지급</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 사직 또는 해고 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                2. 사직 또는 해고
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 text-lg mb-6">
                  직원이 퇴사하거나 퇴직하거나 고용주가 해고하면 고용이 종료됩니다.
                  고용주는 서면 통지나 근무 기간에 따른 지불, 또는 정당한 사유로 해고할 수 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={employeeResignation.title}
                  items={employeeResignation.items}
                  borderColor={employeeResignation.borderColor}
                />

                <SubSectionWithList
                  title={employerTermination.title}
                  items={employerTermination.items}
                  borderColor={employerTermination.borderColor}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <SubSectionWithList
                    title={justCause.title}
                    items={justCause.items}
                    borderColor={justCause.borderColor}
                  />
                  <div className="mt-4 p-3 bg-yellow-600/20 rounded">
                    <p className="text-white text-sm">
                      불만족스러운 성과나 경미한 위법행위는 정당한 사유가 아님
                    </p>
                  </div>
                </div>

                <SubSectionWithList
                  title={layoff.title}
                  items={layoff.items}
                  borderColor={layoff.borderColor}
                />
              </div>

              <InfoBoxComponent
                title={finalWageComposition.title}
                description={finalWageComposition.description}
                items={finalWageComposition.items}
                bgColor="bg-cyan-900/20"
                textColor="text-white"
              />
            </div>
          </section>

          {/* 법정 공휴일 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                3. 법정 공휴일
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 text-lg mb-6">
                  BC주의 법정 공휴일은 자격이 되는 직원에게 법정 공휴일 급여를 제공합니다.
                  법정 공휴일이 반드시 직원들의 휴일을 의미하지는 않습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <StepGuideComponent
                  title={holidayPaySteps.title}
                  steps={holidayPaySteps.steps}
                  bgColor="bg-gray-900"
                  textColor="text-white"
                />

                <SubSectionWithList
                  title={holidayReplacement.title}
                  items={holidayReplacement.items}
                  borderColor={holidayReplacement.borderColor}
                />
              </div>

              <div className="bg-indigo-900/10 border border-indigo-600/20 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">주요 BC주 법정 공휴일</h3>
                <ReferenceListComponent
                  leftColumn={bcHolidays.leftColumn}
                  rightColumn={bcHolidays.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* 참고 링크 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                참고 자료
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <ReferenceListComponent
                leftColumn={referenceData.leftColumn}
                rightColumn={referenceData.rightColumn}
              />
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200 text-sm">
                  위 내용은 브리티시 콜롬비아 주정부가 제공하는 근로기준법을 번역한 것입니다.
                  자세한 사항은 BC 주정부 공식 웹사이트를 참고해주시기 바랍니다.
                </p>
              </div>
            </div>
          </section>


          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={7} />
        </div>
      </div>
    </div>
  );
};

export default Job7;

