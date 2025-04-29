import React from 'react';
import { Badge } from './ui/badge';
import { useTranslation } from 'react-i18next';

interface BuildingVideoCardProps {
  thumbnail: string;
  title: string;
  views: string;
  duration: string;
  isNew?: boolean;
}

const BuildingVideoCard: React.FC<BuildingVideoCardProps> = ({ thumbnail, title, views, duration, isNew }) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative group cursor-pointer">
      <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-1">
            <span>{views} {t('common.views')}</span>
            <span>·</span>
            <span>{duration}</span>
          </div>
        </div>
        {isNew && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-purple-600 text-white">{t('common.new')}</Badge>
          </div>
        )}
      </div>
    </div>
  );
};

const BuildingVideoSection: React.FC = () => {
  const { t } = useTranslation();
  
  const videos = [
    {
      thumbnail: '/building1.jpg',
      title: '参观上海总部办公室',
      views: '3.5k',
      duration: '5:45',
      isNew: true
    },
    {
      thumbnail: '/building2.jpg',
      title: '北京研发中心工作环境',
      views: '2.8k',
      duration: '4:10',
    },
    {
      thumbnail: '/building3.jpg',
      title: '深圳新园区',
      views: '1.2k',
      duration: '3:25',
    },
    {
      thumbnail: '/building4.jpg',
      title: '杭州人工智能实验室',
      views: '4.1k',
      duration: '6:30',
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 container mx-auto px-4">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">{t('buildingSection.title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <BuildingVideoCard key={index} {...video} />
        ))}
      </div>
    </section>
  );
};

export default BuildingVideoSection;