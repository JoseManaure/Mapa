import React, {Component} from 'react';
import {View} from 'react-native';

import firebase from '@react-native-firebase/auth';

export default class AuthLoading extends Component {
  componentDidMount() {
    this.getUser();
  }
  getUser() {
    firebase.auth().onUserChanged((user) => {
      if (user) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }
  render() {
    return <View></View>;
  }
}
