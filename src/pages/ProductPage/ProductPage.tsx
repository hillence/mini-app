import { FC, useEffect } from 'react'; // Added useEffect
import { useParams } from 'react-router-dom';
import { Section, Image, Button } from '@telegram-apps/telegram-ui'; // Changed to Button
import { Page } from '@/components/Page.tsx';
import { mainButton } from '@telegram-apps/sdk-react'; // Added for native BottomButton

const products = [
  { id: '1', name: 'Часы', price: '10K', image: 'https://example.com/watch.jpg', description: 'Стильные часы с кожаным ремешком.' },
  { id: '2', name: 'Сумка', price: '9 650 ₽', image: 'https://example.com/bag.jpg', description: 'Модная сумка из натуральной кожи.' },
  { id: '3', name: 'Кроссовки', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg', description: 'Удобные кроссовки для спорта.' },
  { id: '4', name: 'Кофта', price: '4 500 ₽', image: 'https://example.com/sweater.jpg', description: 'Теплая кофта из хлопка.' },
];

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (mainButton.isAvailable()) {
      mainButton.setText('Купить товар');
      mainButton.onClick(() => console.log('Купить товар'));
      mainButton.show();
    }

    return () => {
      if (mainButton.isAvailable()) {
        mainButton.hide();
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
      {/* Removed fixed Button, using native mainButton instead */}
    </Page>
  );
};
