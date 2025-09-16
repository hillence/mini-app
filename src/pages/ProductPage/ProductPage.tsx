import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, Image } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { mountMainButton } from '@telegram-apps/sdk-react';
import { products } from '@/pages/IndexPage/IndexPage';

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    const cleanup = mountMainButton.ifAvailable(button => {
      button.setText('Купить товар');
      button.setBgColor('#007AFF');
      button.onClick(() => console.log('Купить товар'));
      button.show();
      return () => button.hide();
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  if (!product) {
    return <Page><div>Товар не найден</div></Page>;
  }

  return (
    <Page>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        marginTop: '80px'
      }}>
        <Image
          src={product.photos ? product.photos[0] : product.image} // Use first photo
          style={{
            width: '100%',
            height: '60vh',
            objectFit: 'cover',
          }}
        />
        <Section>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <h3>Описание товара</h3>
          <p>{product.description}</p>
        </Section>
      </div>
    </Page>
  );
};
