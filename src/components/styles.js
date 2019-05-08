import {StyleSheet} from 'react-native';

const container = StyleSheet.create({

    main: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
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
        backgroundColor:"#3498db",
        minWidth: 60
    },

    buttonLabel: {
        padding: 10,
        color: "#fff",
        textAlign: 'center',
        fontSize: 20
    }
    

});


export default {container, inputs}