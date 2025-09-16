import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';

// Placeholder изображения для баннера и товаров (замените на реальные пути или URLs)
const bannerImages = [
  'https://example.com/banner1.jpg', // Слайд 1
  'https://example.com/banner2.jpg', // Слайд 2
  'https://example.com/banner3.jpg', // Слайд 3 (пролистывается 2 раза)
];

const products = [
  { id: 1, name: 'Кондиционер', price: '31 000 ₽', image: './tconditioner.png' },
  { id: 2, name: 'Сумка', price: '9 650 ₽', image: 'https://example.com/bag.jpg' },
  { id: 3, name: 'Кроссовки', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg' },
  { id: 4, name: 'Кофта', price: '4 500 ₽', image: 'https://example.com/sweater.jpg' },
];

export const IndexPage: FC = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: typeof products[0]) => {
    navigate('/product', { state: { product } });
  };

  return (
    <Page back={false}>
      <List>
        {/* Новый раздел: Баннер с пролистыванием */}
        <Section header="Акции" footer="Пролистайте для просмотра (2 пролистывания)">
          <div
            style={{
              display: 'flex',
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
              gap: '10px',
              padding: '10px 0',
            }}
          >
            {bannerImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  scrollSnapAlign: 'start',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </Section>

        {/* Новый раздел: Товары в два ряда */}
        <Section header="Товары" footer="Популярные товары">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              padding: '0 8px',
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                style={{
                  border: '1px solid var(--tg-theme-section-separator-color, #e0e0e0)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
                }}
              >
                <Image 
                  src={product.image} 
                  style={{ 
                    width: '100%', 
                    height: '120px', 
                    objectFit: 'cover' 
                  }} 
                />
                <div style={{ padding: '12px' }}>
                  <h3 style={{ 
                    margin: '0 0 4px 0', 
                    fontSize: '14px', 
                    fontWeight: '500',
                    color: 'var(--tg-theme-text-color, #000000)'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '16px', 
                    fontWeight: 'bold',
                    color: 'var(--tg-theme-accent-text-color, #007AFF)'
                  }}>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Существующий контент (оставлен для совместимости) */}
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        {/* ... остальные Section ... */}
      </List>
    </Page>
  );
};