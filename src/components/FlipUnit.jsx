import { useState, useEffect, useRef } from 'react'
import FlipCard from './FlipCard'
import './FlipUnit.css'

export default function FlipUnit({ value, prevValue, label }) {
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
          />
        ))}
      </div>
      <div className="unit-label">{label}</div>
    </div>
  )
}
