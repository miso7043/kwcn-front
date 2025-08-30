import React, { useState } from 'react';
import ImageZoomModal from '../../../components/ui/ImageZoom/ImageZoomModal';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';

// import { useTranslation } from 'react-i18next';
import useLanguage from '../../../hooks/useLanguage';
import * as job3ko from './locales/Job3_ko';
import * as job3en from './locales/Job3_en';
import {
  SubSectionWithList,
  NumberedListComponent,
  IconListComponent,
  QuestionListComponent,
  SectionWithSubSectionsComponent
} from './InfoSubComponent';

const Job3: React.FC = () => {
  const [zoomIdx, setZoomIdx] = useState<number|null>(null);
  // const { t } = useTranslation(['info_job3']);
  const { language } = useLanguage();

  // console.log("Current language:", language);
  // 언어에 따라 데이터 소스 선택
  const job3 = language === 'en' ? job3en : job3ko;
  const {
    coverLetterDefinition,
    coverLetterThinking,
    resumeThinking,
    brandingGuidelines,
    coverLetterStructure,
    essentialTasks,
    coverLetterRequirements,
    coverLetterDos,
    coverLetterDonts,
    resumeDonts,
    coverLetterConsiderations,
    resumeQuestions,
    resumeRequirements,
    job3Text
  } = job3;



  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job3.job3Text.title}
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
            {job3.job3Text.lectureSubtitle}
          </h2>
        </div>
      </div>


      <div className="max-w-6xl mx-auto p-8">

        {/* 강의 3 목표 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.lecture3Goal}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>
        </section>

        {/* Cover Letter 작성법 배우기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.coverLetterGuide}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <SubSectionWithList {...coverLetterThinking} />
        </section>

        {/* Cover Letter란 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.coverLetterWhat}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="grid gap-6 mb-6">
            <SubSectionWithList {...coverLetterDefinition} />

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-yellow-300 text-xl font-semibold mb-4">{job3Text.coverLetterFAQTitle}</h3>
              <div className="text-gray-200 space-y-2">
                <p><strong>{job3Text.coverLetterFAQ1}</strong></p>
                <p><strong>{job3Text.coverLetterFAQ2}</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Letter 작성 고려사항 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.coverLetterConsider}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <IconListComponent {...coverLetterConsiderations} />
        </section>

        {/* Cover Letter의 구성 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.coverLetterStructure}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <NumberedListComponent {...coverLetterStructure} />
        </section>

        {/* Cover Letter에 있어야 하는 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.coverLetterMust}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="space-y-4">
            <IconListComponent {...coverLetterRequirements} />
          </div>
        </section>

        {/* Cover Letter를 쓸 때 해야 하는 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.coverLetterDo}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <IconListComponent {...coverLetterDos} />
        </section>

        {/* Cover Letter를 쓸 때 하지 말아야 하는 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.coverLetterDont}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <IconListComponent {...coverLetterDonts} />
        </section>

        {/* Resume 작성법 배우기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.resumeGuide}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <SubSectionWithList {...resumeThinking} />
        </section>

        {/* Resume란 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.resumeWhat}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
            <p className="text-gray-200 text-lg leading-relaxed">
              {job3Text.resumeDesc}
            </p>
          </div>

          <QuestionListComponent {...resumeQuestions} />
        </section>

        {/* Resume를 쓸 때 고려할 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.resumeConsider}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <SubSectionWithList {...brandingGuidelines} />
        </section>

        {/* Resume를 쓸 때 하지 말아야 하는 것들 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.resumeDont}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <IconListComponent {...resumeDonts} />
        </section>

  <SectionWithSubSectionsComponent {...resumeRequirements} />

        {/* Cover Letter와 Resume 작성시 꼭 해야 하는 것 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job3Text.mustDo}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <NumberedListComponent {...essentialTasks} />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: job3Text.sampleResume1,
                src: '/imgs/jobacademy/lecture3-01.webp',
                alt: job3Text.sampleResume1,
              },
              {
                title: job3Text.sampleResume2,
                src: '/imgs/jobacademy/lecture3-02.webp',
                alt: job3Text.sampleResume2,
              },
            ].map((item, idx) => (
              <React.Fragment key={item.src}>
                <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500 cursor-pointer" onClick={() => setZoomIdx(idx)}>
                  <h3 className="text-white text-lg font-bold mb-4">{item.title}</h3>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                {zoomIdx === idx && (
                  <ImageZoomModal
                    open={zoomIdx === idx}
                    src={item.src}
                    alt={item.alt}
                    onClose={() => setZoomIdx(null)}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Job Academy 네비게이션 */}
        <JobAcademyNavigation currentJobId={3} />
      </div>
    </div>
  );
};

export default Job3;

