import { useState, useEffect } from 'react'
import FlipUnit from './FlipUnit'
import ColonSeparator from './ColonSeparator'
import ToggleSwitch from './ToggleSwitch'
import './FlipClock.css'

function getTimeValues(is24Hour) {
  const now = new Date()
  let hours = now.getHours()
  if (!is24Hour) {
    hours = hours % 12 || 12
  }
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  return { hours, minutes, seconds }
}

function getPrevTimeValues(is24Hour) {
  const now = new Date()
  now.setSeconds(now.getSeconds() - 1)
  let hours = now.getHours()
  if (!is24Hour) {
    hours = hours % 12 || 12
  }
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  return { hours, minutes, seconds }
}

export default function FlipClock() {
  const [is24Hour, setIs24Hour] = useState(false)
  const [time, setTime] = useState(() => getTimeValues(is24Hour))
  const [prevTime, setPrevTime] = useState(() => getPrevTimeValues(is24Hour))

  const isAm = new Date().getHours() < 12

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevTime(time)
      const newTime = getTimeValues(is24Hour)
      setTime(newTime)
    }, 1000)
    return () => clearInterval(interval)
  }, [time, is24Hour])

  return (
    <div className="flip-clock">
      <div className="clock-frame">
        <div className="clock-body">
          <FlipUnit
            value={time.hours}
            prevValue={prevTime.hours}
            label="HOURS"
          />
          <ColonSeparator />
          <FlipUnit
            value={time.minutes}
            prevValue={prevTime.minutes}
            label="MINUTES"
          />
          <ColonSeparator />
          <FlipUnit
            value={time.seconds}
            prevValue={prevTime.seconds}
            label="SECONDS"
          />
          {!is24Hour && (
            <div className="ampm-indicator">
              <span className="ampm-text">{isAm ? 'AM' : 'PM'}</span>
            </div>
          )}
        </div>
        <div className="clock-footer">
          <ToggleSwitch
            isOn={is24Hour}
            onToggle={() => {
              setIs24Hour(!is24Hour)
              setTime(getTimeValues(!is24Hour))
              setPrevTime(getPrevTimeValues(!is24Hour))
            }}
          />
        </div>
      </div>
    </div>
  )
}
