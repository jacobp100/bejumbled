import React, { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  scoreEntry: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scoreLabel: {
    flex: 3,
    marginRight: 6,
    textAlign: 'right',
    fontSize: 10,
    fontWeight: '900',
    color: '#F57F17',
  },
  scoreValue: {
    flex: 2,
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6F00',
  },
});

export default function Score({ label, value }) {
  return (
    <View style={ styles.scoreEntry }>
      <Text style={ styles.scoreLabel }>{ label.toUpperCase() }</Text>
      <Text style={ styles.scoreValue }>{ value }</Text>
    </View>
  );
}
