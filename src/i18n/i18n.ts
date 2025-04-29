import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入语言文件
import enUS from './locales/en-US.json';
import zhCN from './locales/zh-CN.json';
import esES from './locales/es-ES.json';
import frFR from './locales/fr-FR.json';
import deDE from './locales/de-DE.json';
import jaJP from './locales/ja-JP.json';
import koKR from './locales/ko-KR.json';
import ptBR from './locales/pt-BR.json';
import ruRU from './locales/ru-RU.json';
import arSA from './locales/ar-SA.json';
import itIT from './locales/it-IT.json';
import nlNL from './locales/nl-NL.json';
import plPL from './locales/pl-PL.json';
import trTR from './locales/tr-TR.json';
import ukUA from './locales/uk-UA.json';
import viVN from './locales/vi-VN.json';
import thTH from './locales/th-TH.json';
import svSE from './locales/sv-SE.json';
import daDK from './locales/da-DK.json';
import fiFI from './locales/fi-FI.json';
import noNO from './locales/no-NO.json';
import hiIN from './locales/hi-IN.json';
import idID from './locales/id-ID.json';
import msMY from './locales/ms-MY.json';
import csCZ from './locales/cs-CZ.json';
import huHU from './locales/hu-HU.json';
import elGR from './locales/el-GR.json';
import roRO from './locales/ro-RO.json';
import bgBG from './locales/bg-BG.json';
import skSK from './locales/sk-SK.json';
import slSI from './locales/sl-SI.json';

// 支持的语言列表
export const languages = [
  { code: 'en-US', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'es-ES', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr-FR', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de-DE', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja-JP', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'pt-BR', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'ru-RU', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'ar-SA', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'it-IT', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'nl-NL', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl-PL', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'tr-TR', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'uk-UA', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
  { code: 'vi-VN', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th-TH', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'sv-SE', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
  { code: 'da-DK', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
  { code: 'fi-FI', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮' },
  { code: 'no-NO', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴' },
  { code: 'hi-IN', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'id-ID', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms-MY', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'cs-CZ', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿' },
  { code: 'hu-HU', name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺' },
  { code: 'el-GR', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'ro-RO', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'bg-BG', name: 'Bulgarian', nativeName: 'Български', flag: '🇧🇬' },
  { code: 'sk-SK', name: 'Slovak', nativeName: 'Slovenčina', flag: '🇸🇰' },
  { code: 'sl-SI', name: 'Slovenian', nativeName: 'Slovenščina', flag: '🇸🇮' }
];

// 初始化 i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': { translation: enUS },
      'zh-CN': { translation: zhCN },
      'es-ES': { translation: esES },
      'fr-FR': { translation: frFR },
      'de-DE': { translation: deDE },
      'ja-JP': { translation: jaJP },
      'ko-KR': { translation: koKR },
      'pt-BR': { translation: ptBR },
      'ru-RU': { translation: ruRU },
      'ar-SA': { translation: arSA },
      'it-IT': { translation: itIT },
      'nl-NL': { translation: nlNL },
      'pl-PL': { translation: plPL },
      'tr-TR': { translation: trTR },
      'uk-UA': { translation: ukUA },
      'vi-VN': { translation: viVN },
      'th-TH': { translation: thTH },
      'sv-SE': { translation: svSE },
      'da-DK': { translation: daDK },
      'fi-FI': { translation: fiFI },
      'no-NO': { translation: noNO },
      'hi-IN': { translation: hiIN },
      'id-ID': { translation: idID },
      'ms-MY': { translation: msMY },
      'cs-CZ': { translation: csCZ },
      'hu-HU': { translation: huHU },
      'el-GR': { translation: elGR },
      'ro-RO': { translation: roRO },
      'bg-BG': { translation: bgBG },
      'sk-SK': { translation: skSK },
      'sl-SI': { translation: slSI }
    },
    fallbackLng: 'en-US',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // 不转义React中的HTML内容
    }
  });

export default i18n; 