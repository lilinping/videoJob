import React from 'react';
import { useTranslation } from 'react-i18next';

const DownloadSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-[#0A0A0A] py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="relative min-h-[300px] md:h-[420px] overflow-hidden rounded-[16px] md:rounded-[32px]">
          {/* 背景图装饰 */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <img 
              src="/footer-bg.jpg" 
              alt="background" 
              className="w-full h-full object-cover md:object-contain"
            />
          </div>
          
          {/* 移动端垂直排列布局 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:hidden">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
              {t('downloadSection.title')}
              </h2>
              <p className="text-sm text-white mb-6">
              {t('downloadSection.subtitle')}
              </p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="h-[40px] hover:opacity-90 transition-opacity">
                <img 
                  src="/icon-google-play.svg" 
                  alt="Get it on Google Play" 
                  className="h-full"
                />
              </a>
              <a href="#" className="h-[40px] hover:opacity-90 transition-opacity">
                <img 
                  src="/icon-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-full"
                />
              </a>
            </div>
          </div>
          
          {/* 桌面端水平布局 */}
          <div className="hidden sm:block">
            {/* 文字内容块，绝对定位到左侧中间 */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-8 md:pl-20 z-10">
              <div className="bg-transparent max-w-xl">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
                {t('downloadSection.title')}
                </h2>
                <p className="text-sm md:text-lg text-white mb-0">
                {t('downloadSection.subtitle')}
                </p>
              </div>
            </div>
            {/* 按钮块，绝对定位到右侧中间偏下 */}
            <div className="absolute right-0 bottom-10 md:bottom-20 pr-8 md:pr-20 z-10 flex gap-3 md:gap-4">
              <a href="#" className="h-[40px] md:h-[46px] hover:opacity-90 transition-opacity">
                <img 
                  src="/icon-google-play.svg" 
                  alt="Get it on Google Play" 
                  className="h-full"
                />
              </a>
              <a href="#" className="h-[40px] md:h-[46px] hover:opacity-90 transition-opacity">
                <img 
                  src="/icon-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;