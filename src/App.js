import React, { Component } from 'react'
import companyNames from './companyNames'
import adjectivePhrases from './adjectivePhrases'
import prepositions from './prepositions'
import './App.css';

class App extends Component {
  sampleFrom(array, numberOfItems) {
    let shuffledArray = array.sort( () => Math.random() - 0.5)
    return shuffledArray.slice(numberOfItems)
  }

  createSentence() {
    let names = this.sampleFrom(companyNames, 3),
        preps = this.sampleFrom(prepositions, 3),
        aps = this.sampleFrom(adjectivePhrases, 2),
        sentenceFormats = [
          `${names[0]} ${preps[0]} ${names[1]} ${preps[1]} ${names[2]} ${aps[0]}.`,
          `${names[0]} ${preps[0]} ${names[1]} ${adjectivePhrases[0]}.`,
          `${names[0]} ${aps[0]} ${preps[0]} ${names[1]} ${aps[1]}.`,
          `${names[0]} ... ${aps[0]}.`
        ],
        randomIndex = Math.floor(Math.random() * sentenceFormats.length)
    return sentenceFormats[randomIndex]
  }

  setSentence() {
    let sentence = this.createSentence()
    this.setState({ sentence })
  }

  componentWillMount() {
    this.setSentence()
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.sentence}</p>
          <button onClick={e => this.setSentence()}>new</button>
      </div>
    );
  }
}

export default App;
