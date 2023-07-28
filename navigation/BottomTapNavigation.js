import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, SaveAdd} from "../screens/index";
import { COLORS } from "../constants/index";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevatoin: 0,
    height: 70,
  },
};
const BottomTapNavigation = () => {
  
  
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={"SaveAdd"}
        component={SaveAdd}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"heart"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTapNavigation;
