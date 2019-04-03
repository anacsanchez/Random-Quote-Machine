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
    fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', {
      // method: "GET",
      // mode:"cors",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      // body: JSON.stringify(data)
      // credentials: "omit"
    })
    // .then(res => res.json())
    .then(res => console.log(res))
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
