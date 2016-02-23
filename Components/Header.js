import React, { StyleSheet, TouchableNativeFeedback, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  headerButtonText: {
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
    color: '#F57F17',
    textShadowColor: '#FFF9C4',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
  },
});

export default function Header({ beginGame, showStats }) {
  return (
    <View style={ styles.container }>
      <TouchableNativeFeedback onPress={ beginGame }>
        <View style={ styles.headerButton }>
          <Text style={ styles.headerButtonText }>NEW GAME</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
