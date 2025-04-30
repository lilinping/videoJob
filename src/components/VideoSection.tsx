import React from 'react';
import { useTranslation } from 'react-i18next';

interface JobCardProps {
  thumbnail: string;
  position: string;
  company: string;
  salary: string;
  description?: string;
  views?: string;
}

const JobCard: React.FC<JobCardProps> = ({ thumbnail, position, company, salary, description = "你好，我是...", views = "1.2w看过" }) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative group flex flex-col">
      <div className="rounded-2xl overflow-hidden bg-gray-900">
        <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4]">
          {/* Video thumbnail */}
          <img
            src={thumbnail}
            alt={position}
            className="w-full object-cover"
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-t-6 sm:border-t-8 border-t-transparent border-l-[12px] sm:border-l-[16px] border-l-white border-b-6 sm:border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>

          {/* Bottom info card */}
          <div className="absolute left-2 right-2 sm:left-3 sm:right-3 bottom-2 sm:bottom-3 bg-black/80 backdrop-blur-sm rounded-xl p-2 sm:p-3">
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-medium text-white line-clamp-1">{position}</h3>
              <p className="text-xs sm:text-sm text-gray-300 line-clamp-1">{company}</p>
              <p className="text-sm sm:text-base font-medium text-amber-500">{salary}</p>
              <div className="flex gap-1 sm:gap-2 pt-1">
                <button className="flex-1 py-1.5 sm:py-2 bg-transparent border border-gray-600 rounded-full text-xs sm:text-sm text-gray-300 hover:border-gray-400 transition-colors">
                  {t('common.consult')}
                </button>
                <button className="flex-1 py-1.5 sm:py-2 bg-purple-600 rounded-full text-xs sm:text-sm text-white hover:bg-purple-700 transition-colors">
                  {t('common.submitResume')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description section - now outside the card */}
      <div className="mt-1.5 sm:mt-2 bg-black/80 backdrop-blur-sm rounded-xl p-2 sm:p-3">
        <div className="flex items-start space-x-1 sm:space-x-2">
          <div className="flex-1">
            <p className="text-xs sm:text-sm text-gray-300 truncate">{description}</p>
            <div className="flex items-center mt-0.5 sm:mt-1 space-x-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <p className="text-[10px] sm:text-xs text-gray-400">{views}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoSection: React.FC = () => {
  const { t } = useTranslation();
  
  const jobs = [
    {
      thumbnail: '/job1.png',
      position: t('jobTitles.projectDirector'),
      company: '意大利·某科技有限公司',
      salary: '15k-25k',
      description: '你好，我是Moritz，这是我的...',
      views: '1.2w看过'
    },
    {
      thumbnail: '/job2.png',
      position: t('jobTitles.projectAssistant'),
      company: '意大利·某科技有限公司',
      salary: '8k-10k',
      description: '大家好，我是Anna，期待与你共事',
      views: '8.5k看过'
    },
    {
      thumbnail: '/job3.png',
      position: t('jobTitles.mediaOperator'),
      company: '意大利·某科技有限公司',
      salary: '15k-25k',
      description: '嗨，我是Sarah，热爱新媒体运营...',
      views: '6.7k看过'
    },
    {
      thumbnail: '/job4.png',
      position: t('jobTitles.videoEditor'),
      company: '意大利·某科技有限公司',
      salary: '7k-12k',
      description: '你好，我是Mike，擅长视频剪辑...',
      views: '5.3k看过'
    },
    {
      thumbnail: '/job5.png',
      position: t('jobTitles.surveyor'),
      company: '意大利·某科技有限公司',
      salary: '10k-15k',
      description: '大家好，我是Tom，专业测绘5年...',
      views: '4.2k看过'
    },
    {
      thumbnail: '/job6.png',
      position: t('jobTitles.designer'),
      company: '意大利·某科技有限公司',
      salary: '30k-50k',
      description: '你好，我是Lisa，10年设计经验...',
      views: '9.1k看过'
    },
    {
      thumbnail: '/job7.png',
      position: t('jobTitles.salesConsultant'),
      company: '意大利·某科技有限公司',
      salary: '10k-20k',
      description: '大家好，我是Jack，销售达人...',
      views: '7.8k看过'
    },
    {
      thumbnail: '/job8.png',
      position: t('jobTitles.marketingConsultant'),
      company: '意大利·某科技有限公司',
      salary: '10k-20k',
      description: '你好，我是Emma，市场营销专家...',
      views: '6.4k看过'
    }
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-1 md:mb-2 text-center">{t('videoSection.hotJobs')}</h1>
        <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 text-center">{t('videoSection.videoResumeDesc')}</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;