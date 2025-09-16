// Include Telegram UI styles first to allow our code override the package CSS.
import '@telegram-apps/telegram-ui/dist/styles.css';

import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import { Root } from '@/components/Root.tsx';
import { EnvUnsupported } from '@/components/EnvUnsupported.tsx';
import { init } from '@/init.ts';

import './index.css';

// Mock the environment in case, we are outside Telegram.
import './mockEnv.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);

if (!window.Telegram || !window.Telegram.WebApp) {
  console.error('Telegram WebApp not available. Client may be too old or not in Telegram environment.');
  root.render(<EnvUnsupported message="Your environment does not support Telegram Mini Apps. Please open in Telegram app v6.0 or higher." />);
} else {
  try {
    const launchParams = retrieveLaunchParams();
    const { tgWebAppPlatform: platform } = launchParams;
    const debug = (launchParams.tgWebAppStartParam || '').includes('platformer_debug') || import.meta.env.DEV;

    await init({
      debug,
      eruda: debug && ['ios', 'android'].includes(platform),
      mockForMacOS: platform === 'macos',
    }).then(() => {
      root.render(
        <StrictMode>
          <Root/>
        </StrictMode>,
      );
    });
  } catch (e) {
    console.error('Initialization error:', e);
    root.render(<EnvUnsupported message={e.message || 'An error occurred during initialization. Please update your Telegram client.'} />);
  }
}
