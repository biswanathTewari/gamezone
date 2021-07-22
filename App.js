import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//& routes
import DrawerStack from './routes/DrawerStack';
//& states
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <DrawerStack />
      </NavigationContainer>
    </Provider>
  );
}
