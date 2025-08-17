import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageGallery from '../../../components/ui/ImageGallery/ImageGallery';

const Job2: React.FC = () => {
  const { t } = useTranslation(['info_job2']);

  const diagramImages = [
    {
      src: '/imgs/jobacademy/Lec2_diagram_kr.webp',
      alt: 'Lecture 2 Diagram Korean',
      caption: 'BC주 노동시장 구조 다이어그램'
    },
    {
      src: '/imgs/jobacademy/Lec2_diagram_en.webp',
      alt: 'Lecture 2 Diagram English',
      caption: 'BC Labour Market Structure Diagram'
    }
  ];

  const likeGoodImages = [
    {
      src: '/imgs/jobacademy/LikeGood_kr.webp',
      alt: 'Like Good Korean',
      caption: '좋아하는 것과 잘하는 것'
    },
    {
      src: '/imgs/jobacademy/LikeGood_en.webp',
      alt: 'Like Good English',
      caption: 'What You Like vs What You\'re Good At'
    }
  ];

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
            {t('info_job2:headerTitle')}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        
        {/* 강의 2 목표 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job2:lecture2Goal.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <ul className="space-y-3">
              {(t('info_job2:lecture2Goal.goals', { returnObjects: true }) as string[]).map((goal: string, index: number) => (
                <li key={index} className="relative pl-6 text-gray-200">
                  <span className="absolute left-0 text-green-400 font-bold">✓</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 p-6 bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-100 mb-2 italic">
              {t('info_job2:lecture2Goal.description')}
            </p>
            <a 
              href="https://www.workbc.ca/getmedia/07e2cc72-bcf4-48f5-9f9d-921c802a49f8/BC_Labour_Market_Outlook_2017_Korean.pdf.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors underline"
            >
              – {t('info_job2:lecture2Goal.source')}
            </a>
          </div>
        </section>

        {/* BC주 노동시장 전망 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job2:marketOutlook.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="bg-white/10 p-6 rounded-lg mb-6 border-l-4 border-red-400">
            <h3 className="text-red-100 text-xl font-bold mb-2">
              {t('info_job2:marketOutlook.subtitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {(t('info_job2:marketOutlook.factors', { returnObjects: true }) as string[]).map((factor: string, index: number) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                <span className="text-red-400 font-bold">• </span>
                <span className="text-gray-200">{factor}</span>
              </div>
            ))}
          </div>

          <ImageGallery images={diagramImages} />
        </section>

        {/* 산업별 전망 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job2:industryOutlook.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {(t('info_job2:industryOutlook.industries', { returnObjects: true }) as string[]).map((industry: string, index: number) => (
              <div key={index} className={`p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 bg-gray-900 text-gray-200 border border-gray-700`}>
                <span className={`font-bold ${index < 5 ? 'text-yellow-100' : 'text-gray-400'}`}>
                  {index + 1}. 
                </span>
                <span className="ml-2">{industry}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-gray-200 italic">
              {t('info_job2:industryOutlook.note')}
            </p>
          </div>
        </section>

        {/* 수요가 증가할 5대 직업군 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job2:topOccupations.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="space-y-4 mb-6">
            {(t('info_job2:topOccupations.occupations', { returnObjects: true }) as string[]).map((occupation: string, index: number) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative">
                <span className="absolute -top-3 left-6 bg-green-700/50 text-white px-3 py-1 rounded-full text-sm font-bold">
                  TOP {index + 1}
                </span>
                <span className="text-white font-medium block mt-2">
                  {occupation}
                </span>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-bg-yellow-600 to-yellow-500/10 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-100 mb-0">
              <strong className="text-yellow-200">참고: </strong>{t('info_job2:topOccupations.note')}
            </p>
          </div>
        </section>

        {/* 핵심 역량 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job2:keyCompetencies.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="grid gap-6 mb-6">
            {(t('info_job2:keyCompetencies.competencies', { returnObjects: true }) as Array<{category: string, items: string[]}>).map((competency, index) => (
              <div key={index} className={`bg-white/10 p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-white text-xl font-semibold mb-4 border-b border-white/30 pb-2">
                  {competency.category}
                </h3>
                <ul className="space-y-2">
                  {competency.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="text-white/90 flex items-start">
                      <span className="text-yellow-300 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>        
        
        {/* 구인 동향 및 취업 정보 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job2:laborMarketInfo.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="grid gap-6 mb-6">
            {(t('info_job2:laborMarketInfo.sections', { returnObjects: true }) as Array<{title: string, content: string}>).map((section, index) => (
              <div key={index} className={`bg-sky-600/20 p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-white text-xl font-semibold mb-4 border-b border-white/30 pb-2">
                  {section.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>        
        
        {/* 정보면접 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job2:informationalInterview.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="bg-cyan-600/10 p-6 rounded-lg mb-6">
            <p className="text-orange-100 leading-relaxed">
              {t('info_job2:informationalInterview.description')}
            </p>
          </div>

          <h3 className="text-orange-400 text-xl font-bold mb-4">
            {t('info_job2:informationalInterview.questionTitle')}
          </h3>
          
          <div className="space-y-4">
            {(t('info_job2:informationalInterview.questions', { returnObjects: true }) as string[]).map((question: string, index: number) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                <span className="text-orange-400 font-bold">Q{index + 1}: </span>
                <span className="text-gray-200">{question}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 정보면접 및 진로탐색 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {t('info_job2:careerExploration.title')}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
          
          <div className="grid gap-6 mb-6">
            {(t('info_job2:careerExploration.sections', { returnObjects: true }) as Array<{title: string, content: string}>).map((section, index) => (
              <div key={index} className={`bg-white/10 p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-white text-xl font-semibold mb-4 border-b border-white/30 pb-2">
                  {section.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <ImageGallery images={likeGoodImages} />
        </section>

        {/* 출처 및 추가 정보 */}
        <section className="bg-gray-800 p-6 rounded-xl mt-8">
          <h3 className="text-gray-400 text-lg font-bold mb-4">출처 및 참고자료</h3>
          <ul className="text-gray-300 space-y-2 leading-relaxed">
            <li>• BC Ministry of Advanced Education and Skills Training - British Columbia Labour Market Outlook: 2017 Edition</li>
            <li>• World Economic Forum - Jobs of the Future, January 2016</li>
            <li>• WorkBC - Labour Market Information and Career Resources</li>
            <li>• Career Trek BC - Career Exploration Videos</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Job2;

