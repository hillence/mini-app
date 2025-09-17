import { FC, useState, useEffect } from 'react';
import { Section, Input, Button } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { mountMainButton } from '@telegram-apps/sdk-react';

export const OrderPage: FC = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    name: '',
    surname: '',
    patronymic: '',
    phone: '+7',
    orderNote: '',
    address: 'улица Толстого, д. 6',
    entrance: '',
    intercom: '',
    apartment: '',
    floor: ''
  });

  useEffect(() => {
    try {
      const button = mountMainButton();
      if (button) {
        button.setText('Заказать услугу');
        button.setBgColor('#007AFF');
        button.onClick(() => {
          console.log('Заказ оформлен:', formData);
          // Здесь можно добавить логику отправки формы
        });
        button.show();
      }

      return () => {
        if (button) {
          button.hide();
        }
      };
    } catch (error) {
      console.log('MainButton недоступен');
    }
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Page back={true}>
      <div style={{
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        minHeight: '100vh',
        fontFamily: 'var(--tg-font-family, -apple-system)',
        paddingTop: '110px'
      }}>
        <Section style={{ 
          backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', 
          padding: 'var(--tg-spacing-l, 16px)', 
          border: 'none'
        }}>
          <h1 style={{
            margin: 0,
            marginBottom: 'var(--tg-spacing-xl, 24px)',
            fontSize: '24px',
            fontWeight: '700',
            color: 'var(--tg-theme-text-color, #000)'
          }}>
            Контактная информация
          </h1>

          {/* Получатель */}
          <div style={{ marginBottom: 'var(--tg-spacing-l, 16px)' }}>
            <label style={{
              display: 'block',
              marginBottom: 'var(--tg-spacing-s, 8px)',
              fontSize: '17px',
              fontWeight: '600',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Получатель
            </label>
            <Input
              placeholder="Получатель"
              value={formData.recipient}
              onChange={(e) => handleInputChange('recipient', e.target.value)}
              style={{
                width: '100%',
                marginBottom: 'var(--tg-spacing-m, 12px)'
              }}
            />
          </div>

          {/* Имя */}
          <div style={{ marginBottom: 'var(--tg-spacing-l, 16px)' }}>
            <Input
              placeholder="Имя"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              style={{
                width: '100%',
                marginBottom: 'var(--tg-spacing-m, 12px)'
              }}
            />
          </div>

          {/* Фамилия */}
          <div style={{ marginBottom: 'var(--tg-spacing-l, 16px)' }}>
            <Input
              placeholder="Фамилия"
              value={formData.surname}
              onChange={(e) => handleInputChange('surname', e.target.value)}
              style={{
                width: '100%',
                marginBottom: 'var(--tg-spacing-m, 12px)'
              }}
            />
          </div>

          {/* Отчество */}
          <div style={{ marginBottom: 'var(--tg-spacing-l, 16px)' }}>
            <Input
              placeholder="Отчество"
              value={formData.patronymic}
              onChange={(e) => handleInputChange('patronymic', e.target.value)}
              style={{
                width: '100%',
                marginBottom: 'var(--tg-spacing-m, 12px)'
              }}
            />
          </div>

          {/* Телефон */}
          <div style={{ marginBottom: 'var(--tg-spacing-xl, 24px)' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid var(--tg-theme-separator-color, #E5E5EA)',
              borderRadius: 'var(--tg-border-radius, 12px)',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
                backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
                borderRight: '1px solid var(--tg-theme-separator-color, #E5E5EA)'
              }}>
                <span style={{ fontSize: '20px', marginRight: '8px' }}>🇷🇺</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>+7</span>
              </div>
              <Input
                placeholder="000 000 00 00"
                value={formData.phone.slice(2)}
                onChange={(e) => handleInputChange('phone', '+7' + e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  borderRadius: 0
                }}
              />
            </div>
          </div>

          {/* Примечание к заказу */}
          <div style={{ marginBottom: 'var(--tg-spacing-xl, 24px)' }}>
            <label style={{
              display: 'block',
              marginBottom: 'var(--tg-spacing-s, 8px)',
              fontSize: '17px',
              fontWeight: '600',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Примечание к заказу
            </label>
            <Input
              placeholder="Комментарии к заказу"
              value={formData.orderNote}
              onChange={(e) => handleInputChange('orderNote', e.target.value)}
              style={{
                width: '100%'
              }}
            />
          </div>

          {/* Адрес доставки */}
          <div style={{ marginBottom: 'var(--tg-spacing-xl, 24px)' }}>
            <label style={{
              display: 'block',
              marginBottom: 'var(--tg-spacing-s, 8px)',
              fontSize: '17px',
              fontWeight: '600',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Куда
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
              borderRadius: 'var(--tg-border-radius, 12px)',
              marginBottom: 'var(--tg-spacing-l, 16px)'
            }}>
              <span style={{ fontSize: '20px', marginRight: '12px' }}>🏠</span>
              <span style={{ fontSize: '17px', flex: 1 }}>{formData.address}</span>
              <span style={{ fontSize: '20px', color: 'var(--tg-theme-hint-color, #8E8E93)' }}>▼</span>
            </div>

            {/* Дополнительная информация */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--tg-spacing-m, 12px)',
              marginBottom: 'var(--tg-spacing-l, 16px)'
            }}>
              <Input
                placeholder="Подъезд"
                value={formData.entrance}
                onChange={(e) => handleInputChange('entrance', e.target.value)}
              />
              <Input
                placeholder="Домофон"
                value={formData.intercom}
                onChange={(e) => handleInputChange('intercom', e.target.value)}
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--tg-spacing-m, 12px)'
            }}>
              <Input
                placeholder="Кв/офис"
                value={formData.apartment}
                onChange={(e) => handleInputChange('apartment', e.target.value)}
              />
              <Input
                placeholder="Этаж"
                value={formData.floor}
                onChange={(e) => handleInputChange('floor', e.target.value)}
              />
            </div>
          </div>

          {/* Отступ для MainButton */}
          <div style={{ height: '80px' }} />
        </Section>
      </div>
    </Page>
  );
};
