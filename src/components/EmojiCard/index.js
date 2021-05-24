// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  gettingScore = () => {
    const {eachEmoji, onChangeEmojis} = this.props
    const {emojiName} = eachEmoji
    onChangeEmojis(emojiName)
  }

  render() {
    const {eachEmoji} = this.props
    const {emojiUrl, emojiName} = eachEmoji
    return (
      <li className="each-emoji">
        <img
          className="emoji"
          alt={emojiName}
          src={emojiUrl}
          onClick={this.gettingScore}
        />
      </li>
    )
  }
}

export default EmojiCard
