import { Section, Cell, Image, List, IconButton, Button } from '@telegram-apps/telegram-ui'; // Added IconButton
import type { FC } from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.clientWidth - 32;
      const scrollLeft = scrollRef.current.scrollLeft;
      setCurrentSlide(Math.round(scrollLeft / slideWidth));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextSlide = (currentSlide + 1) % bannerImages.length;
        const slideWidth = scrollRef.current.clientWidth - 32;
        scrollRef.current.scrollTo({
          left: nextSlide * slideWidth,
          behavior: 'smooth'
        });
        setCurrentSlide(nextSlide);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, bannerImages.length]);

  return (
    <Page back={false}>
      <div style={{ paddingTop: '146px' }}>
        {/* Top bar with menu and search */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '8px 16px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#F2F2F7',
          zIndex: 1000,
          height: '146px',
          alignItems: 'flex-end',
          paddingBottom: '16px'
        }}>
          <IconButton mode="plain" size="s">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </IconButton>
          <IconButton mode="plain" size="s" onClick={() => navigate('/search')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </IconButton>
        </div>

        {/* Category buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          padding: '0 16px', 
          marginBottom: '16px',
          overflowX: 'auto'
        }}>
          <Button mode="outline" size="s">🔍 Премиум</Button>
          <Button mode="outline" size="s">💎 Дешевле</Button>
          <Button mode="outline" size="s">🎯 Дороже</Button>
        </div>

        {/* Two promotional sections */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
          padding: '0 16px',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '100%',
            height: '184px',
            backgroundColor: '#E3F2FD',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '16px', fontWeight: '600' }}>Раздел 1</span>
          </div>
          <div style={{
            width: '100%',
            height: '184px',
            backgroundColor: '#F3E5F5',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '16px', fontWeight: '600' }}>Раздел 2</span>
          </div>
        </div>

        {/* Новый раздел: Баннер с пролистыванием */}
        <div style={{ backgroundColor: 'transparent', marginBottom: '16px' }}>
          <h2 style={{ padding: '0 16px', margin: '16px 0 8px 0', fontSize: '17px', fontWeight: '600', fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif' }}>АКЦИИ</h2>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
              gap: '0px',
              padding: '0 16px',
              margin: '0',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
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
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', backgroundColor: 'transparent', padding: '0 16px' }}>
          {bannerImages.map((_, index) => (
            <div
              key={index}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#007AFF' : '#C7C7C7',
                margin: '0 3px',
              }}
            />
          ))}
        </div>

        {/* Новый раздел: Товары в два ряда */}
        <div style={{ backgroundColor: 'transparent' }}>
          <h2 style={{ padding: '0 16px', margin: '16px 0 8px 0', fontSize: '17px', fontWeight: '600', fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif' }}>ТОВАРЫ</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
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
                    <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '4px', fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif' }}>{product.name}</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#000', fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif' }}>{product.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};