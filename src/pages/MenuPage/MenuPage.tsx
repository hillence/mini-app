import { FC } from 'react';
import { 
  Section, 
  Cell, 
  List,
  Text,
  Caption
} from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { Link } from 'react-router-dom';

export const MenuPage: FC = () => {
  const menuItems = [
    {
      title: 'О нас',
      subtitle: 'Информация о компании',
      path: '/about',
      icon: '📋'
    },
    {
      title: 'Отзывы',
      subtitle: 'Отзывы наших клиентов',
      path: '/reviews',
      icon: '⭐'
    },
    {
      title: 'Гарантия',
      subtitle: 'Условия гарантии',
      path: '/warranty',
      icon: '🛡️'
    },
    {
      title: 'О доставке',
      subtitle: 'Информация о доставке',
      path: '/delivery',
      icon: '🚚'
    },
    {
      title: 'Наш телеграм канал',
      subtitle: 'Официальный канал',
      path: 'https://t.me/your_telegram_channel',
      icon: '📢',
      external: true
    }
  ];

  return (
    <Page back={true}>
      <List>
        <Section header="Меню">
          {menuItems.map((item, index) => (
            item.external ? (
              <a 
                key={index}
                href={item.path} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Cell
                  before={
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--tg-theme-button-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px'
                    }}>
                      {item.icon}
                    </div>
                  }
                  after={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--tg-theme-hint-color)">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  }
                >
                  <Text style={{ 
                    fontSize: '17px', 
                    fontWeight: '500',
                    color: 'var(--tg-theme-text-color)'
                  }}>
                    {item.title}
                  </Text>
                  <Caption style={{ 
                    color: 'var(--tg-theme-hint-color)',
                    marginTop: '2px'
                  }}>
                    {item.subtitle}
                  </Caption>
                </Cell>
              </a>
            ) : (
              <Link 
                key={index}
                to={item.path} 
                style={{ textDecoration: 'none' }}
              >
                <Cell
                  before={
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--tg-theme-button-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px'
                    }}>
                      {item.icon}
                    </div>
                  }
                  after={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--tg-theme-hint-color)">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  }
                >
                  <Text style={{ 
                    fontSize: '17px', 
                    fontWeight: '500',
                    color: 'var(--tg-theme-text-color)'
                  }}>
                    {item.title}
                  </Text>
                  <Caption style={{ 
                    color: 'var(--tg-theme-hint-color)',
                    marginTop: '2px'
                  }}>
                    {item.subtitle}
                  </Caption>
                </Cell>
              </Link>
            )
          ))}
        </Section>

        {/* App Info Section */}
        <Section header="Приложение">
          <Cell>
            <Text style={{ 
              fontSize: '15px',
              color: 'var(--tg-theme-hint-color)',
              textAlign: 'center'
            }}>
              Версия 1.0.0
            </Text>
            <Caption style={{ 
              color: 'var(--tg-theme-hint-color)',
              textAlign: 'center',
              marginTop: '4px'
            }}>
              Создано с использованием Telegram Mini Apps UI Kit
            </Caption>
          </Cell>
        </Section>
      </List>
    </Page>
  );
};