import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';



import FitImage from 'react-native-fit-image';

class Final extends React.Component {

    render(){
        return(
            <View>
                <View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/images/final.png')}
                        />
                    </View>
                </View>
                <View>
                    <View style={{flex:0.1}}></View>
                    <View style={{flex:0.8}}>
                        <Text style={styles.textStyle}>Request has been accepted</Text>
                    </View>
                    <View style={{flex:0.1}}></View>
                </View>
            </View>
        );
    }
}

var styles= {
    imageContainer: {
        marginTop: 75,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        color: '#21242c'
    },
}

export default Final;
