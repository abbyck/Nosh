import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import CheckBox from 'react-native-checkbox';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

class Profile extends React.Component {
    static navigationOptions = {
        header: null
       };

    render() {
      return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => console.log("Clicked on header")}>
                    <Image
                        style={styles.ham}
                        source={require('../assets/images/hamselected.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MapView')}>
                    <Image
                    style={styles.logo}
                    source={require('../assets/images/logoblack.jpg')}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.popupDialog.show()}}>
                    <Image
                        style={styles.profile}
                        source={require('../assets/images/request.jpg')}
                    />
                </TouchableOpacity>
            </View>
            {/* Header */}
            <ScrollView>
            <View style={{flex: 1}}>
            <PopupDialog
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                        dialogAnimation={slideAnimation}
                        width={0.9}
                    >
                        <View>
                            <View>
                                <Text style={styles.popUpText}>Requests</Text>
                                <Text style={styles.NameText}>Nylin Sara</Text>
                            </View>
                            <View style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 15}}>
                                <View style={{flex:0.1}}></View>
                                <View style={{flex:0.8, backgroundColor: '#e7e8ea'}}>
                                    <Text style={styles.reqText}>I have no cash...please accept my request</Text>
                                </View>
                                <View style={{flex:0.1}}></View>
                            </View>
                            <View style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 15}}>
                                <View style={{flex:0.1}}></View>
                                <View style={{flex:0.4}}>
                                    <TouchableOpacity style={ styles.buttonStyleGreen } onPress={() => {
                                        this.popupDialog.dismiss()
                                        this.props.navigation.navigate('Accept')
                                        }}>
                                        <Text style={ styles.textStyleGR }>ACCEPT</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:0.4}}>
                                    <TouchableOpacity style={ styles.buttonStyleRed } onPress={() => {this.popupDialog.dismiss()}}>
                                        <Text style={ styles.textStyleGR }>REJECT</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:0.1}}></View>
                            </View>
                        </View>
                    </PopupDialog>



                <View style={{flexDirection:'row'}}>
                    <View style={{flex:0.1}}></View>
                        <View style={{flex:0.1}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MapView')}>
                                <Image
                                    style={{marginTop: 20,height: 35, width: 40}}
                                    source={require('../assets/images/cross.jpg')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.8}}></View>
                </View>
                {/*  */}
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8}}>
                            
                            <Text style={{textAlign: 'center', fontSize: 25, fontFamily: 'Montserrat-Bold', color: '#21242b'}}>Your Profile</Text>
                            
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8}}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../assets/images/profileIcon.jpg')}
                                />
                            </View>
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>

                    <View style={{flexDirection:'row', marginTop: 10}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8}}>
                            
                            <Text style={{textAlign: 'center', fontSize: 35, fontFamily: 'Montserrat-Regular', color: '#21242b'}}>Sean Parker</Text>
                            
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8}}>
                            <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Montserrat-Regular', color: '#21242b'}}>#325 in India</Text>
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>

                    <View style={{flexDirection:'row',}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8}}>
                            
                            <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Montserrat-Regular', color: '#21242b'}}>#1450 in Global</Text>
                            
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>

                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.8}}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../assets/images/profileme.png')}
                                />
                            </View>
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>

                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.4}}>
                            <TouchableOpacity style={ styles.buttonStyleBot } onPress={() => console.log("Edit Profile Was clicked")}>
                                <Text style={ styles.textStyleBot }>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.4}}>
                            <TouchableOpacity style={ styles.buttonStyleBot } onPress={() => this.props.navigation.navigate('Home')}>
                                <Text style={ styles.textStyleBot }>Logout</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.1}}></View>
                    </View>
                    <View style={{height: 100}}>

                    </View>
                </View>    
            </View>
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
        backgroundColor: '#d2d6d7',
        borderRadius: 7
    },
    time: {
        height: 45,
        width: 45
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
        elevation: 7
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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyleBot: {
        marginTop: 7,
        flex: 0.8,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 50,
        borderWidth: 2.3,
        borderColor: '#21242b',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyleBot: {
        alignSelf: 'center',
        color: '#21242b',
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 3,
        paddingBottom: 3,
        fontFamily: 'Montserrat-Regular'
    },
    popUpText: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',
        color: '#21242c',
        marginTop: 15
    },
    NameText: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Montserrat-Regular',
        color: '#21242c',
        marginTop: 15
    },
    reqText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
        color: '#21242c',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyleGreen: {
        marginTop: 7,
        backgroundColor: '#57c77f',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#57c77f',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyleGR: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 7,
        paddingBottom: 7,
        fontFamily: 'Montserrat-Bold'
    },
    buttonStyleRed: {
        marginTop: 7,
        backgroundColor: '#e11957',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e11957',
        marginLeft: 5,
        marginRight: 5,
    }

}


export default Profile;