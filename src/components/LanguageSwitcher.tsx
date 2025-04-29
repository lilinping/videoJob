import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n/i18n';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const langCode = i18n.language || 'en-US';
    return languages.find(lang => lang.code === langCode) || languages[0];
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    const selectedLang = languages.find(lang => lang.code === langCode);
    if (selectedLang) {
      setCurrentLanguage(selectedLang);
    }
    setIsOpen(false);
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-gray-300 hover:text-white py-1.5 px-2 rounded-md hover:bg-gray-700/50 transition-colors"
        aria-label="Change language"
      >
        <span className="text-base md:text-lg">{currentLanguage.flag}</span>
        <span className="flex items-center text-sm md:text-base">
          {currentLanguage.nativeName}
          <svg 
            className={`ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 md:w-72 max-h-72 md:max-h-96 overflow-y-auto py-2 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-700">
          <div className="sticky top-0 bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 border-b border-gray-700">
            <h3 className="text-xs md:text-sm font-medium text-gray-300">{t('navbar.language')}</h3>
          </div>
          <div className="grid grid-cols-2 gap-1 p-1.5 md:p-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm rounded-md hover:bg-gray-700 ${
                  currentLanguage.code === language.code ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`}
              >
                <span className="text-base md:text-lg">{language.flag}</span>
                <span className="flex-1 text-left truncate">{language.nativeName}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 