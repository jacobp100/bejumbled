import React, { Component, StyleSheet, View } from 'react-native';
import { beginGame, addWord, toggleLetter, clearTiles, shuffleRack } from '../actions';
import Backdrop from './Backdrop';
import Header from './Header';
import WordEntry from './WordEntry';
import PlayControls from './PlayControls';
import TileRack from './TileRack';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#feda7a',
  },
});

export default class Bejumbled extends Component {
  constructor() {
    super();

    // FIXME: Save and get best and best word score to/from device
    this.state = beginGame({});
    this.beginGame = () => this.setState(beginGame(this.state));
    this.toggleLetter = index => this.setState(toggleLetter(this.state, index));
    this.addWord = () => this.setState(addWord(this.state));
    this.clearTiles = () => this.setState(clearTiles(this.state));
    this.shuffleRack = () => this.setState(shuffleRack(this.state));
  }

  render() {
    const {
      rack, selectedTiles, wordScore, score, remainingLetters, wordIsValid, bestScore,
    } = this.state;

    return (
      <View style={ styles.container }>
        <Backdrop />
        <Header beginGame={ this.beginGame } />
        <WordEntry
          rack={ rack }
          selectedTiles={ selectedTiles }
          wordIsValid={ wordIsValid }
          bestScore={ bestScore }
          score={ score }
          wordScore={ wordScore }
          remainingLetters={ remainingLetters }
        />
        <PlayControls
          addWord={ this.addWord }
          clearTiles={ this.clearTiles }
          shuffleRack={ this.shuffleRack }
        />
        <TileRack
          rack={ rack }
          selectedTiles={ selectedTiles }
          score={ score }
          toggleLetter={ this.toggleLetter }
          beginGame={ this.beginGame }
        />
      </View>
    );
  }
}
