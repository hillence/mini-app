import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/components/Page.tsx';
import { Image, Section, Text } from '@telegram-apps/telegram-ui';
import { useSignal, bottomButton, viewport } from '@telegram-apps/sdk-react';

const products = [
  { name: 'Кондиционер', price: '31 000 ₽', image: './tconditioner.png', description: 'Эффективный кондиционер для дома.' },
  { name: 'Сумка', price: '9 650 ₽', image: 'https://example.com/bag.jpg', description: 'Элегантная сумка из натуральной кожи.' },
  { name: 'Кроссовки', price: '11 747 ₽', image: 'https://example.com/sneakers.jpg', description: 'Удобные кроссовки для спорта.' },
  { name: 'Кофта', price: '4 500 ₽', image: 'https://example.com/sweater.jpg', description: 'Теплая кофта из хлопка.' },
];

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0', 10);
  const product = products[productId] || products[0];

  const vp = useSignal(viewport);
  const photoHeight = vp?.height ? Math.floor(vp.height * 0.6) : 300;

  // Настройка BottomButton
  const bb = useSignal(bottomButton);
  bb.setText('Купить товар');
  bb.setBackgroundColor('var(--tg-theme-button-color)');
  bb.show();
  bb.on('click', () => {
    console.log(`Покупка: ${product.name}`);
    // Логика покупки
  });

  return (
    <Page>
      <Image
        src={product.image}
        style={{ width: '100%', height: `${photoHeight}px`, objectFit: 'cover' }}
      />
      <Section>
        <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>{product.name}</Text>
        <Text style={{ fontSize: '20px', color: 'var(--tg-theme-accent-text-color)' }}>{product.price}</Text>
      </Section>
      <Section header="Описание товара">
        <Text>{product.description}</Text>
      </Section>
    </Page>
  );
};
