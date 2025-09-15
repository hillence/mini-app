import React from "react";
import "./App.css";

const CartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 6h15l-1.5 9h-11L6 6z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="20" r="1.6" fill="currentColor"/>
    <circle cx="18" cy="20" r="1.6" fill="currentColor"/>
  </svg>
);

export default function App(): JSX.Element {
  return (
    <div className="hm-root">
      <main className="hm-container">
        <section className="hm-banner">
          <img className="hm-banner-img" alt="banner" src="https://via.placeholder.com/900x360?text=%D0%9E%D1%81%D0%B5%D0%BD%D1%8C" />
        </section>

        <section className="hm-filters">
          <button className="hm-chip">Категории ▾</button>
          <button className="hm-chip">В НАЛИЧИИ</button>
          <button className="hm-chip">ПОД ЗАКАЗ</button>
        </section>

        <section className="hm-shortcuts">
          <div className="hm-shortcut"><img src="https://via.placeholder.com/64" alt="i1" /><div className="hm-short-text">Магазин</div></div>
          <div className="hm-shortcut"><img src="https://via.placeholder.com/64" alt="i2" /><div className="hm-short-text">Сумки</div></div>
          <div className="hm-shortcut"><img src="https://via.placeholder.com/64" alt="i3" /><div className="hm-short-text">Обувь</div></div>
        </section>

        <section className="hm-products">
          <article className="hm-card">
            <div className="hm-card-media"><img src="https://via.placeholder.com/600x420?text=Товар+1" alt="product 1" /></div>
            <div className="hm-card-body">
              <div className="hm-price">
                <span className="hm-price-main">11 747 ₽</span>
                <span className="hm-price-old">15 750 ₽</span>
              </div>
              <div className="hm-title">Adidas Samba "Wonder"</div>
            </div>
          </article>

          <article className="hm-card">
            <div className="hm-card-media"><img src="https://via.placeholder.com/600x420?text=Товар+2" alt="product 2" /></div>
            <div className="hm-card-body">
              <div className="hm-price">
                <span className="hm-price-main">9 650 ₽</span>
                <span className="hm-price-old">11 650 ₽</span>
              </div>
              <div className="hm-title">Adidas "Samba OG Black"</div>
            </div>
          </article>
        </section>
      </main>

      <button className="hm-cart" aria-label="cart">
        <span className="hm-cart-badge">1</span>
        <CartIcon />
      </button>
    </div>
  );
}
