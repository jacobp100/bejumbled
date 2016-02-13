import React, { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  wordSpace: {
    flex: 1,
    margin: 5,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    borderColor: '#212121',
    borderBottomWidth: 5,
  },
  wordSpaceInvalid: {
    borderColor: '#d32f2f',
  },
  wordLetter: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: '#212121',
    textShadowColor: '#FFF9C4',
    textShadowOffset: {
      width: 1,
      height: 2,
    },
  },
  wordLetterInvalid: {
    color: '#e53935',
  },
  wordMultiplier: {
    fontSize: 10,
    color: '#424242',
  },
  wordMultiplierContainer: {
    padding: 3,
    borderRadius: 100,
  },
  wordMultiplierActive: {
    color: '#FAFAFA',
  },
  wordMultiplierContainerActive: {
    backgroundColor: '#FF5722',
  },
});

export default function WordSpace({ letter, wordIsValid, multiplierText, multiplierActive }) {
  return (
    <View style={[styles.wordSpace, !wordIsValid && styles.wordSpaceInvalid]}>
      <View style={[
        styles.wordMultiplierContainer,
        multiplierActive && styles.wordMultiplierContainerActive]}
      >
        <Text style={[styles.wordMultiplier, multiplierActive && styles.wordMultiplierActive]}>
          { multiplierText }
        </Text>
      </View>
      <Text style={[styles.wordLetter, !wordIsValid && styles.wordLetterInvalid]}>
        { letter }
      </Text>
    </View>
  );
}
