import { Text,View,TouchableOpacity ,TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from '../carList,style'
import{COLORS,SIZES} from '../../constants/index'
import CarList from '../../components/cars/CarList'
import {  Ionicons ,Feather } from "@expo/vector-icons";
  import { useSelector } from 'react-redux';
  import React, { useEffect , useState } from "react";
const SpareParts =({navigation})=> {
  const carsData= useSelector((state)=>state.carsData.carsData)
  const [cars,setCars] = useState()
  const [filter,setFilter] = useState('')
  useEffect(()=>{
  setCars(carsData.spare_parts)
  if(filter.length !==0){
    setCars(
      carsData.spare_parts.filter((el)=>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    )
  }
  },[filter])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper} >
            <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightwhite}/>
        </TouchableOpacity> 
        <Text style={styles.heading}>Spare Parts</Text>
        <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput}
                onChange={(el)=>setFilter(el.target.value)}
              onPressIn={()=>{}}
                placeholder="what are you looking for"
            />
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.offwhite}/>
        </TouchableOpacity>
      </View>
      </View>
             </View>
            <CarList cars={cars}/>
            </View>  
        </SafeAreaView>
    )
}
export default SpareParts