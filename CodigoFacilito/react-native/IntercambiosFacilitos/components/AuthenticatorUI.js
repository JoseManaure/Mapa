import React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Title} from 'react-native-paper';
import {TouchableHighlight} from 'react-native-gesture-handler';

import styles from '../stylesheets/login.stylesheet';

export default (props) => {
  return (
    <View style={styles.container}>
      <Title>Ingresar a tu cuenta</Title>
      <TextInput
        style={styles.formControl}
        label="Correo Electronico"
        onChangeText={(text) => props.setEmail(text)}
      />
      <TextInput
        style={styles.formControl}
        label="Contraseña"
        onChangeText={(text) => props.setPassword(text)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          ...styles.formControl,
        }}>
        <TouchableHighlight>
          <Button onPress={() => props.mainAction()} mode="contained">
            {props.mainButtonTitle}
          </Button>
        </TouchableHighlight>
        <TouchableHighlight>
          <Button onPress={() => props.navigationAction()}>
            {props.secondaryButtonTitle}
          </Button>
        </TouchableHighlight>
      </View>
    </View>
  );
};
