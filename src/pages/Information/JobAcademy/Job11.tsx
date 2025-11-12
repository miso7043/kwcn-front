import { jobAcademyStyles } from './jobAcademyStyles';
import React from 'react';

import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, SmallTitleListComponent, BorderedListComponent, BoxListComponent, TitleDescriptionGridComponent, StepGuideComponent, TableComponent, ReferenceSectionComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job11Text as job11Text_ko } from './locales/Job11_ko';
import { job11Text as job11Text_en } from './locales/Job11_en';

const Job11: React.FC = () => {
  const { language } = useLanguage();
  const job11Text = React.useMemo(() => (language === 'ko' ? job11Text_ko : job11Text_en), [language]);
  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-black drop-shadow-2xl">
            {job11Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 11 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 11</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job11Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job11Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>
        {/* Skilled Trade 소개 */}
        <section className={jobAcademyStyles.spacing.marginBottom6}>
          <div className={jobAcademyStyles.section.amberCard}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job11Text.sectionTitle_Overview}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <p className="text-gray-200 mb-6">
                {/* 설명 필요시 job11Text.intro 등으로 분리 가능 */}
              </p>
            </div>

            <div className={`${jobAcademyStyles.grids.twoColumn} mb-8`}>
              <SubSectionWithList
                title={job11Text.skilledTradesAdvantages.title}
                items={job11Text.skilledTradesAdvantages.items}
                borderColor={job11Text.skilledTradesAdvantages.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job11Text.itaBcInfo.title}
                items={job11Text.itaBcInfo.items}
                borderColor={job11Text.itaBcInfo.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>
            {/* 참고 웹사이트 */}
            <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftRose}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job11Text.sectionTitle_ReferenceWeb}</h3>
              <TitleDescriptionGridComponent items={job11Text.referenceWebsites} />
            </div>
          </div>
        </section>

        {/* Automotive Service Technician */}
        <section className={jobAcademyStyles.spacing.marginBottom6}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job11Text.sectionTitle_Auto}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <h3 className={jobAcademyStyles.headings.h2}>{job11Text.sectionTitle_AutoJob}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6">
              <BoxListComponent
                title={job11Text.autoTechMainTasks.title}
                items={job11Text.autoTechMainTasks.items}
              />

              <BoxListComponent
                title={job11Text.autoTechRequiredSkills.title}
                items={job11Text.autoTechRequiredSkills.items}
              />
            </div>

            <div className={jobAcademyStyles.spacing.marginBottom4}>
              <h3 className={jobAcademyStyles.headings.h2}>{job11Text.sectionTitle_AutoHow}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6">
                <BoxListComponent
                  title={job11Text.autoTechBasicRequirements.title}
                  items={job11Text.autoTechBasicRequirements.items}
                />

                <BoxListComponent
                  title={job11Text.autoTechCertificationProcess.title}
                  items={job11Text.autoTechCertificationProcess.items}
                />
              </div>
              {/* 견습과정 시작 방법 */}
              <StepGuideComponent
                title={job11Text.sectionTitle_Apprenticeship}
                steps={job11Text.apprenticeshipSteps}
              />

              <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftEmerald} my-8`}>
                <h4 className="font-bold">{job11Text.sectionTitle_BCEdu}</h4>
                <div className={jobAcademyStyles.grids.twoColumn}>
                  <SmallTitleListComponent
                    title=""
                    items={job11Text.bcEducationInstitutions1}
                    textColor={jobAcademyStyles.textColors.grayLight}
                  />
                  <SmallTitleListComponent
                    title=""
                    items={job11Text.bcEducationInstitutions2}
                    textColor={jobAcademyStyles.textColors.grayLight}
                  />
                </div>
              </div>

              <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftYellow}`}>
                <h4 className="font-bold">{job11Text.sectionTitle_CareerOptions}</h4>

                <div className={`bg-transparent p-0 rounded-lg shadow-sm`}>
                  <div className={jobAcademyStyles.grids.twoColumn}>
                    {[job11Text.careerOptions1, job11Text.careerOptions2].map((columnItems, columnIndex) => (
                      <ul key={columnIndex} className={`text-black ${jobAcademyStyles.spacing.listSpacing}`}>
                        {columnItems.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skilled Trades 02: Electrician */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job11Text.sectionTitle_Electrician}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom2}>
              <h3 className={jobAcademyStyles.headings.h2}>{job11Text.sectionTitle_ElectricianJob}</h3>
              <p className={jobAcademyStyles.textColors.grayLight}>
                {/* 설명 필요시 job11Text.electricianIntro 등으로 분리 가능 */}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job11Text.electricianMainTasks.title}
                items={job11Text.electricianMainTasks.items}
              />

              <BoxListComponent
                title={job11Text.electricianApplicationAreas.title}
                items={job11Text.electricianApplicationAreas.items}
              />
            </div>

            <div className={jobAcademyStyles.spacing.marginBottom2}>
              <h3 className="text-2xl font-bold mb-4 text-black">{job11Text.sectionTitle_ElectricianHow}</h3>

              {/* 방법 1: 견습프로그램 */}
              <div className={jobAcademyStyles.spacing.marginBottom8}>
                <h4 className="text-xl font-bold mb-4 text-black">{job11Text.sectionTitle_ElectricianHow1}</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <BoxListComponent
                    title={job11Text.electricianBasicRequirements.title}
                    items={job11Text.electricianBasicRequirements.items}
                    titleColor={jobAcademyStyles.textColors.grayDark}
                  />

                  <BoxListComponent
                    title={job11Text.electricianApprenticeshipProgram.title}
                    items={job11Text.electricianApprenticeshipProgram.items}
                    titleColor={jobAcademyStyles.textColors.grayDark}
                    borderColor={jobAcademyStyles.borders.leftYellow}
                  />
                </div>

                <div className={`${jobAcademyStyles.containers.amberLightBox} ${jobAcademyStyles.borders.leftRose} shadow-sm`}>
                  <h4 className="text-black font-bold">{job11Text.sectionTitle_Foundation}</h4>
                </div>
              </div>

              {/* 교육기관 */}
              <div className={jobAcademyStyles.spacing.marginBottom8}>
                <h4 className="text-xl font-bold mb-4 text-black">{job11Text.sectionTitle_ElectricianEdu}</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className={`${jobAcademyStyles.containers.amberLightBox} ${jobAcademyStyles.borders.leftLime}`}>
                    <h4 className="text-black font-bold mb-3">{job11Text.sectionTitle_PublicInstitutions}</h4>
                    <SmallTitleListComponent
                      title=""
                      items={job11Text.electricianPublicInstitutions}
                      textColor={jobAcademyStyles.textColors.grayLight}
                    />
                  </div>

                  <div className={`${jobAcademyStyles.containers.amberLightBox} ${jobAcademyStyles.borders.leftOrange}`}>
                    <h4 className="text-black font-bold mb-3">{job11Text.sectionTitle_PrivateInstitutions}</h4>
                    <SmallTitleListComponent
                      title=""
                      items={job11Text.electricianPrivateInstitutions}
                      textColor={jobAcademyStyles.textColors.grayLight}
                    />
                  </div>
                </div>

                <div className={`${jobAcademyStyles.containers.amberLightBox} ${jobAcademyStyles.borders.leftEmerald}`}>
                  <h5 className="text-black font-bold mb-3">{job11Text.sectionTitle_Training}</h5>
                  <TitleDescriptionGridComponent
                    items={job11Text.trainingApprenticeships}
                    titleClass="font-semibold mb-2"
                  />
                </div>
              </div>

              {/* 방법 2: 자격인증시험 */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-black">{job11Text.sectionTitle_ElectricianHow2}</h4>
                <div className={`${jobAcademyStyles.borders.leftYellow} rounded-lg`}>
                  <TableComponent
                    title={job11Text.requiredDocuments.title}
                    headers={job11Text.requiredDocuments.headers}
                    rows={job11Text.requiredDocuments.rows}
                    bgColor={jobAcademyStyles.containers.cyanLightInfo}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skilled Trades 선택 가이드 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.containers.lightBox}>
            <h2 className="text-black text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job11Text.sectionTitle_Guide}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`${jobAcademyStyles.containers.amberLightBox} ${jobAcademyStyles.borders.leftBlue} shadow-sm`}>
                <h3 className="text-black text-xl font-bold mb-4">{job11Text.sectionTitle_AutoVsElec}</h3>
                <div className="space-y-4">
                  <BorderedListComponent
                    title={job11Text.sectionTitle_AutoTech}
                    items={job11Text.automotiveAdvantages}
                    borderColor="border-blue-400"
                    titleColor="text-blue-900"
                  />
                  <BorderedListComponent
                    title={job11Text.sectionTitle_ElecTech}
                    items={job11Text.electricianAdvantages}
                    borderColor="border-green-400"
                    titleColor="text-green-900"
                  />
                </div>
              </div>

              <BoxListComponent
                title={job11Text.successFactors.title}
                items={job11Text.successFactors.items}
                titleColor={jobAcademyStyles.textColors.grayDark}
                borderColor={jobAcademyStyles.borders.leftRose}
                bgColor={jobAcademyStyles.containers.amberLightBox}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.amberLightBox} ${jobAcademyStyles.borders.leftOrange} shadow-sm`}>
              <h3 className="text-black text-xl font-bold mb-4">{job11Text.sectionTitle_Outlook}</h3>
              <div className={jobAcademyStyles.grids.twoThreeColumn}>
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h4 className="font-semibold mb-2">{job11Text.sectionTitle_Positive}</h4>
                  <ul className="space-y-1 text-sm">
                    {job11Text.positiveFactors.map((factor, index) => (
                      <li key={index}>• {factor}</li>
                    ))}
                  </ul>
                </div>
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h4 className="font-semibold mb-2">{job11Text.sectionTitle_Considerations}</h4>
                  <ul className="space-y-1 text-sm">
                    {job11Text.considerations.map((consideration, index) => (
                      <li key={index}>• {consideration}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 기타 Skilled Trades */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.containers.yellowLightBox}>
            <h2 className="text-black text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job11Text.sectionTitle_OtherTrades}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.grids.threeColumn}>
              <BoxListComponent
                title={job11Text.sectionTitle_Construction}
                items={job11Text.constructionTrades.items}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <BoxListComponent
                title={job11Text.sectionTitle_Manufacturing}
                items={job11Text.manufacturingTrades.items}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <BoxListComponent
                title={job11Text.sectionTitle_Service}
                items={job11Text.serviceTrades.items}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>
          </div>
        </section>

        {/* 참고 자료 */}
        <ReferenceSectionComponent
          title={job11Text.sectionTitle_Reference}
          governmentTitle={job11Text.sectionTitle_Government}
          governmentItems={job11Text.governmentAgencies}
          associationsTitle={job11Text.sectionTitle_Industry}
          associationsItems={job11Text.industryAssociations}
          notice={job11Text.skilledNotice}
        />

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={11} />
        </section>
      </div>
    </div>
  );
};

export default Job11;

