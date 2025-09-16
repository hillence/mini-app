import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useState } from 'react'; // Добавлено для состояния карусели

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
  { id: 1, name: 'Кондиционер 1', price: '10K', image: 'https://example.com/watch.jpg' },
  { id: 2, name: 'Кондиционер 2', price: '9 650 ₽', image: 'https://example.com/bag.jpg' },
  { id: 3, name: 'Кондиционер 3', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg' },
  { id: 4, name: 'Кондиционер 4', price: '4 500 ₽', image: 'https://example.com/sweater.jpg' },
];

export const IndexPage: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Состояние для карусели

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
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
            }}
          >
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Cell
                  style={{
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '220px',
                  }}
                >
                  <div style={{ 
                    width: '100%', 
                    height: '150px',
                    overflow: 'hidden',
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
                  <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                  </div>
                </Cell>
              </Link>
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