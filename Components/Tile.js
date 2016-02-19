import React, { StyleSheet, TouchableNativeFeedback, View, Text } from 'react-native';

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    // maxWidth: 60,
    padding: 5,
    margin: 5,
    backgroundColor: '#FFF9C4',
    borderWidth: 2,
    borderColor: '#3E2723',
  },
  tileLetter: {
    fontSize: 30,
    textAlign: 'center',
    color: '#3E2723',
  },
  tilePoints: {
    fontSize: 10,
    marginTop: -5,
    fontWeight: '700',
    textAlign: 'right',
    color: '#3E2723',
  },
  tileSelected: {
    backgroundColor: '#3E2723',
  },
  tileLetterSelected: {
    color: '#FFF9C4',
  },
  tilePointsScore: {
    textAlign: 'center',
  },
});

export function Tile({ letter, points, isSelected, onPress }) {
  return (
    <TouchableNativeFeedback onPress={ onPress }>
      <View style={[styles.tile, isSelected && styles.tileSelected]}>
        <Text style={[styles.tileLetter, isSelected && styles.tileLetterSelected]}>
          { letter }
        </Text>
        <Text style={[styles.tilePoints, isSelected && styles.tileLetterSelected]}>
          { points }
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export function GameOverTile({ score, onPress }) {
  return (
    <TouchableNativeFeedback onPress={ onPress }>
      <View style={ styles.tile }>
        <Text style={ styles.tileLetter }>
          GAME OVER
        </Text>
        <Text style={[styles.tilePoints, styles.tilePointsScore]}>
          FINAL SCORE: { score }
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}
