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
  const [isHovered, setIsHovered] = React.useState(false);
  
  // 自动滚动逻辑
  React.useEffect(() => {
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    const scroll = () => {
      scrollContainers.forEach(container => {
        if (!isHovered && container) {
          container.scrollLeft += 1;
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          }
        }
      });
    };
    
    const scrollInterval = setInterval(scroll, 30);
    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  const talents = [
    {
      thumbnail: '/job1.png',
      position: 'David Brown',
      company: 'USA · Wispr Flow',
      salary: '15k-25k',
      description: 'Hello, I am David Brown, this is...',
      views: '1.2w likes'
    },
    {
      thumbnail: '/job2.png',
      position: 'James Carter',
      company: 'USA · Renew Home',
      salary: '8k-10k',
      description: 'Hello, I am a teacher from UK...',
      views: '1.2w likes'
    },
    {
      thumbnail: '/job3.png',
      position: 'Sophie Martin',
      company: 'USA · Teladoc Health',
      salary: '15k-25k',
      description: 'This is my self-introduction, please watch...',
      views: '1.2w likes'
    },
    {
      thumbnail: '/job4.png',
      position: "Liam O'Connor",
      company: 'USA · Airbnb',
      salary: '7k-12k',
      description: 'This is my self-introduction, please watch...',
      views: '1.2w likes'
    },
  ];
  
  const jobs = [
    {
      thumbnail: '/job5.png',
      position: t('jobTitles.surveyor'),
      company: 'USA · ReliefWeb',
      salary: '10k-15k',
      description: 'This office space is absolutely beyond your...',
      views: '1.2w likes'
    },
    {
      thumbnail: '/job6.png',
      position: t('jobTitles.designer'),
      company: 'USA · F2Onsite',
      salary: '30k-50k',
      description: 'Office environment of Fortune 500 companies, come and see...',
      views: '1.2w views'
    },
    {
      thumbnail: '/job7.png',
      position: t('jobTitles.salesConsultant'),
      company: 'USA · Pfizer Inc.',
      salary: '10k-20k',
      description: 'Walk into Pfizer Pharmaceuticals',
      views: '1.2w likes'
    },
    {
      thumbnail: '/job8.png',
      position: t('jobTitles.marketingConsultant'),
      company: 'DE · SIEMENS AG',
      salary: '10k-20k',
      description: 'Walk into Siemens, watch the video',
      views: '1.2w likes'
    }
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Trending Talents Section */}
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">{t('videoSection.hotJobs')}</h1>
        {/* <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 text-center">{t('videoSection.videoResumeDesc')}</p> */}
        
        {/* Mobile carousel for talents */}
        <div 
          className="md:hidden overflow-x-auto whitespace-nowrap pb-4 -mx-4 px-4 scroll-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="inline-flex space-x-4">
            {talents.map((talent, index) => (
              <div key={index} className="w-[calc(50vw-24px)] inline-block"> {/* 修改为50vw宽度 */}
                <JobCard {...talent} />
              </div>
            ))}
            {/* 复制一份用于无缝滚动 */}
            {talents.map((talent, index) => (
              <div key={`copy-${index}`} className="w-[calc(50vw-24px)] inline-block"> {/* 修改为50vw宽度 */}
                <JobCard {...talent} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop grid for talents */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {talents.map((talent, index) => (
            <JobCard key={index} {...talent} />
          ))}
        </div>
        
        {/* Divider with text */}
        <div className="flex items-center my-10 md:my-16">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="text-xl md:text-2xl lg:text-4xl font-bold mb-1 md:mb-2 text-center">{t('videoSection.jdTalk')}</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>
        
        {/* Mobile carousel for jobs */}
        <div 
          className="md:hidden overflow-x-auto whitespace-nowrap pb-4 -mx-4 px-4 scroll-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="inline-flex space-x-4">
            {jobs.map((job, index) => (
              <div key={index} className="w-[calc(50vw-24px)] inline-block"> {/* 修改为50vw宽度 */}
                <JobCard {...job} />
              </div>
            ))}
            {/* 复制一份用于无缝滚动 */}
            {jobs.map((job, index) => (
              <div key={`copy-${index}`} className="w-[calc(50vw-24px)] inline-block"> {/* 修改为50vw宽度 */}
                <JobCard {...job} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop grid for jobs */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;