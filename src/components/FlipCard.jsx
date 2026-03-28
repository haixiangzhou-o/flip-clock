import './FlipCard.css'

export default function FlipCard({ digit, prevDigit, isFlipping }) {
  return (
    <div className="digit-wrapper">
      <div className={`flip-card-3d ${isFlipping ? 'flipping' : ''}`}>
        <div className="card-top">
          <div className="card-inner">
            <span>{prevDigit}</span>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-inner">
            <span>{digit}</span>
          </div>
        </div>
        <div className={`flip-card-top ${isFlipping ? 'flipping' : ''}`}>
          <div className="card-inner">
            <span>{prevDigit}</span>
          </div>
        </div>
        <div className={`flip-card-bottom ${isFlipping ? 'flipping' : ''}`}>
          <div className="card-inner">
            <span>{digit}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
