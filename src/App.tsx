import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; delay: number }[]>([])

  useEffect(() => {
    const createStars = () => {
      return Array.from({ length: 300 }, () => ({
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5
      }))
    }

    setStars(createStars())
  }, [])

  return (
    <>
      <div className="starfield">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="content">
        <h1 className="title">Hey KARTIK!!</h1>
        <div className="cooking-text">Something is Cooking...</div>
        <a
          href="https://instagram.com/kartikey.mittal3"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-button"
        >
          @kartikey.mittal3
        </a>
      </div>
    </>
  )
}

export default App