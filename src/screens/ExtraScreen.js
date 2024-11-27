import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ExtraScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Extra Screen</Text>
        <Button title="Go Details" onPress={() => navigation.goBack('Details')} />
      </View>
    );
  }
  
export default ExtraScreen;