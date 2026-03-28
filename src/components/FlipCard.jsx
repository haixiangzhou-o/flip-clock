import { useState, useEffect, useRef } from 'react'
import './FlipCard.css'

export default function FlipCard({ digit, prevDigit }) {
  const [isFlipping, setIsFlipping] = useState(false)
  const prevDigitRef = useRef(digit)

  useEffect(() => {
    if (prevDigitRef.current !== digit) {
      setIsFlipping(true)
      const timer = setTimeout(() => setIsFlipping(false), 600)
      prevDigitRef.current = digit
      return () => clearTimeout(timer)
    }
  }, [digit])

  return (
    <div className="digit-wrapper">
      <div className={`flip-card-3d ${isFlipping ? 'flipping' : ''}`}>
        <div className="card-face top">
          <div className="card-inner">
            <span>{digit}</span>
          </div>
        </div>
        <div className="card-face bottom">
          <div className="card-inner">
            <span>{digit}</span>
          </div>
        </div>
        <div className="flip-top">
          <div className="card-inner">
            <span>{prevDigit}</span>
          </div>
        </div>
        <div className="flip-bottom">
          <div className="card-inner">
            <span>{digit}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
