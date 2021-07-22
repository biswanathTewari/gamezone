import React from 'react';
import {} from 'react-native';
//& navigator
import {createStackNavigator} from '@react-navigation/stack';
//& screens
import About from '../screens/About';
//& custom component
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header title="About" navigation={navigation} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
