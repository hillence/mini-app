import { FC, useState, useEffect } from 'react';
import { 
  Section, 
  Input, 
  Button, 
  List, 
  Cell,
  Title,
  Text,
  Textarea,
  Divider
} from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { mountMainButton } from '@telegram-apps/sdk-react';

export const OrderPage: FC = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    name: '',
    surname: '',
    patronymic: '',
    phone: '',
    orderNote: '',
    comment: '',
    address: 'улица Толстого, д. 6',
    entrance: '',
    intercom: '',
    apartment: '',
    floor: ''
  });

  useEffect(() => {
    let button: any = null;
    try {
      button = mountMainButton();
      button.setText('Заказать услугу');
      button.setBgColor('#007AFF');
      button.onClick(() => console.log('Заказать услугу:', formData));
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
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Page back={true}>
      <List>
        {/* Header */}
        <Section>
          <Cell>
            <Title level="1" style={{
              fontSize: '24px',
              fontWeight: '600',
              color: 'var(--tg-theme-text-color)',
              marginBottom: 'var(--tg-spacing-m)'
            }}>
              Контактная информация
            </Title>
          </Cell>
        </Section>

        {/* Contact Information Section */}
        <Section header="Получатель">
          <Cell>
            <Input
              placeholder="Получатель"
              value={formData.recipient}
              onChange={(e) => handleInputChange('recipient', e.target.value)}
            />
          </Cell>
          <Cell>
            <Input
              placeholder="Имя"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </Cell>
          <Cell>
            <Input
              placeholder="Фамилия"
              value={formData.surname}
              onChange={(e) => handleInputChange('surname', e.target.value)}
            />
          </Cell>
          <Cell>
            <Input
              placeholder="Отчество"
              value={formData.patronymic}
              onChange={(e) => handleInputChange('patronymic', e.target.value)}
            />
          </Cell>
        </Section>

        <Divider />

        {/* Phone Number Section */}
        <Section>
          <Cell>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              border: '1px solid var(--tg-theme-separator-color)',
              borderRadius: 'var(--tg-border-radius-m)',
              overflow: 'hidden',
              backgroundColor: 'var(--tg-theme-bg-color)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                backgroundColor: 'var(--tg-theme-secondary-bg-color)',
                borderRight: '1px solid var(--tg-theme-separator-color)'
              }}>
                <div style={{
                  width: '24px',
                  height: '16px',
                  backgroundColor: '#0039A6',
                  marginRight: '8px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '33.33%',
                    backgroundColor: '#ffffff'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '33.33%',
                    backgroundColor: '#D52B1E'
                  }} />
                </div>
                <Text style={{ fontSize: '17px' }}>+7</Text>
              </div>
              <input
                type="tel"
                placeholder="000 000 00 00"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: 'none',
                  outline: 'none',
                  fontSize: '17px',
                  backgroundColor: 'transparent',
                  color: 'var(--tg-theme-text-color)'
                }}
              />
            </div>
          </Cell>
        </Section>

        <Divider />

        {/* Order Notes Section */}
        <Section header="Примечание к заказу">
          <Cell>
            <Textarea
              placeholder="Комментарии к заказу"
              value={formData.comment}
              onChange={(e) => handleInputChange('comment', e.target.value)}
              rows={3}
            />
          </Cell>
        </Section>

        <Divider />

        {/* Delivery Address Section */}
        <Section header="Куда">
          <Cell>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              border: '1px solid var(--tg-theme-separator-color)',
              borderRadius: 'var(--tg-border-radius-m)',
              backgroundColor: 'var(--tg-theme-bg-color)'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                marginRight: '12px',
                backgroundColor: 'var(--tg-theme-hint-color)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '17px',
                  backgroundColor: 'transparent',
                  color: 'var(--tg-theme-text-color)'
                }}
              />
            </div>
          </Cell>
        </Section>

        {/* Address Details Section */}
        <Section>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--tg-spacing-m)'
          }}>
            <Cell>
              <Input
                placeholder="Подъезд"
                value={formData.entrance}
                onChange={(e) => handleInputChange('entrance', e.target.value)}
              />
            </Cell>
            <Cell>
              <Input
                placeholder="Домофон"
                value={formData.intercom}
                onChange={(e) => handleInputChange('intercom', e.target.value)}
              />
            </Cell>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--tg-spacing-m)',
            marginTop: 'var(--tg-spacing-m)'
          }}>
            <Cell>
              <Input
                placeholder="Кв/офис"
                value={formData.apartment}
                onChange={(e) => handleInputChange('apartment', e.target.value)}
              />
            </Cell>
            <Cell>
              <Input
                placeholder="Этаж"
                value={formData.floor}
                onChange={(e) => handleInputChange('floor', e.target.value)}
              />
            </Cell>
          </div>
        </Section>

        {/* Bottom spacing for MainButton */}
        <div style={{ height: '80px' }} />
      </List>
    </Page>
  );
};