import React from 'react';
import useLanguage from '../../../hooks/useLanguage';
import ImageGallery from '../../../components/ui/ImageGallery/ImageGallery';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import * as job1ko from './locales/Job1_ko';
import * as job1en from './locales/Job1_en';


type SimpleInfo = {
  title: string;
  description: string;
};

const Job1: React.FC = () => {
  const { language } = useLanguage();
  const job1 = language === 'en' ? job1en : job1ko;
  const { job1Text } = job1;

  const galleryImages = [
    { src: '/imgs/jobacademy/lecture1-WorkBC1.jpg', alt: 'WorkBC 1', title: '' },
    { src: '/imgs/jobacademy/lecture1-WorkBC2.jpg', alt: 'WorkBC 2', title: '' },
    { src: '/imgs/jobacademy/lecture1-WorkBC3.jpg', alt: 'WorkBC 3', title: '' },
    { src: '/imgs/jobacademy/lecture1-WorkBC4.jpg', alt: 'WorkBC 4', title: '' },
  ];

  const workBcQuizzes = job1Text.quizzes.map((quiz: SimpleInfo, idx: number) => ({
    ...quiz,
    url: [
      'https://careerdiscoveryquizzes.workbc.ca/form/abilities-quiz',
      'https://careerdiscoveryquizzes.workbc.ca/form/work-preferences-quiz',
      'https://careerdiscoveryquizzes.workbc.ca/form/interests-quiz',
    ][idx],
  }));

  const certificates = job1Text.certificates.map((cert: SimpleInfo, idx: number) => ({
    ...cert,
    url: [
      'http://www.foodsafe.ca/',
      '#',
      'http://www.redcross.ca/training-and-certification',
      'https://www.worksafebc.com/en/health-safety/education-training-certification/forklift-operator',
      'https://www.bccsa.ca/Standardized-Traffic-Control-Training.html',
      'https://www.servingitright.com/',
      '#',
      'https://gv.ymca.ca/Blogs/CCRR-Blog/August-2017/Looking-for-ECE-workshops',
      '#',
    ][idx],
  }));

  const helpfulResources = job1Text.resources.map((res: SimpleInfo, idx: number) => ({
    ...res,
    url: [
      'https://www.workbc.ca/',
      'https://www.jobbank.gc.ca/explorecareers',
      'http://www.bc211.ca/',
      'http://newtobc.ca/',
      'http://www.cic.gc.ca/english/newcomers/services/index.asp',
      'http://www.govolunteer.ca/',
      'http://www.worksafebc.com/',
    ][idx],
  }));

  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job1Text.title}
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
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 1</h2>
        </div>
        <div className={`absolute left-[66%] ${language === 'ko' ? 'top-[38%]' : 'top-[26%]'}`}>
          <h2 className="font-bold text-white drop-shadow-lg text-[clamp(0.8rem,2.5vw,3rem)]">
            {job1Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job1Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Lecture 1 계획 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job1Text.lecturePlan}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <ul className="space-y-2">
              <li className="relative pl-6 text-gray-200">
                <span className="absolute left-0 text-green-400 font-bold">✓</span>
                {job1Text.planItem1}
              </li>
              <li className="relative pl-6 text-gray-200">
                <span className="absolute left-0 text-green-400 font-bold">✓</span>
                {job1Text.planItem2}
              </li>
            </ul>
          </div>

          <h3 className="text-2xl italic text-red-400 text-center my-6 p-4 bg-gray-800 border-l-4 border-red-500 rounded">
            {job1Text.tedQuote}
          </h3>

          {/* TED 영상 삽입 */}
          <div className="my-8 flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/iKHTawgyKWQ"
                  title="Why you will fail to have a great career | Larry Smith | TEDxUW"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              {job1Text.introduction.paragraph1}
            </p>
            <p>
              {job1Text.introduction.paragraph2}
            </p>
          </div>
          <img
            src={job1Text.imgLikeGood}
            alt="Like Good"
            className="p-[10%] h-auto object-contain"
          />
        </section>

        {/* Work BC 웹사이트 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job1Text.workBcSection.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              {job1Text.workBcSection.description1}
            </p>
            <p>{job1Text.workBcSection.description2}</p>
          </div>

          {/* 이미지 갤러리 */}
          <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job1Text.galleryTitle}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
            </h2>
            <ImageGallery images={galleryImages} />
          </section>

          <div className="mt-8">
            <h4 className="text-white text-xl font-semibold mb-4">{job1Text.workBcSection.quizzesTitle}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {workBcQuizzes.map((quiz, index) => (
                <a
                  key={index}
                  href={quiz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-center text-white rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700"
                >
                  <h5 className="text-xl font-bold mb-2">{quiz.title}</h5>
                  {quiz.description && <p className="text-sm opacity-90">{quiz.description}</p>}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 적성과 특기, 캐나다 구직활동 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job1Text.careerSection.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              {job1Text.careerSection.paragraph1}
            </p>
            <p>
              {job1Text.careerSection.paragraph2}
            </p>
          </div>

          <img
            src={job1Text.imgLec2Diagram}
            alt="Lecture 2 Diagram"
            className="my-[4rem] mx-auto h-auto object-contain "
          />

          <div className="mt-8">
            <h4 className="text-white text-xl font-semibold mb-6">{job1Text.careerSection.improvementTitle}</h4>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">{job1Text.careerSection.languageSkills.title}</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>{job1Text.careerSection.languageSkills.items[0]}</li>
                <li>{job1Text.careerSection.languageSkills.items[1]} (<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com</a>)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">{job1Text.careerSection.offlineActivities.title}</h5>
              <ul className="list-disc list-inside space-y-3 text-gray-200">
                <li>
                  <strong className="text-white">Toastmasters</strong> - {job1Text.careerSection.offlineActivities.toastmasters}
                  (<a href="https://www.toastmasters.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">toastmasters.org</a>)
                </li>
                <li>
                  <strong className="text-white">Meet Up</strong> - {job1Text.careerSection.offlineActivities.meetup}
                  (<a href="https://www.meetup.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">meetup.com</a>)
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">{job1Text.careerSection.volunteering.title}</h5>
              <ul className="list-disc list-inside space-y-3 text-gray-200">
                <li>
                  {job1Text.careerSection.volunteering.item1}
                  (<a href="https://www.govolunteer.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">govolunteer.ca</a>)
                </li>
                <li>{job1Text.careerSection.volunteering.item2}</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">{job1Text.careerSection.supportNetwork.title}</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>{job1Text.careerSection.supportNetwork.item}</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900/10 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
            <h4 className="text-white text-lg font-semibold mb-4">{job1Text.careerSection.keyPoints.title}</h4>
            <ul className="space-y-3">
              <li className="relative pl-6 text-white leading-relaxed">
                <span className="absolute left-0">💡</span>
                {job1Text.careerSection.keyPoints.point1}
              </li>
              <li className="relative pl-6 text-white leading-relaxed">
                <span className="absolute left-0">💡</span>
                {job1Text.careerSection.keyPoints.point2}
              </li>
            </ul>
          </div>
        </section>

        {/* 자격증 섹션 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job1Text.certificatesSection.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>{job1Text.certificatesSection.description1}</p>
            <p>
              {job1Text.certificatesSection.description2}
            </p>
            <p>
              {job1Text.certificatesSection.description3}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gray-800 text-white p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-bold mb-4">{cert.title}</h4>
                <p className="leading-relaxed opacity-95 mb-4">{cert.description}</p>
                {cert.url !== '#' && (
                  <div className="text-center">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-indigo-800 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      {job1Text.certificatesSection.viewDetails}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 도움 기관 및 정보 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job1Text.resourcesSection.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {helpfulResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-3">{resource.title}</h4>
                <p className="leading-relaxed opacity-95">{resource.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Job Academy 네비게이션 */}
        <JobAcademyNavigation currentJobId={1} />
      </div>
    </div>
  );
};

export default Job1;
