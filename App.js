import React from 'react';
import { Button, View, Text } from 'react-native';

// Navigator
import { StackNavigator, DrawerNavigator } from 'react-navigation';


// Components
import DetailsScreen from './src/components/DetailsScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import MapView from './src/components/MapView';
import Hotel from './src/components/Hotel';
import Final from './src/components/Final';


// import FirstView from './src/components/FirstView';
// import SecondView from './src/components/SecondView';
// import ThirdView from './src/components/ThirdView';

const RootStack = StackNavigator(
  {
    Home: {
      screen: WelcomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Signup: {
      screen: SignUpScreen
    },
    Login: {
      screen: LoginScreen
    },
    MapView: {
      screen: MapView
    },
    Hotel: {
      screen: Hotel
    },
    Final: {
      screen: Final
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
