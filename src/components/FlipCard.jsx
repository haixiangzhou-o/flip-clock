import './FlipCard.css'

export default function FlipCard({ digit, prevDigit, isFlipping }) {
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
