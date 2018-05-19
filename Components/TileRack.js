import React from 'react';
import { StyleSheet, View } from 'react-native';
import { includes, partial } from 'lodash/fp';
import { Tile, GameOverTile } from './Tile';
import letterPoints from '../letterPoints.json';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  score: {
    flexGrow: 2,
    paddingLeft: 15,
  },
});

export default function TileRack({ rack, selectedTiles, score, toggleLetter, beginGame }) {
  let letters = rack.map((letter, index) => {
    const isSelected = includes(index, selectedTiles);

    return (
      <Tile
        key={index}
        letter={letter}
        points={letterPoints[letter]}
        isSelected={isSelected}
        onPress={partial(toggleLetter, [index])}
      />
    );
  });

  if (rack.length === 0) {
    letters = (
      <GameOverTile score={score} onPress={beginGame} />
    );
  }

  return (
    <View style={styles.container}>
      {letters}
    </View>
  );
}
