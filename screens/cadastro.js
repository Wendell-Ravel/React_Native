
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as React from 'react';



export default function CadastroScreen({ navigation }) {
    return (

        <View style={[styles.container, {
            flexDirection: "column"
        }]}>


            <View style={styles.areaBtn} >

                <text style={styles.inputText}>email</text>
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
                    <text style={styles.btnText}>Salvar</text>
                </TouchableOpacity>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,

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
        marginRight: '65%',
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

