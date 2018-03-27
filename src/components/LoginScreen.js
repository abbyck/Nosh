import React, { Components } from 'react';
import { Button, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/logowhite.jpg')}
                    />
                </View>
                {/* End logo */}

                {/* Login Text */}
                <View style={{flex:1, flexDirection:'column', paddingTop: 30}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <Text style={styles.heroText}>Login</Text>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <Text style={styles.heroCaption}>Connect with us.</Text>
                        <View style={{flex:0.1}}></View>
                    </View>

                    {/* Input */}
                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <View style={{flex:0.1}}></View>
                        <TextInput
                            placeholder={'Username'}
                            autoCorrect={false}
                            style={styles.inputStyleUser}
                            underlineColorAndroid='transparent'
                        />
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 15}}>
                        <View style={{flex:0.1}}></View>
                        <TextInput
                            placeholder={'Password'}
                            autoCorrect={false}
                            style={styles.inputStylePass}
                            secureTextEntry={ true } 
                            underlineColorAndroid='transparent'
                        />
                        <View style={{flex:0.1}}></View>
                        {/* Input */}
                    </View>
                    {/* Button */}
                    <View style={{flex:1, flexDirection:'column', marginTop: 15}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:0.1}}></View>
                            <TouchableOpacity style={ styles.buttonStyleB } onPress={() => this.props.navigation.navigate('MapView')}>
                                <Text style={ styles.textStyleB }>LOGIN</Text>
                            </TouchableOpacity>
                            <View style={{flex:0.1}}></View>
                        </View>
                    </View>    
                {/* End Button */}
                </View>
                {/* End Login Text */}
            </View>
        );
    };

}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
    },
    heroText: {
        color: '#21242b',
        fontSize: 39,
        flex:0.8,
        fontFamily: 'Montserrat-Bold'
    },
    heroCaption: {
        color: '#21242b',
        fontSize: 18,
        flex:0.8,
        fontFamily: 'Montserrat-Regular'
    },
    inputStylePass: {
        flex: 0.8,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        backgroundColor: '#d2d6d7',
        borderRadius: 7
    },
    inputStyleUser: {
        flex: 0.8,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        backgroundColor: '#d2d6d7',
        borderRadius: 7
    },
    buttonStyleB: {
        // marginTop: 5,
        flex: 0.9,
        backgroundColor: '#2f8eec',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#2f8eec',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyleB: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Montserrat-Regular'
    },
}

export default LoginScreen;