import React from 'react';

const BackgroundAnimation = () => {
  const backgroundElements = [
    { symbol: 'H', number: 1 }, { symbol: 'He', number: 2 }, { symbol: 'Li', number: 3 },
    { symbol: 'Be', number: 4 }, { symbol: 'C', number: 6 }, { symbol: 'N', number: 7 },
    { symbol: 'O', number: 8 }, { symbol: 'F', number: 9 }, { symbol: 'Ne', number: 10 },
    { symbol: 'Na', number: 11 }, { symbol: 'Mg', number: 12 }, { symbol: 'Al', number: 13 },
    { symbol: 'Si', number: 14 }, { symbol: 'P', number: 15 }, { symbol: 'S', number: 16 },
    { symbol: 'Cl', number: 17 }, { symbol: 'Ar', number: 18 }, { symbol: 'K', number: 19 },
    { symbol: 'Ca', number: 20 }
  ];

  const ElementCard = ({ element, shouldAnimate }) => {
    const getRandomAnimation = () => {
      const animations = ['spin', 'flipX', 'flipY', 'wobble'];
      return animations[Math.floor(Math.random() * animations.length)];
    };
    
    const animationClass = shouldAnimate ? getRandomAnimation() : '';
    const delay = shouldAnimate ? `${Math.random() * 10}s` : '0s';
    
    return (
      <div 
        className={animationClass}
        style={{
          width: '80px',
          height: '80px',
          border: '2px solid rgba(31, 32, 32, 0.3)',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(5px)',
          flexShrink: 0,
          animationDelay: delay
        }}>
        <div style={{ fontSize: '10px', color: 'rgba(17, 17, 17, 0.6)' }}>
          {element.number}
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', margin: '5px 0' }}>
          {element.symbol}
        </div>
      </div>
    );
  };

  const createElementRow = (rowIndex) => {
    const row = [];
    for (let i = 0; i < 20; i++) {
      const element = backgroundElements[Math.floor(Math.random() * backgroundElements.length)];
      const shouldAnimate = Math.random() < 0.30; // 15% 확률로 애니메이션
      row.push(<ElementCard key={`${rowIndex}-${i}`} element={element} shouldAnimate={shouldAnimate} />);
    }
    return row;
  };

  const AnimatedRow = ({ children, topPosition, animationClass }) => (
    <div style={{ 
      position: 'absolute', 
      left: 0, 
      whiteSpace: 'nowrap',
      top: topPosition 
    }}>
      <div style={{ display: 'flex', gap: '60px' }} className={animationClass}>
        {children}
        {children}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes spin {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(360deg); }
        }
        @keyframes flipX {
          0%, 100% { transform: rotateX(0deg); }
          50% { transform: rotateX(180deg); }
        }
        @keyframes flipY {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(15deg) scale(1.1); }
          75% { transform: rotate(-15deg) scale(1.1); }
        }
        .scroll-left-40 { animation: scrollLeft 40s linear infinite; }
        .scroll-right-35 { animation: scrollRight 35s linear infinite; }
        .scroll-left-45 { animation: scrollLeft 45s linear infinite; }
        .scroll-right-38 { animation: scrollRight 38s linear infinite; }
        .scroll-left-42 { animation: scrollLeft 42s linear infinite; }
        .scroll-right-40 { animation: scrollRight 40s linear infinite; }
        .spin { animation: spin 3s ease-in-out 1; }
        .flipX { animation: flipX 2.5s ease-in-out 1; }
        .flipY { animation: flipY 2.5s ease-in-out 1; }
        .wobble { animation: wobble 2s ease-in-out 1; }
      `}</style>

      <div style={{
        position: 'fixed',
        top: 100,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        opacity: 0.15,
        pointerEvents: 'none'
      }}>
        <AnimatedRow topPosition="0px" animationClass="scroll-left-40">
          {createElementRow(0)}
        </AnimatedRow>
        <AnimatedRow topPosition="100px" animationClass="scroll-right-35">
          {createElementRow(1)}
        </AnimatedRow>
        <AnimatedRow topPosition="200px" animationClass="scroll-left-45">
          {createElementRow(2)}
        </AnimatedRow>
      </div>
    </>
  );
};

export default BackgroundAnimation;