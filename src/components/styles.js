import {StyleSheet} from 'react-native';

const container = StyleSheet.create({

    main: {
        margin: 10
    }


});

const inputs = StyleSheet.create({
    
    textBox: {
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        marginTop: 5,
        padding: 10
    },
    label: {
        marginLeft: 10,
        fontSize: 12,
    },
    button: {
        margin: 10,
        marginTop: 5,
        backgroundColor:"#3498db"
    },

    buttonLabel: {
        padding: 10,
        color: "#fff",
        textAlign: 'center'
    }
    

});


export default {container, inputs}