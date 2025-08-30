// BC Tax Guide - Single-file React component using Tailwind CSS
// Default export: TaxGuide

import useLanguage from '../../../hooks/useLanguage';
import { useMemo } from 'react';
import { taxEn } from "./locales/tax_en";
import { taxKo } from "./locales/tax_ko";
import { highlightStrong } from '../../../components/utils/Util';

export default function TaxGuide() {
  const { language } = useLanguage();
  const tax_text = useMemo(() => (language === 'ko' ? taxKo : taxEn), [language]);

  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {tax_text.hero.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl md:max-w-7xl mx-auto rounded-lg p-8 mt-3">
        <div className="bg-black rounded-2xl shadow p-8">
          <h2 className="font-bold text-white drop-shadow-lg text-[clamp(1rem,2.5vw,2.5rem)] mb-4">{tax_text.intro.heading}</h2>
          <p className="text-gray-200 leading-relaxed text-lg">
            <span dangerouslySetInnerHTML={{ __html: highlightStrong(tax_text.intro.description) }} />
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* BC Tax Information */}
        <section id="tax-info" className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {tax_text.sections.taxInfo.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          {tax_text.sections.taxInfo.blocks.map((block, index) => (
            <div key={index} className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
              <h4 className="text-white text-xl font-bold mb-2">{block.title}</h4>
              <p>{block.content}</p>
              <ul className="list-disc list-inside ml-6">
                {block.list.map((item, index) => (
                  <li key={index}><span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Tax Refunds */}
        <section id="tax-refunds" className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {tax_text.sections.taxRefunds.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <h3 className="text-white mb-3">{tax_text.sections.taxRefunds.intro}</h3>

          {tax_text.sections.taxRefunds.blocks.map((block, index) => (
            <div key={index} className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
              <h4 className="text-white text-xl font-bold mb-2">{block.title}</h4>
              <p>{block.content}</p>
              <ul className="list-disc list-inside ml-6">
                {block.list.map((item, index) => (
                  <li key={index}><span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 3. Tax Savings */}
        <section id="tax-savings" className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {tax_text.sections.taxSavings.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <h3 className="text-white mb-3">{tax_text.sections.taxSavings.intro}</h3>

          {tax_text.sections.taxSavings.blocks.map((block, index) => (
            <div key={index} className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
              <h4 className="text-white text-xl font-bold mb-2">{block.title}</h4>
              <p>{block.content}</p>
              <ul className="list-disc list-inside ml-6">
                {block.list.map((item, index) => (
                  <li key={index}><span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Resources & Official Links */}
        <section id="resources" className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {tax_text.sections.resources.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <ul className="mt-3 space-y-2 text-gray-200">
            {tax_text.sections.resources.links.map((link, index) => (
              <li key={index}>
                <a className="hover:underline" href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xl text-gray-200">
            <p>{tax_text.sections.resources.tip}</p>
          </div>
        </section>


      </div>


    </div>
  );
}
