import React, {Component} from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import AuthenticatorUI from '../components/AuthenticatorUI';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail = (email) => {
    this.setState({
      email: email,
    });
  };

  setPassword = (password) => {
    this.setState({
      password: password,
    });
  };

  createUser = async () => {
    let response = await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
    let {user} = response; //destrucuring de objetos
    console.log(user);
  };

  render() {
    return (
      <AuthenticatorUI
        setPassword={this.setPassword}
        setEmail={this.setEmail}
        mainButtonTitle="Crear cuenta"
        navigationAction={() => {
          this.props.navigation.navigate('Login');
        }}
        mainAction={this.createUser}
        secondaryButtonTitle="Ya tengo cuenta"
      />
    );
  }
}
