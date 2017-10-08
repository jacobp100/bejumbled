import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const backdrop = require('../images/backdrop.png');
const background = require('../images/background.png');

const backgroundRatio = 1.7786458333;

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default class Backdrop extends Component {
  constructor() {
    super();

    // This is shitty
    const { width, height } = Dimensions.get('window');
    this.state = { width, height };
    this.backdropView = null;

    this.adjustWidth = (event) => {
      const { width, height } = event.nativeEvent.layout;
      this.setState({ width, height });
    };
  }

  render() {
    const { width, height } = this.state;
    const backgroundHeight = width / backgroundRatio;

    return (
      <View
        ref={(backdropView) => { this.backdropView = backdropView; }}
        style={styles.fullScreen}
        onLayout={this.adjustWidth}
      >
        <Image
          source={backdrop}
          style={[styles.fullScreen, { width, height }]}
          resizeMode="stretch"
        />
        <Image
          source={background}
          style={{
            position: 'absolute',
            top: (height / 2) - (backgroundHeight / 2),
            left: 0,
            width,
            height: backgroundHeight,
          }}
          resizeMode="cover"
        />
      </View>
    );
  }
}
