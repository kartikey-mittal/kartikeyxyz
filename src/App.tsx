import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <img 
        src={isMobile ? '/mobile.svg' : '/desktop.svg'} 
        alt={isMobile ? "Mobile View" : "Desktop View"}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default App;