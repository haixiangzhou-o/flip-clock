import { useState, useEffect, useRef } from 'react'
import FlipCard from './FlipCard'
import './FlipUnit.css'

export default function FlipUnit({ value, prevValue, label }) {
  const [flipping, setFlipping] = useState(false)
  const prevValueRef = useRef(value)

  useEffect(() => {
    if (prevValueRef.current !== value) {
      setFlipping(true)
      const timer = setTimeout(() => setFlipping(false), 600)
      prevValueRef.current = value
      return () => clearTimeout(timer)
    }
  }, [value])

  const digits = String(value).padStart(2, '0').split('').map(Number)
  const prevDigits = String(prevValue).padStart(2, '0').split('').map(Number)

  return (
    <div className="flip-unit">
      <div className="digits-container">
        {digits.map((digit, i) => (
          <FlipCard
            key={i}
            digit={digit}
            prevDigit={prevDigits[i]}
            isFlipping={flipping}
          />
        ))}
      </div>
      <div className="unit-label">{label}</div>
    </div>
  )
}
