import { 
  Section, 
  Image, 
  IconButton, 
  Button,
  Cell
} from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

const bannerImages = [
  'https://cdn.prod.website-files.com/68ca28d130f45cfc8a33cc46/68caf06c625434050c2cbe65_Group%204.png',
  'https://cdn.prod.website-files.com/68ca28d130f45cfc8a33cc46/68caf0886d01bbaf69975fde_Group%205.png',
  'https://example.com/banner3.jpg',
];

export const products = [
  { id: 1, name: 'Кондиционер 1', price: '18 000 ₽', image: 'https://basket-16.wbbasket.ru/vol2546/part254650/254650733/images/big/1.webp', description: 'Мощный кондиционер для охлаждения больших помещений', category: 'premium' },
  { id: 2, name: 'Кондиционер 2', price: '9 650 ₽', image: 'https://example.com/bag.jpg', description: 'Компактный кондиционер для маленьких комнат', category: 'cheap' },
  { id: 3, name: 'Кондиционер 3', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg', description: 'Энергоэффективный кондиционер с низким уровнем шума', category: 'premium' },
  { id: 4, name: 'Кондиционер 4', price: '4 500 ₽', image: 'https://example.com/sweater.jpg', description: 'Бюджетный кондиционер для дачи', category: 'cheap' },
  { id: 5, name: 'Кондиционер 5', price: '8 500 ₽', image: 'https://example.com/swрeater.jpg', description: 'Умный кондиционер с Wi-Fi управлением', category: 'expensive' },
];

export const IndexPage: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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

  // Фильтрация товаров по категории
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Page back={false}>
      <div style={{
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        minHeight: '100vh',
        fontFamily: 'var(--tg-font-family, -apple-system)',
        paddingTop: '110px'
      }}>
        {/* Фиксированная верхняя панель */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
          borderBottom: '0.5px solid var(--tg-theme-separator-color, #E5E5EA)',
          zIndex: 1000,
          paddingTop: '0px'
        }}>
          <Section style={{ backgroundColor: 'transparent', padding: 'var(--tg-spacing-l, 16px)', border: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--tg-spacing-l, 16px)' }}>
              <IconButton mode="plain" size="s" onClick={() => navigate('/menu')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color, #000)">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </IconButton>
              
              <Image
                src="https://cdn.prod.website-files.com/68ca28d130f45cfc8a33cc46/68ca28f6f0ae177bce7a9389_Group%203.svg"
                style={{ width: '124px', height: '32px', objectFit: 'contain' }}
              />
              
              <IconButton mode="plain" size="s" onClick={() => navigate('/search')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--tg-theme-text-color, #000)">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </IconButton>
            </div>
            
            {/* Кнопки категорий */}
            <div style={{
              display: 'flex',
              gap: 'var(--tg-spacing-s, 8px)',
              overflowX: 'auto',
              paddingBottom: 'var(--tg-spacing-s, 8px)',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              <Button
                mode={selectedCategory === 'premium' ? 'filled' : 'outline'}
                size="s"
                style={{ flexShrink: 0, fontSize: '15px' }}
                onClick={() => setSelectedCategory(selectedCategory === 'premium' ? 'all' : 'premium')}
              >
                Премиум
              </Button>
              <Button
                mode={selectedCategory === 'cheap' ? 'filled' : 'outline'}
                size="s"
                style={{ flexShrink: 0, fontSize: '15px' }}
                onClick={() => setSelectedCategory(selectedCategory === 'cheap' ? 'all' : 'cheap')}
              >
                Дешевле
              </Button>
              <Button
                mode={selectedCategory === 'expensive' ? 'filled' : 'outline'}
                size="s"
                style={{ flexShrink: 0, fontSize: '15px' }}
                onClick={() => setSelectedCategory(selectedCategory === 'expensive' ? 'all' : 'expensive')}
              >
                Дороже
              </Button>
            </div>
          </Section>
        </div>

        {/* Баннер с акциями */}
        <Section style={{ backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', padding: '0', marginBottom: 'var(--tg-spacing-l, 16px)', border: 'none' }}>
          <h2 style={{
            padding: '0 var(--tg-spacing-l, 16px)',
            margin: 'var(--tg-spacing-l, 16px) 0 var(--tg-spacing-s, 8px) 0',
            fontSize: '17px',
            fontWeight: '600',
            fontFamily: 'var(--tg-font-family, -apple-system)',
            color: 'var(--tg-theme-text-color, #000)'
          }}>АКЦИИ</h2>
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
              width: '100%',
              boxSizing: 'border-box',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {bannerImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  scrollSnapAlign: 'start',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--tg-spacing-s, 8px)', marginBottom: 'var(--tg-spacing-l, 16px)', backgroundColor: 'transparent' }}>
            {bannerImages.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === index ? 'var(--tg-theme-button-color, #007AFF)' : 'var(--tg-theme-hint-color, #C7C7C7)',
                  margin: '0 3px',
                }}
              />
            ))}
          </div>
        </Section>

        {/* Услуги - отступ 30px сверху */}
        <Section style={{ backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', padding: 'var(--tg-spacing-l, 16px)', border: 'none', marginBottom: 'var(--tg-spacing-l, 16px)', marginTop: '30px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--tg-spacing-s, 8px)'
          }}>
            <Cell
              style={{
                width: '100%',
                height: '184px',
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 'var(--tg-border-radius, 12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: 'none',
                padding: 0
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3
              }} />
              <span style={{
                fontSize: '17px',
                fontWeight: '600',
                color: '#ffffff',
                position: 'relative',
                zIndex: 1
              }}>
                УСТАНОВКА
              </span>
            </Cell>
            <Link to="/order" style={{ textDecoration: 'none' }}>
              <Cell
                style={{
                  width: '100%',
                  height: '184px',
                  backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: 'var(--tg-border-radius, 12px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: 'none',
                  padding: 0
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: 'url("https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=200&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.3
                }} />
                <span style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#ffffff',
                  position: 'relative',
                  zIndex: 1
                }}>
                  РЕМОНТ И ОБСЛУЖИВАНИЕ
                </span>
              </Cell>
            </Link>
          </div>
        </Section>

        {/* Товары */}
        <Section style={{ backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', padding: '0', border: 'none' }}>
          <h2 style={{
            padding: '0 var(--tg-spacing-l, 16px)',
            margin: 'var(--tg-spacing-l, 16px) 0 var(--tg-spacing-s, 8px) 0',
            fontSize: '17px',
            fontWeight: '600',
            fontFamily: 'var(--tg-font-family, -apple-system)',
            color: 'var(--tg-theme-text-color, #000)'
          }}>ТОВАРЫ</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--tg-spacing-m, 12px)',
              padding: '0 var(--tg-spacing-l, 16px)',
              backgroundColor: 'transparent',
            }}
          >
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Cell
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    minHeight: '300px',
                    backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
                    borderRadius: 'var(--tg-border-radius, 12px)',
                    overflow: 'hidden',
                    border: 'none',
                    padding: 0
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
                    marginTop: 'var(--tg-spacing-s, 8px)',
                    padding: '0 var(--tg-spacing-s, 8px) var(--tg-spacing-s, 8px) var(--tg-spacing-s, 8px)',
                    backgroundColor: 'transparent',
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '4px', fontFamily: 'var(--tg-font-family, -apple-system)', color: 'var(--tg-theme-text-color, #000)' }}>{product.name}</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--tg-theme-text-color, #000)', fontFamily: 'var(--tg-font-family, -apple-system)' }}>{product.price}</div>
                  </div>
                </Cell>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </Page>
  );
};