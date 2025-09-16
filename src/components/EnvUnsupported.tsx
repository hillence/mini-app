import { Placeholder, AppRoot } from '@telegram-apps/telegram-ui';
import { retrieveLaunchParams, isColorDark, isRGB } from '@telegram-apps/sdk-react';
import { useMemo } from 'react';
import { FC } from 'react';

interface EnvUnsupportedProps {
  message?: string;
}

export const EnvUnsupported: FC<EnvUnsupportedProps> = ({ message = 'Your Telegram client is too old or not supported. Please update to v6.0+ and try again.' }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <h1>Oops!</h1>
      <p>{message}</p>
      <p>For more info, see <a href="https://core.telegram.org/bots/webapps">Telegram Mini Apps docs</a>.</p>
    </div>
  );
};