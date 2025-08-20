import React from 'react';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import { StarMethodComponent, TasksListComponent, SectionWithSubSectionsComponent, ThinkingBoxComponent } from './InfoSubComponent';

const Job4: React.FC = () => {
  // STAR 기법 데이터
  const starMethodData = [
    {
      letter: "S",
      title: "Situation (상황)",
      description: "구체적인 상황이나 배경을 설명합니다",
      example: "예: 팀 프로젝트가 마감 2주 전에 지연되고 있었습니다"
    },
    {
      letter: "T",
      title: "Task (과제)",
      description: "당신이 해결해야 했던 문제나 목표를 명확히 합니다",
      example: "예: 프로젝트 매니저로서 일정을 회복하고 품질을 유지해야 했습니다"
    },
    {
      letter: "A",
      title: "Action (행동)",
      description: "당신이 취한 구체적인 행동을 설명합니다",
      example: "예: 팀원들과 개별 미팅을 갖고, 작업을 재분배하며, 일일 체크인을 도입했습니다"
    },
    {
      letter: "R",
      title: "Result (결과)",
      description: "당신의 행동으로 인한 긍정적인 결과를 제시합니다",
      example: "예: 프로젝트를 정시에 완료했고, 고객 만족도가 95%에 달했습니다"
    }
  ];

  // 면접 후 할 일 데이터
  const postInterviewTasks = [
    {
      title: "감사 이메일 보내기",
      description: "면접 후 24시간 내에 감사 메시지를 보냅니다",
      tips: ["면접 기회에 대한 감사 표현", "핵심 포인트 재강조", "추가 정보 제공 기회"]
    },
    {
      title: "면접 내용 정리하기",
      description: "면접에서 나왔던 질문과 답변을 기록합니다",
      tips: ["잘했던 부분과 개선점 파악", "다음 면접에 활용할 포인트 정리", "회사와 직무에 대한 새로운 정보 기록"]
    },
    {
      title: "후속 연락 계획",
      description: "적절한 시기에 후속 연락을 취합니다",
      tips: ["면접관이 제시한 일정 존중", "1-2주 후 정중한 문의", "지나치게 자주 연락하지 않기"]
    }
  ];

  // 인터뷰 준비 단계 데이터
  const interviewPrepSteps = [
    {
      title: "1단계: 회사 연구하기",
      description:"",
      tips: [
        "회사 웹사이트 방문",
        "회사 미션, 비전, 가치관 파악",
        "최근 뉴스나 성과 확인",
        "회사 규모와 업계 위치 이해"
      ]
    },
    {
      title: "2단계: 직무 분석하기",
      description:"",
      tips: [
        "잡 포스팅 다시 읽기",
        "필요한 스킬과 자격 요건 확인",
        "자신의 경험과 매칭점 찾기",
        "부족한 부분에 대한 보완 방안 준비"
      ]
    },
    {
      title: "3단계: 예상 질문 준비하기",
      description:"",
      tips: [
        "일반적인 질문 리스트 작성",
        "행동 기반 질문(Behavioral) 준비",
        "STAR 기법으로 답변 구성",
        "실제 상황 예시 준비"
      ]
    },
    {
      title: "4단계: 질문할 내용 준비하기",
      description:"",
      tips: [
        "회사 문화에 대한 질문",
        "직무 관련 구체적 질문",
        "성장 기회에 대한 질문",
        "팀 구성과 협업 방식 질문"
      ]
    }
  ];

  // 인터뷰에서 중요한 요소들 데이터
  const importantInterviewElements = {
    title: "인터뷰에서 중요한 요소들",
    subSections: [
      {
        title: "외모와 복장",
        items: [
          "깔끔하고 전문적인 복장",
          "회사 문화에 맞는 드레스 코드",
          "좋은 첫인상 만들기",
          "개인 위생 철저히"
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "바디 랭귀지",
        items: [
          "자신감 있는 자세",
          "적절한 아이컨택",
          "활동적인 제스처",
          "긍정적인 표정"
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "커뮤니케이션",
        items: [
          "명확하고 간결한 답변",
          "적극적인 경청",
          "적절한 목소리 톤",
          "질문의 핵심 파악"
        ],
        borderColor: "border-yellow-500"
      },
      {
        title: "시간 관리",
        items: [
          "정시 도착 (10-15분 일찍)",
          "적절한 답변 길이",
          "면접 시간 존중",
          "마무리 단계 인지"
        ],
        borderColor: "border-red-500"
      }
    ]
  };

  // 자주 나오는 인터뷰 질문들 데이터
  const commonInterviewQuestions = {
    title: "자주 나오는 인터뷰 질문들",
    subSections: [
      {
        title: "일반적인 질문",
        items: [
          '"자기소개를 해주세요"',
          '"왜 우리 회사에 지원했나요?"',
          '"당신의 강점과 약점은 무엇인가요?"',
          '"5년 후 자신의 모습을 어떻게 그리고 있나요?"',
          '"왜 이직을 하려고 하나요?"'
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "경험 기반 질문",
        items: [
          '"가장 도전적이었던 프로젝트에 대해 말씀해주세요"',
          '"팀워크가 중요했던 경험이 있나요?"',
          '"갈등 상황을 어떻게 해결했나요?"',
          '"실패했던 경험과 그로부터 배운 점은?"',
          '"압박감 속에서 일했던 경험이 있나요?"'
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "직무 관련 질문",
        items: [
          '"이 직무에 필요한 스킬을 어떻게 개발했나요?"',
          '"가장 자신 있는 업무 영역은 무엇인가요?"',
          '"새로운 기술을 어떻게 학습하나요?"',
          '"이 업계의 트렌드에 대해 어떻게 생각하나요?"',
          '"우선순위를 어떻게 정하나요?"'
        ],
        borderColor: "border-indigo-500"
      }
    ]
  };

  // 면접 자신감 키우기 데이터
  const interviewConfidenceBuilding = {
    title: "면접 자신감 키우기",
    subSections: [
      {
        title: "연습과 준비",
        items: [
          "거울 앞에서 답변 연습하기",
          "가족이나 친구와 모의 면접",
          "비디오 녹화로 자신의 모습 확인",
          "다양한 시나리오 대비"
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "마음가짐",
        items: [
          "긍정적인 자세 유지",
          "자신의 강점에 집중",
          "실수를 두려워하지 않기",
          "학습과 성장의 기회로 인식"
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "스트레스 관리",
        items: [
          "충분한 수면과 휴식",
          "면접 전 심호흡과 명상",
          "긴장감을 에너지로 전환",
          "현실적인 기대치 설정"
        ],
        borderColor: "border-yellow-500"
      },
      {
        title: "지속적 개선",
        items: [
          "각 면접에서 배운 점 정리",
          "피드백 적극적으로 수용",
          "부족한 부분 보완 노력",
          "네트워킹으로 정보 수집"
        ],
        borderColor: "border-indigo-500"
      }
    ]
  };

  // 면접의 종류 데이터
  const interviewTypes = {
    title: "면접의 종류",
    subSections: [
      {
        title: "폰 인터뷰 (Phone Interview)",
        items: [
          "1차 선별 과정",
          "보통 20-30분",
          "기본적인 자격 요건 확인",
          "목소리와 커뮤니케이션 스킬 평가"
        ],
        borderColor: "border-blue-500"
      },
      {
        title: "대면 인터뷰 (Face-to-Face Interview)",
        items: [
          "가장 일반적인 형태",
          "보통 45분 ~ 1시간",
          "바디랭귀지, 전체적인 인상 평가",
          "직무 관련 구체적 질문"
        ],
        borderColor: "border-emerald-500"
      },
      {
        title: "패널 인터뷰 (Panel Interview)",
        items: [
          "2명 이상의 면접관",
          "각기 다른 관점에서 평가",
          "스트레스 상황에서의 대응 능력 측정",
          "팀워크와 적응력 평가"
        ],
        borderColor: "border-yellow-500"
      },
      {
        title: "비디오 인터뷰 (Video Interview)",
        items: [
          "온라인 플랫폼 활용 (Zoom, Skype 등)",
          "기술적 준비 필요",
          "조명과 배경 고려",
          "아이컨택과 카메라 위치 중요"
        ],
        borderColor: "border-indigo-500"
      }
    ]
  };

  // 생각해보기 데이터
  const thinkingQuestions = {
    title: "생각해 보기",
    questions: [
      "인터뷰는 무엇일까요?",
      "인터뷰에서 무엇을 평가하나요?",
      "인터뷰를 어떻게 준비해야 하나요?"
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
            잡 아카데미 강의 4: 인터뷰 (Interview) 준비하기
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        
        {/* 강의 4 목표 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Lecture 4 Goal
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <p className="text-gray-200 text-lg">
              • 인터뷰(Interview) 준비에 대해 배운다.
            </p>
          </div>
        </section>

        {/* 인터뷰 준비하기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            인터뷰 준비하기
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <ThinkingBoxComponent
            title={thinkingQuestions.title}
            questions={thinkingQuestions.questions}
          />
        </section>

        {/* 면접의 종류 */}
        <SectionWithSubSectionsComponent 
          title={interviewTypes.title} 
          subSections={interviewTypes.subSections} 
        />

        {/* 인터뷰 준비 단계 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            인터뷰 준비 단계
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <TasksListComponent tasks={interviewPrepSteps} />
        </section>

        {/* 인터뷰에서 중요한 요소들 */}
        <SectionWithSubSectionsComponent 
          title={importantInterviewElements.title} 
          subSections={importantInterviewElements.subSections} 
        />

        {/* 자주 나오는 인터뷰 질문들 */}
        <SectionWithSubSectionsComponent 
          title={commonInterviewQuestions.title} 
          subSections={commonInterviewQuestions.subSections} 
        />

        {/* STAR 기법 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            STAR 기법 활용하기
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="mb-6">
            <p className="text-gray-200 mb-4 leading-relaxed">
              행동 기반 질문에 체계적으로 답변하는 방법:
            </p>
          </div>
          
          <StarMethodComponent items={starMethodData} />
        </section>

        {/* 면접 후 할 일 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            면접 후 할 일
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <TasksListComponent tasks={postInterviewTasks} />
        </section>

        {/* 자신감 키우기 */}
        <SectionWithSubSectionsComponent 
          title={interviewConfidenceBuilding.title} 
          subSections={interviewConfidenceBuilding.subSections} 
        />

        {/* Job Academy 네비게이션 */}
        <JobAcademyNavigation currentJobId={4} />
      </div>
    </div>
  );
};

export default Job4;

