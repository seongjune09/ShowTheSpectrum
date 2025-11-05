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

  const ElementCard = ({ element }) => (
    <div style={{
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
      flexShrink: 0
    }}>
      <div style={{ fontSize: '10px', color: 'rgba(17, 17, 17, 0.6)' }}>
        {element.number}
      </div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', margin: '5px 0' }}>
        {element.symbol}
      </div>
    </div>
  );

  const createElementRow = (rowIndex) => {
    const row = [];
    for (let i = 0; i < 40; i++) {
      const element = backgroundElements[Math.floor(Math.random() * backgroundElements.length)];
      row.push(<ElementCard key={`${rowIndex}-${i}`} element={element} />);
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
      <div style={{ display: 'flex', gap: '20px' }} className={animationClass}>
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
        .scroll-left-40 { animation: scrollLeft 40s linear infinite; }
        .scroll-right-35 { animation: scrollRight 35s linear infinite; }
        .scroll-left-45 { animation: scrollLeft 45s linear infinite; }
        .scroll-right-38 { animation: scrollRight 38s linear infinite; }
        .scroll-left-42 { animation: scrollLeft 42s linear infinite; }
        .scroll-right-40 { animation: scrollRight 40s linear infinite; }
      `}</style>

      <div style={{
        position: 'fixed',
        top: 0,
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
        <AnimatedRow topPosition="300px" animationClass="scroll-right-38">
          {createElementRow(3)}
        </AnimatedRow>
        <AnimatedRow topPosition="400px" animationClass="scroll-left-42">
          {createElementRow(4)}
        </AnimatedRow>
        <AnimatedRow topPosition="500px" animationClass="scroll-right-40">
          {createElementRow(5)}
        </AnimatedRow>
      </div>
    </>
  );
};

export default BackgroundAnimation;