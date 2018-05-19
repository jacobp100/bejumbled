import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Touchable from './Touchable';

const styles = StyleSheet.create({
  tileContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    maxWidth: 65,
  },
  tile: {
    paddingVertical: 5,
    marginHorizontal: 3,
    marginVertical: 10,
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
    marginRight: 5,
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
  gameOver: {
    marginTop: -2,
    marginBottom: 2,
  },
});

export function Tile({ letter, points, isSelected, onPress }) {
  return (
    <View style={styles.tileContainer}>
      <Touchable onPress={onPress}>
        <View style={[styles.tile, isSelected && styles.tileSelected]}>
          <Text style={[styles.tileLetter, isSelected && styles.tileLetterSelected]}>
            {letter}
          </Text>
          <Text style={[styles.tilePoints, isSelected && styles.tileLetterSelected]}>
            {points}
          </Text>
        </View>
      </Touchable>
    </View>
  );
}

export function GameOverTile({ score, onPress }) {
  return (
    <View style={styles.tileContainer}>
      <Touchable onPress={onPress}>
        <View style={styles.tile}>
          <Text style={[styles.tileLetter, styles.gameOver]}>
            GAME OVER
          </Text>
          <Text style={[styles.tilePoints, styles.tilePointsScore]}>
            FINAL SCORE: {score}
          </Text>
        </View>
      </Touchable>
    </View>
  );
}
