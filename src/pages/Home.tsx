import { useState, useEffect } from "react";
import { useMemo } from 'react';
import Parallax from "../components/common/Parallax";
import { ArrowRight } from "lucide-react";
import useLanguage from '../hooks/useLanguage';
import { homeEn } from "./homeLocales/home_en";
import { homeKo } from "./homeLocales/home_ko";
import { renderWithLineBreaks } from "../components/utils/Util"; // 추가

const Home = () => {
  const { language } = useLanguage();
  const homeText = useMemo(() => (language === 'ko' ? homeKo : homeEn), [language]);

  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(true), 500);
    const timer2 = setTimeout(() => setShowSubtitle(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/imgs/bgs/main-1.webp)" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="container mx-auto px-4 text-center">
            <h1
              className={`${language === 'ko' ? "text-5xl md:text-7xl" : "text-3xl md:text-5xl"} font-bold mb-6 transform transition-all duration-1000 ${
                showTitle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              {homeText.hero.title.map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h1>

            <p
              className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ${
                showSubtitle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              {renderWithLineBreaks(homeText.hero.subtitle)}
            </p>

            <div
              className={`flex flex-col md:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${
                showSubtitle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                {homeText.hero.buttons.learnMore}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition duration-300">
                {homeText.hero.buttons.getInvolved}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-20 pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-5">
            <h2 className="text-4xl font-bold text-gray-300 mb-6">
              {homeText.mission.heading}
            </h2>
            <div className="space-y-4 text-lg text-gray-200">
              {homeText.mission.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeText.mission.cards.map((card, i) => (
              <div key={i} className="bg-gray-50/10 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <card.icon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>
                <p className="text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="text-white bg-yellow-800/20">
        <Parallax className="py-32 z-20" bgImage="/imgs/bgs/main-2.webp">
          <div>
            <h2 className="text-4xl font-bold mb-8">{homeText.vision.heading}</h2>
            <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              {renderWithLineBreaks(homeText.vision.subtitle)}
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {homeText.vision.items.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="bg-gradient-to-br from-gray-200/30 to-gray-500/30 rounded-full p-6 inline-block mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Parallax>
      </section>

      {/* Programs Section */}
      <section id="programs" className="relative z-20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-300 mb-12">
            {homeText.programs.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {homeText.programs.items.map((program, i) => (
              <div
                key={i}
                className="bg-gray-50/10 p-8 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="bg-red-600 text-white p-3 rounded-full inline-block mb-4">
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <a
                  href={program.link}
                  className="text-red-600 font-semibold hover:text-red-800 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Section */}
      <section className="relative z-20 py-16">
        <Parallax className="py-32 z-20" bgImage="/imgs/bgs/main-3.webp">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-200 mb-4">
                {homeText.culture.heading}
              </h2>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                {renderWithLineBreaks(homeText.culture.subtitle)}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {homeText.culture.features.map((f, i) => (
                <div key={i} className="flex flex-wrap items-start space-x-4">
                  <div className="bg-red-600 text-white p-2 rounded-full mb-4 mx-auto">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-2">
                      {f.title}
                    </h3>
                    <p className="text-gray-200">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Parallax>
      </section>
    </div>
  );
};

export default Home;
