import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';

import './IndexPage.css';
import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div className="hold">
        <div className="hold__topbar">
          <button className="hold__pill">
            <span className="hold__pill-icon">×</span>
            Закрыть
          </button>
          <div className="hold__title">HOLD market</div>
          <div className="hold__actions">
            <button className="hold__icon" aria-label="Search">🔍</button>
            <button className="hold__menu" aria-label="Menu">⋯</button>
          </div>
        </div>

        <div className="hold__filters">
          <button className="chip chip--icon" aria-label="Sort">↕</button>
          <button className="chip">Категории <span className="caret"/></button>
          <button className="chip">В НАЛИЧИИ</button>
          <button className="chip">ПОД ЗАКАЗ</button>
        </div>

        <div className="hold__carousel">
          <div className="banner">
            <div className="banner__content">
              <div className="banner__season">ОСЕНЬ</div>
              <div className="banner__subtitle">одежда и обувь</div>
            </div>
            <div className="banner__items">
              <div className="banner__item"/>
              <div className="banner__item"/>
              <div className="banner__item"/>
              <div className="banner__item"/>
              <div className="banner__item"/>
            </div>
          </div>
          <div className="dots">
            <span className="dot active"/>
            <span className="dot"/>
            <span className="dot"/>
          </div>
        </div>

        <div className="hold__stories">
          <div className="story">
            <img src={tonSvg} alt=""/>
          </div>
          <div className="story story--accent">СУМКИ</div>
          <div className="story story--warm">ОБУВЬ ДО
            <span className="story__price">10K</span>
          </div>
        </div>

        <div className="hold__grid">
          <div className="product">
            <div className="product__image"/>
            <div className="product__dots">
              <span/>
              <span/>
              <span/>
              <span/>
            </div>
            <div className="product__price">
              <div className="price">11 747 ₽</div>
              <div className="old">15 750 ₽</div>
            </div>
          </div>
          <div className="product">
            <div className="product__image product__image--alt"/>
            <div className="product__dots">
              <span/>
              <span/>
              <span/>
              <span/>
            </div>
            <div className="product__price">
              <div className="price">9 650 ₽</div>
              <div className="old">11 650 ₽</div>
            </div>
          </div>
        </div>

        <button className="hold__fab">
          <span className="hold__fab-badge">1</span>
          🛍
        </button>
      </div>
    </Page>
  );
};
