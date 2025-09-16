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
    const button = mountMainButton();
    if (button) {
      button.setText('Купить товар');
      button.setBgColor('#007AFF');
      button.onClick(() => console.log('Купить товар'));
      button.show();
    }

    return () => {
      if (button) {
        button.hide();
      }
    };
  }, []);

  if (!product) {
    return <Page><div>Товар не найден</div></Page>;
  }

  return (
    <Page>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0
      }}>
        <Image
          src={product.image}
          style={{
            width: '100%',
            height: '60vh',
            objectFit: 'cover',
          }}
        />
        <Section style={{ backgroundColor: 'transparent', padding: '16px' }}>
          <h2 style={{ 
            margin: 0, 
            marginBottom: '8px', 
            fontSize: '28px', 
            fontWeight: '700',
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif'
          }}>
            {product.name}
          </h2>
          <p style={{ 
            margin: 0, 
            marginBottom: '16px', 
            fontSize: '24px', 
            fontWeight: '600',
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif'
          }}>
            {product.price}
          </p>
          <h3 style={{ 
            margin: 0, 
            marginBottom: '8px', 
            fontSize: '20px', 
            fontWeight: '600',
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif'
          }}>
            Описание товара
          </h3>
          <p style={{ 
            margin: 0, 
            fontSize: '17px', 
            lineHeight: '22px',
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif'
          }}>
            {product.description}
          </p>
        </Section>
      </div>
    </Page>
  );
};
