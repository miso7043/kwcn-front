// UI에서 쓰이는 한글 텍스트
export const job3Text = {
  title: "JOB ACADEMY",
  lectureSubtitle: "이력서 작성",
  pageTitle: "Job Academy - Lecture 3",
  lecture3Goal: 'Cover Letter와 Resume 작성법에 대해 배운다.',
  coverLetterGuide: 'Cover Letter 작성법 배우기',
  coverLetterWhat: 'Cover Letter란',
  coverLetterFAQTitle: '자주 묻는 질문',
  coverLetterConsider: 'Cover Letter 쓸 때 고려할 것들',
  coverLetterStructure: 'Cover Letter의 구성',
  coverLetterMust: 'Cover Letter에 있어야 하는 것들',
  coverLetterDo: 'Cover Letter를 쓸 때 해야 하는 것들',
  coverLetterDont: 'Cover Letter를 쓸 때 하지 말아야 하는 것들',
  resumeGuide: 'Resume 작성법 배우기',
  resumeWhat: 'Resume란',
  resumeConsider: 'Resume를 쓸 때 고려할 것들',
  resumeDont: 'Resume를 쓸 때 하지 말아야 하는 것들',
  resumeSection: 'Resume에 들어가야 하는 것들',
  mustDo: 'Cover Letter와 Resume 작성시 꼭 해야 하는 것',
  sampleResume1: 'Sample Resume 1',
  sampleResume2: 'Sample Resume 2',
  coverLetterFAQ1: 'Q. Cover Letter는 몇 장을 써야 하나요?',
  coverLetterFAQ2: 'Q. Cover Letter가 꼭 있어야 하나요?',
  resumeDesc: '고용주가 한눈에 당신이 가지고 있는 관련성 있는 기술, 교육, 일 경험들을 알아 볼 수 있게 전달하는 마케팅 툴이에요.',
};
// Job3_ko.ts
import type { SubSection, NumberedList, IconList, QuestionList, SectionWithSubSections } from '../InfoSubComponent';

export const coverLetterDefinition: SubSection = {
  title: "정의",
  items: [
    "자기 소개서 / 마케팅 툴",
    "고용주가 당신을 고용할 때 당신을 통해서 왜 그리고 어떻게 고용 혜택을 누릴 수 있는지 구체적으로 설명해 주세요.",
    "내가 원하는 것을 말하는 것이 아니라 고용주가 원하는 것을 말해 주세요."
  ],
  borderColor: "border-blue-500"
};

export const coverLetterThinking: SubSection = {
  title: "생각해 보기",
  items: [
    "Cover Letter는 왜 쓸까요?",
    "Cover Letter에는 무엇을 그리고 어떻게 써야 하나요?"
  ],
  borderColor: "border-blue-500"
};

export const resumeThinking: SubSection = {
  title: "생각해 보기",
  items: [
    "Resume에 대해서 아시나요?",
    "좋은 Resume가 되기 위해서 어떤 것들이 필요할까요?",
    "어떻게 Resume를 작성해야 하나요?"
  ],
  borderColor: "border-blue-500"
};

export const brandingGuidelines: SubSection = {
  title: "브랜딩:",
  items: [
    "Header 이용하기",
    "Header – Resume, Cover Letter, 레퍼런스 레터에 같은 Header를 사용",
    "Header – 자기 이름, 주소, 전화 번호, 이메일, LinkedIn, Homepage, credentials(자격증명)을 넣어 주세요.",
    "폰트 사이즈: 보통은 11 이나 12; 단, 이름은 18",
    "여백 주기: 여백은 보통 1 인치를 줍니다."
  ],
  borderColor: "border-blue-500"
};

export const profileSummary: SubSection = {
  title: "프로필/요약 (Profile/Summary)",
  items: [
    "자기가 가지고 있는 자격 요건들을 쓰기 - 일 경험 / 관련 교육 – 학력, 자격증 / 관련성 있는 기술 (하드 스킬과 소프트 스킬)",
    "보통은 포인트 폼 (Summary)이나 문장식 (Profile)으로 쓰여집니다.",
    "  ◦ 포인트 폼은 5-7개",
    "  ◦ 문장식은 4-5 줄",
    "  ◦ 하드스킬: 컴퓨터 스킬, 타이핑 스킬, 운전…등등",
    "  ◦ 소프트 스킬: 커뮤니케이션, 피플 스킬, 팀 플레이어…등등"
  ],
  borderColor: "border-blue-500"
};

export const workExperience: SubSection = {
  title: "업무 경험 (Work Experience)",
  items: [
    "직함",
    "회사 이름",
    "회사 위치",
    "근무기간",
    "직무 설명이나 성취한 것들"
  ],
  borderColor: "border-emerald-500"
};

