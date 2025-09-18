import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Section, 
  Image, 
  Input,
  List,
  Cell,
  Placeholder,
  FixedLayout
} from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';
import { products } from '@/pages/IndexPage/IndexPage';

export const SearchPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery]);

  return (
    <Page back={true}>
      {/* Fixed Search Header */}
      <FixedLayout vertical="top" style={{ 
        backgroundColor: 'var(--tg-theme-bg-color)',
        borderBottom: '0.5px solid var(--tg-theme-separator-color)',
        zIndex: 1000
      }}>
        <Section style={{ 
          padding: 'var(--tg-spacing-m)', 
          border: 'none' 
        }}>
          <Input
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%' }}
            autoFocus
          />
        </Section>
      </FixedLayout>

      {/* Search Results */}
      <div style={{ paddingTop: '80px' }}>
        <Section>
          <List>
            {filteredProducts.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--tg-spacing-m)',
                paddingBottom: 'var(--tg-spacing-xl)'
              }}>
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                    <Cell
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        minHeight: '300px',
                        backgroundColor: 'var(--tg-theme-secondary-bg-color)',
                        borderRadius: 'var(--tg-border-radius-m)',
                        overflow: 'hidden',
                        border: 'none',
                        padding: 0
                      }}
                    >
                      <div style={{
                        width: '100%',
                        height: '230px',
                        overflow: 'hidden'
                      }}>
                        <Image
                          src={product.image}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div style={{
                        padding: 'var(--tg-spacing-s)',
                        textAlign: 'left'
                      }}>
                        <div style={{ 
                          fontSize: '16px', 
                          fontWeight: '500', 
                          marginBottom: '4px',
                          color: 'var(--tg-theme-text-color)'
                        }}>
                          {product.name}
                        </div>
                        <div style={{ 
                          fontSize: '16px', 
                          fontWeight: '600',
                          color: 'var(--tg-theme-text-color)'
                        }}>
                          {product.price}
                        </div>
                      </div>
                    </Cell>
                  </Link>
                ))}
              </div>
            ) : (
              <Cell>
                <Placeholder
                  header="Ничего не найдено"
                  description="Попробуйте изменить запрос поиска"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--tg-theme-hint-color)">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </Placeholder>
              </Cell>
            )}
          </List>
        </Section>
      </div>
    </Page>
  );
};