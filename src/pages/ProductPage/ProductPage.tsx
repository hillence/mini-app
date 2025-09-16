import { FC, useEffect } from 'react'; // Added useEffect
import { useParams } from 'react-router-dom';
import { Section, Image } from '@telegram-apps/telegram-ui'; // Removed Button
import { Page } from '@/components/Page.tsx';
import { mountMainButton, type MainButton } from '@telegram-apps/sdk-react'; // Changed to mountMainButton
import { products } from '@/pages/IndexPage/IndexPage'; // Imported shared products

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id)); // Changed to Number for id match

  useEffect(() => {
    if (mountMainButton.isAvailable()) {
      const button: MainButton = mountMainButton();
      button.setText('Купить товар');
      button.setBgColor('#007AFF'); // Blue color
      button.onClick(() => console.log('Купить товар'));
      button.show();
      return () => button.hide();
    }
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
        marginTop: '80px' // Added top margin
      }}>
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
