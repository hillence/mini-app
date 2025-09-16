import { FC } from 'react';
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
    image: '/api/placeholder/280/280'
  },
  {
    id: 2,
    name: 'Adidas "Samba OG Black"',
    price: 9650,
    originalPrice: 11650,
    image: '/api/placeholder/280/280'
  }
];

export const IndexPage: FC = () => {
  return (
    <div className="marketplace">
      <header className="marketplace__header">
        <button className="header__close">✕ Закрыть</button>
        <div className="header__indicator"></div>
        <button className="header__menu">⋯</button>
      </header>

      <div className="marketplace__nav">
        <button className="nav__menu">☰</button>
        <h1 className="nav__title">HOLD market</h1>
        <button className="nav__search">🔍</button>
      </div>

      <div className="marketplace__filters">
        <button className="filter__sort">⇅</button>
        <button className="filter__category">
          Категории <span>▼</span>
        </button>
        <button className="filter__available">В НАЛИЧИИ</button>
        <button className="filter__preorder">ПОД ЗАКАЗ</button>
      </div>

      <div className="marketplace__promo">
        <div className="promo__content">
          <h2 className="promo__title">ОСЕНЬ</h2>
          <p className="promo__subtitle">одежда и обувь</p>
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

      <div className="marketplace__grid">
        <div className="grid__item small">
          <div className="item__image">⌚</div>
          <div className="item__content">
            <p className="item__text">Часы</p>
          </div>
        </div>
        
        <div className="grid__item small">
          <div className="item__image">👜</div>
          <div className="item__content">
            <p className="item__text">Сумки</p>
          </div>
        </div>
        
        <div className="grid__item small orange">
          <div className="item__content">
            <p className="item__label">ОБУВЬ ДО</p>
            <p className="item__price">10K</p>
            <span className="item__emoji">😊</span>
          </div>
        </div>
      </div>

      <div className="marketplace__products">
        {products.map((product) => (
          <div key={product.id} className="product">
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
              <h3 className="product__name">{product.name}</h3>
            </div>
            <div className="product__indicators">
              <span className="indicator active"></span>
              <span className="indicator"></span>
              <span className="indicator"></span>
              <span className="indicator"></span>
            </div>
          </div>
        ))}
      </div>

      <div className="marketplace__bottom">
        <div className="bottom__indicator"></div>
      </div>
    </div>
  );
};