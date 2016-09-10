import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Touchable from './Touchable';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  playButton: {
    flex: 1,
    margin: 10,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#FF5722',
  },
  playButtonAlternate: {
    backgroundColor: '#4E342E',
  },
  playButtonText: {
    fontSize: 15,
    color: '#FAFAFA',
  },
});

export default function PlayControls({ addWord, clearTiles, shuffleRack }) {
  return (
    <View style={styles.container}>
      <Touchable onPress={addWord}>
        <View style={styles.playButton}>
          <Text style={styles.playButtonText}>SUBMIT</Text>
        </View>
      </Touchable>
      <Touchable onPress={shuffleRack}>
        <View style={[styles.playButton, styles.playButtonAlternate]}>
          <Text style={styles.playButtonText}>SHUFFLE</Text>
        </View>
      </Touchable>
      <Touchable onPress={clearTiles}>
        <View style={[styles.playButton, styles.playButtonAlternate]}>
          <Text style={styles.playButtonText}>CLEAR</Text>
        </View>
      </Touchable>
    </View>
  );
}
