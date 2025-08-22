import React from 'react';
import { useTranslation } from 'react-i18next';
import JobAcademyNavigation from '../../../components/ui/JobAcademyNavigation/JobAcademyNavigation';
import type {
  SubSection,
  NumberedList,
  IconList,
  QuestionList,
  SectionWithSubSections
} from './InfoSubComponent';
import {
  SubSectionWithList,
  NumberedListComponent,
  IconListComponent,
  QuestionListComponent,
  SectionWithSubSectionsComponent
} from './InfoSubComponent';

const Job3: React.FC = () => {
    const { t } = useTranslation(['info_job3']);

  // h3 + ul 패턴 데이터들
  const coverLetterDefinition: SubSection = {
    title: "정의",
    items: [
      "자기 소개서 / 마케팅 툴",
      "고용주가 당신을 고용할 때 당신을 통해서 왜 그리고 어떻게 고용 혜택을 누릴 수 있는지 구체적으로 설명해 주세요.",
      "내가 원하는 것을 말하는 것이 아니라 고용주가 원하는 것을 말해 주세요."
    ],
    borderColor: "border-blue-500"
  };

  const coverLetterThinking: SubSection = {
    title: "생각해 보기",
    items: [
      "Cover Letter는 왜 쓸까요?",
      "Cover Letter에는 무엇을 그리고 어떻게 써야 하나요?"
    ],
    borderColor: "border-blue-500"
  };

  const resumeThinking: SubSection = {
    title: "생각해 보기",
    items: [
      "Resume에 대해서 아시나요?",
      "좋은 Resume가 되기 위해서 어떤 것들이 필요할까요?",
      "어떻게 Resume를 작성해야 하나요?"
    ],
    borderColor: "border-blue-500"
  };

  const brandingGuidelines: SubSection = {
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

  const profileSummary: SubSection = {
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

  const workExperience: SubSection = {
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

  const resumeComponents: SubSection = {
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

  // 번호가 매겨진 리스트 데이터들
  const coverLetterStructure: NumberedList = {
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

  const essentialTasks: NumberedList = {
    items: [
      "잡 포스팅을 꼼꼼히 읽어 보기",
      "잡 포스팅에 있는 내용은: 회사 소개, 자격 요건, 요구 사항",
      "잡 포스팅의 자격 요건과 요구 사항이 내가 가진 경력과 스킬에 얼마나 잘 맞는지 생각해 보고 내 Resume와 매칭하기"
    ],
    borderColor: "border-yellow-500",
    textColor: "text-yellow-300"
  };

  // 아이콘 리스트 데이터들
  const coverLetterRequirements: IconList = {
    items: [
      "Resume와 함께 Cover Letter를 이용해서 당신이 가지고 있는 Value (가치)를 전달하기",
      "Story(이야기)를 이용해서 Resume에 쓴 내용, 직접적인 일 경험 또는 성취한 일들, 보강 설명하기 – 한두가지",
      "당신이 가지고 있는 커뮤니케이션 스킬을 글로 보여주기"
    ],
    icon: "•",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500"
  };

  const coverLetterDos: IconList = {
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

  const coverLetterDonts: IconList = {
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

  const resumeDonts: IconList = {
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

  const coverLetterConsiderations: IconList = {
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

  // 질문 리스트 데이터들
  const resumeQuestions: QuestionList = {
    questions: [
      "Q. 고용주가 하나의 Resume를 보는데 걸리는 시간은 얼마일까요?",
      "Q. Resume는 몇 장 정도를 써야 하나요?"
    ],
    borderColor: "border-yellow-500",
    textColor: "text-yellow-300"
  };

  // 섹션 + 서브섹션 데이터들
  const resumeRequirements: SectionWithSubSections = {
    title: "Resume에 들어가야 하는 것들",
    subSections: [profileSummary, workExperience, resumeComponents]
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
            {t('info_job3:title')}
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
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 3</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {t('info_job3:lectureSubtitle').split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < t('info_job3:lectureSubtitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>


      <div className="max-w-6xl mx-auto p-8">

        {/* 강의 3 목표 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Lecture 3 Goal
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <p className="text-gray-200 text-lg">
              • Cover Letter(Cover Letter)와 Resume(Resume) 작성법에 대해 배운다.
            </p>
          </div>
        </section>

        {/* Cover Letter 작성법 배우기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Cover Letter 작성법 배우기
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <SubSectionWithList {...coverLetterThinking} />
        </section>

        {/* Cover Letter란 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Cover Letter란
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="grid gap-6 mb-6">
            <SubSectionWithList {...coverLetterDefinition} />

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-yellow-300 text-xl font-semibold mb-4">자주 묻는 질문</h3>
              <div className="text-gray-200 space-y-2">
                <p><strong>Q. Cover Letter는 몇 장을 써야 하나요?</strong></p>
                <p><strong>Q. Cover Letter가 꼭 있어야 하나요?</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Letter 작성 고려사항 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Cover Letter 쓸 때 고려할 것들
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <IconListComponent {...coverLetterConsiderations} />
        </section>

        {/* Cover Letter의 구성 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Cover Letter의 구성
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <NumberedListComponent {...coverLetterStructure} />
        </section>

        {/* Cover Letter에 있어야 하는 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Cover Letter에 있어야 하는 것들
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="space-y-4">
            <IconListComponent {...coverLetterRequirements} />
          </div>
        </section>

        {/* Cover Letter를 쓸 때 해야 하는 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Cover Letter를 쓸 때 해야 하는 것들
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <IconListComponent {...coverLetterDos} />
        </section>

        {/* Cover Letter를 쓸 때 하지 말아야 하는 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Cover Letter를 쓸 때 하지 말아야 하는 것들
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <IconListComponent {...coverLetterDonts} />
        </section>

        {/* Resume 작성법 배우기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Resume 작성법 배우기
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <SubSectionWithList {...resumeThinking} />
        </section>

        {/* Resume란 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Resume란
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
            <p className="text-gray-200 text-lg leading-relaxed">
              고용주가 한눈에 당신이 가지고 있는 관련성 있는 기술, 교육, 일 경험들을 알아 볼 수 있게 전달하는 마케팅 툴이에요.
            </p>
          </div>

          <QuestionListComponent {...resumeQuestions} />
        </section>

        {/* Resume를 쓸 때 고려할 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Resume를 쓸 때 고려할 것들
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <SubSectionWithList {...brandingGuidelines} />
        </section>

        {/* Resume를 쓸 때 하지 말아야 하는 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Resume를 쓸 때 하지 말아야 하는 것들
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <IconListComponent {...resumeDonts} />
        </section>

        <SectionWithSubSectionsComponent {...resumeRequirements} />

        {/* Cover Letter와 Resume 작성시 꼭 해야 하는 것 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Cover Letter와 Resume 작성시 꼭 해야 하는 것
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <NumberedListComponent {...essentialTasks} />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-white text-lg font-bold mb-4">Sample Resume 1</h3>
              <img
                src="/imgs/jobacademy/lecture3-01.png"
                alt="Sample Resume 1"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-white text-lg font-bold mb-4">Sample Resume 2</h3>
              <img
                src="/imgs/jobacademy/lecture3-02.png"
                alt="Sample Resume 2"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Job Academy 네비게이션 */}
        <JobAcademyNavigation currentJobId={3} />
      </div>
    </div>
  );
};

export default Job3;

