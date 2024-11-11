import React, {useState} from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "./styles";


export default function BottomTabNavigator({navigation}){
    const [selectedTab, setSelectedTab] = useState('Conta');

    return (
      <View style={styles.bottomTabContainer}>
        {['home', 'person', 'chatbubble', 'camera', 'settings'].map((icon, index) => (
          <TouchableOpacity
            key={icon}
            onPress={() => {
              setSelectedTab(icon);
              navigation.navigate(icon === 'settings' ? 'PageSettings' : 'Conta');
            }}
            style={styles.tabButton}
          >
            <Ionicons name={icon} size={24} color={selectedTab === icon ? '#00ccff' : '#000'} />
          </TouchableOpacity>
        ))}
      </View>
    );

};