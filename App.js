import React from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';



const Flex = () => {
  return (

    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={styles.logo} >
        <Avatar
          size='xlarge'
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>

      <View style={styles.areaBtn} >

        <text style={styles.inputText}>login</text>
        <TextInput
          style={styles.Input}
          label='login'
        />
        <text style={styles.inputText}>senha</text>
        <TextInput
          style={styles.Input}
          label='senha'
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <text style={styles.btnText}>Login</text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCadastro}>
          <text style={styles.btnText}>Cadastre-se</text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e7ddd7",
    justifyContent: "center",
    alignItems: "center"
  },

  logo: {

    marginTop: 15,
    flex: 1,
    justifyContent: "center",


  },

  areaBtn: {

    flex: 2,
    alignItems: "center",
    justifyContent: 'center',
    width: '90%',
  },

  Input: {

    backgroundColor: "white",
    width: '85%',
    marginBottom: 15,
    color: '#222',
    border: "1px solid grey",
    borderRadius: 1,
    padding: 7,

  },

  btnSubmit: {
    backgroundColor: '#1670f7',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    marginBottom: 15,

  },

  btnCadastro: {
    backgroundColor: '#ff1616',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
  },

  inputText: {

    fontSize: 20,
    paddingBottom: 5,
  },

  btnText: {
    color: 'white',
    fontSize: 20,
    fontfamily: "Droid Sans",
    fontWeight: 'bold'
  },

});

export default Flex;
