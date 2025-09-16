import { Section, Cell, Image, List, IconButton } from '@telegram-apps/telegram-ui'; // Added IconButton
import type { FC } from 'react';
import { useState, useRef } from 'react'; // Added useRef

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';

// Placeholder изображения для баннера и товаров (замените на реальные пути или URLs)
const bannerImages = [
  'https://i.pinimg.com/736x/74/13/80/7413809f825eeea082d2466b1a2cb231.jpg', // Слайд 1
  'https://example.com/banner2.jpg', // Слайд 2
  'https://example.com/banner3.jpg', // Слайд 3 (пролистывается 2 раза)
];

export const products = [ // Exported
  { id: 1, name: 'Кондиционер 1', price: '18 000 ₽', image: 'https://basket-16.wbbasket.ru/vol2546/part254650/254650733/images/big/1.webp' },
  { id: 2, name: 'Кондиционер 2', price: '9 650 ₽', image: 'https://example.com/bag.jpg' },
  { id: 3, name: 'Кондиционер 3', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg' },
  { id: 4, name: 'Кондиционер 4', price: '4 500 ₽', image: 'https://example.com/sweater.jpg' },
  { id: 5, name: 'Кондиционер 5', price: '8 500 ₽', image: 'https://example.com/swрeater.jpg' },
];

export const IndexPage: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Состояние для карусели
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.clientWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      setCurrentSlide(Math.round(scrollLeft / slideWidth));
    }
  };

  return (
    <Page back={false}>
      <List>
        {/* Top bar with menu and search */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
          <IconButton mode="plain" size="s">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> {/* Icon28Menu placeholder */}
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </IconButton>
          <IconButton mode="plain" size="s">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> {/* Icon28Search placeholder */}
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </IconButton>
        </div>

        {/* Новый раздел: Баннер с пролистыванием */}
        <div style={{ backgroundColor: 'transparent', marginBottom: '16px' }}>
          <h2 style={{ padding: '0 16px', margin: '16px 0 8px 0', fontSize: '17px', fontWeight: '600' }}>АКЦИИ</h2>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
              gap: '0px',
              padding: '0',
              margin: '0',
            }}
          >
            {bannerImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                style={{
                  width: '100vw',
                  height: '200px',
                  objectFit: 'cover',
                  scrollSnapAlign: 'start',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', backgroundColor: 'transparent' }}>
          {bannerImages.map((_, index) => (
            <div
              key={index}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#007AFF' : '#C7C7C7',
                margin: '0 4px',
              }}
            />
          ))}
        </div>

        {/* Новый раздел: Товары в два ряда */}
        <div style={{ backgroundColor: 'transparent' }}>
          <h2 style={{ padding: '0 16px', margin: '16px 0 8px 0', fontSize: '17px', fontWeight: '600' }}>ТОВАРЫ</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
              padding: '0 16px',
              backgroundColor: 'transparent',
            }}
          >
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    minHeight: '300px',
                    backgroundColor: 'transparent',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ 
                    width: '100%', 
                    height: '230px',
                    overflow: 'hidden',
                    borderRadius: '12px 12px 0 0',
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
                  <div style={{ 
                    textAlign: 'left', 
                    marginTop: '8px', 
                    paddingLeft: '0px',
                    backgroundColor: 'transparent',
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '4px' }}>{product.name}</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#000' }}>{product.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

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