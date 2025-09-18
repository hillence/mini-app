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
      {/* Изображение товара - полная ширина */}
      <div style={{
        width: '100%',
        height: '50vh',
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

      {/* Информация о товаре */}
      <List>
        <Section>
          <Cell>
            <Title level="1" style={{ 
              fontSize: '28px',
              fontWeight: '700',
              marginBottom: 'var(--tg-spacing-s)'
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

        {/* Описание товара */}
        <Section header="Описание товара">
          <Cell>
            <Text style={{
              fontSize: '17px',
              lineHeight: '1.4'
            }}>
              {product.description}
            </Text>
          </Cell>
        </Section>

        <Divider />

        {/* Характеристики */}
        <Section header="Характеристики">
          <Cell>
            <Text style={{
              fontSize: '17px',
              lineHeight: '1.4'
            }}>
              Вес: 5 кг, Мощность: 2.5 кВт, Цвет: Белый
            </Text>
          </Cell>
        </Section>

        <Divider />

        {/* Действия */}
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

        {/* Отступ для MainButton */}
        <div style={{ height: '80px' }} />
      </List>
    </Page>
  );
};