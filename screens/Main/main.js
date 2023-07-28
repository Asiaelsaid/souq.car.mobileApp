import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {View, StyleSheet} from 'react-native';

const Main = () => {
    const  navigation = useNavigation()
    useEffect(()=>{
        navigation.navigate('Login')
      },[])
   
}

const styles = StyleSheet.create({})

export default Main;
