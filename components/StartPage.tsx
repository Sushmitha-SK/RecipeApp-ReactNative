import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const StartPage = ({ navigation }: any) => {
    return (
        <View style={styles.container}>

            <View>

                <Image source={require('../images/Cooking.png')} style={styles.startupimage} />
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.titletext}>Tasty Treasures</Text>
                <Text style={styles.textstyle}>Discover all the best recipes you needed</Text>

            </View>


            <Button style={styles.button} uppercase={false}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btntext}>Let's Get Started</Text>
            </Button>
        </View>
    )
}

export default StartPage

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: Dimensions.get('window').height - 20,
        marginTop: '-10%',
        backgroundColor: 'white'
    },

    titletext: {
        fontWeight: '700',
        fontSize: 35,
        color: '#5bd29a',
        alignSelf: 'center',
    },


    startupimage: {
        alignSelf: "center",
        top: 150,
        width: 230,
        height: 230
    },
    textcontainer: {
        marginTop: 180,
    },

    textstyle: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,


        /* or 36px */
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',

        color: ' #030319',


    },

    button: {
        backgroundColor: '#5bd29a',

        width: 327,
        height: 54,

        padding: 5,
        borderWidth: 2,
        // borderColor: "#4da4ff",
        borderRadius: 16,
        marginTop: 20,

        // shadowColor: '#171717',
        // shadowOffset: { width: -2, height: 4 },
        // shadowOpacity: 0.1,
        // shadowRadius: 3,

        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',


        shadowColor: '#171717',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 2,
    },

    btntext: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    },



})