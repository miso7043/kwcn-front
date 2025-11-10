import React, { useMemo } from 'react';
import ImageGallery, { type GalleryImage } from '../../../components/ui/ImageGallery';
import useLanguage from '../../../hooks/useLanguage';

import {
  applicationProcessData,
  applicationTypesData,
  whatIsCoopSection,
  coopTypesSection,
  ownershipModelsSection,
  cltSection,
  applicationProcessSection,
  coopPrinciplesSection,
  coopLivingSection,
  supportsResourcesSection,
  additionalSupportsSection,
  pageHeader,
  whySection,
  advantagesSection,
  disadvantagesSection,
  gallerySection,
  membershipSection,
  governanceSection,
  financialSupportsForMembersSection
} from './locales/CoopHousing_en';

import {
  applicationProcessData as applicationProcessDataKr,
  applicationTypesData as applicationTypesDataKr,
  whatIsCoopSection as whatIsCoopSectionKr,
  coopTypesSection as coopTypesSectionKr,
  ownershipModelsSection as ownershipModelsSectionKr,
  cltSection as cltSectionKr,
  applicationProcessSection as applicationProcessSectionKr,
  coopPrinciplesSection as coopPrinciplesSectionKr,
  coopLivingSection as coopLivingSectionKr,
  supportsResourcesSection as supportsResourcesSectionKr,
  additionalSupportsSection as additionalSupportsSectionKr,
  pageHeader as pageHeaderKr,
  whySection as whySectionKr,
  advantagesSection as advantagesSectionKr,
  disadvantagesSection as disadvantagesSectionKr,
  gallerySection as gallerySectionKr,
  membershipSection as membershipSectionKr,
  governanceSection as governanceSectionKr,
  financialSupportsForMembersSection as financialSupportsForMembersSectionKr
} from './locales/CoopHousing_kr';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  bgColor?: string;
  titleColor?: string;
  subItems?: string[];
}

interface SectionData {
  title: string;
  description: string;
  cards: Array<{
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    subItems?: string[];
  }>;
  bgColor?: string;
  titleColor?: string;
  cardWidth?: number;
}

