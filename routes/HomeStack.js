import React from 'react';
import {} from 'react-native';
//& navigator
import {createStackNavigator} from '@react-navigation/stack';
//& screens
import Home from '../screens/Home';
import Review from '../screens/ReviewDetails';
//& custom component
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
            headerTitle: () => <Header title="Home" navigation={navigation} />,
            headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
  );
}
