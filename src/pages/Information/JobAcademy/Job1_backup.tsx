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
    <div className="min-h-screen bg-gray-900">
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
          <h2 className="text-[2.5rem] font-bold text-white drop-shadow-lg">{t('info_job1:lectureSubtitle').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < t('info_job1:lectureSubtitle').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}</h2>
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


          <h3 className="text-2xl italic text-red-400 text-center my-6 p-4 bg-gray-800 border-l-4 border-red-500 rounded">{t('info_job1:tedQuote')}</h3>

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
            나의 적성과 특기, 그리고 캐나다에서의 구직활동
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              본인의 적성과 특기가 어느 정도 파악이 되었다면, 이제 이것이 캐나다사회에서 구직과 어떻게 연관이 되는지 생각해보아야합니다.
            </p>
            <p>
              본인의 영어에 대한 숙련정도, 자신감, 캐나다에서 내가 가지고 있는 각종 서포트네트워크,
              캐나다사회에 대한 이해/낯설음 정도, 캐나다 노동시장환경 등, 이 모든 것이 내가 캐나다에서 어떤 직업을 목표로 하고,
              어떤 방법으로 구직활동을 해야할지에 큰 영향을 미치기 때문입니다.
            </p>
          </div>

          <img
            src="/imgs/jobacademy/Lec2_diagram_kr.webp"
            alt="Lecture 2 Diagram"
            className="mx-auto h-auto object-contain "
          />

          <div className="mt-8">
            <h4 className="text-white text-xl font-semibold mb-6">개선 영역별 방법:</h4>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">언어능력향상:</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>온라인 툴 활용 (TED, YouTube, Apps for English learners, etc)</li>
                <li>LinkedIn - 온라인상의 네트워킹 툴 및 정보 (<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com</a>)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">오프라인 활동:</h5>
              <ul className="list-disc list-inside space-y-3 text-gray-200">
                <li>
                  <strong className="text-white">Toastmasters</strong> - presentation skills와 Impromptu speech를 연습할 수 있는 지역별 소모임.
                  정해진 순서에 따라 본인이 준비해온 프레젠테이션 발표 후 그룹 멤버들에게 피드백을 받을 수 있습니다.
                  (<a href="https://www.toastmasters.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">toastmasters.org</a>)
                </li>
                <li>
                  <strong className="text-white">Meet Up</strong> - 공통관심사를 가진 사람들과 오프라인 모임
                  (<a href="https://www.meetup.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">meetup.com</a>)
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">Volunteering:</h5>
              <ul className="list-disc list-inside space-y-3 text-gray-200">
                <li>
                  캐나다 직장경력을 얻을 수 있는 방법으로 본인의 관심사에 따라 다양한 기관에서 다양한 포지션을 지원할 수 있습니다.
                  (<a href="https://www.govolunteer.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">govolunteer.ca</a>)
                </li>
                <li>취업을 목표로하는 회사, 혹은 동종업계의 회사의 웹페이지를 방문하여 자원봉사신청이 가능한지 확인해보세요.</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h5 className="text-white text-lg font-bold mb-4">서포트네트워크/전반적 사회 이해도:</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Volunteering, social groups participation, workshops, non-profit organization etc.</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
            <h4 className="text-yellow-300 text-lg font-semibold mb-4">핵심 포인트:</h4>
            <ul className="space-y-3">
              <li className="relative pl-6 text-yellow-100 leading-relaxed">
                <span className="absolute left-0">💡</span>
                언어, 서포트 네트워크, 전반적 사회이해 중 본인에게 취약한 부분이 있다면, 그 부분을 어떻게 보완/향상시킬 수 있을지 생각해봐야합니다.
              </li>
              <li className="relative pl-6 text-yellow-100 leading-relaxed">
                <span className="absolute left-0">💡</span>
                자신의 강점을 최대한 어필할수있는 방법을 찾아 자신감을 가지는것이 중요합니다.
              </li>
            </ul>
          </div>
        </section>

        {/* 자격증 섹션 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            자격증
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="text-gray-200 leading-relaxed text-lg space-y-4">
            <p>직업군에 따라 미리 준비해두면 좋을 자격증</p>
            <p>
              1일에서 길게는 일주일이 넘지않는 short-term 과정으로 약 $100 – $300 정도의 시간과 비용의 투자로
              목표하는 직업군에 대한 전문지식과 자격을 갖출수있습니다.
            </p>
            <p>
              경력이 부족하더라도 이러한 자격증을 취득함으로써 원하는 직종에대한 열정과 준비성을 보일수있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-800/20 to-indigo-700/10 text-center text-white p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-bold mb-4">{cert.title}</h4>
                <p className="leading-relaxed opacity-95 mb-4">{cert.description}</p>
                {cert.url !== '#' && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-amber-500/70 to-amber-600/80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                    자세히 보기
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 도움 기관 및 정보 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            그 외 도움기관 및 정보 찾기
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-center">
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
            CONTACT US
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          <div className="bg-gray-800 text-white p-8 rounded-xl leading-relaxed space-y-4">
            <p className="text-lg">
              <strong className="text-blue-400">Email:</strong> <a href="mailto:info@kcwn.ca" className="text-blue-300 hover:underline">info@kcwn.ca</a>
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">Web:</strong> <a href="https://kcwn.ca" className="text-blue-300 hover:underline">https://kcwn.ca</a>
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">APPLY VOLUNTEER:</strong> <a href="https://kcwn.ca/volunteer/" className="text-blue-300 hover:underline">CLICK HERE</a>
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">DONATION INFO:</strong> <a href="https://kcwn.ca/donation-form/" className="text-blue-300 hover:underline">CLICK HERE</a>
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">e-transfer:</strong> info@kcwn.ca to KCWN
            </p>
            <p className="text-lg">
              <a href="https://kcwn.ca/?asp_action=show_pp&product_id=1627" className="text-blue-300 hover:underline">Pay by Credit Card</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Job1;
