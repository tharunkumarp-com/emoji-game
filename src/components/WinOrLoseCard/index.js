// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  changeMode = () => {
    const {score, topScore, updatePage} = this.props
    const finalScore = score > topScore ? score : topScore
    updatePage(finalScore)
  }

  render() {
    const {score} = this.props

    const imgUrl =
      score < 12
        ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    const text = score < 12 ? 'You Lose' : 'You Won'
    const para = score < 12 ? 'Score' : 'Best Score'

    return (
      <div className="card-container">
        <div className="win-lose-card">
          <div className="content">
            <h1>{text}</h1>
            <p>{para}</p>
            <h1>{score}/12</h1>
            <button type="button" onClick={this.changeMode}>
              Play Again
            </button>
          </div>
          <img alt="winner" src={imgUrl} />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
