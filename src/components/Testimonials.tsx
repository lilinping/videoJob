import React from 'react';
import { useTranslation } from 'react-i18next';

interface TestimonialProps {
  author: string;
  authorHandle: string;
  avatar: string;
  content: string;
  date: string;
  likes?: number;
  retweets?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  author, 
  authorHandle, 
  avatar, 
  content, 
  date, 
  likes, 
  retweets 
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 text-black w-full mb-4 sm:mb-5">
      <div className="flex items-center mb-2 sm:mb-3">
        <img src={avatar} alt={author} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 object-cover" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm sm:text-base font-bold line-clamp-1">{author}</h4>
              <p className="text-gray-500 text-xs sm:text-sm line-clamp-1">{authorHandle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 sm:mb-4">
        <p className="text-sm sm:text-base whitespace-pre-line line-clamp-4 sm:line-clamp-none">{content}</p>
      </div>
      <div className="text-xs text-gray-500 mb-2 sm:mb-3">
        {date}
      </div>
      {(likes !== undefined || retweets !== undefined) && (
        <div className="flex items-center text-gray-500 text-xs sm:text-sm gap-3 sm:gap-4">
          {retweets !== undefined && retweets > 0 && (
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1 opacity-70">
                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
              </svg>
              {retweets}
            </div>
          )}
          {likes !== undefined && likes > 0 && (
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1 opacity-70">
                <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
              </svg>
              {likes}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      author: '王立业',
      authorHandle: '@rauchg',
      avatar: '/avatar1.png',
      content: '无需招聘专家即可获得专业面试结构设计，AI根据我们的JD自动生成定制化问题库',
      date: '5:48 PM · Sep 15, 2021',
      likes: 0,
      retweets: 36
    },
    {
      author: 'Thomas Paul Mann',
      authorHandle: '@thomaspaulmann',
      avatar: '/avatar1.png',
      content: '无需招聘专家即可获得专业面试结构设计，AI根据我们的JD自动生成定制化问题库',
      date: '6:19 AM · Sep 7, 2022',
      likes: 0,
      retweets: 3
    },
    {
      author: 'KP',
      authorHandle: '@thisiskp_',
      avatar: '/avatar1.png',
      content: 'AI语音分析精准识别候选人抗压能力（与最终录用者表现相关性达0.81）\n编程岗模拟环境自动评分，与技术团队手动评估结果偏差<8%\nAI语音分析精准识别候选人抗压能力（与最终录用者表现相关性达0.81）\n编程岗模拟环境自动评分，与技术团队手动评估结果偏差<8%',
      date: '12:27 PM · Jun 21, 2022',
      likes: 0,
      retweets: 0
    },
    {
      author: 'Sharath',
      authorHandle: '@Sharath',
      avatar: '/avatar1.png',
      content: 'AI语音分析精准识别候选人抗压能力（与最终录用者表现相关性达0.81）',
      date: '1:51 PM · Feb 8, 2022',
      likes: 0,
      retweets: 2
    },
    {
      author: 'Matt Galligan',
      authorHandle: '@mg',
      avatar: '/avatar1.png',
      content: 'AI语音分析精准识别候选人抗压能力（与最终录用者表现相关性达0.81） 编程岗模拟环境自动评分，与技术团队手动评估结果偏差＜8% AI语音分析精准识别候选人抗压能力（与最终录用者表现相关性达0.81） 编程岗模拟环境自动评分，与技术团队手动评估结果偏差＜8%',
      date: '3:12 PM · Mar 25, 2022',
      likes: 0,
      retweets: 0
    },
    {
      author: 'Farhaj May00n',
      authorHandle: '@farhajmayan',
      avatar: '/avatar1.png',
      content: 'AI语音分析精准识别候选人抗压能力（与最终录用者表现相关性达0.81）\n编程岗模拟环境自动评分，与技术团队手动评估结果偏差<8%',
      date: '8:31 AM · Feb 17, 2022',
      likes: 0,
      retweets: 0
    },
    {
      author: 'Talha Altinel',
      authorHandle: '@mr_wormhole',
      avatar: '/avatar1.png',
      content: 'AI语音分析精准识别候选人抗压能力（与最终录用者表现相关性达0.81）\n编程岗模拟环境自动评分，与技术团队手动评估结果偏差<8%',
      date: '2:45 PM · Apr 11, 2022',
      likes: 0,
      retweets: 0
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[#0A0A0A] to-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-xl md:text-2xl lg:text-4xl  font-bold mb-6 sm:mb-8 md:mb-12 text-center text-white">{t('testimonials.title')}</h2>
        
        {/* 主要内容区域和底部渐变蒙层 */}
        <div className="relative pb-16 sm:pb-20">
          {/* 底部渐变蒙层 - 高度设为50% */}
          <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
          
          {/* 移动设备只显示一行，可水平滚动 */}
          <div className="sm:hidden overflow-x-auto pb-4 flex gap-4 snap-x snap-mandatory no-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none snap-start w-[80%]">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
          
          {/* 平板和桌面显示多列网格 */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 relative">
            {/* 第一列 */}
            <div className="space-y-4 sm:space-y-5">
              <Testimonial {...testimonials[0]} />
              <Testimonial {...testimonials[4]} />
            </div>
            
            {/* 第二列 */}
            <div className="space-y-4 sm:space-y-5">
              <Testimonial {...testimonials[1]} />
              <Testimonial {...testimonials[5]} />
            </div>
            
            {/* 第三列 */}
            <div className="space-y-4 sm:space-y-5 md:block hidden">
              <Testimonial {...testimonials[2]} />
              <Testimonial {...testimonials[6]} />
            </div>
            
            {/* 第四列 */}
            <div className="space-y-4 sm:space-y-5 lg:block hidden">
              <Testimonial {...testimonials[3]} />
            </div>
          </div>
          
          {/* 悬浮的"显示更多"按钮 */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1/4 z-20">
            <button className="bg-[#222222] hover:bg-[#333333] text-white font-medium py-2 sm:py-3 px-6 sm:px-10 rounded-full shadow-xl transition-colors text-sm sm:text-base">
              SHOW MORE +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;