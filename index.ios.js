'use strict';
import React, { AppRegistry, Component } from 'react-native';
import Bejumbled from './Components/App';


class bejumbled extends Component {
  render() {
    return <Bejumbled />;
  }
}

AppRegistry.registerComponent('bejumbled', () => bejumbled);
