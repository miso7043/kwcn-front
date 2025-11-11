
// import useLanguage from '../hooks/useLanguage';
import { Mail, CreditCard, DollarSign, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// const DonateNow = () => (
const DonateNow: React.FC = () => {
  // const { language } = useLanguage();
  const { t } = useTranslation('donate');

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[435px] flex flex-col justify-center items-center"
          style={{ backgroundImage: 'url("imgs/bgs/love.webp")' }}
        >
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>
          
          <h1
            className='relative pt-15 px-10 pb-8 text-5xl font-bold text-white z-10'
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            {t('hero.title')}
          </h1>
          <h3
            className='relative px-10 text-2xl text-white z-10'
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
          >
            {t('hero.subtitle')}
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-teal-100">
        {/* Introduction Section */}
        <section className="py-22">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('introduction.title')}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-4">
                  {t('introduction.description1')}
                </p>
                <p className="text-lg text-gray-700">
                  {t('introduction.description2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Methods Section */}
        <section className="py-22 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <div className="bg-violet-200 border border-white/30 rounded-full px-12 py-6 shadow-lg">
                <h2 className="text-4xl font-bold text-center text-gray-900">
                  {t('methods.title')}
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
              
              {/* Cash Donation */}
              <div className="bg-rose-100 rounded-lg shadow-2xl p-8 text-center text-xl">
                <div className="bg-green-100 rounded-full p-4 inline-block mb-6">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('methods.cash.title')}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('methods.cash.description')}
                </p>
                
                <div className="mt-6">
                  <span className="text-green-600 font-semibold">{t('methods.cash.appreciation')}</span>
                </div>
              </div>

              {/* E-transfer Donation */}
              <div className="bg-lime-100 rounded-lg shadow-2xl p-8 text-center text-xl">
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-6">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('methods.etransfer.title')}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('methods.etransfer.description')}
                </p>
                <div className="bg-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-semibold text-lg">{t('methods.etransfer.email')}</p>
                  <p className="text-blue-600 mt-1">{t('methods.etransfer.emailLabel')}</p>
                </div>
              </div>

              {/* Credit Card Donation */}
              <div className="bg-sky-200 rounded-lg shadow-2xl p-8 text-center text-xl">
                <div className="bg-red-100 rounded-full p-4 inline-block mb-6">
                  <CreditCard className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('methods.creditCard.title')}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('methods.creditCard.description')}
                </p>
                <div className="space-y-3 mb-6">
                  <a 
                    href={t('links.donateUrl')}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white/50 backdrop-blur-md border border-red-300/50 text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 hover:border-red-400/60 transition duration-300 flex items-center justify-center shadow-lg"
                  >
                    {t('methods.creditCard.donateButton')} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a 
                    href={t('links.formUrl')}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white/50 backdrop-blur-md border border-red-300/50 text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-white/40 hover:border-red-400/60 transition duration-300 flex items-center justify-center shadow-lg"
                  >
                    {t('methods.creditCard.formButton')} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DonateNow;
