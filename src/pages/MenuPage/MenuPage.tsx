import { FC } from 'react';
import { 
  Section, 
  Cell, 
  List, 
  Title, 
  Text,
  Image,
  IconButton 
} from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';

export const MenuPage: FC = () => {
  return (
    <Page back={true}>
      <List>
        {/* Заголовок */}
        <Section>
          <Cell>
            <Title level="1" style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: 'var(--tg-spacing-s)'
            }}>
              Меню
            </Title>
          </Cell>
        </Section>

        {/* Основные пункты меню */}
        <Section header="Информация">
          <Cell
            before={
              <IconButton mode="plain" size="s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color)">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </IconButton>
            }
            subtitle="Узнайте больше о нашей компании"
          >
            О нас
          </Cell>
          
          <Cell
            before={
              <IconButton mode="plain" size="s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color)">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
                </svg>
              </IconButton>
            }
            subtitle="Читайте отзывы наших клиентов"
          >
            Отзывы
          </Cell>
          
          <Cell
            before={
              <IconButton mode="plain" size="s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color)">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </IconButton>
            }
            subtitle="Информация о гарантийных обязательствах"
          >
            Гарантия
          </Cell>
          
          <Cell
            before={
              <IconButton mode="plain" size="s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color)">
                  <path d="M20 8l-8 5-8-5v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm0-2c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2l8 5 8-5z"/>
                </svg>
              </IconButton>
            }
            subtitle="Условия и стоимость доставки"
          >
            О доставке
          </Cell>
        </Section>

        {/* Социальные сети */}
        <Section header="Связаться с нами">
          <Cell
            before={
              <IconButton mode="plain" size="s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color)">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                </svg>
              </IconButton>
            }
            subtitle="Присоединяйтесь к нашему каналу"
          >
            Наш Telegram канал
          </Cell>
          
          <Cell
            before={
              <IconButton mode="plain" size="s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color)">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </IconButton>
            }
            subtitle="Свяжитесь с нашей службой поддержки"
          >
            Поддержка
          </Cell>
        </Section>

        {/* Дополнительные функции */}
        <Section header="Дополнительно">
          <Link to="/ton-connect">
            <Cell
              before={
                <Image 
                  src="https://cdn.prod.website-files.com/68ca28d130f45cfc8a33cc46/68caf0b0f0ae177bce7aa001_Group%206.svg" 
                  style={{ 
                    backgroundColor: '#007AFF',
                    borderRadius: 'var(--tg-border-radius)',
                    width: '32px',
                    height: '32px'
                  }}
                />
              }
              subtitle="Подключите ваш TON кошелек"
            >
              TON Connect
            </Cell>
          </Link>
          
          <Link to="/init-data">
            <Cell
              before={
                <IconButton mode="plain" size="s">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color)">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                  </svg>
                </IconButton>
              }
              subtitle="Информация о приложении"
            >
              Данные приложения
            </Cell>
          </Link>
        </Section>

        {/* Информация о версии */}
        <Section>
          <Cell>
            <Text style={{ 
              textAlign: 'center',
              color: 'var(--tg-theme-hint-color)',
              fontSize: '14px'
            }}>
              Версия 1.0.0
            </Text>
          </Cell>
        </Section>
      </List>
    </Page>
  );
};