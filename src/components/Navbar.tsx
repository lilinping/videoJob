import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // 当菜单打开时禁用页面滚动
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <nav className="bg-black border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <a href="#" className="text-white text-2xl font-bold">职映</a> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="30" viewBox="0 0 63 30" fill="none">
              <path d="M43.296 14.912H62.24V18.368H43.296V14.912ZM44.896 4.512H60.704V16.16H57.152V7.936H48.288V16.16H44.896V4.512ZM50.784 0H54.304V12.352C54.304 14.1013 54.1866 15.8187 53.952 17.504C53.7173 19.168 53.2373 20.7573 52.512 22.272C51.808 23.7653 50.752 25.1413 49.344 26.4C47.9573 27.6587 46.0906 28.7467 43.744 29.664C43.5733 29.3867 43.3493 29.0667 43.072 28.704C42.816 28.3413 42.528 27.9893 42.208 27.648C41.888 27.3067 41.6 27.0293 41.344 26.816C43.4346 26.0267 45.1093 25.1093 46.368 24.064C47.6266 22.9973 48.576 21.8347 49.216 20.576C49.856 19.3173 50.272 18.0053 50.464 16.64C50.6773 15.2533 50.784 13.824 50.784 12.352V0ZM54.72 16.352C55.3173 18.6773 56.256 20.7787 57.536 22.656C58.8373 24.512 60.512 25.8987 62.56 26.816C62.304 27.0293 62.016 27.3173 61.696 27.68C61.376 28.064 61.0773 28.448 60.8 28.832C60.5226 29.216 60.288 29.568 60.096 29.888C57.8346 28.672 56.0213 26.9547 54.656 24.736C53.312 22.5173 52.2773 19.9467 51.552 17.024L54.72 16.352ZM34.88 1.76H42.592V23.648H34.88V20.224H39.136V5.216H34.88V1.76ZM35.2 10.848H41.28V14.208H35.2V10.848ZM33.152 1.76H36.64V26.496H33.152V1.76Z" fill="white" />
              <path d="M0.512 0.992188H13.632V4.41619H0.512V0.992188ZM3.936 7.74419H9.696V10.8802H3.936V7.74419ZM3.936 14.2722H9.696V17.4082H3.936V14.2722ZM1.92 2.75219H5.408V22.8482H1.92V2.75219ZM8.576 2.75219H12.096V29.7922H8.576V2.75219ZM0 22.0482C1.17333 21.8989 2.50667 21.7175 4 21.5042C5.51467 21.2695 7.104 21.0242 8.768 20.7682C10.4533 20.4909 12.128 20.2242 13.792 19.9682L14.016 23.2642C11.6907 23.6909 9.35467 24.1069 7.008 24.5122C4.68267 24.9175 2.60267 25.2802 0.768 25.6002L0 22.0482ZM22.752 20.7042L26.144 19.4562C26.6987 20.3735 27.2533 21.3549 27.808 22.4002C28.3627 23.4242 28.8533 24.4375 29.28 25.4402C29.728 26.4429 30.0587 27.3389 30.272 28.1282L26.624 29.6002C26.432 28.8322 26.1333 27.9362 25.728 26.9122C25.3227 25.8882 24.864 24.8322 24.352 23.7442C23.84 22.6562 23.3067 21.6429 22.752 20.7042ZM16.704 19.6162L20.384 20.4802C19.8507 22.2509 19.1467 23.9575 18.272 25.6002C17.3973 27.2429 16.4587 28.6082 15.456 29.6962C15.2213 29.4829 14.912 29.2375 14.528 28.9602C14.144 28.6829 13.7493 28.4162 13.344 28.1602C12.96 27.9042 12.6187 27.6909 12.32 27.5202C13.3013 26.5815 14.1653 25.4082 14.912 24.0002C15.68 22.5922 16.2773 21.1309 16.704 19.6162Z" fill="white" />
              <path d="M22.4521 1C27.0629 1.00003 30.8008 4.73786 30.8008 9.34863C30.8008 11.6925 29.8328 13.8089 28.2773 15.3252L29.6572 17.4375C30.1616 18.2095 29.9448 19.2446 29.1729 19.749C28.401 20.2532 27.3667 20.0363 26.8623 19.2646L25.4688 17.1318C24.5328 17.4949 23.5163 17.6973 22.4521 17.6973C17.8414 17.6973 14.1035 13.9594 14.1035 9.34863C14.1035 4.73784 17.8414 1 22.4521 1ZM22.4521 4.33984C19.6857 4.33984 17.4434 6.58216 17.4434 9.34863C17.4434 12.1151 19.6857 14.3574 22.4521 14.3574C25.2186 14.3574 27.4609 12.1151 27.4609 9.34863C27.4609 6.58217 25.2186 4.33987 22.4521 4.33984Z" fill="#FF8A14" />
            </svg>
          </div>

          {/* Search Bar - Only on medium screens and above */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="flex w-full rounded-full overflow-hidden bg-gray-700/70">
              <input
                type="text"
                placeholder={t('navbar.searchPlaceholder')}
                className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-2 border-none focus:outline-none"
              />
              <button className="flex items-center gap-1 px-5 py-2 bg-purple-500 hover:bg-purple-600 transition-colors text-white text-base font-medium rounded-full focus:outline-none">
                <Search className="h-5 w-5 text-white" />
                {t('navbar.search')}
              </button>
            </div>
          </div>

          {/* Navigation Links - Only on medium screens and above */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language switcher */}
            <LanguageSwitcher />
            
            <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m4 0h6m0 0v6m0-6L12 12" />
              </svg>
              <span>{t('navbar.uploadVideo')}</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">{t('navbar.interviewPractice')}</a>
            <a href="#" className="text-gray-300 hover:text-white">{t('navbar.resume')}</a>
            <a href="#" className="text-gray-300 hover:text-white">{t('navbar.findJob')}</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center ml-auto md:ml-6">
            <Button className="hidden md:flex bg-purple-600 hover:bg-purple-700 rounded-full px-6">
              {t('navbar.loginRegister')}
            </Button>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 pt-16 overflow-y-auto md:hidden">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
            {/* Close button at the top right corner of mobile menu */}
            <button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-300 hover:text-white p-2 bg-gray-800/50 rounded-full"
            >
              <X size={24} />
            </button>
            
            {/* Mobile search */}
            <div className="flex w-full rounded-full overflow-hidden bg-gray-700/70">
              <input
                type="text"
                placeholder={t('navbar.searchPlaceholder')}
                className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-2 border-none focus:outline-none"
              />
              <button className="flex items-center gap-1 px-5 py-2 bg-purple-500 hover:bg-purple-600 transition-colors text-white text-base font-medium rounded-full focus:outline-none">
                <Search className="h-5 w-5 text-white" />
                {t('navbar.search')}
              </button>
            </div>
            
            {/* Mobile navigation links */}
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2 py-3 border-b border-gray-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m4 0h6m0 0v6m0-6L12 12" />
                </svg>
                <span className="text-lg">{t('navbar.uploadVideo')}</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white py-3 text-lg border-b border-gray-800">
                {t('navbar.interviewPractice')}
              </a>
              <a href="#" className="text-gray-300 hover:text-white py-3 text-lg border-b border-gray-800">
                {t('navbar.resume')}
              </a>
              <a href="#" className="text-gray-300 hover:text-white py-3 text-lg border-b border-gray-800">
                {t('navbar.findJob')}
              </a>
            </div>
            
            {/* Language switcher in mobile menu */}
            <div className="py-3 border-b border-gray-800">
              <h3 className="text-sm font-medium text-gray-400 mb-2">{t('navbar.language')}</h3>
              <LanguageSwitcher />
            </div>
            
            {/* Mobile login button */}
            <Button className="bg-purple-600 hover:bg-purple-700 rounded-full py-3 text-lg mt-4">
              {t('navbar.loginRegister')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;