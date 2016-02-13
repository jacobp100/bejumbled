import React, { StyleSheet, View } from 'react-native';
import WordSpace from './WordSpace';
import Score from './Scores';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  score: {
    flex: 2,
    paddingLeft: 15,
  },
});

export default function WordEntry(
  { rack, selectedTiles, wordIsValid, score, wordScore, bestScore, remainingLetters }
) {
  const word = [1, 1, 1, 2, 3, 4, 5].map((multiplier, index) => {
    let letter = ' ';
    if (index in selectedTiles) {
      letter = rack[selectedTiles[index]];
    }

    const multiplierText = (multiplier === 1) ? ' ' : `× ${multiplier}`;
    const multiplierActive = multiplier !== 1 && selectedTiles.length === index + 1;

    return (
      <WordSpace
        key={ index }
        letter={ letter }
        wordIsValid={ wordIsValid }
        multiplierText={ multiplierText }
        multiplierActive={ multiplierActive }
      />
    );
  });

  return (
    <View style={ styles.container }>
      { word }
      <View style={ styles.score }>
        <Score label="best" value={ bestScore } />
        <Score label="total" value={ score } />
        <Score label="word" value={ wordScore } />
        <Score label="remaining" value={ remainingLetters.length } />
      </View>
    </View>
  );
}
