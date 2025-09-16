import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Section, Image, Text, Button } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';

const products = [
  { name: 'Кондиционер', price: '31 000 ₽', image: './tconditioner.png', description: 'Качественный кондиционер для дома.' },
  { name: 'Сумка', price: '9 650 ₽', image: 'https://example.com/bag.jpg', description: 'Стильная сумка.' },
  { name: 'Кроссовки', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg', description: 'Удобные кроссовки.' },
  { name: 'Кофта', price: '4 500 ₽', image: 'https://example.com/sweater.jpg', description: 'Теплая кофта.' },
];

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products[parseInt(id || '0')] || products[0];

  return (
    <Page>
      <Image 
        src={product.image} 
        style={{ width: '100%', height: '60vh', objectFit: 'cover' }} 
      />
      <Text style={{ fontSize: '24px', fontWeight: 'bold', margin: '16px' }}>
        {product.name}
      </Text>
      <Text style={{ fontSize: '20px', color: '#007AFF', margin: '0 16px 16px' }}>
        {product.price}
      </Text>
      <Section header="Описание товара">
        <Text>{product.description}</Text>
      </Section>
      <Button 
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          width: '100%', 
          backgroundColor: '#007AFF', 
          color: 'white', 
          padding: '16px', 
          textAlign: 'center' 
        }}
      >
        Купить товар
      </Button>
    </Page>
  );
};
