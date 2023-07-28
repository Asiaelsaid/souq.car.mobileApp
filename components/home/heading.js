import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./heading.style";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
const Heading = ({navigate,name}) => {
  const  navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> {name} </Text>
        <TouchableOpacity onPress={()=>navigation.navigate(navigate)}>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
