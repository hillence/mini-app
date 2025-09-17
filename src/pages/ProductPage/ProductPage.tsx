import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, Image } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { mountMainButton } from '@telegram-apps/sdk-react';
import { products } from '@/pages/IndexPage/IndexPage';

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    try {
      const cleanup = mountMainButton.ifAvailable(() => {
        const button = mountMainButton();
        button.setText('Добавить в корзину');
        button.setBgColor('var(--tg-theme-button-color, #007AFF)');
        button.onClick(() => console.log('Добавить в корзину:', product?.name));
        button.show();

        return () => {
          button.hide();
        };
      });
      
      return cleanup;
    } catch (error) {
      console.log('MainButton недоступен');
    }
  }, [product]);

  if (!product) {
    return (
      <Page back={true}>
        <div style={{ 
          padding: 'var(--tg-spacing-l, 16px)', 
          textAlign: 'center',
          fontFamily: 'var(--tg-font-family, -apple-system)'
        }}>
          Товар не найден
        </div>
      </Page>
    );
  }

  return (
    <Page back={true}>
      <div style={{
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        minHeight: '100vh',
        fontFamily: 'var(--tg-font-family, -apple-system)'
      }}>
        {/* Белый отступ сверху */}
        <div style={{ 
          height: '20px', 
          backgroundColor: 'var(--tg-theme-bg-color, #ffffff)' 
        }} />
        
        {/* Изображение товара */}
        <div style={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
          margin: '0 var(--tg-spacing-l, 16px)',
          borderRadius: 'var(--tg-border-radius, 12px)',
          overflow: 'hidden'
        }}>
          <Image
            src={product.image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Информация о товаре */}
        <Section style={{ 
          backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', 
          padding: 'var(--tg-spacing-l, 16px)', 
          border: 'none',
          marginTop: 'var(--tg-spacing-l, 16px)'
        }}>
          {/* Название и цена */}
          <div style={{ marginBottom: 'var(--tg-spacing-l, 16px)' }}>
            <h1 style={{ 
              margin: 0, 
              marginBottom: 'var(--tg-spacing-s, 8px)', 
              fontSize: '24px', 
              fontWeight: '600',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)',
              lineHeight: '1.2'
            }}>
              {product.name}
            </h1>
            <div style={{ 
              fontSize: '20px', 
              fontWeight: '700',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              {product.price}
            </div>
          </div>

          {/* Описание */}
          <div>
            <h2 style={{ 
              margin: 0, 
              marginBottom: 'var(--tg-spacing-s, 8px)', 
              fontSize: '17px', 
              fontWeight: '600',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Описание товара
            </h2>
            <p style={{ 
              margin: 0, 
              fontSize: '15px', 
              lineHeight: '1.4',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)',
              opacity: 0.8
            }}>
              {product.description}
            </p>
          </div>

          {/* Дополнительная информация */}
          <div style={{ 
            marginTop: 'var(--tg-spacing-xl, 24px)',
            padding: 'var(--tg-spacing-l, 16px)',
            backgroundColor: 'var(--tg-theme-secondary-bg-color, #f8f9fa)',
            borderRadius: 'var(--tg-border-radius, 12px)',
            border: 'none'
          }}>
            <h3 style={{
              margin: 0,
              marginBottom: 'var(--tg-spacing-s, 8px)',
              fontSize: '15px',
              fontWeight: '600',
              color: 'var(--tg-theme-text-color, #000)',
              fontFamily: 'var(--tg-font-family, -apple-system)'
            }}>
              Характеристики
            </h3>
            <div style={{
              fontSize: '14px',
              lineHeight: '1.4',
              color: 'var(--tg-theme-hint-color, #8E8E93)',
              fontFamily: 'var(--tg-font-family, -apple-system)'
            }}>
              • Гарантия: 2 года<br/>
              • Доставка: 1-3 дня<br/>
              • Возврат: 14 дней
            </div>
          </div>

          {/* Отступ снизу для MainButton */}
          <div style={{ height: '80px' }} />
        </Section>
      </div>
    </Page>
  );
};