
import React, {Component} from 'react';
import {Text, View, TextInput, FlatList } from 'react-native';

import MyButton from "./src/components/MyButton";

import styles from './src/components/styles';



export default class App extends Component{
  
  constructor(props)
  {
    super(props);

    this.state = {
      item:"",
      dados:[]
    }

  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  add(){

      this.state.dados.push({id: this.guid(), item: this.state.item});
      this.setState({
        item: "",
        dados: this.state.dados
      });
  }

  remove(itemRemove){
    
      let pos = this.state.dados.findIndex((item) => {

          if (itemRemove.id == item.id)
          {
            return true;
          }
      });

      if (pos > -1){

        this.state.dados.splice(pos,1);

        this.setState({
          dados: this.state.dados
        });
  
      }

    
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
        <Text>{this.state.dados.length}</Text>
       
        <FlatList
            data={this.state.dados}
            extraData={this.state}
            keyExtractor={(item) => { return item.id; }}
            renderItem={({ item }) => {
              return (<View>
                    <Text>{item.item}</Text>
                    <MyButton label="X" onPress={this.remove.bind(this, item)}></MyButton>
              </View>);
        }}
      />



        </View>
        
      </View>

    return html;
  }
}


