import React, { useEffect } from 'react';
import Home from './Home';

// Performance monitoring
const reportWebVitals = (metric) => {
  console.log(metric);
};

// Rate limiting для предотвращения спама
let lastClickTime = 0;
const RATE_LIMIT_MS = 100; // 100ms между кликами

const handleRateLimitedClick = (callback) => {
  const now = Date.now();
  if (now - lastClickTime > RATE_LIMIT_MS) {
    lastClickTime = now;
    callback();
  }
};

// Мониторинг ошибок
const handleError = (error, errorInfo) => {
  console.error('Application Error:', error, errorInfo);
  // Здесь можно отправить ошибку в сервис мониторинга
};

// Безопасная функция для обработки событий
const safeEventHandler = (handler) => {
  return (...args) => {
    try {
      handler(...args);
    } catch (error) {
      console.error('Event handler error:', error);
    }
  };
};

function App() {
  useEffect(() => {
    // Инициализация мониторинга производительности
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });

    // Добавляем обработчик ошибок
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });

    // Проверяем безопасность контекста
    if (window.self !== window.top) {
      console.warn('App is running in an iframe - security check');
    }

  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
