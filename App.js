import React from "react"
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
//& routes
import DrawerStack from "./routes/DrawerStack";

export default function App(){
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  )
}

