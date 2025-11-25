import React from 'react';

const BackgroundAnimation = () => {
  const pastelColors = [
    '#FF8B94', // 진한 파스텔 핑크
    '#FFBD88', // 진한 파스텔 오렌지
    '#FFF088', // 진한 파스텔 옐로우
    '#88FFAA', // 진한 파스텔 민트
    '#88CCFF', // 진한 파스텔 블루
    '#D19FE8', // 진한 파스텔 라벤더
    '#FFA8CC', // 진한 파스텔 로즈
    '#9FD8D0', // 진한 파스텔 터콰이즈
    '#C589FF', // 진한 파스텔 퍼플
    '#FFCAB0', // 진한 파스텔 피치
    '#B0BBDF', // 진한 파스텔 페리윙클
    '#90E5AF', // 진한 파스텔 라임
    '#FFD28A', // 진한 파스텔 복숭아
    '#D9BFA8', // 진한 파스텔 베이지
    '#A0DDD9', // 진한 파스텔 아쿠아
    '#F5D1DC', // 진한 파스텔 블러쉬
    '#B0E8C8', // 진한 파스텔 그린
    '#FFCCD5', // 진한 파스텔 코랄
    '#C9B8D4', // 진한 파스텔 모브
    '#FFBEC9'  // 진한 파스텔 새먼
  ];

  const backgroundElements = [
    { symbol: 'H', number: 1, color: pastelColors[0] },
    { symbol: 'He', number: 2, color: pastelColors[1] },
    { symbol: 'Li', number: 3, color: pastelColors[2] },
    { symbol: 'Be', number: 4, color: pastelColors[3] },
    { symbol: 'B', number: 5, color: pastelColors[4] },
    { symbol: 'C', number: 6, color: pastelColors[5] },
    { symbol: 'N', number: 7, color: pastelColors[6] },
    { symbol: 'O', number: 8, color: pastelColors[7] },
    { symbol: 'F', number: 9, color: pastelColors[8] },
    { symbol: 'Ne', number: 10, color: pastelColors[9] },
    { symbol: 'Na', number: 11, color: pastelColors[10] },
    { symbol: 'Mg', number: 12, color: pastelColors[11] },
    { symbol: 'Al', number: 13, color: pastelColors[12] },
    { symbol: 'Si', number: 14, color: pastelColors[13] },
    { symbol: 'P', number: 15, color: pastelColors[14] },
    { symbol: 'S', number: 16, color: pastelColors[15] },
    { symbol: 'Cl', number: 17, color: pastelColors[16] },
    { symbol: 'Ar', number: 18, color: pastelColors[17] },
    { symbol: 'K', number: 19, color: pastelColors[18] },
    { symbol: 'Ca', number: 20, color: pastelColors[19] }
  ];

  const ElementCard = ({ element, shouldAnimate }) => {
    const getRandomAnimation = () => {

      const animations = [
        { name: 'spin', weight: 1 },    // spin 확률
        { name: 'flipX', weight: 1 },   // flipX 확률
        { name: 'flipY', weight: 1 },   // flipY 확률
        { name: 'wobble', weight: 1 }   // wobble 확률
      ];

      const totalWeight = animations.reduce((sum, anim) => sum + anim.weight, 0);
      let random = Math.random() * totalWeight;

      for (const anim of animations) {
        random -= anim.weight;
        if (random <= 0) return anim.name;
      }

      return animations[0].name;
    };

    const animationClass = shouldAnimate ? getRandomAnimation() : '';
    const delay = shouldAnimate ? `${Math.random() * 10}s` : '0s';
    
    return (
      <div
        className={animationClass}
        style={{
          width: '80px',
          height: '80px',
          border: `2px solid ${element.color}`,
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: element.color,
          backdropFilter: 'blur(5px)',
          flexShrink: 0,
          animationDelay: delay
        }}>
        <div style={{ fontSize: '20px', color: 'rgba(0, 0, 0, 1)' }}>
          {element.number}
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'rgba(1, 1, 1, 1)', margin: '5px 0' }}>
          {element.symbol}
        </div>
      </div>
    );
  };

  const createElementRow = (rowIndex) => {
    const row = [];
    for (let i = 0; i < 20; i++) {
      const element = backgroundElements[Math.floor(Math.random() * backgroundElements.length)];
      const shouldAnimate = Math.random() < 0.20; 
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
      <div style={{ display: 'flex', gap: '50px' }} className={animationClass}>
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
        .spin { animation: spin 3s ease-in-out infinite; }
        .flipX { animation: flipX 2.5s ease-in-out infinite; }
        .flipY { animation: flipY 2.5s ease-in-out infinite; }
        .wobble { animation: wobble 2s ease-in-out infinite; }
      `}</style>

      <div style={{
        position: 'absolute',
        top: 40,
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
        <AnimatedRow topPosition="800px" animationClass="scroll-left-45">
          {createElementRow(3)}
        </AnimatedRow>
      </div>
    </>
  );
};

export default BackgroundAnimation;