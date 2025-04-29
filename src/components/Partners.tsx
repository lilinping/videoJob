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
    <section className="py-8 md:py-16 bg-[#0a0a14] text-white">
      <div className="container mx-auto px-4">
      <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-10 text-center">{t('partners.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center">
          {partners.map((partner, index) => {
            // 计算不透明度，中间的logo最亮，两边逐渐变暗
            const totalItems = partners.length;
            const middleIndex = (totalItems - 1) / 2;
            const distanceFromMiddle = Math.abs(index - middleIndex);
            const maxDistance = Math.floor(totalItems / 2);
            const opacity = 1 - (distanceFromMiddle / maxDistance) * 0.5;
            
            return (
              <div key={index} className="flex justify-center py-2 md:py-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-6 sm:h-7 md:h-8 transition-opacity duration-300 hover:opacity-100" 
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