
import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

import MyButton from "./src/components/MyButton";

import styles from './src/components/styles';

export default class App extends Component{
  
  constructor(props)
  {
    super(props);

    this.state = {
      item:"aaaa"
    }

  }

  add(){

      alert(this.state.item);
  }


  render() {

    let html =   
      <View style={styles.container.main}>
        <View>
        
        <Text style={styles.inputs.label}>
          Item
        </Text>
        <TextInput 
          style={styles.inputs.textBox} 
          placeholder="digite aqui"
          onChangeText={(value) => this.setState({item:value})} 
          value={this.state.item} />
        <MyButton label="+" onPress={this.add.bind(this)}></MyButton>
        
        </View>
        <View>
            <Text>Items:{this.state.item}</Text>
        </View>
      </View>

    return html;
  }
}


