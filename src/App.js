import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getCompanyNames(numberOfCompanies) {
    let items = ["Uber", "Lyft", "Postmates", "Airbnb", "Zenefits", "Apple", "Amazon"]
    return this.shuffleArray(items).slice(numberOfCompanies)
  }

  getPrepositions(numberOfPhrases) {
    let items = ["and", "but with", "built on", "fermented by", "distilled into", "paired with", "combined with", "ripping off"]
    return this.shuffleArray(items).slice(numberOfPhrases)
  }

  getAdjectivePhrases(numberOfPhrases) {
    let items = ["on the backend", "on crack", "but on fleek", "had a baby"]
    return this.shuffleArray(items).slice(numberOfPhrases)
  }

  createSentence() {
    let companyNames = this.getCompanyNames(3),
        prepositions = this.getPrepositions(3),
        adjectivePhrases = this.getAdjectivePhrases(2),
        sentenceFormats = [
          `${companyNames[0]} ${prepositions[0]} ${companyNames[1]} ${prepositions[1]} ${companyNames[2]} ${adjectivePhrases[0]}.`,
          `${companyNames[0]} ${prepositions[0]} ${companyNames[1]} ${adjectivePhrases[0]}.`,
          `${companyNames[0]} ${adjectivePhrases[0]} ${prepositions[0]} ${companyNames[1]} ${adjectivePhrases[1]}.`,
          `${companyNames[0]} ... ${adjectivePhrases[0]}.`
        ],
        randomIndex = Math.floor(Math.random() * sentenceFormats.length)
    return sentenceFormats[randomIndex]
  }

  setSentence() {
    let sentence = this.createSentence()
    this.setState({ sentence })
  }

  shuffleArray(array) {
    return array.sort( () => Math.random() - 0.5)
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
