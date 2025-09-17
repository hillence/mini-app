import { Section, Image, IconButton, Button } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

const bannerImages = [
  'https://i.pinimg.com/736x/74/13/80/7413809f825eeea082d2466b1a2cb231.jpg',
  'https://example.com/banner2.jpg',
  'https://example.com/banner3.jpg',
];

export const products = [
  { id: 1, name: 'Кондиционер 1', price: '18 000 ₽', image: 'https://basket-16.wbbasket.ru/vol2546/part254650/254650733/images/big/1.webp', description: 'Мощный кондиционер для охлаждения больших помещений' },
  { id: 2, name: 'Кондиционер 2', price: '9 650 ₽', image: 'https://example.com/bag.jpg', description: 'Компактный кондиционер для маленьких комнат' },
  { id: 3, name: 'Кондиционер 3', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg', description: 'Энергоэффективный кондиционер с низким уровнем шума' },
  { id: 4, name: 'Кондиционер 4', price: '4 500 ₽', image: 'https://example.com/sweater.jpg', description: 'Бюджетный кондиционер для дачи' },
  { id: 5, name: 'Кондиционер 5', price: '8 500 ₽', image: 'https://example.com/swрeater.jpg', description: 'Умный кондиционер с Wi-Fi управлением' },
];

export const IndexPage: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();


  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.clientWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      setCurrentSlide(Math.round(scrollLeft / slideWidth));
    }
  };

  // Автопрокрут баннера
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextSlide = (currentSlide + 1) % bannerImages.length;
        const slideWidth = scrollRef.current.clientWidth;
        scrollRef.current.scrollTo({
          left: nextSlide * slideWidth,
          behavior: 'smooth'
        });
        setCurrentSlide(nextSlide);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, bannerImages.length]);

  return (
    <Page back={false}>
      <div style={{
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        minHeight: '100vh',
        fontFamily: 'var(--tg-font-family, -apple-system)'
      }}>
        {/* Статичная верхняя панель */}
        <Section style={{ backgroundColor: 'transparent', padding: 'var(--tg-spacing-l, 16px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--tg-spacing-l, 16px)' }}>
            <IconButton mode="plain" size="s">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color, #000)">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </IconButton>
            <IconButton mode="plain" size="s" onClick={() => navigate('/search')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color, #000)">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </IconButton>
          </div>
          
          {/* Статичные кнопки категорий */}
          <div style={{
            display: 'flex',
            gap: 'var(--tg-spacing-s, 8px)',
            overflowX: 'auto',
            paddingBottom: 'var(--tg-spacing-s, 8px)'
          }}>
            <Button mode="outline" size="s" style={{ flexShrink: 0, fontSize: '15px' }}>🔍 Премиум</Button>
            <Button mode="outline" size="s" style={{ flexShrink: 0, fontSize: '15px' }}>💎 Дешевле</Button>
            <Button mode="outline" size="s" style={{ flexShrink: 0, fontSize: '15px' }}>🎯 Дороже</Button>
          </div>
        </Section>

        {/* Баннер с акциями */}
        <Section style={{ backgroundColor: 'transparent', padding: '0', marginBottom: 'var(--tg-spacing-l, 16px)' }}>
          <h2 style={{ 
            padding: '0 var(--tg-spacing-l, 16px)', 
            margin: 'var(--tg-spacing-l, 16px) 0 var(--tg-spacing-s, 8px) 0', 
            fontSize: '17px', 
            fontWeight: '600',
            color: 'var(--tg-theme-text-color, #000)'
          }}>
            АКЦИИ
          </h2>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {bannerImages.map((src, index) => (
              <div
                key={index}
                style={{
                  width: '100%',
                  height: '200px',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  padding: '0 var(--tg-spacing-l, 16px)',
                  boxSizing: 'border-box'
                }}
              >
                <Image
                  src={src}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--tg-border-radius, 12px)'
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: 'var(--tg-spacing-m, 12px)' 
          }}>
            {bannerImages.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === index ? 
                    'var(--tg-theme-button-color, #007AFF)' : 
                    'var(--tg-theme-hint-color, #8E8E93)',
                  margin: '0 3px',
                }}
              />
            ))}
          </div>
        </Section>

        {/* Промо секции между Акциями и Товарами */}
        <Section style={{ backgroundColor: 'transparent', padding: 'var(--tg-spacing-l, 16px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--tg-spacing-s, 8px)'
          }}>
            <div style={{
              width: '100%',
              height: '184px',
              backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
              borderRadius: 'var(--tg-border-radius, 12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ 
                fontSize: '17px', 
                fontWeight: '600',
                color: 'var(--tg-theme-text-color, #000)'
              }}>
                Раздел 1
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '184px',
              backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
              borderRadius: 'var(--tg-border-radius, 12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ 
                fontSize: '17px', 
                fontWeight: '600',
                color: 'var(--tg-theme-text-color, #000)'
              }}>
                Раздел 2
              </span>
            </div>
          </div>
        </Section>

        {/* Товары */}
        <Section style={{ backgroundColor: 'transparent', padding: '0' }}>
          <h2 style={{ 
            padding: '0 var(--tg-spacing-l, 16px)', 
            margin: 'var(--tg-spacing-l, 16px) 0 var(--tg-spacing-s, 8px) 0', 
            fontSize: '17px', 
            fontWeight: '600',
            color: 'var(--tg-theme-text-color, #000)'
          }}>
            ТОВАРЫ
          </h2>
          <div style={{ padding: '0 var(--tg-spacing-l, 16px)' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--tg-spacing-m, 12px)',
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
                      borderRadius: 'var(--tg-border-radius, 12px)',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ 
                      width: '100%', 
                      height: '230px',
                      overflow: 'hidden',
                      borderRadius: 'var(--tg-border-radius, 12px) var(--tg-border-radius, 12px) 0 0',
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
                      marginTop: 'var(--tg-spacing-s, 8px)', 
                      backgroundColor: 'transparent',
                    }}>
                      <div style={{ 
                        fontSize: '16px', 
                        fontWeight: '500', 
                        marginBottom: 'var(--tg-spacing-xs, 4px)',
                        color: 'var(--tg-theme-text-color, #000)'
                      }}>
                        {product.name}
                      </div>
                      <div style={{ 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        color: 'var(--tg-theme-text-color, #000)' 
                      }}>
                        {product.price}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </Page>
  );
};