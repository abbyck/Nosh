import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, ScrollView, WebView,Dimensions, TouchableWithoutFeedback } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import CheckBox from 'react-native-checkbox';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

class MapView extends React.Component {
    state ={ mapOn: true }

    static navigationOptions = {
        header: null
       };
    
    renderButton(){
        if(this.state.mapOn){
            return(
                <TouchableOpacity style={ styles.buttonStyleBottom } onPress={() => this.props.navigation.navigate('Hotel')}>
                    <Text style={ styles.textStyleB }>TOST</Text>
                </TouchableOpacity>
            )
        }
        else{
            return <View/>
        }
    }

    render() {
      return (
        
        <View>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image
                        style={styles.ham}
                        source={require('../assets/images/ham.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.popupDialog2.show(
                    this.setState({mapOn: false})
                )}}>
                    <Image
                    style={styles.logo}
                    source={require('../assets/images/logoblack.jpg')}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.popupDialog.show(
                    this.setState({mapOn: false})
                )}}>
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
                        onDismissed={() => { this.setState({mapOn: true}) }}
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
                                            onChange={(checked) => checked=false}
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
                                        <TouchableOpacity style={ styles.buttonStyleB } onPress={() => {this.popupDialog.dismiss(this.setState({mapOn: true}))}}>
                                            <Text style={ styles.textStyleB }>Submit</Text>
                                        </TouchableOpacity>
                                    <View style={{flex:0.3}}></View>
                                </View>
                            </View>
                        </View>
                    </PopupDialog>
                    {/* Pop 2 */}
                    <PopupDialog
                        ref={(popupDialog2) => { this.popupDialog2 = popupDialog2; }}
                        dialogAnimation={slideAnimation}
                        width={0.9}
                        onDismissed={() => { this.setState({mapOn: true}) }}
                        height={320}
                    >
                        <View>
                            <View>
                                <Text style={styles.popUpText}>Subway Pune</Text>
                            </View>
                            {/* Checkbox */}
                            <View>
                                <View style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 15}}>
                                    <View style={{flex:0.2}}></View>
                                    <View style={{flex:0.6}}>
                                        <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular', textAlign: 'center'}}>6 Hours</Text>
                                    </View>
                                    <View style={{flex:0.2}}></View>
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 15}}>
                                    <View style={{flex:0.2}}></View>
                                    <View style={{flex:0.6}}>
                                    <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular', textAlign: 'center'}}>10 Bar-b-Que</Text>
                                    </View>
                                    <View style={{flex:0.2}}></View>
                                </View>
                            
                                        
                            </View>
                            </View>
                            <View>
                                <View style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 15}}>
                                    <View style={{flex:0.2}}></View>
                                    <View style={{flex:0.3}}>
                                        <CheckBox
                                            label='Dine-in'
                                            checked={true}
                                            checkedImage={require('../assets/images/checked.jpg')}
                                            uncheckedImage={require('../assets/images/unchecked.jpg')}
                                            onChange={(checked) => checked=false}
                                        />
                                    </View>
                                    <View style={{flex:0.3}}>
                                        <CheckBox
                                            label='Take Away'
                                            checked={false}
                                            checkedImage={require('../assets/images/checked.jpg')}
                                            uncheckedImage={require('../assets/images/unchecked.jpg')}
                                            onChange={(checked) => this.checked=true}
                                        />
                                    </View>
                                    <View style={{flex:0.2}}></View>
                                </View>
                            </View>


                            <View>
                                <View style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 15}}>
                                    <View style={{flex:0.2}}></View>
                                    <View style={{flex:0.3}}>
                                        <CheckBox
                                            label='N/V'
                                            checked={true}
                                            checkedImage={require('../assets/images/checked.jpg')}
                                            uncheckedImage={require('../assets/images/unchecked.jpg')}
                                            onChange={(checked) => checked=false}
                                        />
                                    </View>
                                    <View style={{flex:0.3}}>
                                        <CheckBox
                                            label='V'
                                            checked={false}
                                            checkedImage={require('../assets/images/checked.jpg')}
                                            uncheckedImage={require('../assets/images/unchecked.jpg')}
                                            onChange={(checked) => this.checked=true}
                                        />
                                    </View>
                                    <View style={{flex:0.2}}></View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', marginTop: 15}}>
                                    <View style={{flex:0.3}}></View>
                                        <TouchableOpacity style={ styles.buttonStyleB } onPress={() => {this.popupDialog2.dismiss(this.setState({mapOn: true}))}}>
                                            <Text style={ styles.textStyleB }>REQUEST</Text>
                                        </TouchableOpacity>
                                    <View style={{flex:0.3}}></View>
                                </View>

                            </PopupDialog>
                
                    <ScrollView contentContainerStyle={{height: 700}}>
                        <ScrollView horizontal contentContainerStyle={{width: 2000}}>
                                <Image
                                    style={{height: 700,flex: 1, width: null}}
                                    source={require('../assets/images/map.png')}
                                />
                        </ScrollView>
                    </ScrollView>
                {/* End map view */}
                
            </View>
            </ScrollView>
            
            {/* <View style={{position: 'absolute', bottom: 100,}}> */}
            <View style={styles.buttonContainer}>
                { this.renderButton() }
            </View> 
            {/* Map */}
        </View>
      );
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute', 
        // top: 0, 
        // left: 0, 
        // right: 0, 
        bottom: 100, 
        // justifyContent: 'center', 
        // alignItems: 'center'
        left: (Dimensions.get('window').width / 2) - (((Dimensions.get('window').width*8.5)/10.0)/2)-8
    },
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        elevation: 10
    },
    ham: {
        marginLeft: 0,
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
    buttonStyleBottom: {
        marginTop: 15,
        backgroundColor: '#53a8e9',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#53a8e9',
        marginLeft: 10,
        marginRight: 10,
        paddingRight: 40,
        paddingLeft: 40,
        width: ((Dimensions.get('window').width*8.5)/10.0),
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyleB: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
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