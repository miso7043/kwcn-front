import React from 'react';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { SectionWithSubSectionsComponent, ThinkingBoxComponent, TasksListComponent, TableComponent, CultureComparisonListComponent } from './InfoSubComponent';

const Job5: React.FC = () => {
  // 생각해보기 데이터
  const thinkingQuestions = {
    title: "생각해 보기",
    questions: [
      "캐나다 직장 문화는 어떨까요?",
      "한국 직장 문화와 무엇이 다를까요?",
      "캐나다 직장에서 성공하려면 무엇이 필요할까요?"
    ]
  };

  // 캐나다 직장의 기본 특징 데이터
  const basicFeatures = {
    title: "캐나다 직장의 기본 특징",
    subSections: [
      {
        title: "수평적 조직 문화",
        items: [
          "상하 관계보다는 동료 관계 중시",
          "직급에 관계없이 의견 표현 권장",
          "상사와의 거리감이 적음",
          "팀워크와 협업 중시",
          "개인의 창의성과 자율성 존중"
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "일과 삶의 균형 (Work-Life Balance)",
        items: [
          "정시 퇴근 문화",
          "휴가 사용 권장",
          "개인 시간 존중",
          "야근보다는 효율성 중시",
          "가족과의 시간 중요시"
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "다양성과 포용성 (Diversity & Inclusion)",
        items: [
          "다문화 배경 직원들과의 협업",
          "차별 금지와 평등 추구",
          "다양한 관점과 아이디어 환영",
          "문화적 차이 인정과 존중",
          "포용적인 업무 환경 조성"
        ],
        borderColor: "border-yellow-500"
      }
    ]
  };

  // 캐나다와 한국 직장 문화 비교 데이터
  const cultureComparison = {
    title: "캐나다와 한국 직장 문화 비교",
    headers: ["구분", "한국", "캐나다"],
    rows: [
      ["조직 구조", "수직적, 위계질서 중시", "수평적, 동등한 관계 중시"],
      ["의사소통", "간접적, 눈치와 맥락 중시", "직접적, 명확한 표현 선호"],
      ["회의 문화", "상급자 위주, 조용한 분위기", "모든 참여자 발언, 활발한 토론"],
      ["근무 시간", "야근 문화, 장시간 근무", "정시 퇴근, 효율성 중시"],
      ["휴가", "눈치, 부담감", "당연한 권리, 적극 권장"],
      ["팀워크", "집단 의식, 화합 중시", "개인 역할, 협업 중시"]
    ]
  };

  // 효과적인 커뮤니케이션 데이터
  const effectiveCommunication = {
    title: "효과적인 커뮤니케이션",
    subSections: [
      {
        title: "직접적이고 명확한 소통",
        items: [
          "의견을 분명하게 표현하기",
          '"예", "아니오"를 명확히 하기',
          "불분명한 점은 바로 질문하기",
          "추상적 표현보다 구체적 설명"
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "적극적인 참여",
        items: [
          "회의에서 적극적으로 발언",
          "아이디어와 제안 적극 제시",
          "질문을 통한 적극적 학습",
          "피드백 요청과 수용"
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "존중과 예의",
        items: [
          "다른 사람의 의견 경청",
          "차이점을 인정하고 존중",
          "예의 바른 언어 사용",
          "문화적 차이에 대한 이해"
        ],
        borderColor: "border-indigo-500"
      }
    ]
  };

  // 팀워크와 협업 데이터
  const teamworkCollaboration = {
    title: "팀워크와 협업",
    subSections: [
      {
        title: "효과적인 팀워크",
        items: [
          "개인의 강점을 팀에 기여",
          "명확한 역할 분담과 책임",
          "정기적인 진행 상황 공유",
          "문제 발생 시 즉시 알리기",
          "동료의 성공을 함께 축하"
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "갈등 해결",
        items: [
          "문제와 사람을 분리해서 생각",
          "감정보다는 사실에 집중",
          "상대방의 관점 이해하려 노력",
          "건설적인 해결책 모색",
          "필요시 중재자 도움 요청"
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "피드백 주고받기",
        items: [
          "구체적이고 건설적인 피드백 제공",
          "피드백을 개인 공격으로 받아들이지 않기",
          "감사의 마음으로 피드백 수용",
          "개선 노력과 결과 공유",
          "정기적인 피드백 세션 활용"
        ],
        borderColor: "border-yellow-500"
      }
    ]
  };

  // 문화적 차이 비교 데이터
  const culturalDifferences = [
    {
      title: "고맥락 vs 저맥락 문화",
      borderColor: "border-blue-500",
      korea: {
        title: "한국 (고맥락)",
        description: "눈치, 암시, 분위기 파악"
      },
      canada: {
        title: "캐나다 (저맥락)",
        description: "명확한 언어, 직접적 표현"
      }
    },
    {
      title: "개인주의 vs 집단주의",
      borderColor: "border-emerald-500",
      korea: {
        title: "한국 (집단주의)",
        description: "팀 화합, 집단 의사결정"
      },
      canada: {
        title: "캐나다 (개인주의)",
        description: "개인 권리, 자율적 판단"
      }
    },
    {
      title: "권력 거리",
      borderColor: "border-indigo-500",
      korea: {
        title: "한국 (높은 권력 거리)",
        description: "위계질서, 서열 중시"
      },
      canada: {
        title: "캐나다 (낮은 권력 거리)",
        description: "평등, 상하 구분 최소화"
      }
    },
    {
      title: "불확실성 회피",
      borderColor: "border-yellow-500",
      korea: {
        title: "한국 (높은 회피성향)",
        description: "규칙 중시, 안정성 추구"
      },
      canada: {
        title: "캐나다 (낮은 회피성향)",
        description: "유연성, 변화 수용"
      }
    }
  ];
  const adaptationTips = [
    {
      title: "적극적인 관찰과 학습",
      description: "동료들의 행동을 관찰하고 문화를 이해합니다",
      tips: ["동료들의 행동 패턴 관찰", "질문을 통한 문화 이해", "멘토 찾기", "회사 정책과 규정 숙지"]
    },
    {
      title: "점진적인 변화",
      description: "무리한 변화보다는 단계적으로 적응합니다",
      tips: ["무리한 변화보다 단계적 적응", "자신만의 속도로 학습", "실수를 두려워하지 않기", "지속적인 개선 노력"]
    },
    {
      title: "네트워킹과 관계 구축",
      description: "동료들과 적극적으로 관계를 형성합니다",
      tips: ["동료들과의 관계 적극 형성", "업무 외 활동 참여", "다양한 배경의 사람들과 교류", "전문적 네트워크 구축"]
    },
    {
      title: "자신만의 강점 활용",
      description: "한국적 장점들을 적절히 활용합니다",
      tips: ["한국적 장점들을 적절히 활용", "다문화 경험을 강점으로 전환", "언어적 도전을 성장 기회로 활용", "글로벌 관점 제시"]
    }
  ];

  // 장기적 성공 전략 데이터
  const longTermStrategy = {
    title: "장기적 성공 전략",
    subSections: [
      {
        title: "지속적 학습",
        items: [
          "업계 트렌드 파악",
          "새로운 기술 습득",
          "전문성 개발",
          "인증과 자격증 취득"
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "리더십 개발",
        items: [
          "프로젝트 리드 경험",
          "멘토링 제공",
          "의사결정 능력 향상",
          "팀 빌딩 스킬 개발"
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "커리어 발전",
        items: [
          "명확한 목표 설정",
          "성과 관리와 문서화",
          "승진 기회 적극 활용",
          "다양한 경험 쌓기"
        ],
        borderColor: "border-indigo-500"
      }
    ]
  };

  // 캐나다 직장에서의 에티켓 데이터
  const workplaceEtiquette = {
    title: "캐나다 직장에서의 에티켓",
    subSections: [
      {
        title: "시간 관리",
        items: [
          "정확한 출퇴근 시간 준수",
          "회의 시간 엄수",
          "데드라인 준수",
          "일정 변경 시 미리 알리기"
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "개인 공간 존중",
        items: [
          "적절한 물리적 거리 유지",
          "개인 소유물 허락 없이 사용 금지",
          "사생활 과도하게 묻지 않기",
          "집중하는 동료 방해하지 않기"
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "이메일 에티켓",
        items: [
          "명확하고 간결한 제목",
          "예의 바른 인사말과 마무리",
          "필요한 사람만 참조에 포함",
          "24-48시간 내 회신"
        ],
        borderColor: "border-yellow-500"
      },
      {
        title: "전화 에티켓",
        items: [
          "명확한 자기 소개",
          "통화 목적 간단히 설명",
          "상대방 시간 고려",
          "중요한 내용은 이메일로 확인"
        ],
        borderColor: "border-red-500"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 이미지 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <h1 className="relative z-10 text-white text-5xl font-black text-center drop-shadow-lg pt-10">
            잡 아카데미 강의 5: 캐나다 직장 문화 이해하기
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        
        {/* 강의 5 목표 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Lecture 5 Goal
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <p className="text-gray-200 text-lg">
              • 캐나다 직장 문화에 대해 배운다.
            </p>
          </div>
        </section>

        {/* 캐나다 직장 문화 배우기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            캐나다 직장 문화 배우기
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <ThinkingBoxComponent
            title={thinkingQuestions.title}
            questions={thinkingQuestions.questions}
          />
        </section>

        {/* 캐나다 직장의 기본 특징 */}
        <SectionWithSubSectionsComponent 
          title={basicFeatures.title} 
          subSections={basicFeatures.subSections} 
        />

        {/* 캐나다와 한국 직장 문화 비교 */}
        <TableComponent 
          title={cultureComparison.title}
          headers={cultureComparison.headers}
          rows={cultureComparison.rows}
        />

        {/* 효과적인 커뮤니케이션 */}
        <SectionWithSubSectionsComponent 
          title={effectiveCommunication.title} 
          subSections={effectiveCommunication.subSections} 
        />

        {/* 캐나다 직장에서의 에티켓 */}
        <SectionWithSubSectionsComponent 
          title={workplaceEtiquette.title} 
          subSections={workplaceEtiquette.subSections} 
        />

        {/* 팀워크와 협업 */}
        <SectionWithSubSectionsComponent 
          title={teamworkCollaboration.title} 
          subSections={teamworkCollaboration.subSections} 
        />

        {/* 문화적 차이 이해하기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            문화적 차이 이해하기
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <CultureComparisonListComponent items={culturalDifferences} />
        </section>

        {/* 성공적인 적응을 위한 팁 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            성공적인 적응을 위한 팁
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <TasksListComponent tasks={adaptationTips} />
        </section>

        {/* 장기적 성공 전략 */}
        <SectionWithSubSectionsComponent 
          title={longTermStrategy.title} 
          subSections={longTermStrategy.subSections} 
        />

        {/* Job Academy 네비게이션 */}
        <JobAcademyNavigation currentJobId={5} />
      </div>
    </div>
  );
};

export default Job5;

