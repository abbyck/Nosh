import React from 'react';
import { Button, View, Text } from 'react-native';

// Navigator
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';

import WelcomeScreen from './src/components/WelcomeScreen';


// const RootStack = StackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );


// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

export default class App extends React.Component {
  render() {
    return <WelcomeScreen />
  }
}