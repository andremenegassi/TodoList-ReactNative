import React, {Component} from 'react';
import {Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function MyButton(props) {

    return (

        <TouchableOpacity 
            style={styles.inputs.button}
            onPress={props.onPress}>
            <Text style={styles.inputs.buttonLabel}>{props.label}</Text>
        </TouchableOpacity>   
    ); 

}