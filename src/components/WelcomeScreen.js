import React, { Component, StyleSheet }from 'react';
import { 
    Button, 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
} from 'react-native';

class WelcomeScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/logoblue.jpg')}
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
                        
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        
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
        fontSize: 50,
        flex:0.8,
        fontFamily: 'Montserrat-Bold'
    },
    heroCaption: {
        paddingTop: 15,
        color: '#ffffff',
        fontSize: 18,
        flex:0.8,
        fontFamily: 'Montserrat-Regular'
    }
  
  };
  

export default WelcomeScreen;