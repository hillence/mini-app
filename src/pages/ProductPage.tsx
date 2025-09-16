import { Section, Image, Button } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { miniApp } from '@telegram-apps/sdk-react';

import { Page } from '@/components/Page.tsx';

export const ProductPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  useEffect(() => {
    if (miniApp.isAvailable()) {
      miniApp.setBottomBarColor('#007AFF');
    }
  }, []);

  if (!product) {
    return (
      <Page>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Товар не найден</p>
          <Button onClick={() => navigate('/')}>На главную</Button>
        </div>
      </Page>
    );
  }

  const handleBuyProduct = () => {
    if (miniApp.isAvailable()) {
      miniApp.showAlert(`Покупка товара: ${product.name}`);
    }
  };

  return (
    <Page>
      <div style={{ paddingBottom: '80px' }}>
        <Image
          src={product.image}
          style={{
            width: '100%',
            height: '60vh',
            objectFit: 'cover',
            marginBottom: '20px'
          }}
        />
        
        <div style={{ padding: '0 16px' }}>
          <h1 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>{product.name}</h1>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#007AFF', margin: '0 0 20px 0' }}>
            {product.price}
          </p>
          
          <Section header="Описание товара">
            <div style={{ padding: '16px' }}>
              <p style={{ lineHeight: '1.5', margin: 0 }}>
                {product.description || `Высококачественный ${product.name.toLowerCase()} с отличными характеристиками и современным дизайном. Идеально подходит для повседневного использования.`}
              </p>
            </div>
          </Section>
        </div>
      </div>

      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        borderTop: '1px solid var(--tg-theme-section-separator-color, #e0e0e0)',
        zIndex: 1000
      }}>
        <Button
          onClick={handleBuyProduct}
          style={{
            width: '100%',
            backgroundColor: '#007AFF',
            color: 'white',
            padding: '12px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Купить товар
        </Button>
      </div>
    </Page>
  );
};
