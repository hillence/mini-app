import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Section, 
  Image, 
  Button, 
  List, 
  Cell,
  Title,
  Text,
  Divider
} from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { mountMainButton } from '@telegram-apps/sdk-react';
import { products } from '@/pages/IndexPage/IndexPage';

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    let button: any = null;
    try {
      button = mountMainButton();
      button.setText('Добавить в корзину');
      button.setBgColor('#007AFF');
      button.onClick(() => console.log('Добавить в корзину:', product?.name));
      button.show();
    } catch (error) {
      console.log('MainButton недоступен');
    }

    return () => {
      if (button) {
        try {
          button.hide();
        } catch (error) {
          console.log('Ошибка при скрытии MainButton');
        }
      }
    };
  }, [product]);

  if (!product) {
    return (
      <Page back={true}>
        <Section>
          <Cell>
            <Text>Товар не найден</Text>
          </Cell>
        </Section>
      </Page>
    );
  }

  return (
    <Page back={true}>
      {/* Product Image - Full Width, No Margins */}
      <div style={{
        width: '100%',
        height: '50vh',
        backgroundColor: 'var(--tg-theme-secondary-bg-color)',
        overflow: 'hidden'
      }}>
        <Image
          src={product.image}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Product Information */}
      <List>
        <Section>
          <Cell>
            <Title level="1" style={{ 
              fontSize: '28px',
              fontWeight: '700',
              marginBottom: 'var(--tg-spacing-s)',
              color: 'var(--tg-theme-text-color)'
            }}>
              {product.name}
            </Title>
            <Text style={{
              fontSize: '24px',
              fontWeight: '600',
              color: 'var(--tg-theme-text-color)'
            }}>
              {product.price}
            </Text>
          </Cell>
        </Section>

        <Divider />

        {/* Product Description */}
        <Section header="Описание товара">
          <Cell>
            <Text style={{
              fontSize: '17px',
              lineHeight: '1.4',
              color: 'var(--tg-theme-text-color)'
            }}>
              {product.description}
            </Text>
          </Cell>
        </Section>

        <Divider />

        {/* Product Specifications */}
        <Section header="Характеристики">
          <Cell>
            <Text style={{
              fontSize: '17px',
              lineHeight: '1.4',
              color: 'var(--tg-theme-text-color)'
            }}>
              Вес: 5 кг, Мощность: 2.5 кВт, Цвет: Белый
            </Text>
          </Cell>
        </Section>

        <Divider />

        {/* Questions Section */}
        <Section header="Остались вопросы?">
          <Cell>
            <Button 
              mode="outline" 
              size="l"
              style={{
                width: '100%',
                marginBottom: 'var(--tg-spacing-m)'
              }}
              onClick={() => console.log('Написать в поддержку')}
            >
              Написать в поддержку
            </Button>
            
            <Button 
              mode="filled" 
              size="l"
              style={{
                width: '100%',
                backgroundColor: 'var(--tg-theme-button-color)'
              }}
              onClick={() => console.log('Добавить в корзину:', product.name)}
            >
              В корзину
            </Button>
          </Cell>
        </Section>

        {/* Bottom spacing for MainButton */}
        <div style={{ height: '80px' }} />
      </List>
    </Page>
  );
};