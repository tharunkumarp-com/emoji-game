// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, filteredNames} = this.props
    return (
      <nav className="navbar">
        <div className="div-logo">
          <img
            alt="logo1"
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="game-name">Emoji Game</h1>
        </div>
        {filteredNames.length === 0 ? (
          <div className="scores-div">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        ) : null}
      </nav>
    )
  }
}

export default NavBar
