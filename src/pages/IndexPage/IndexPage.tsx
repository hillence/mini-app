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
  { name: 'Часы', price: '10K', image: 'https://example.com/watch.jpg' },
  { name: 'Сумка', price: '9 650 ₽', image: 'https://example.com/bag.jpg' },
  { name: 'Кроссовки', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg' },
  { name: 'Кофта', price: '4 500 ₽', image: 'https://example.com/sweater.jpg' },
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
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            {products.map((product, index) => (
              <Cell
                key={index}
                style={{
                  width: '48%', // Два ряда
                  marginBottom: '10px',
                }}
                before={<Image src={product.image} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />}
                subtitle={product.price}
              >
                {product.name}
              </Cell>
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