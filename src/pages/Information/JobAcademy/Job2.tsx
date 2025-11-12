import React, { useMemo } from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { jobAcademyStyles } from './jobAcademyStyles';
import { useTranslation } from 'react-i18next';
import useLanguage from '../../../hooks/useLanguage';
import { job2Text as job2Text_ko } from './locales/Job2_ko';
import { job2Text as job2Text_en } from './locales/Job2_en';

const Job2: React.FC = () => {
  const { t } = useTranslation(['common']);
  const { language } = useLanguage();
  const job2Text = useMemo(() => (language === 'ko' ? job2Text_ko : job2Text_en), [language]);

  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job2Text.title}
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
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 2</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job2Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>

        {/* 강의 2 목표 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job2Text.lecture2Goal.title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.containers.lightBox}>
            <ul className={jobAcademyStyles.spacing.largeSpacing}>
              {job2Text.lecture2Goal.goals.map((goal: string, index: number) => (
                <li key={index} className={jobAcademyStyles.listStyles.checkItem}>
                  <span className={jobAcademyStyles.listStyles.checkMark}>✓</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className={jobAcademyStyles.section.highlightInBox}>
            <p className={`${jobAcademyStyles.textColors.darkZinc} ${jobAcademyStyles.spacing.marginBottom2} italic`}>
              {job2Text.lecture2Goal.description}
            </p>
            <a
              href="https://www.workbc.ca/getmedia/07e2cc72-bcf4-48f5-9f9d-921c802a49f8/BC_Labour_Market_Outlook_2017_Korean.pdf.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className={jobAcademyStyles.textColors.link}
            >
              – {job2Text.lecture2Goal.source}
            </a>
          </div>
        </section>

        {/* BC주 노동시장 전망 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job2Text.marketOutlook.title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.spacing.marginBottom6}>
            <img
              src="/imgs/jobacademy/lecture2-03-800x427.jpg"
              alt={job2Text.marketOutlook.title}
              className={jobAcademyStyles.containers.fullWidthImage}
            />
          </div>

          <div className="bg-white/70 p-6 rounded-lg border-l-4 border-red-400 mb-6 shadow-sm">
            <h3 className="text-red-900 text-xl font-bold">
              {job2Text.marketOutlook.subtitle}
            </h3>
          </div>

          <div className={`${jobAcademyStyles.grids.twoThreeColumn} ${jobAcademyStyles.spacing.marginBottom6}`}>
            {job2Text.marketOutlook.factors.map((factor: string, index: number) => (
              <div key={index} className={`${jobAcademyStyles.containers.lightBox} border-l-4 border-red-500  shadow-sm`}>
                <span className={`${jobAcademyStyles.textColors.redText} font-bold`}>• </span>
                <span className={jobAcademyStyles.textColors.grayLight}>{factor}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 산업별 전망 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job2Text.industryOutlook.title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={`${jobAcademyStyles.grids.twoThreeColumn} ${jobAcademyStyles.spacing.marginBottom6}`}>
            {job2Text.industryOutlook.industries.map((industry: string, index: number) => (
              <div key={index} className="bg-stone-200 text-gray-800 border border-gray-300 p-4 rounded-lg transition-all duration-300">
                <span className={`font-bold ${index < 5 ? jobAcademyStyles.textColors.amberNote : 'text-gray-500'}`}>
                  {index + 1}.
                </span>
                <span className={jobAcademyStyles.spacing.marginLeft2}>{industry}</span>
              </div>
            ))}
          </div>

          <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftYellow}`}>
            <p className={`${jobAcademyStyles.textColors.grayLight} italic`}>
              {job2Text.industryOutlook.note}
            </p>
          </div>
        </section>

        {/* 수요가 증가할 5대 직업군 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job2Text.topOccupations.title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.grids.twoThreeColumn}>
            {job2Text.topOccupations.occupations.map((occupation: string, index: number) => (
              <div key={index} className={`${jobAcademyStyles.competencyCard} relative`}>
                <span className={jobAcademyStyles.topBadge}>
                  TOP {index + 1}
                </span>
                <span className={`${jobAcademyStyles.textColors.grayDark} font-medium block mt-2`}>
                  {occupation}
                </span>
              </div>
            ))}
          </div>

          <div className={jobAcademyStyles.section.highlightInBox}>
            <p className={`${jobAcademyStyles.textColors.amberNote} mb-0`}>
              <strong className={jobAcademyStyles.textColors.amberNote}>{t('common:information.note')}: </strong>{job2Text.topOccupations.note}
            </p>
          </div>
        </section>

        {/* 노동시장에서 요구되는 10대 주요역량 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job2Text.keyCompetencies.title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.grids.twoColumn}>
            {job2Text.keyCompetencies.competencies.map((competency, index) => (
              <div key={index} className={jobAcademyStyles.competencyCard}>
                <h3 className={jobAcademyStyles.headings.whiteH3Border}>
                  {competency.category}
                </h3>
                <ul className={jobAcademyStyles.spacing.itemSpacing}>
                  {competency.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className={"whiteMedium flex items-start"}>
                      <span className={`${jobAcademyStyles.textColors.amberNote} ${jobAcademyStyles.spacing.marginRight2}`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* BC주 노동시장 환경 정보 찾기 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job2Text.laborMarketInfo.title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.grids.twoColumn}>
            {job2Text.laborMarketInfo.sections.map((section, index) => (
              <div key={index} className="bg-cyan-500/10 p-6 rounded-lg shadow-lg">
                <h3 className={jobAcademyStyles.headings.whiteH3Border}>
                  {section.title}
                </h3>
                <p className={`whiteMedium leading-relaxed ${jobAcademyStyles.spacing.marginBottom4}`}>
                  {section.content}
                </p>
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={jobAcademyStyles.linkButton}
                >
                  {t('common:information.visitSite')} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 정보면접 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job2Text.informationalInterview.title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={`bg-cyan-600/10 p-6 rounded-lg ${jobAcademyStyles.spacing.marginBottom6}`}>
            <p className={"text-zinc-900 leading-relaxed"}>
              {job2Text.informationalInterview.description}
            </p>
          </div>

          <h3 className={`${jobAcademyStyles.textColors.grayDark} ${jobAcademyStyles.headings.h4} ${jobAcademyStyles.spacing.marginBottom4}`}>
            {job2Text.informationalInterview.questionTitle}
          </h3>

          <div className={jobAcademyStyles.spacing.questionSpacing}>
            {job2Text.informationalInterview.questions.map((question: string, index: number) => (
              <div key={index} className="bg-amber-200 p-4 rounded-lg border-l-4 border-orange-500">
                <span className={`${jobAcademyStyles.textColors.orangeEmphasis} font-bold`}>Q{index + 1}: </span>
                <span className={jobAcademyStyles.textColors.grayLight}>{question}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 정보면접 및 진로탐색 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job2Text.careerExploration.title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={`${jobAcademyStyles.grids.singleColumn} ${jobAcademyStyles.spacing.marginBottom6}`}>
            {job2Text.careerExploration.sections.map((section, index) => (
              <div key={index} className={jobAcademyStyles.competencyCard}>
                <h3 className={jobAcademyStyles.headings.whiteH3Border}>
                  {section.title}
                </h3>
                <p className={"whiteMedium leading-relaxed"}>
                  {section.content}
                </p>
              </div>
            ))}

            <a
              href="https://www.workbc.ca/plan-career/career-trek-videos#sort=alphabetical"
              target="_blank"
              rel="noopener noreferrer"
              className={jobAcademyStyles.linkButtonSmall}
            >
              {t('common:information.visitSite')} →
            </a>
          </div>

          <div className={jobAcademyStyles.spacing.marginBottom6}>
            <img
              src="/imgs/jobacademy/lecture2-04-800x455.jpg"
              alt={job2Text.careerExploration.title}
              className={jobAcademyStyles.containers.fullWidthImage}
            />
          </div>
        </section>

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={2} />
        </section>
      </div>
    </div>
  );
};

export default Job2;

