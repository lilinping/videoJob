import React from 'react';
import { useTranslation } from 'react-i18next';

const Partners: React.FC = () => {
  const { t } = useTranslation();
  
  const partners = [
    { name: 'Lenovo', logo: '/amazon1.svg' },
    { name: 'DoorDash', logo: '/amazon1.svg' },
    { name: 'Amazon', logo: '/amazon1.svg' },
    { name: 'Google', logo: '/Google-logo.svg' },
    { name: 'Deppon Express', logo: '/Google-logo.svg' },
    { name: 'Alibaba', logo: '/Google-logo.svg' },
  ];

  return (
    <section className="py-8 md:py-16 bg-[#0a0a14] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h1 className="text-xl md:text-2xl lg:text-4xl  font-bold mb-8 md:mb-10 text-center">{t('partners.title')}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center relative">
          {/* 左侧渐变蒙层 */}
          <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-[#0a0a14] to-transparent z-10"></div>
          
          {/* 右侧渐变蒙层 */}
          <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-[#0a0a14] to-transparent z-10"></div>
          
          {partners.map((partner, index) => {
            // 计算不透明度，中间的logo最亮，两边逐渐变暗
            const totalItems = partners.length;
            const middleIndex = (totalItems - 1) / 2;
            const distanceFromMiddle = Math.abs(index - middleIndex);
            const maxDistance = Math.floor(totalItems / 2);
            // 调整不透明度计算，使两边的 logo 更暗一些
            const opacity = 1 - (distanceFromMiddle / maxDistance) * 0.7;
            
            return (
              <div key={index} className="flex justify-center py-2 md:py-0 relative z-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-7 sm:h-7 md:h-8 transition-opacity duration-300 hover:opacity-100 filter brightness-0 invert" 
                  style={{ opacity }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;