interface SectionProps {
  data: SectionData;
  cardGridStyle: (minWidth?: number) => React.CSSProperties;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  bgColor = 'bg-gray-800/40',
  titleColor = 'text-gray-800',
  subItems
}) => {
  return (
    <div className={`${bgColor} rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 p-6`}>
      <div className="flex items-center mb-4">
        {icon && <div className="text-gray-800 mr-3">{icon}</div>}
        <h4 className={`${titleColor} text-xl font-bold`}>{title}</h4>
      </div>
      <p className="text-gray-800 leading-relaxed text-lg mb-4">{description}</p>
      {subItems && subItems.length > 0 && (
        <ul className="list-disc list-inside ml-4 text-gray-800 space-y-1">
          {subItems.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const InfoSection: React.FC<SectionProps> = ({ data, cardGridStyle }) => {
  const { title, description, cards, bgColor = 'bg-gray-800/40', titleColor = 'text-gray-800', cardWidth } = data;
  
  return (
    <div className="mb-10">
      <h3 className="text-gray-800 text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-800 mb-6 text-lg">{description}</p>

      <div
        className="grid gap-6 mb-6"
        style={cardGridStyle(cardWidth)}
      >
        {cards.map((card) => (
          <InfoCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            subItems={card.subItems}
            bgColor={bgColor}
            titleColor={titleColor}
          />
        ))}
      </div>
    </div>
  );
};

const CoopHousing: React.FC = () => {
  const { language } = useLanguage();

  // Language-dependent content selection
  const currentContent = useMemo(() => {
    if (language === 'ko') {
      return {
        applicationProcessData: applicationProcessDataKr,
        applicationTypesData: applicationTypesDataKr,
        whatIsCoopSection: whatIsCoopSectionKr,
        coopTypesSection: coopTypesSectionKr,
        ownershipModelsSection: ownershipModelsSectionKr,
        cltSection: cltSectionKr,
        applicationProcessSection: applicationProcessSectionKr,
        coopPrinciplesSection: coopPrinciplesSectionKr,
        coopLivingSection: coopLivingSectionKr,
        supportsResourcesSection: supportsResourcesSectionKr,
        additionalSupportsSection: additionalSupportsSectionKr,
        pageHeader: pageHeaderKr,
        whySection: whySectionKr,
        advantagesSection: advantagesSectionKr,
        disadvantagesSection: disadvantagesSectionKr,
        gallerySection: gallerySectionKr,
        membershipSection: membershipSectionKr,
        governanceSection: governanceSectionKr,
        financialSupportsForMembersSection: financialSupportsForMembersSectionKr
      };
    }
    return {
      applicationProcessData,
      applicationTypesData,
      whatIsCoopSection,
      coopTypesSection,
      ownershipModelsSection,
      cltSection,
      applicationProcessSection,
      coopPrinciplesSection,
      coopLivingSection,
      supportsResourcesSection,
      additionalSupportsSection,
      pageHeader,
      whySection,
      advantagesSection,
      disadvantagesSection,
      gallerySection,
      membershipSection,
      governanceSection,
      financialSupportsForMembersSection
    };
  }, [language]);

  const galleryImages: GalleryImage[] = [
    { src: '/imgs/co-op/co-op_1.webp', alt: 'Co-op Housing Example 1', title: '' },
    { src: '/imgs/co-op/co-op_2.webp', alt: 'Co-op Housing Example 2', title: '' },
    { src: '/imgs/co-op/co-op_3.webp', alt: 'Co-op Housing Example 3', title: '' },
    { src: '/imgs/co-op/co-op_4.webp', alt: 'Co-op Housing Example 4', title: '' },
    { src: '/imgs/co-op/co-op_5.webp', alt: 'Co-op Housing Example 5', title: '' },
    { src: '/imgs/co-op/co-op_6.webp', alt: 'Co-op Housing Example 6', title: '' },
    { src: '/imgs/co-op/co-op_7.webp', alt: 'Co-op Housing Example 7', title: '' },
    { src: '/imgs/co-op/co-op_8.webp', alt: 'Co-op Housing Example 8', title: '' },
    { src: '/imgs/co-op/co-op_9.webp', alt: 'Co-op Housing Example 9', title: '' },
    { src: '/imgs/co-op/co-op_10.webp', alt: 'Co-op Housing Example 10', title: '' }
  ];

  // Common grid styling for cards - function to accept custom width
  const cardGridStyle = (minWidth: number = 300) => ({
    gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minWidth}px), 1fr))`
  } as React.CSSProperties);

  // Common section background color
  const sectionBgColor = 'bg-green-300/30';

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[435px] flex flex-col justify-center items-center"
          style={{ backgroundImage: `url('${currentContent.pageHeader.backgroundImage}')` }}
        >
          <h1 className='pt-25 px-10' style={{ fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(255,255,255,0.9)', color: 'black' }}>
            {currentContent.pageHeader.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl md:max-w-7xl mx-auto rounded-lg px-4 md:px-20 py-6 mt-3">
        <div className={`${sectionBgColor} rounded-2xl shadow px-4 md:px-8 py-6`}>
          <h2 className="font-bold text-gray-800 drop-shadow-lg text-[clamp(1rem,2.5vw,2.5rem)] mb-4">{currentContent.whySection.title}</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            {currentContent.whySection.description} <strong className="text-yellow-300 font-bold">{currentContent.whySection.highlightText}</strong> {currentContent.whySection.descriptionSuffix}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        {/* Advantages Section */}
        <section id="advantages" className={`${sectionBgColor} mb-8 px-2 md:px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
          <InfoSection data={currentContent.advantagesSection} cardGridStyle={cardGridStyle} />
        </section>

        {/* Disadvantages Section */}
        <section id="disadvantages" className={`${sectionBgColor} mb-8 px-2 md:px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
          <InfoSection data={currentContent.disadvantagesSection} cardGridStyle={cardGridStyle} />
        </section>

        {/* What is Co-op Housing Section */}
        <section id="what-is-coop" className={`${sectionBgColor} mb-8 px-2 md:px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
          <h2 className="text-gray-800 text-[clamp(1rem,2.5vw,2.5rem)] font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {currentContent.whatIsCoopSection.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          {/* Housing Options Subsection */}
          <InfoSection data={currentContent.membershipSection} cardGridStyle={cardGridStyle} />

          {/* Types of Co-ops Subsection */}
          <InfoSection data={currentContent.coopTypesSection} cardGridStyle={cardGridStyle} />

          {/* Community Land Trust Subsection */}
          <div className="mb-10">
            {/* Ownership Models Comparison */}
            <InfoSection data={currentContent.ownershipModelsSection} cardGridStyle={cardGridStyle} />

            <div className="mb-10">
              <InfoSection data={currentContent.cltSection} cardGridStyle={cardGridStyle} />
            </div>
          </div>

          {/* Application Process Subsection */}
          <div className="mb-10">
            <h3 className="text-gray-800 text-2xl font-bold mb-4">{currentContent.applicationProcessSection.title}</h3>
            <p className="text-gray-800 mb-6 text-lg">{currentContent.applicationProcessSection.description}</p>

            <h4 className="text-gray-800 text-xl font-bold mb-4">{currentContent.applicationProcessSection.generalRequirementsTitle}</h4>
            <div
              className="grid gap-6 mb-8"
              style={cardGridStyle()}
            >
              {currentContent.applicationProcessData.map((card) => (
                <InfoCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  bgColor="bg-blue-500/60"
                  titleColor="text-orange-700"
                />
              ))}
            </div>

            <h4 className="text-gray-800 text-xl font-bold mb-4">{currentContent.applicationProcessSection.applicationTypesTitle}</h4>
            <div
              className="grid gap-6 mb-6"
              style={cardGridStyle(400)}
            >
              {currentContent.applicationTypesData.map((card) => (
                <InfoCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  subItems={card.subItems}
                  bgColor="bg-blue-500/60"
                  titleColor="text-amber-800"
                />
              ))}
            </div>

            <div className="bg-amber-200 rounded-lg border-l-4 border-blue-500 p-6">
              <h4 className="text-gray-800 text-lg font-bold mb-4">{currentContent.applicationProcessSection.resourcesTitle}</h4>
              <ul className="list-disc list-inside ml-4 text-lg text-gray-800 space-y-2">
                {currentContent.applicationProcessSection.resources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </div>
          </div>

          <InfoSection data={currentContent.coopPrinciplesSection} cardGridStyle={cardGridStyle} />

          {/* Co-op Living Subsection */}
          <InfoSection data={currentContent.coopLivingSection} cardGridStyle={cardGridStyle} />
        </section>

        {/* Supports and Learning Resources Section */}
        <section id="supports-resources" className={`${sectionBgColor} mb-8 px-2 md:px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
          <h2 className="text-gray-800 text-[clamp(1rem,2.5vw,2.5rem)] font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {currentContent.supportsResourcesSection.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          {/* Financial Supports Subsection */}
          <InfoSection data={currentContent.financialSupportsForMembersSection} cardGridStyle={cardGridStyle} />

          {/* Learning Resources Subsection */}
          <InfoSection data={currentContent.governanceSection} cardGridStyle={cardGridStyle} />

          {/* Additional Supports Subsection */}
          <InfoSection data={currentContent.additionalSupportsSection} cardGridStyle={cardGridStyle} />
        </section>

        {/* Gallery Section */}
        <section className="py-16 ">
          <div className="bg-blue-200 rounded-xl p-8">
            <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                {currentContent.gallerySection.title}
              </span>
            </h2>

            <ImageGallery images={galleryImages} cardGridStyle={cardGridStyle()} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoopHousing;