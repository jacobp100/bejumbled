import { includes, partial } from 'lodash/fp';
import React, { StyleSheet, View } from 'react-native';
import { Tile, GameOverTile } from './Tile';
import letterPoints from '../letterPoints';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  score: {
    flex: 2,
    paddingLeft: 15,
  },
});

export default function TileRack({ rack, selectedTiles, score, toggleLetter, beginGame }) {
  let letters = rack.map((letter, index) => {
    const isSelected = includes(index, selectedTiles);

    return (
      <Tile
        key={ index }
        letter={ letter }
        points={ letterPoints[letter] }
        isSelected={ isSelected }
        onPress={ partial(toggleLetter, [index]) }
      />
    );
  });

  if (rack.length === 0) {
    letters = (
      <GameOverTile score={ score } onPress={ beginGame } />
    );
  }

  return (
    <View style={ styles.container }>
      { letters }
    </View>
  );
}
