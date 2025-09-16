declare namespace Telegram {
  interface WebApp {
    MainButton: {
      text: string;
      color: string;
      onClick: (callback: () => void) => void;
      offClick: (callback: () => void) => void;
      show: () => void;
      hide: () => void;
    };
    HapticFeedback: {
      impactOccurred: (style: 'light' | 'medium' | 'heavy') => void;
    };
    themeParams: {
      button_color: string;
    };
    viewportHeight: number;
    // Добавьте другие свойства по необходимости
  }
}

interface Window {
  Telegram: {
    WebApp: Telegram.WebApp;
  };
}
