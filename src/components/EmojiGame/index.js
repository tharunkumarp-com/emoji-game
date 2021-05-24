/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {names: [], filteredNames: [], score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updatedPage = finalScore => {
    this.setState({
      names: [],
      filteredNames: [],
      score: 0,
      topScore: finalScore,
    })
  }

  wholeCardContent = () => {
    const finalEmojiList = this.shuffledEmojisList()
    const {filteredNames, score, topScore} = this.state
    console.log(score)
    let output
    if (score === 12) {
      output = (
        <WinOrLoseCard
          score={score}
          topScore={topScore}
          updatePage={this.updatedPage}
        />
      )
    } else if (filteredNames.length === 0) {
      output = (
        <ul className="emoji-card">
          {finalEmojiList.map(each => (
            <EmojiCard
              eachEmoji={each}
              onChangeEmojis={this.onChangeEmojis}
              key={each.id}
            />
          ))}
        </ul>
      )
    } else {
      output = (
        <WinOrLoseCard
          score={score}
          topScore={topScore}
          updatePage={this.updatedPage}
        />
      )
    }
    return output
  }

  onChangeEmojis = emojiName => {
    const {names} = this.state
    const data = names.filter(each => each === emojiName)
    names.push(emojiName)
    this.setState({filteredNames: data})
    if (data.length === 0) {
      this.setState(previous => ({score: previous.score + 1}))
    }
  }

  render() {
    const {score, topScore, filteredNames} = this.state

    return (
      <div className="bg-container">
        <NavBar
          score={score}
          topScore={topScore}
          filteredNames={filteredNames}
        />
        <div className="emoji-container">{this.wholeCardContent()}</div>
      </div>
    )
  }
}
export default EmojiGame