export const resumeComponents: SubSection = {
  title: "전체 구성 요소",
  items: [
    "Header – 이름과 연락처, 자격 증명, LinkedIn",
    "Headline / tagline – 1줄 자기 광고",
    "Profile / Summary – 자격 요건을 보여 주는 가장 중요한 곳",
    "Experience (work/volunteer)",
    "Education",
    "Professional development",
    "Interests (optional)"
  ],
  borderColor: "border-indigo-500"
};

export const coverLetterStructure: NumberedList = {
  items: [
    "Resume와 같은 헤더(Header)를 사용",
    "날짜 넣기",
    "고용주 정보 넣기 – 고용주 이름 (또는 Human Resources), 회사 이름, 주소",
    "잡 타이틀 또는 레퍼런스 넘버",
    "인사 하기 Greeting",
    "첫 번째 문단, 두번째 문단, 그리고 세번째 문단",
    "싸인 하기"
  ],
  borderColor: "border-blue-500",
  textColor: "text-blue-400"
};

export const essentialTasks: NumberedList = {
  items: [
    "잡 포스팅을 꼼꼼히 읽어 보기",
    "잡 포스팅에 있는 내용은: 회사 소개, 자격 요건, 요구 사항",
    "잡 포스팅의 자격 요건과 요구 사항이 내가 가진 경력과 스킬에 얼마나 잘 맞는지 생각해 보고 내 Resume와 매칭하기"
  ],
  borderColor: "border-yellow-500",
  textColor: "text-yellow-300"
};

export const coverLetterRequirements: IconList = {
  items: [
    "Resume와 함께 Cover Letter를 이용해서 당신이 가지고 있는 Value (가치)를 전달하기",
    "Story(이야기)를 이용해서 Resume에 쓴 내용, 직접적인 일 경험 또는 성취한 일들, 보강 설명하기 – 한두가지",
    "당신이 가지고 있는 커뮤니케이션 스킬을 글로 보여주기"
  ],
  icon: "•",
  iconColor: "text-emerald-400",
  borderColor: "border-emerald-500"
};

export const coverLetterDos: IconList = {
  items: [
    "영어 잘 하는 사람에게 교정 받기",
    "할 수만 있으면 고용주의 이름을 알아내서 그 이름 사용하기",
    "꼭 직업에 관련된 이야기만 전달 하기 – 다른 이야기 관심 없음",
    "당신이 회사에 대해서 가지고 있는 관심/아는 것 말해주기"
  ],
  icon: "✓",
  iconColor: "text-emerald-400",
  borderColor: "border-emerald-500"
};

export const coverLetterDonts: IconList = {
  items: [
    "Cover Letter에 Cover Letter라고 쓰지 말기",
    '"I" 로 시작하는 문장을 많이 쓰지 말기',
    "스펠링 체크를 너무 의존하지 말기 – 단어는 고치는데 문맥을 파악하지 못함",
    "자동 단어 고침 사용 – 주의 하기",
    "Resume에 쓴 내용 반복하지 말기",
    "캐네디언 스펠링 체크 – 미국 영어, 영국 영어 단어가 조금씩 다름"
  ],
  icon: "✗",
  iconColor: "text-red-400",
  borderColor: "border-red-500"
};

export const resumeDonts: IconList = {
  items: [
    "Resume라는 단어를 Resume에 쓰지 말기",
    "3가지 이상의 다른 폰트 사이즈를 쓰지 말기",
    "References 를 제공하겠다고 쓰지 말기",
    "SIN (Social Insurance Number) 를 넣지 말기",
    "자기 사진이나 학교 성적을 넣지 않기",
    "자기 나이 말하지 않기"
  ],
  icon: "✗",
  iconColor: "text-red-400",
  borderColor: "border-red-500"
};

export const coverLetterConsiderations: IconList = {
  items: [
    "Resume와 같은 Header를 사용하기",
    "글자크기는: 11 이나 12 폰트에 따라서",
    "여백은 1인치 주기",
    "정렬은 왼쪽 정렬하기"
  ],
  icon: "•",
  iconColor: "text-blue-400",
  borderColor: "border-blue-500"
};

export const resumeQuestions: QuestionList = {
  questions: [
    "Q. 고용주가 하나의 Resume를 보는데 걸리는 시간은 얼마일까요?",
    "Q. Resume는 몇 장 정도를 써야 하나요?"
  ],
  borderColor: "border-yellow-500",
  textColor: "text-yellow-300"
};

export const resumeRequirements: SectionWithSubSections = {
  title: "Resume에 들어가야 하는 것들",
  subSections: [profileSummary, workExperience, resumeComponents]
};
