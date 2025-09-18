import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Section, 
  Cell, 
  Image, 
  List, 
  Title, 
  Caption,
  Input
} from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';
import { products } from '@/pages/IndexPage/IndexPage';

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
      {/* Поисковая строка */}
      <Section>
        <Input
          placeholder="Поиск товаров..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%' }}
          autoFocus
        />
      </Section>

      {/* Результаты поиска */}
      <Section header={searchQuery ? `Результаты поиска: "${searchQuery}"` : "Все товары"}>
        {filteredProducts.length > 0 ? (
          <List>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--tg-spacing-m)'
            }}>
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <Cell
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: '280px',
                      border: 'none',
                      borderRadius: 'var(--tg-border-radius)',
                      overflow: 'hidden',
                      padding: 0
                    }}
                  >
                    <Image
                      src={product.image}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ padding: 'var(--tg-spacing-s)' }}>
                      <Title level="3" style={{ 
                        fontSize: '16px',
                        marginBottom: 'var(--tg-spacing-xs)'
                      }}>
                        {product.name}
                      </Title>
                      <Caption style={{ 
                        fontSize: '16px',
                        fontWeight: '600',
                        color: 'var(--tg-theme-text-color)'
                      }}>
                        {product.price}
                      </Caption>
                    </div>
                  </Cell>
                </Link>
              ))}
            </div>
          </List>
        ) : (
          <Cell>
            <div style={{ textAlign: 'center', padding: 'var(--tg-spacing-xl)' }}>
              <Title level="2" style={{ 
                color: 'var(--tg-theme-hint-color)',
                marginBottom: 'var(--tg-spacing-s)'
              }}>
                Ничего не найдено
              </Title>
              <Caption style={{ color: 'var(--tg-theme-hint-color)' }}>
                Попробуйте изменить поисковый запрос
              </Caption>
            </div>
          </Cell>
        )}
      </Section>
    </Page>
  );
};