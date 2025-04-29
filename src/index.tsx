import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './screens/HomePage';
import './index.css';
// 导入i18n配置
import './i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
