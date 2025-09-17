import { FC, useEffect } from 'react'; // Added useEffect
import { useParams } from 'react-router-dom';
import { Section, Image } from '@telegram-apps/telegram-ui'; // Removed Button
import { Page } from '@/components/Page.tsx';
import { mountMainButton } from '@telegram-apps/sdk-react';

const products = [
  { id: 1, name: 'Кондиционер 1', price: '18 000 ₽', image: 'https://basket-16.wbbasket.ru/vol2546/part254650/254650733/images/big/1.webp', description: 'Адаптивный дизайн и т.д.' },
  { id: 2, name: 'Сумка', price: '9 650 ₽', image: 'https://example.com/bag.jpg', description: 'Адаптивный дизайн и т.д.' },
  { id: 3, name: 'Кроссовки', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg', description: 'Адаптивный дизайн и т.д.' },
  { id: 4, name: 'Кофта', price: '4 500 ₽', image: 'https://example.com/sweater.jpg', description: 'Адаптивный дизайн и т.д.' },
];

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id)); // Changed to Number for id match

  useEffect(() => {
    try {
      const cleanup = mountMainButton.ifAvailable(() => {
        const button = mountMainButton();
        button.setText('Купить товар');
        button.setBgColor('#007AFF');
        button.onClick(() => console.log('Купить товар'));
        button.show();

        return () => {
          button.hide();
        };
      });
      
      return cleanup;
    } catch (error) {
      console.log('MainButton недоступен');
    }
  }, []);

  if (!product) {
    return <Page><div>Товар не найден</div></Page>;
  }

    return (
      <Page back={true}>
        <div style={{
          backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
          minHeight: '100vh',
          fontFamily: 'var(--tg-font-family, -apple-system)'
        }}>
          <Image
            src={product.image}
            style={{
              width: '100%',
              height: '60vh',
              objectFit: 'cover',
            }}
          />
          <Section style={{ backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', padding: 'var(--tg-spacing-l, 16px)', border: 'none' }}>
          <h1 style={{ 
            margin: 0, 
            marginBottom: 'var(--tg-spacing-s, 8px)', 
            fontSize: '28px', 
            fontWeight: '700',
            fontFamily: 'var(--tg-font-family, -apple-system)',
            color: 'var(--tg-theme-text-color, #000)'
          }}>
            {product.name}
          </h1>
          <p style={{ 
            margin: 0, 
            marginBottom: 'var(--tg-spacing-l, 16px)', 
            fontSize: '24px', 
            fontWeight: '600',
            fontFamily: 'var(--tg-font-family, -apple-system)',
            color: 'var(--tg-theme-text-color, #000)'
          }}>
            {product.price}
          </p>
          <h2 style={{ 
            margin: 0, 
            marginBottom: 'var(--tg-spacing-s, 8px)', 
            fontSize: '20px', 
            fontWeight: '600',
            fontFamily: 'var(--tg-font-family, -apple-system)',
            color: 'var(--tg-theme-text-color, #000)'
          }}>
            Описание товара
          </h2>
          <p style={{ 
            margin: 0, 
            fontSize: '17px', 
            lineHeight: '1.4',
            fontFamily: 'var(--tg-font-family, -apple-system)',
            color: 'var(--tg-theme-text-color, #000)'
          }}>
            {product.description}
          </p>
        </Section>
      </div>
    </Page>
  );
};
