
import React from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, ReferenceListComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job6Text as job6Text_ko } from './locales/Job6_ko';
import { job6Text as job6Text_en } from './locales/Job6_en';

const Job6: React.FC = () => {
  const { language } = useLanguage();
  const job6Text = React.useMemo(() => (language === 'ko' ? job6Text_ko : job6Text_en), [language]);
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job6Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 6 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 6</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job6Text.lectureSubtitle.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < job6Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* 고용기준법 적용 여부 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                1. {job6Text.section1.title}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                {job6Text.section1.desc.map((desc, idx) => (
                  <p className="text-gray-200 text-lg mb-6" key={idx}>{desc}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ">
                <SubSectionWithList
                  title={job6Text.section1.exclusionCases.title}
                  items={job6Text.section1.exclusionCases.items}
                  borderColor="border-red-500"
                />

                <SubSectionWithList
                  title={job6Text.section1.unrelatedIssues.title}
                  items={job6Text.section1.unrelatedIssues.items}
                  borderColor="border-yellow-500"
                />

                <SubSectionWithList
                  title={job6Text.section1.uncertaintyActions.title}
                  items={job6Text.section1.uncertaintyActions.items}
                  borderColor="border-green-500"
                />
              </div>
            </div>
          </section>

          {/* 직원 채용 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                2. {job6Text.section2.title}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                {job6Text.section2.desc.map((desc, idx) => (
                  <p className="text-gray-200 text-lg mb-6" key={idx}>{desc}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job6Text.section2.employerObligations.title}
                  items={job6Text.section2.employerObligations.items}
                  borderColor="border-blue-500"
                />

                <SubSectionWithList
                  title={job6Text.section2.specialRulesRequired.title}
                  items={job6Text.section2.specialRulesRequired.items}
                  borderColor="border-purple-500"
                />
              </div>

              <div className="bg-yellow-900 border border-yellow-600 p-4 rounded-lg">
                <p className="text-yellow-200">
                  <strong>{job6Text.label_important}</strong> {job6Text.section2.important}
                </p>
              </div>
            </div>
          </section>

          {/* 근무 시간 및 초과 근무 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                3. {job6Text.section3.title}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job6Text.section3.standardWorkHours.title}
                  items={job6Text.section3.standardWorkHours.items}
                  borderColor="border-yellow-500"
                />

                <SubSectionWithList
                  title={job6Text.section3.overtime.title}
                  items={job6Text.section3.overtime.items}
                  borderColor="border-orange-500"
                />

                <SubSectionWithList
                  title={job6Text.section3.minimumWorkHours.title}
                  items={job6Text.section3.minimumWorkHours.items}
                  borderColor="border-green-500"
                />

                <SubSectionWithList
                  title={job6Text.section3.breakTime.title}
                  items={job6Text.section3.breakTime.items}
                  borderColor="border-blue-500"
                />

                <SubSectionWithList
                  title={job6Text.section3.travelTime.title}
                  items={job6Text.section3.travelTime.items}
                  borderColor="border-indigo-500"
                />
              </div>
            </div>
          </section>

          {/* 휴가 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                4. {job6Text.section4.title}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SubSectionWithList
                  title={job6Text.section4.vacationTypes.title}
                  items={job6Text.section4.vacationTypes.items}
                  borderColor="border-red-500"
                />

                <SubSectionWithList
                  title={job6Text.section4.importantPoints.title}
                  items={job6Text.section4.importantPoints.items}
                  borderColor="border-orange-500"
                />
              </div>
            </div>
          </section>

          {/* 참고 링크 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job6Text.sectionTitle_Reference}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <ReferenceListComponent
                leftColumn={job6Text.references.leftColumn}
                rightColumn={job6Text.references.rightColumn}
              />
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-white text-sm">
                  {job6Text.references.notice}
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <div className="container mx-auto px-4 pb-8">
            <JobAcademyNavigation currentJobId={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job6;

