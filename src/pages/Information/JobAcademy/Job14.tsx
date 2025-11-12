import { jobAcademyStyles } from './jobAcademyStyles';

import React, { useMemo } from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, TitledtwoThreeColumnListComponent, ReferenceSectionComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job14Text as job14Text_ko } from './locales/Job14_ko';
import { job14Text as job14Text_en } from './locales/Job14_en';

const Job14: React.FC = () => {
  const { language } = useLanguage();
  const job14Text = useMemo(() => (language === 'ko' ? job14Text_ko : job14Text_en), [language]);
  return (<div className={jobAcademyStyles.section.minHeight}>
    {/* 헤더 섹션 */}
    <div className={jobAcademyStyles.containers.overflowHidden}>
      <div
        className={jobAcademyStyles.containers.heroBackground}
        style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
      >
        <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
          {job14Text.title}
        </h1>
      </div>
    </div>

    {/* Lecture 1 섹션 */}
    <div className={jobAcademyStyles.containers.lectureImageWrapper}>
      <img
        src="/imgs/jobacademy/lectureBack.webp"
        alt="Lecture Background"
        className={jobAcademyStyles.containers.imageResponsive}
      />

      <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
        <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 14</h2>
      </div>
      <div className={`absolute left-[66%] ${language === 'ko' ? 'top-[38%]' : 'top-[26%]'}`}>
        <h2 className={jobAcademyStyles.headings.lectureTitle}>
          {job14Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
            <React.Fragment key={index}>
              {line}
              {index < job14Text.lectureSubtitle.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>
    </div>

    <div className={jobAcademyStyles.containers.centerContainer}>
      {/* 웹 디자이너/개발자 소개 */}
      <section className={jobAcademyStyles.containers.lightBox}>
        <div className="border-purple-500">
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job14Text.sectionTitle1}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.spacing.marginBottom8}>
            <p className={jobAcademyStyles.textColors.grayLight}>
              {job14Text.intro}
            </p>
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SubSectionWithList
              title={job14Text.strategyTasks.title}
              items={job14Text.strategyTasks.items}
              bgColor={jobAcademyStyles.containers.cyanLightInfo}
              borderColor={jobAcademyStyles.borders.leftCyan}
            />
            <SubSectionWithList
              title={job14Text.uiDesignTasks.title}
              items={job14Text.uiDesignTasks.items}
              bgColor={jobAcademyStyles.containers.yellowLightBox}
              borderColor={jobAcademyStyles.borders.leftYellow}
            />
            <SubSectionWithList
              title={job14Text.uxDesignTasks.title}
              items={job14Text.uxDesignTasks.items}
              bgColor={jobAcademyStyles.containers.emeraldLightBox}
              borderColor={jobAcademyStyles.borders.leftEmerald}
            />
            <SubSectionWithList
              title={job14Text.developmentTasks.title}
              items={job14Text.developmentTasks.items}
              bgColor={jobAcademyStyles.containers.orangeBox}
              borderColor={jobAcademyStyles.borders.leftOrange}
            />
          </div>

          <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftGreen}`}>
            <h3 className={jobAcademyStyles.headings.h3}>{job14Text.sectionSubtitle1}</h3>
            <TitledtwoThreeColumnListComponent
              leftColumn={job14Text.integrationImportance.leftColumn}
              rightColumn={job14Text.integrationImportance.rightColumn}
            />
          </div>
        </div>
      </section>

      {/* 기술 스택 및 도구 */}
      <section className={jobAcademyStyles.spacing.marginBottom12}>
        <div className={jobAcademyStyles.section.amberCardEmerald}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job14Text.sectionTitle2}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.frontendTechTitle}
              items={job14Text.frontendTech}
            />
            <BoxListComponent
              title={job14Text.backendTechTitle}
              items={job14Text.backendTech}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.cmsPlatformsTitle}
              items={job14Text.cmsPlatforms}
            />
            <BoxListComponent
              title={job14Text.designToolsTitle}
              items={job14Text.designTools}
            />
          </div>

          <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftCyan}`}>
            <h3 className={jobAcademyStyles.headings.h3}>{job14Text.sectionSubtitle2}</h3>
            <div className={jobAcademyStyles.grids.twoThreeColumn}>
              <div className="text-stone-900">
                <h3 className="font-semibold mb-2">{job14Text.devToolsTitle}</h3>
                <ul className="space-y-1">
                  {job14Text.devTools.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
              <div className="text-stone-900">
                <h3 className="font-semibold mb-2">{job14Text.testToolsTitle}</h3>
                <ul className="space-y-1">
                  {job14Text.testTools.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
              <div className="text-stone-900">
                <h3 className="font-semibold mb-2">{job14Text.deployToolsTitle}</h3>
                <ul className="space-y-1">
                  {job14Text.deployTools.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메트로 밴쿠버 지역 학교 프로그램 */}
      <section className={jobAcademyStyles.spacing.marginBottom12}>
        <div className={jobAcademyStyles.section.amberCardYellow}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job14Text.sectionTitle3}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.metroVancouverSchoolsTitles.bcit}
              items={job14Text.metroVancouverSchools.bcit}
            />
            <BoxListComponent
              title={job14Text.metroVancouverSchoolsTitles.cdi}
              items={job14Text.metroVancouverSchools.cdi}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.metroVancouverSchoolsTitles.langara}
              items={job14Text.metroVancouverSchools.langara}
            />
            <BoxListComponent
              title={job14Text.metroVancouverSchoolsTitles.vcc}
              items={job14Text.metroVancouverSchools.vcc}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.metroVancouverSchoolsTitles.sfu}
              items={job14Text.metroVancouverSchools.sfu}
            />
            <BoxListComponent
              title={job14Text.metroVancouverSchoolsTitles.ubc}
              items={job14Text.metroVancouverSchools.ubc}
            />
          </div>

          <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftOrange}`}>
            <h3 className={jobAcademyStyles.headings.h3}>{job14Text.sectionSubtitle3}</h3>
            <TitledtwoThreeColumnListComponent
              leftColumn={job14Text.metroVancouverSchools.guide.leftColumn}
              rightColumn={job14Text.metroVancouverSchools.guide.rightColumn}
            />
          </div>
        </div>
      </section>

      {/* 관련 직업 */}
      <section className={jobAcademyStyles.spacing.marginBottom12}>
        <div className={jobAcademyStyles.section.amberCardRed}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job14Text.sectionTitle4}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.relatedJobsTitles.creative}
              items={job14Text.relatedJobs.creative}
            />
            <BoxListComponent
              title={job14Text.relatedJobsTitles.development}
              items={job14Text.relatedJobs.development}
            />
            <BoxListComponent
              title={job14Text.relatedJobsTitles.specialized}
              items={job14Text.relatedJobs.specialized}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.relatedJobsTitles.employment}
              items={job14Text.relatedJobs.employment}
            />
            <BoxListComponent
              title={job14Text.relatedJobsTitles.salary}
              items={job14Text.relatedJobs.salary}
            />
          </div>

          <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftYellow}`}>
            <h3 className={jobAcademyStyles.headings.h3}>{job14Text.sectionSubtitle4}</h3>
            <div className={jobAcademyStyles.grids.twoThreeColumn}>
              <div className={jobAcademyStyles.textColors.grayLight}>
                <h3 className="font-semibold mb-2">{job14Text.careerPathTitles.tech}</h3>
                <ul className="space-y-1">
                  {job14Text.relatedJobs.careerPath.tech.map((item: string, idx: number) => <li key={idx}>• {item}</li>)}
                </ul>
              </div>
              <div className={jobAcademyStyles.textColors.grayLight}>
                <h3 className="font-semibold mb-2">{job14Text.careerPathTitles.management}</h3>
                <ul className="space-y-1">
                  {job14Text.relatedJobs.careerPath.management.map((item: string, idx: number) => <li key={idx}>• {item}</li>)}
                </ul>
              </div>
              <div className="text-black">
                <h3 className="font-semibold mb-2">{job14Text.careerPathTitles.business}</h3>
                <ul className="space-y-1">
                  {job14Text.relatedJobs.careerPath.business.map((item: string, idx: number) => <li key={idx}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 성공을 위한 조언 */}
      <section className={jobAcademyStyles.spacing.marginBottom12}>
        <div className={jobAcademyStyles.containers.emeraldLightBox}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job14Text.sectionTitle5}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.successAdviceTitles.portfolio}
              items={job14Text.successAdvice.portfolio}
            />
            <BoxListComponent
              title={job14Text.successAdviceTitles.learning}
              items={job14Text.successAdvice.learning}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BoxListComponent
              title={job14Text.successAdviceTitles.networking}
              items={job14Text.successAdvice.networking}
            />
            <BoxListComponent
              title={job14Text.successAdviceTitles.business}
              items={job14Text.successAdvice.business}
            />
          </div>

          <div className={`${jobAcademyStyles.containers.amberLightBox} ${jobAcademyStyles.borders.leftOrange}`}>
            <h3 className="text-stone-900 text-xl font-bold mb-4">{job14Text.sectionSubtitle5}</h3>
            <TitledtwoThreeColumnListComponent
              leftColumn={job14Text.successAdvice.longterm.leftColumn}
              rightColumn={job14Text.successAdvice.longterm.rightColumn}
            />
          </div>
        </div>
      </section>

      {/* 참고 자료 */}
      <ReferenceSectionComponent
        title={job14Text.sectionTitle6}
        governmentTitle={job14Text.referencesTitles.government}
        governmentItems={job14Text.references.government}
        associationsTitle={job14Text.referencesTitles.community}
        associationsItems={job14Text.references.community}
        notice={job14Text.references.notice}
      />

      {/* Job Academy 네비게이션 */}
      <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={14} />
        </section>
    </div>
  </div>
  );
};

export default Job14;

