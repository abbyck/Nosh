import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, ScrollView, WebView } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import CheckBox from 'react-native-checkbox';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

class MapView extends React.Component {

    static navigationOptions = {
        header: null
       };

    render() {
      return (
        
        <View>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                    <Image
                        style={styles.ham}
                        source={require('../assets/images/ham.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Nosh clicked")}>
                    <Image
                    style={styles.logo}
                    source={require('../assets/images/logoblack.jpg')}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.popupDialog.show()}}>
                    <Image
                        style={styles.profile}
                        source={require('../assets/images/profile.jpg')}
                    />
                </TouchableOpacity>
            </View>
            {/* Header */}


            {/* Map */}
            <ScrollView>
            <View style={{flex: 1}}>
                <PopupDialog
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                        dialogAnimation={slideAnimation}
                        width={0.9}
                    >
                        <View>
                            <View>
                                <Text style={styles.popUpText}>Filter</Text>
                            </View>
                            {/* Checkbox */}
                            <View>
                                <View style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 15}}>
                                    <View style={{flex:0.2}}></View>
                                    <View style={{flex:0.3}}>
                                        <CheckBox
                                            label='Non-Veg'
                                            checked={true}
                                            checkedImage={require('../assets/images/checked.jpg')}
                                            uncheckedImage={require('../assets/images/unchecked.jpg')}
                                            onChange={(checked) => this.checked=true}
                                        />
                                    </View>
                                    <View style={{flex:0.2}}></View>
                                    <View style={{flex:0.2}}>
                                        <CheckBox
                                            label='Veg'
                                            checked={false}
                                            checkedImage={require('../assets/images/checked.jpg')}
                                            uncheckedImage={require('../assets/images/unchecked.jpg')}
                                            onChange={(checked) => this.checked=true}
                                        />
                                    </View>
                                    <View style={{flex:0.1}}></View>
                                </View>
                            </View>
                            {/* End Checkbox */}
                            <View>
                                <View style={{flexDirection:'row', marginTop: 10}}>
                                    <View style={{flex:0.2}}></View>
                                    <Text style={{flex: 0.3, fontSize: 20, fontFamily: 'Montserrat-Regular', color: '#21242b'}}>Distance :</Text>
                                    <View style={{flex:0.2}}></View>
                                    <Text style={{flex: 0.2, fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#21242b'}}>5Km</Text>
                                    {/* <View style={{flex:0.1}}></View> */}
                                </View>
                                <View style={{flexDirection:'row', marginTop: 10}}>
                                    <View style={{flex:0.2}}></View>
                                    <Text style={{flex: 0.3, fontSize: 20, fontFamily: 'Montserrat-Regular', color: '#21242b'}}>Rating :</Text>
                                    <View style={{flex:0.2}}></View>
                                    <Text style={{flex: 0.3, fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#21242b'}}>2s to 5s</Text>
                                </View>
                                <View style={{flexDirection:'row', marginTop: 20}}>
                                    <View style={{flex:0.3}}></View>
                                        <TouchableOpacity style={ styles.buttonStyleB } onPress={() => {this.popupDialog.dismiss()}}>
                                            <Text style={ styles.textStyleB }>Submit</Text>
                                        </TouchableOpacity>
                                    <View style={{flex:0.3}}></View>
                                </View>
                            </View>
                        </View>
                    </PopupDialog>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 0.8}}>
                    {/* <Image
                        source={require('../assets/images/map.jpg')}
                        //style={{flex: 1}}
                         style={{ width: 500, height: 520, flex: 1}}
                    /> */}
                    <WebView
    source={{uri: 'https://www.google.co.in/maps/place/Kochi,+Kerala/@10.0368434,76.313226,16.21z/data=!4m5!3m4!1s0x3b080d514abec6bf:0xbd582caa5844192!8m2!3d9.9312328!4d76.2673041?hl=en'}}
    style={{height : 400, width : null, flex: 1}}
  />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={ styles.buttonStyleBottom } onPress={() => this.props.navigation.navigate('Hotel')}>
                        <Text style={ styles.textStyleB }>TOST</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            </ScrollView>
            {/* Map */}
        </View>
      );
    }
}

const styles = {
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        elevation: 5
    },
    ham: {
        height: 60,
        width: 35
    },
    logo: {
        height: 60,
        width: 100
    },
    profile: {
        height: 60,
        width: 80
    },
    buttonStyleBottom: {
        marginTop: 15,
        backgroundColor: '#2f8eec',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#2f8eec',
        marginLeft: 40,
        marginRight: 40,
    },
    textStyleB: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Montserrat-Regular',
    },
    popUpText: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',
        color: '#21242c',
        marginTop: 15
    },
    buttonStyleB: {
        marginTop: 15,
        flex: 0.4,
        backgroundColor: '#2f8eec',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#2f8eec',
        marginLeft: 5,
        marginRight: 5,
    },
}


export default MapView;