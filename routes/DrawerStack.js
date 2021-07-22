import React from "react";
import {  } from "react-native";
//& navigator
import {createDrawerNavigator} from "@react-navigation/drawer"
//& routes
import HomeStack from "./HomeStack"
import AboutStack from "./AboutStack"

const Drawer = createDrawerNavigator();

export default function DrawerStack(){
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
  )
}

