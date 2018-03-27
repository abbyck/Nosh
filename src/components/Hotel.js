import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import CheckBox from 'react-native-checkbox';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

class Hotel extends React.Component {
    static navigationOptions = {
        header: null
       };

    render() {
      return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image
                        style={styles.ham}
                        source={require('../assets/images/ham.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MapView')}>
                    <Image
                    style={styles.logo}
                    source={require('../assets/images/logoblack.jpg')}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Clicked filter')}>
                    <Image
                        style={styles.profile}
                        source={require('../assets/images/profile.jpg')}
                    />
                </TouchableOpacity>
            </View>
            {/* Header */}
            <ScrollView>
            <View style={{flex: 1}}>
            <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.1}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MapView')}>
                                <Image
                                    style={{marginTop: 20,height: 36, width: 40}}
                                    source={require('../assets/images/cross.jpg')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.8}}></View>
            </View>

            <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <Image
                            style={styles.mariot}
                            source={require('../assets/images/mariot.jpg')}
                        />
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8}}>
                            <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 30, color: '#21242c', textAlign: 'center'}}>Marriott Hotels</Text>
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8}}>
                            <Text style={{fontFamily: 'Montserrat-Ragular', fontSize: 18, color: '#414141', textAlign: 'center'}}>#4 in Nosh Rankings</Text>
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 40}}>
                        <View style={{flex:0.15}}></View>
                        <View style={{flex:0.1}}>
                            <Image
                                style={styles.time}
                                source={require('../assets/images/clock.jpg')}
                            />
                        </View>
                        <View style={{flex:0.05}}></View>
                        <View style={{flex:0.6}}>
                            <TextInput
                                placeholder={'Time'}
                                autoCorrect={false}
                                style={styles.inputStyleUser}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <View style={{flex:0.15}}></View>
                        <View style={{flex:0.1}}>
                            <Image
                                style={styles.time}
                                source={require('../assets/images/fork.jpg')}
                            />
                        </View>
                        <View style={{flex:0.05}}></View>
                        <View style={{flex:0.6}}>
                            <TextInput
                                placeholder={'Food Items'}
                                autoCorrect={false}
                                style={styles.inputStyleUser}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <View style={{flex:0.2}}></View>
                        <View style={{flex:0.25}}>
                            <CheckBox
                                label='Dinein'
                                checked={true}
                                checkedImage={require('../assets/images/checked.jpg')}
                                uncheckedImage={require('../assets/images/unchecked.jpg')}
                                onChange={(checked) => console.log('I am checked', checked)}
                            />
                        </View>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.35}}>
                            <CheckBox
                                label='Take Away'
                                checked={false}
                                checkedImage={require('../assets/images/checked.jpg')}
                                uncheckedImage={require('../assets/images/unchecked.jpg')}
                                onChange={(checked) => console.log('I am checked', checked)}
                            />
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.2}}></View>
                        <View style={{flex:0.25}}>
                            <CheckBox
                                label='N/V'
                                checked={true}
                                checkedImage={require('../assets/images/checked.jpg')}
                                uncheckedImage={require('../assets/images/unchecked.jpg')}
                                onChange={(checked) => console.log('I am checked', checked)}
                            />
                        </View>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.35}}>
                            <CheckBox
                                label='V'
                                checked={false}
                                checkedImage={require('../assets/images/checked.jpg')}
                                uncheckedImage={require('../assets/images/unchecked.jpg')}
                                onChange={(checked) => this.checked=true}
                            />
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8, height: 80}}>
                            <TouchableOpacity style={ styles.buttonStyleB } onPress={() => this.props.navigation.navigate('Final')}>
                                <Text style={ styles.textStyleB }>TOST</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                </View>    
                </View>
                <View style={{height: 30}}></View>
            </ScrollView>
        
        
        </View>
      );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        elevation: 10
    },
    ham: {
        height: 60,
        width: 60
    },
    logo: {
        height: 60,
        width: 100
    },
    profile: {
        height: 60,
        width: 80
    },
    buttonStyleB: {
        marginTop: 15,
        backgroundColor: '#53a8e9',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#53a8e9',
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
    mariot: {
        flex:0.8,
    },
    inputStyleUser: {
        flex: 0.8,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        backgroundColor: '#ebebeb',
        borderRadius: 7,
        height: 30
    },
    time: {
        height: 45,
        width: 45
    },
    buttonStyleB: {
        marginTop: 15,
        flex: 0.8,
        backgroundColor: '#53a8e9',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#53a8e9',
        marginLeft: 5,
        marginRight: 5,
        elevation: 7
    },
    textStyleB: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Montserrat-Bold'
    }
}


export default Hotel;