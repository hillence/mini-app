import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, Image } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { mainButton } from '@telegram-apps/sdk-react';

const products = [
  { id: '1', name: 'Часы', price: '10K', image: 'https://example.com/watch.jpg', description: 'Адаптивный дизайн и т.д. Стильные часы.' },
  { id: '2', name: 'Сумка', price: '9 650 ₽', image: 'https://example.com/bag.jpg', description: 'Адаптивный дизайн и т.д. Модная сумка.' },
  { id: '3', name: 'Кроссовки', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg', description: 'Адаптивный дизайн и т.д. Удобные кроссовки.' },
  { id: '4', name: 'Кофта', price: '4 500 ₽', image: 'https://example.com/sweater.jpg', description: 'Адаптивный дизайн и т.д. Теплая кофта.' },
];

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    try {
      mainButton.setText('Купить товар');
      mainButton.onClick(() => console.log('Купить товар'));
      mainButton.show();
    } catch (error) {
      console.error('Error with MainButton:', error);
    }

    return () => {
      try {
        mainButton.hide();
      } catch (error) {
        console.error('Error hiding MainButton:', error);
      }
    };
  }, []);

  if (!product) {
    return <Page><div>Товар не найден</div></Page>;
  }

  return (
    <Page>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Image
          src={product.image}
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
