import { FC, useState, useEffect } from 'react';
import { Section, Image } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';

const products = [
  { id: 1, name: 'Кондиционер 1', price: '18 000 ₽', image: 'https://basket-16.wbbasket.ru/vol2546/part254650/254650733/images/big/1.webp' },
  { id: 2, name: 'Кондиционер 2', price: '9 650 ₽', image: 'https://example.com/bag.jpg' },
  { id: 3, name: 'Кондиционер 3', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg' },
  { id: 4, name: 'Кондиционер 4', price: '4 500 ₽', image: 'https://example.com/sweater.jpg' },
  { id: 5, name: 'Кондиционер 5', price: '8 500 ₽', image: 'https://example.com/swрeater.jpg' },
];

export const SearchPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery]);

  return (
    <Page back={true}>
      <div style={{ 
        paddingTop: '146px',
        backgroundColor: 'transparent',
        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif'
      }}>
        {/* Fixed Search Header */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '146px',
          backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'flex-end',
          padding: '16px',
          paddingBottom: '16px'
        }}>
          <input
            type="text"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: 'var(--tg-theme-secondary-bg-color, #F2F2F7)',
              fontSize: '17px',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif',
              outline: 'none'
            }}
            autoFocus
          />
        </div>

        {/* Search Results */}
        <Section style={{ backgroundColor: 'transparent', padding: '0' }}>
          <div style={{ padding: '0 16px' }}>
            {filteredProducts.length > 0 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  backgroundColor: 'transparent',
                }}
              >
                {filteredProducts.map((product) => (
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
                        <div style={{ 
                          fontSize: '16px', 
                          fontWeight: '500', 
                          marginBottom: '4px'
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
            ) : (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px 20px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif'
              }}>
                <div style={{ fontSize: '17px', color: 'var(--tg-theme-hint-color, #8E8E93)' }}>
                  Ничего не найдено
                </div>
                <div style={{ fontSize: '15px', color: 'var(--tg-theme-hint-color, #8E8E93)', marginTop: '8px' }}>
                  Попробуйте изменить запрос
                </div>
              </div>
            )}
          </div>
        </Section>
      </div>
    </Page>
  );
};