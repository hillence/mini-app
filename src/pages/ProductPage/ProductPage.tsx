import { FC, useEffect } from 'react'; // Added useEffect
import { useParams } from 'react-router-dom';
import { Section, Image } from '@telegram-apps/telegram-ui'; // Removed Button
import { Page } from '@/components/Page.tsx';
import { mountMainButton } from '@telegram-apps/sdk-react'; // Changed to mountMainButton

const products = [
  { id: '1', name: 'Часы', price: '10K', image: 'https://example.com/watch.jpg', description: 'Адаптивный дизайн и т.д.' },
  { id: '2', name: 'Сумка', price: '9 650 ₽', image: 'https://example.com/bag.jpg', description: 'Адаптивный дизайн и т.д.' },
  { id: '3', name: 'Кроссовки', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg', description: 'Адаптивный дизайн и т.д.' },
  { id: '4', name: 'Кофта', price: '4 500 ₽', image: 'https://example.com/sweater.jpg', description: 'Адаптивный дизайн и т.д.' },
];

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    mountMainButton.ifAvailable((button) => {
      button.setText('Купить товар');
      button.onClick(() => console.log('Купить товар'));
      button.show();
      return () => button.hide();
    });
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
