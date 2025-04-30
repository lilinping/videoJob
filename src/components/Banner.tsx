import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-[500px] md:h-[600px] w-full bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('/banner-bg.png')] bg-cover bg-center opacity-50" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-32 md:py-60 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {t('banner.title')}
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t('banner.subtitle')}
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
            <a
              href="#"
              className="flex items-center justify-center bg-white px-6 md:px-12 py-2 md:py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <img src="/apple-logo.svg" alt="App Store" className="w-6 md:w-6 h-6 md:h-6 mr-2 mt-2" />
              <span className="text-black text-lg md:text-2xl">{t('banner.appStoreDownload')}</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-white px-6 md:px-12 py-2 md:py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <img src="/google-play.svg" alt="Google Play" className="w-6 md:w-6 h-6 md:h-6 mr-2" />
              <span className="text-black text-lg md:text-2xl">{t('banner.googlePlayDownload')}</span>
            </a>
          </div>
          
          {/* 用户统计信息 */}
          <div className="flex items-center mt-6 md:mt-8 backdrop-blur-sm rounded-full px-3 md:px-4 py-1 md:py-2 w-fit">
            <div className="flex -space-x-2 mr-2 md:mr-3">
              <img src="/avatar1.svg" alt="user" className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-gray-800" />
              <img src="/avatar.svg" alt="user" className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-gray-800" />
              <img src="/avatar2.svg" alt="user" className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-gray-800" />
            </div>
            <div className="text-xs md:text-sm">
              <span className="text-gray-400">
                {t('banner.userStats').split('{{count}}')[0]}
                <span className="text-[#7C4DFF] font-medium">12500</span>
                {t('banner.userStats').split('{{count}}')[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;