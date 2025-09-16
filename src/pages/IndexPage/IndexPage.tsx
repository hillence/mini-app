import { FC } from 'react';
import { Section, Cell, Title, Button } from '@telegram-apps/telegram-ui';
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
    <div className="marketplace">
      <div className="marketplace__header">
        <div className="header__spacer"></div>
      </div>

      <Section>
        <div className="marketplace__filters">
          <Button size="s" mode="gray">⇅</Button>
          <Button size="s" mode="gray">Категории ▼</Button>
          <Button size="s" mode="gray">В НАЛИЧИИ</Button>
          <Button size="s" mode="gray">ПОД ЗАКАЗ</Button>
        </div>
      </Section>

      <Section>
        <div className="marketplace__promo">
          <div className="promo__content">
            <Title level="2" weight="2">ОСЕНЬ</Title>
            <div className="promo__subtitle">одежда и обувь</div>
            <div className="promo__items">
              <div className="promo__item">👟</div>
              <div className="promo__item">🧥</div>
              <div className="promo__item">👕</div>
              <div className="promo__item">👞</div>
            </div>
          </div>
          <div className="promo__indicators">
            <span className="indicator active"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="marketplace__grid">
          <Cell>
            <div className="grid__item">
              <div className="item__image">⌚</div>
              <div className="item__text">Часы</div>
            </div>
          </Cell>
          
          <Cell>
            <div className="grid__item">
              <div className="item__image">👜</div>
              <div className="item__text">Сумки</div>
            </div>
          </Cell>
          
          <Cell>
            <div className="grid__item orange">
              <div className="item__label">ОБУВЬ ДО</div>
              <div className="item__price">10K</div>
              <span className="item__emoji">😊</span>
            </div>
          </Cell>
        </div>
      </Section>

      <Section>
        <div className="marketplace__products">
          {products.map((product) => (
            <Cell key={product.id}>
              <div className="product">
                <div className="product__image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product__info">
                  <div className="product__price">
                    <span className="price__current">{product.price.toLocaleString()} ₽</span>
                    {product.originalPrice && (
                      <span className="price__original">{product.originalPrice.toLocaleString()} ₽</span>
                    )}
                  </div>
                  <div className="product__name">{product.name}</div>
                </div>
                <div className="product__indicators">
                  <span className="indicator active"></span>
                  <span className="indicator"></span>
                  <span className="indicator"></span>
                  <span className="indicator"></span>
                </div>
              </div>
            </Cell>
          ))}
        </div>
      </Section>
    </div>
  );
};