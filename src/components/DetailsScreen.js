import React from 'react';
import { Button, View, Text } from 'react-native';

class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hi!, Details Screen</Text>
          <Text>Lets Meet</Text>
        </View>
      );
    }
  }

export default DetailsScreen;