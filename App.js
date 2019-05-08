
import React, {Component} from 'react';
import {Text, View, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';

import MyButton from "./src/components/MyButton";

import styles from './src/components/styles';


const localStyles = StyleSheet.create({

  parte1: {
    backgroundColor:"yellow"
  },

  parte1Form: {
    flexDirection:"row",
    justifyContent: "space-between",
    flexGrow: 1

  },  

  parte1FormInput: {
    flexGrow: 1
  },

  parte2: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    margin: 10
  },

  parte2Item: {
    flexDirection:"row",
    justifyContent: "space-between",
  },

  parte2ItemText: {
   
    flexShrink: 2,
  },

  parte2ItemButton :{
    backgroundColor: "red",
  }


});

export default class App extends Component{

  constructor(props)
  {
    super(props);

    this.state = {
      item:"",
      dados:[{id:1, item:"1111 1111 1 ds dsadsadsasadsad dsadsadsad sasadsa dsad sadsad sads 111"},
       {id:1, item:"1111 1111 1111"}, 
       {id:1, item:"1111 1111 1111"}, 
       {id:1, item:"1111 1111 1111"}, 
       {id:1, item:"1111 1111 1111"}, 
       {id:1, item:"1111 1111 1111"}, 
       {id:1, item:"1111 1111 1111"}, 
       {id:1, item:"1111 1111 1111"}, 
       {id:1, item:"1111 1111 1111"},
       {id:1, item:"1xx111 1111 1111x"}]
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
        <View style={localStyles.parte1}>

          <Text style={styles.inputs.label}>
            Item
          </Text>
          <View style={localStyles.parte1Form}>
            <TextInput 
              style={[styles.inputs.textBox, localStyles.parte1FormInput]} 
              placeholder="digite aqui"
              onChangeText={(value) => this.setState({item:value})} 
              value={this.state.item} />
            <MyButton label="+" onPress={this.add.bind(this)}></MyButton>
          </View>
        </View>

        <View style={localStyles.parte2}>
             <FlatList
               
                data={this.state.dados}
                extraData={this.state}
                keyExtractor={(item) => { return item.id; }}
                renderItem={({ item }) => {
                  return (
                         
                          <View style={localStyles.parte2Item}>
                            <Text style={localStyles.parte2ItemText} >{item.item}</Text>
                            <MyButton style={localStyles.parte2ItemButton} label="X" onPress={this.remove.bind(this, item)}></MyButton>
                          </View>
                         
                );
            }}
          />
 
        </View>
        
      </View>

    return html;
  }
}


