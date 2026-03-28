import './ToggleSwitch.css'

export default function ToggleSwitch({ isOn, onToggle }) {
  return (
    <div className="toggle-wrapper">
      <button
        className={`toggle-switch ${isOn ? 'on' : 'off'}`}
        onClick={onToggle}
        role="switch"
        aria-checked={isOn}
      >
        <span className="toggle-track">
          <span className="toggle-dot left" />
          <span className="toggle-dot right" />
        </span>
        <span className="toggle-knob" />
      </button>
      <span className="toggle-label">{isOn ? '24H' : '12H'}</span>
    </div>
  )
}
