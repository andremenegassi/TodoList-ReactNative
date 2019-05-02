
import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

import MyButton from "./src/components/MyButton";

import styles from './src/components/styles';

export default class App extends Component{
  

  add(){

      alert("adddllll");
  }


  render() {

    let html =   
      <View style={styles.container.main}>
        <View>
        
        <Text style={styles.inputs.label}>
          Item
        </Text>
        <TextInput style={styles.inputs.textBox} placeholder="digite aqui"  />
        <MyButton label="+" onPress={this.add}></MyButton>
        
        </View>
        <View>
            <Text>Items:</Text>
        </View>
      </View>

    return html;
  }
}


