import React from "react";
import { View } from "react-native";

import BottomTabNavigator from "./BottomTabNavigator";

import styles from "./styles";

export default function MainPage(){
    return (
        <View style={{ flex: 1 }}>
          <BottomTabNavigator />
        </View>
      );
}