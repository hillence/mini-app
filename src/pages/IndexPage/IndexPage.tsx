import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div style={{
        padding: '16px',
        background: 'var(--tg-theme-bg-color, #ffffff)',
        minHeight: '100vh'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 0',
          borderBottom: '1px solid var(--tg-theme-hint-color, #c8c7cc)'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#4CAF50',
            borderRadius: '50%'
          }} />
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 0',
          borderBottom: '1px solid var(--tg-theme-hint-color, #c8c7cc)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--tg-theme-text-color, #000)',
                borderRadius: '1px'
              }} />
              <div style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--tg-theme-text-color, #000)',
                borderRadius: '1px'
              }} />
              <div style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--tg-theme-text-color, #000)',
                borderRadius: '1px'
              }} />
            </div>
          </div>
          
          <h1 style={{
            fontSize: '18px',
            fontWeight: '600',
            margin: '0',
            color: 'var(--tg-theme-text-color, #000)'
          }}>
            HOLD market
          </h1>
          
          <div style={{
            width: '24px',
            height: '24px',
            border: '2px solid var(--tg-theme-text-color, #000)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              border: '1px solid var(--tg-theme-text-color, #000)',
              borderRadius: '50%'
            }} />
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px 0',
          fontSize: '16px',
          color: 'var(--tg-theme-text-color, #000)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}>
            <div style={{
              width: '12px',
              height: '2px',
              backgroundColor: 'var(--tg-theme-text-color, #000)'
            }} />
            <div style={{
              width: '8px',
              height: '2px',
              backgroundColor: 'var(--tg-theme-text-color, #000)'
            }} />
          </div>
          
          <span>Категории</span>
          <div style={{
            marginLeft: 'auto',
            transform: 'rotate(180deg)',
            fontSize: '12px'
          }}>
            ▲
          </div>
          
          <span style={{ marginLeft: '16px' }}>В НАЛИЧИИ</span>
          <span style={{ marginLeft: '16px' }}>ПОД ЗАКАЗ</span>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #FF9A56 0%, #FF6B6B 25%, #A855F7 50%, #06B6D4 75%, #10B981 100%)',
          borderRadius: '16px',
          padding: '20px',
          margin: '16px 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            color: 'white',
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '8px'
          }}>
            ОСЕНЬ
          </div>
          <div style={{
            color: 'white',
            fontSize: '16px',
            textAlign: 'center',
            opacity: '0.9'
          }}>
            одежда и обувь
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '20px'
          }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                {item === 1 ? '👟' : item === 2 ? '🧢' : item === 3 ? '🧥' : item === 4 ? '👢' : '👕'}
              </div>
            ))}
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '16px'
          }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }} />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '12px',
          margin: '16px 0'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #06B6D4, #0EA5E9)',
            borderRadius: '12px',
            padding: '16px',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px'
          }}>
            ⌚
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #F59E0B, #EAB308)',
            borderRadius: '12px',
            padding: '16px',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px'
          }}>
            👜
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #FF6B35, #F59E0B)',
            borderRadius: '12px',
            padding: '16px',
            aspectRatio: '1',
            position: 'relative',
            color: 'white'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>ОБУВЬ ДО</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4ADE80' }}>10K</div>
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              fontSize: '16px'
            }}>
              😊
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px'
        }}>
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              height: '200px',
              background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px'
            }}>
              👟
            </div>
            <div style={{
              padding: '12px',
              backgroundColor: 'var(--tg-theme-bg-color, #ffffff)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '4px'
              }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'var(--tg-theme-text-color, #000)'
                }}>
                  11 747 ₽
                </span>
                <span style={{
                  fontSize: '14px',
                  color: 'var(--tg-theme-hint-color, #999)',
                  textDecoration: 'line-through'
                }}>
                  15 750 ₽
                </span>
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--tg-theme-text-color, #000)',
                lineHeight: '1.3'
              }}>
                Adidas Samba "Wonder"
              </div>
            </div>
          </div>

          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              height: '200px',
              background: 'linear-gradient(45deg, #2a2a2a, #1a1a1a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              position: 'relative'
            }}>
              👟
              <div style={{
                position: 'absolute',
                bottom: '8px',
                right: '8px',
                width: '24px',
                height: '24px',
                backgroundColor: '#007AFF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                1
              </div>
            </div>
            <div style={{
              padding: '12px',
              backgroundColor: 'var(--tg-theme-bg-color, #ffffff)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '4px'
              }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'var(--tg-theme-text-color, #000)'
                }}>
                  9 650 ₽
                </span>
                <span style={{
                  fontSize: '14px',
                  color: 'var(--tg-theme-hint-color, #999)',
                  textDecoration: 'line-through'
                }}>
                  11 650 ₽
                </span>
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--tg-theme-text-color, #000)',
                lineHeight: '1.3'
              }}>
                Adidas "Samba OG Black"
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
