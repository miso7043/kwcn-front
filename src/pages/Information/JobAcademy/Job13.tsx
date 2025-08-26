import React from 'react';

import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, TitledTwoColumnListComponent, SimpleReferenceListComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job13Text as job13Text_ko} from './locales/Job13_ko';
import { job13Text as job13Text_en} from './locales/Job13_en';

const Job13: React.FC = () => {
  const { language } = useLanguage();
  const job13Text = React.useMemo(() => (language === 'ko' ? job13Text_ko : job13Text_en), [language]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job13Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 1 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
          <img
            src="/imgs/jobacademy/lectureBack.webp"
            alt={job13Text.lectureBackgroundAlt}
            className="w-full h-auto object-contain"
          />

        <div className="absolute left-[39%] top-[39%]">
            <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">{job13Text.lectureNumber}</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job13Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job13Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* Community Worker 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job13Text.sectionTitle1}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job13Text.sectionSubtitle1}</h3>
                <p className="text-gray-200 mb-6">
                  {job13Text.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job13Text.communityWorkerMainTasks.title}
                  items={job13Text.communityWorkerMainTasks.items}
                  borderColor={job13Text.communityWorkerMainTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job13Text.serviceTargets.title}
                  items={job13Text.serviceTargets.items}
                  borderColor={job13Text.serviceTargets.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job13Text.sectionSubtitle2}</h3>
                <TitledTwoColumnListComponent
                  leftColumn={job13Text.valuesPrinciples.leftColumn}
                  rightColumn={job13Text.valuesPrinciples.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* 근무 환경 및 분야 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job13Text.sectionTitle2}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job13Text.nonprofitTitle}
                  items={job13Text.workFields.nonprofit}
                />

                <BoxListComponent
                  title={job13Text.publicTitle}
                  items={job13Text.workFields.public}
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job13Text.sectionSubtitle3}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">{job13Text.clinicalTitle}</h3>
                    <ul className="space-y-1">
                      {job13Text.workFields.specialties.clinical.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">{job13Text.communityTitle}</h3>
                    <ul className="space-y-1">
                      {job13Text.workFields.specialties.community.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-blue-200">
                    <h3 className="font-semibold mb-2">{job13Text.researchTitle}</h3>
                    <ul className="space-y-1">
                      {job13Text.workFields.specialties.research.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 자격 및 교육 요건 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job13Text.sectionTitle3}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job13Text.educationTitle}
                  items={job13Text.qualification.education}
                />

                <BoxListComponent
                  title={job13Text.licenseTitle}
                  items={job13Text.qualification.license}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job13Text.experienceTitle}
                  items={job13Text.qualification.experience}
                />

                <BoxListComponent
                  title={job13Text.qualitiesTitle}
                  items={job13Text.qualification.qualities}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job13Text.institutionsTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">{job13Text.bachelorTitle}</h3>
                    <ul className="space-y-1">
                      {job13Text.qualification.institutions.bachelor.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">{job13Text.masterTitle}</h3>
                    <ul className="space-y-1">
                      {job13Text.qualification.institutions.master.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 진로 발전 및 전망 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job13Text.sectionTitle4}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job13Text.levelsTitle}
                  items={job13Text.career.levels}
                />

                <BoxListComponent
                  title={job13Text.specialtiesTitle}
                  items={job13Text.career.specialties}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job13Text.outlookTitle}</h3>
                <TitledTwoColumnListComponent
                  leftColumn={job13Text.career.outlook.leftColumn}
                  rightColumn={job13Text.career.outlook.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* 급여 및 근무 조건 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job13Text.sectionTitle5}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job13Text.salaryLevelsTitle}
                  items={job13Text.salary.levels}
                />

                <BoxListComponent
                  title={job13Text.conditionsTitle}
                  items={job13Text.salary.conditions}
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job13Text.rewardTitle}</h3>
                <TitledTwoColumnListComponent
                  leftColumn={job13Text.salary.reward.leftColumn}
                  rightColumn={job13Text.salary.reward.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job13Text.sectionTitle6}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleReferenceListComponent
                  title={job13Text.associationsTitle}
                  items={job13Text.references.associations}
                />
                <SimpleReferenceListComponent
                  title={job13Text.governmentTitle}
                  items={job13Text.references.government}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200">
                  {job13Text.references.notice}
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <div className="container mx-auto px-4 pb-8">
            <JobAcademyNavigation currentJobId={13} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job13;

