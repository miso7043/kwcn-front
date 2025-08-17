import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageGallery from '../../../components/ui/ImageGallery/ImageGallery';

interface ResourceLink {
  title: string;
  url: string;
  description?: string;
}

const Job1: React.FC = () => {
  const { t } = useTranslation(['common', 'information', 'info_job1']);

  // 갤러리 이미지 데이터
  const galleryImages = [
    {
      src: '/imgs/jobacademy/lecture1-WorkBC1.jpg',
      alt: 'WorkBC 1',
      title: ''
    },
    {
      src: '/imgs/jobacademy/lecture1-WorkBC2.jpg',
      alt: 'WorkBC 2',
      title: ''
    },
    {
      src: '/imgs/jobacademy/lecture1-WorkBC3.jpg',
      alt: 'WorkBC 3',
      title: ''
    },
    {
      src: '/imgs/jobacademy/lecture1-WorkBC4.jpg',
      alt: 'WorkBC 4',
      title: ''
    }
  ];

  // Work BC 퀴즈 링크들
  const workBcQuizzes: ResourceLink[] = [
    {
      title: t('info_job1:quizzes.0.title'),
      url: 'https://careerdiscoveryquizzes.workbc.ca/form/abilities-quiz',
      description: t('info_job1:quizzes.0.description')
    },
    {
      title: t('info_job1:quizzes.1.title'),
      url: 'https://careerdiscoveryquizzes.workbc.ca/form/work-preferences-quiz',
      description: t('info_job1:quizzes.1.description')
    },
    {
      title: t('info_job1:quizzes.2.title'),
      url: 'https://careerdiscoveryquizzes.workbc.ca/form/interests-quiz',
      description: t('info_job1:quizzes.2.description')
    }
  ];

  // 자격증 정보
  const certificates = [
    {
      title: t('info_job1:certificates.0.title'),
      description: t('info_job1:certificates.0.description'),
      url: 'http://www.foodsafe.ca/'
    },
    {
      title: t('info_job1:certificates.1.title'),
      description: t('info_job1:certificates.1.description'),
      url: '#'
    },
    {
      title: t('info_job1:certificates.2.title'),
      description: t('info_job1:certificates.2.description'),
      url: 'http://www.redcross.ca/training-and-certification'
    },
    {
      title: t('info_job1:certificates.3.title'),
      description: t('info_job1:certificates.3.description'),
      url: 'https://www.worksafebc.com/en/health-safety/education-training-certification/forklift-operator'
    },
    {
      title: t('info_job1:certificates.4.title'),
      description: t('info_job1:certificates.4.description'),
      url: 'https://www.bccsa.ca/Standardized-Traffic-Control-Training.html'
    },
    {
      title: t('info_job1:certificates.5.title'),
      description: t('info_job1:certificates.5.description'),
      url: 'https://www.servingitright.com/'
    },
    {
      title: t('info_job1:certificates.6.title'),
      description: t('info_job1:certificates.6.description'),
      url: '#'
    },
    {
      title: t('info_job1:certificates.7.title'),
      description: t('info_job1:certificates.7.description'),
      url: 'https://gv.ymca.ca/Blogs/CCRR-Blog/August-2017/Looking-for-ECE-workshops'
    },
    {
      title: t('info_job1:certificates.8.title'),
      description: t('info_job1:certificates.8.description'),
      url: '#'
    }
  ];

  // 도움 기관 링크들
  const helpfulResources: ResourceLink[] = [
    {
      title: t('info_job1:resources.0.title'),
      url: 'https://www.workbc.ca/',
      description: t('info_job1:resources.0.description')
    },
    {
      title: t('info_job1:resources.1.title'),
      url: 'https://www.jobbank.gc.ca/explorecareers',
      description: t('info_job1:resources.1.description')
    },
    {
      title: t('info_job1:resources.2.title'),
      url: 'http://www.bc211.ca/',
      description: t('info_job1:resources.2.description')
    },
    {
      title: t('info_job1:resources.3.title'),
      url: 'http://newtobc.ca/',
      description: t('info_job1:resources.3.description')
    },
    {
      title: t('info_job1:resources.4.title'),
      url: 'http://www.cic.gc.ca/english/newcomers/services/index.asp',
      description: t('info_job1:resources.4.description')
    },
    {
      title: t('info_job1:resources.5.title'),
      url: 'http://www.govolunteer.ca/',
      description: t('info_job1:resources.5.description')
    },
    {
      title: t('info_job1:resources.6.title'),
      url: 'http://www.worksafebc.com/',
      description: t('info_job1:resources.6.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-500">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {t('info_job1:title')}
          </h1>
        </div>
      </div>

      {/* Lecture 1 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture 1 Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[38%]">
          <h2 className="text-4xl sm:text-5xl font-bold text-black drop-shadow-lg">Lecture 1</h2>
        </div>
        <div className="absolute left-[66%] top-[26%]">
          <h2 className="text-[2.5rem] font-bold text-white drop-shadow-lg">
            {t('info_job1:lectureSubtitle').split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < t('info_job1:lectureSubtitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Lecture 1 계획 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job1:lecture1Plan')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <ul className="space-y-2">
              <li className="relative pl-6 text-gray-200">
                <span className="absolute left-0 text-green-400 font-bold">✓</span>
                {t('info_job1:planItem1')}
              </li>
              <li className="relative pl-6 text-gray-200">
                <span className="absolute left-0 text-green-400 font-bold">✓</span>
                {t('info_job1:planItem2')}
              </li>
            </ul>
          </div>

          <h3 className="text-2xl italic text-red-400 text-center my-6 p-4 bg-gray-800 border-l-4 border-red-500 rounded">
            {t('info_job1:tedQuote')}
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
              {t('info_job1:introduction.paragraph1')}
            </p>
            <p>
              {t('info_job1:introduction.paragraph2')}
            </p>
          </div>
          <img
            src="/imgs/jobacademy/LikeGood_kr.webp"
            alt="Like Good"
            className="p-[10%] h-auto object-contain"
          />
        </section>

        {/* Work BC 웹사이트 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job1:workBcSection.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              {t('info_job1:workBcSection.description1')}
            </p>
            <p>{t('info_job1:workBcSection.description2')}</p>
          </div>

          {/* 이미지 갤러리 */}
          <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {t('info_job1:galleryTitle')}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
            </h2>
            <ImageGallery images={galleryImages} />
          </section>

          <div className="mt-8">
            <h4 className="text-white text-xl font-semibold mb-4">{t('info_job1:workBcSection.quizzesTitle')}</h4>
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
            {t('info_job1:careerSection.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              {t('info_job1:careerSection.paragraph1')}
            </p>
            <p>
              {t('info_job1:careerSection.paragraph2')}
            </p>
          </div>

          <img
            src="/imgs/jobacademy/Lec2_diagram_kr.webp"
            alt="Lecture 2 Diagram"
            className="mx-auto h-auto object-contain "
          />

          <div className="mt-8">
            <h4 className="text-white text-xl font-semibold mb-6">{t('info_job1:careerSection.improvementTitle')}</h4>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">{t('info_job1:careerSection.languageSkills.title')}</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>{t('info_job1:careerSection.languageSkills.items.0')}</li>
                <li>{t('info_job1:careerSection.languageSkills.items.1')} (<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com</a>)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">{t('info_job1:careerSection.offlineActivities.title')}</h5>
              <ul className="list-disc list-inside space-y-3 text-gray-200">
                <li>
                  <strong className="text-white">Toastmasters</strong> - {t('info_job1:careerSection.offlineActivities.toastmasters')}
                  (<a href="https://www.toastmasters.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">toastmasters.org</a>)
                </li>
                <li>
                  <strong className="text-white">Meet Up</strong> - {t('info_job1:careerSection.offlineActivities.meetup')}
                  (<a href="https://www.meetup.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">meetup.com</a>)
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">{t('info_job1:careerSection.volunteering.title')}</h5>
              <ul className="list-disc list-inside space-y-3 text-gray-200">
                <li>
                  {t('info_job1:careerSection.volunteering.item1')}
                  (<a href="https://www.govolunteer.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">govolunteer.ca</a>)
                </li>
                <li>{t('info_job1:careerSection.volunteering.item2')}</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">{t('info_job1:careerSection.supportNetwork.title')}</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>{t('info_job1:careerSection.supportNetwork.item')}</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
            <h4 className="text-yellow-300 text-lg font-semibold mb-4">{t('info_job1:careerSection.keyPoints.title')}</h4>
            <ul className="space-y-3">
              <li className="relative pl-6 text-yellow-100 leading-relaxed">
                <span className="absolute left-0">💡</span>
                {t('info_job1:careerSection.keyPoints.point1')}
              </li>
              <li className="relative pl-6 text-yellow-100 leading-relaxed">
                <span className="absolute left-0">💡</span>
                {t('info_job1:careerSection.keyPoints.point2')}
              </li>
            </ul>
          </div>
        </section>

        {/* 자격증 섹션 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job1:certificatesSection.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>{t('info_job1:certificatesSection.description1')}</p>
            <p>
              {t('info_job1:certificatesSection.description2')}
            </p>
            <p>
              {t('info_job1:certificatesSection.description3')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-800 to-indigo-700 text-white p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-bold mb-4">{cert.title}</h4>
                <p className="leading-relaxed opacity-95 mb-4">{cert.description}</p>
                {cert.url !== '#' && (
                  <div className="text-center">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      {t('info_job1:certificatesSection.viewDetails')}
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
            {t('info_job1:resourcesSection.title')}
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

        {/* 연락처 정보 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job1:contactSection.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="bg-gray-800 text-white p-8 rounded-xl leading-relaxed space-y-4">
            <p className="text-lg">
              <strong className="text-blue-400">{t('info_job1:contactSection.email')}</strong> <a href="mailto:info@kcwn.ca" className="text-blue-300 hover:underline">info@kcwn.ca</a>
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">{t('info_job1:contactSection.web')}</strong> <a href="https://kcwn.ca" className="text-blue-300 hover:underline">https://kcwn.ca</a>
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">{t('info_job1:contactSection.volunteer')}</strong> <a href="https://kcwn.ca/volunteer/" className="text-blue-300 hover:underline">{t('info_job1:contactSection.clickHere')}</a>
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">{t('info_job1:contactSection.donation')}</strong> <a href="https://kcwn.ca/donation-form/" className="text-blue-300 hover:underline">{t('info_job1:contactSection.clickHere')}</a>
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">{t('info_job1:contactSection.transfer')}</strong> info@kcwn.ca to KCWN
            </p>
            <p className="text-lg">
              <a href="https://kcwn.ca/?asp_action=show_pp&product_id=1627" className="text-blue-300 hover:underline">{t('info_job1:contactSection.creditCard')}</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Job1;
