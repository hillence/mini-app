import { FC } from 'react';
import { List, Section, Cell, Chip } from '@telegram-apps/telegram-ui';
import './IndexPage.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Adidas Samba "Wonder White"',
    price: 11747,
    originalPrice: 15750,
    image: '/src/assets/product1.jpg'
  },
  {
    id: 2,
    name: 'Adidas "Samba OG Black"',
    price: 9650,
    originalPrice: 11650,
    image: '/src/assets/product2.jpg'
  }
];

export const IndexPage: FC = () => {
  return (
    <List>
      <Section>
        <div className="filters">
          <Chip mode="elevated">⇅</Chip>
          <Chip mode="elevated">Категории ▼</Chip>
          <Chip mode="elevated">В НАЛИЧИИ</Chip>
          <Chip mode="elevated">ПОД ЗАКАЗ</Chip>
        </div>
      </Section>

      <Section>
        <div className="promo-banner">
          <div className="promo-content">
            <h2 className="promo-title">ОСЕНЬ</h2>
            <p className="promo-subtitle">одежда и обувь</p>
            <div className="promo-items">
              <div className="promo-item">👟</div>
              <div className="promo-item">🧥</div>
              <div className="promo-item">👕</div>
              <div className="promo-item">👞</div>
            </div>
          </div>
          <div className="promo-indicators">
            <span className="indicator active"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="category-grid">
          <div className="category-item watches">
            <div className="category-icon">⌚</div>
          </div>
          <div className="category-item bags">
            <div className="category-icon">👜</div>
          </div>
          <div className="category-item shoes-promo">
            <div className="promo-text">ОБУВЬ ДО</div>
            <div className="promo-price">10K</div>
            <div className="promo-emoji">😊</div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="products-grid">
          {products.map((product) => (
            <Cell key={product.id} className="product-cell">
              <div className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-indicators">
                    <span className="indicator active"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-price">
                    <span className="current-price">{product.price.toLocaleString()} ₽</span>
                    {product.originalPrice && (
                      <span className="original-price">{product.originalPrice.toLocaleString()} ₽</span>
                    )}
                  </div>
                  <div className="product-name">{product.name}</div>
                </div>
              </div>
            </Cell>
          ))}
        </div>
      </Section>
    </List>
  );
};