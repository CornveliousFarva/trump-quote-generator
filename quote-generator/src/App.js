import React, { Component } from 'react'
import quotes from './QuoteDB'

export default class App extends Component{

  generateQuote = (arr) => {
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    this.setState({
      quote: newQuote.quote
    })

    this.shuffleQuotes(quotes)
  }

  shuffleQuotes = (arr) => {
    return arr.sort(function() {return 0.5 - Math.random() })
  }

  render(){
    return(
      <div class="container">
        <h1 className="text-center">Trump Quote Generator</h1>
      </div>
    )
  }
}