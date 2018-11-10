import React, {Component} from 'react';
import QuoteBox from './QuoteBox.js';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: '',
    }
  }

  componentDidMount() {
    this.newQuote();
  }

  newQuote = () => {
    fetch('https://talaikis.com/api/quotes/random/')
    .then(res => res.json())
    .then(res => this.setState({ text: res.quote, author: res.author }))
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        { this.state.text.length ?
        <QuoteBox text={this.state.text} author={this.state.author} fetchQuote={this.newQuote}/> : null
        }
      </div>
    )
  }
}

export default Home;
