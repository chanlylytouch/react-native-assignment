import React, {Component} from 'react';
import {
  Alert,
  useState,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  onRegister() {
    const {email, password, confirmPassword} = this.state;
    let errorFlag = false;
    if (password !== confirmPassword) {
      errorFlag = true;
      alert('Password and confirm password should be the same');
    }
    if (password == '' && confirmPassword == '' && email == '') {
      alert('Please input your password');
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true && email != '') {
    } else {
      alert('Invalide email');
    }
    if (reg.test(email) === true && password == confirmPassword) {
      alert(
        'Your password is: ' + this.state.email + ' ' + this.state.password,
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'black'}}>
          Register Form
        </Text>
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.confirmPassword}
          onChangeText={confirmPassword => this.setState({confirmPassword})}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={this.onRegister.bind(this)}
          style={styles.button}>
          <Text style={{color: 'white', fontSize: 16}}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'blue',
    margin: 10,
    height: 40,
    borderRadius: 5,
  },
  container: {
    paddingTop: 10,
  },
  input: {
    margin: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
});
