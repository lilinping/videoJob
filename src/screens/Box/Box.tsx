import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import {
  HERO_IMAGE,
  PROFILE_IMAGES,
  BUILDING_IMAGES,
  HR_IMAGES,
  BANNER_IMAGE,
  AVATAR_IMAGES,
} from "../../constants/images";

export const Box = (): JSX.Element => {
  // Hero section data
  const heroText = {
    title: "短视频找工作",
    subtitle: "並秀出你自己最精彩的一面",
  };

  // App download buttons
  const downloadButtons = [
    { text: "App Store 下载", icon: "/app-store-icon.svg" },
    { text: "Google Play 下载", icon: "/google-play-icon.svg" },
  ];

  // Video frames data
  const videoFrames = [
    {
      id: 1,
      image: PROFILE_IMAGES.PROFILE1,
      name: "软件工程",
      title: "软件开发工程师",
      badge: "申请",
      stats: "清晰度: 98%, 自然度: 99.8%, AI修复: 100%",
    },
    {
      id: 2,
      image: PROFILE_IMAGES.PROFILE2,
      name: "产品经理",
      title: "产品经理",
      badge: "申请",
      stats: "清晰度: 97%, 自然度: 99.5%, AI修复: 100%",
    },
    {
      id: 3,
      image: PROFILE_IMAGES.PROFILE3,
      name: "业务分析",
      title: "业务分析师",
      badge: "申请",
      stats: "清晰度: 99%, 自然度: 99.9%, AI修复: 100%",
    },
    {
      id: 4,
      image: PROFILE_IMAGES.PROFILE4,
      name: "市场营销专员",
      title: "市场营销",
      badge: "申请",
      stats: "清晰度: 98%, 自然度: 99.7%, AI修复: 100%",
    },
  ];

  // Landscape images data
  const landscapeImages = [
    {
      id: 1,
      image: BUILDING_IMAGES.BUILDING1,
      title: "财务",
      badge: "申请",
    },
    {
      id: 2,
      image: BUILDING_IMAGES.BUILDING2,
      title: "人力资源",
      badge: "申请",
    },
    {
      id: 3,
      image: BUILDING_IMAGES.BUILDING3,
      title: "运营经理",
      badge: "申请",
    },
    {
      id: 4,
      image: BUILDING_IMAGES.BUILDING4,
      title: "设计师",
      badge: "申请",
    },
  ];

  // HR section data
  const hrImages = [
    { id: 1, image: HR_IMAGES.HR1, title: "招聘经理分享面试技巧" },
    { id: 2, image: HR_IMAGES.HR2, title: "Live Support", subtitle: "职场导师在线解答" },
    { id: 3, image: HR_IMAGES.HR3, title: "Business Chat", subtitle: "互联网企业招聘要求" },
  ];

  // Partner companies
  const partners = [
    { name: "Lenovo", logo: "/lenovo.svg" },
    { name: "DoorDash", logo: "/doordash.svg" },
    { name: "Amazon", logo: "/amazon.svg" },
    { name: "Google", logo: "/google.svg" },
    { name: "德邦快递", logo: "/logo.svg" },
    { name: "顺丰速运", logo: "/logo.svg" },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "王志远",
      avatar: AVATAR_IMAGES.AVATAR1,
      text: "使用短视频求职方式非常新颖，效果很好！",
    },
    {
      id: 2,
      name: "Thomas Paul Mann",
      avatar: AVATAR_IMAGES.AVATAR2,
      text: "在这里找到了合适的工作，平台很容易使用",
    },
    {
      id: 3,
      name: "KP",
      avatar: AVATAR_IMAGES.AVATAR3,
      text: "从视频面试到入职只用了一周的时间！非常高效。",
    },
    {
      id: 4,
      name: "Matt Sullivan",
      avatar: AVATAR_IMAGES.AVATAR4,
      text: "招聘视频帮助我展示真我，找到了合适的团队",
    },
    {
      id: 5,
      name: "Farhad Manjoo",
      avatar: AVATAR_IMAGES.AVATAR5,
      text: "小视频让我的简历更加生动，招聘经理更了解我的能力",
    },
    {
      id: 6,
      name: "Yahya Adnan",
      avatar: AVATAR_IMAGES.AVATAR6,
      text: "视频面试很直观，面试体验非常棒",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8" />
          <span className="ml-2 text-xl font-bold">职映</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium bg-gray-800 px-4 py-2 rounded-full">
            员工端首页
          </a>
          <Button
            size="sm"
            className="bg-x-7-wi-b-ii text-white hover:bg-x-7-wi-b-ii/90"
          >
            上传
          </Button>
          <div className="border border-white rounded-full px-4 py-2">
            <span className="text-sm">En</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-[#0a0a1a] text-white overflow-hidden">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {heroText.title}
            </h1>
            <p className="text-xl mb-8">{heroText.subtitle}</p>
            <div className="flex space-x-4">
              {downloadButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <img src={button.icon} alt="" className="w-5 h-5 mr-2" />
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={HERO_IMAGE}
              alt="Person using smartphone"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Video Frames Section */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2 text-center text-white">
            精彩短视频
          </h2>
          <p className="text-gray-400 text-center mb-10">职秀求职者展示自己才华与个性的平台</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoFrames.map((frame) => (
              <Card
                key={frame.id}
                className="bg-[#1a1a2a] border-0 overflow-hidden"
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={frame.image}
                    alt={frame.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2">
                    <h3 className="font-bold text-white">{frame.name}</h3>
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-2 left-2 bg-x-7-wi-b-ii text-white hover:bg-x-7-wi-b-ii/90"
                  >
                    {frame.badge}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Images Section */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {landscapeImages.map((image) => (
              <Card
                key={image.id}
                className="bg-[#1a1a2a] border-0 overflow-hidden"
              >
                <div className="relative aspect-video">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2">
                    <h3 className="font-bold text-white">{image.title}</h3>
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-2 left-2 bg-x-7-wi-b-ii text-white hover:bg-x-7-wi-b-ii/90"
                  >
                    {image.badge}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HR Section */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2 text-white">
            名企 HR 解说视频
          </h2>
          <p className="text-gray-400 mb-10">了解行业内幕和招聘要求</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hrImages.map((image) => (
              <Card
                key={image.id}
                className="bg-[#1a1a2a] border-0 overflow-hidden"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="font-bold text-white">{image.title}</h3>
                    {image.subtitle && (
                      <p className="text-sm text-gray-300">{image.subtitle}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-10 text-center text-white">
            合作企业
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Banner */}
      <section className="py-10 bg-[#0a0a1a]">
        <div className="container">
          <Card className="border-0 bg-gradient-to-r from-[#1a1a4a] to-[#2a2a6a] overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    职引未来，映鉴全球
                  </h2>
                  <p className="text-gray-300 mb-6">
                    AI招聘，让你一次见证职涯传奇时刻
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      <img
                        src="/google-play-icon.svg"
                        alt=""
                        className="w-5 h-5 mr-2"
                      />
                      Google Play
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      <img
                        src="/app-store-icon.svg"
                        alt=""
                        className="w-5 h-5 mr-2"
                      />
                      App Store
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img
                    src={BANNER_IMAGE}
                    alt="App Preview"
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-10 text-center text-white">
            客户声音
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-[#1a1a2a] border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-medium text-white">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="text-gray-400">
              SHOW MORE ↓
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#0a0a1a] border-t border-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <img src="/logo.svg" alt="Logo" className="h-8 mb-4" />
              <p className="text-sm text-gray-400 max-w-xs">
                智能视频增强解决方案，为您提供最佳的视觉体验
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-medium text-white mb-4">产品</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      功能介绍
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      价格方案
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      企业解决方案
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white mb-4">资源</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      博客
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      教程
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      常见问题
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white mb-4">公司</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      关于我们
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      联系我们
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      加入我们
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white mb-4">法律</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      隐私政策
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      服务条款
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2023 AI视频增强. 保留所有权利
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};