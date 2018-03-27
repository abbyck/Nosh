import React, { Component, StyleSheet }from 'react';
import { 
    Button, 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
} from 'react-native';

class WelcomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return(
            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/lgbl.png')}
                    />
                </View>
                {/* End logo */}

                {/* Hero Text */}
                <View style={{flex:1, flexDirection:'column', paddingTop: 100}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <Text style={styles.heroText}>Welcome to {'\n'}Nosh</Text>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <Text style={styles.heroCaption}>We will help you to connect food donors to the needy ones or NGOs</Text>
                        <View style={{flex:0.1}}></View>
                    </View>
                </View>
                {/* End Hero Text */}

                {/* Button */}
                <View style={{flex:1, flexDirection:'column', paddingTop: 40}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <TouchableOpacity style={ styles.buttonStyleW } onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={ styles.textStyleW }>SIGNUP</Text>
                        </TouchableOpacity>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <TouchableOpacity style={ styles.buttonStyleB } onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={ styles.textStyleB }>LOGIN</Text>
                        </TouchableOpacity>
                        <View style={{flex:0.1}}></View>
                    </View>
                </View>    
                {/* End Button */}
            </View>
        );
    }
} 

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#3490ee'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
    },
    Hero: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroText: {
        color: '#ffffff',
        fontSize: 39,
        flex:0.8,
        fontFamily: 'Montserrat-Bold'
    },
    heroCaption: {
        paddingTop: 15,
        color: '#ffffff',
        fontSize: 18,
        flex:0.8,
        fontFamily: 'Montserrat-Regular'
    },
    buttonStyleW: {
        flex: 0.8,
        backgroundColor: '#fff',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyleW: {
        alignSelf: 'center',
        color: '#3694dc',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Montserrat-Regular'
    },
    buttonStyleB: {
        marginTop: 15,
        flex: 0.8,
        backgroundColor: '#0459ac',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#0459ac',
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
    }

  
  };
  

export default WelcomeScreen;