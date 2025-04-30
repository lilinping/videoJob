import React from 'react';
import { useTranslation } from 'react-i18next';

interface HRVideoCardProps {
  thumbnail: string;
  name: string;
  title: string;
  company: string;
  videoTitle: string;
}

const HRVideoCard: React.FC<HRVideoCardProps> = ({ thumbnail, name, title, videoTitle }) => {
  return (
    <div className="relative group">
      <div className="rounded-2xl overflow-hidden bg-gray-900">
        {/* Video Preview */}
        <div className="relative">
          <img src={thumbnail} alt={name} className="w-full object-cover aspect-[4/3] md:aspect-auto" />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-t-6 sm:border-t-8 border-t-transparent border-l-[12px] sm:border-l-[16px] border-l-white border-b-6 sm:border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
          {/* Title Overlay */}
          <div className="absolute left-3 sm:left-4 bottom-10 sm:bottom-12 right-3 sm:right-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white line-clamp-1">{name}</h2>
            <p className="text-sm sm:text-base text-white/90 mt-0.5 sm:mt-1 line-clamp-1">{title}</p>
          </div>

          {/* Video Info */}
          <div className="absolute left-3 sm:left-4 bottom-2 sm:bottom-3">
            <h3 className="text-base sm:text-lg font-medium text-white line-clamp-1">{videoTitle}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const HRVideoSection: React.FC = () => {
  const { t } = useTranslation();
  
  const videos = [
    {
      thumbnail: '/hr1.png',
      name: 'Olivia Harper',
      title: '阿里巴巴·人才招聘总监',
      company: '阿里巴巴',
      videoTitle: '如何准备技术岗位面试'
    },
    {
      thumbnail: '/hr2.png',
      name: 'Michael Chen',
      title: 'Google·人力资源总监',
      company: 'Google',
      videoTitle: '面试官最看重的能力'
    },
    {
      thumbnail: '/hr3.png',
      name: 'Sarah Wang',
      title: '腾讯·招聘经理',
      company: '腾讯',
      videoTitle: '如何在大厂脱颖而出'
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-center">{t('hrVideoSection.title')}</h2>
        <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 text-center">{t('hrVideoSection.subtitle')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <HRVideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRVideoSection;