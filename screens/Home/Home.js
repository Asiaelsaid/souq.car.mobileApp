import { Text, View, TouchableOpacity, ScrollView,ActivityIndicator,Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import Welcome from "../../components/home/welcome";
import Carousel from "../../components/home/Carousel";
import Heading from "../../components/home/heading";
import CarsRow from "../../components/cars/CarsRow";
import { useDispatch, useSelector } from 'react-redux';
import getCarsData from '../../store/actions/carsData'
import { COLORS, SIZES } from "../../constants/index";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const dispatch= useDispatch()
  const  navigation = useNavigation()
  useEffect(()=>{
    dispatch(getCarsData());
  },[])
  const carsData= useSelector((state)=>state.carsData.carsData)
  const saveAdd= useSelector((state)=>state.SaveAdd.SaveAdd)
  console.log(carsData);
  return (
    <ScrollView>
    <SafeAreaView style={styles.margin}>
      <View style={styles.appBarWapper}>
        <View style={styles.appBar}>
        <Image 
    source={{ uri:"https://souq.car/imgs/logo.png"}}
    style={{height:25 , width:85}}
/>
          <View style={{ flexDirection: "row"}}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}> Egypt </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount} >
              <Text style={styles.cartNumber}> {saveAdd.length}</Text>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('SaveAdd')}>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <Carousel />
        <View>
        <Heading name={"Cars For Sale"}
         navigate={"CarForSale"}
        />
      
{ carsData.cars_for_sale? <CarsRow cars={carsData.cars_for_sale}/>:
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge}
   color={COLORS.primary}
   ></ActivityIndicator>
   </View> 
} 
</View>     
{/* //         <View style={styles.loadingContainer}>
//  <ActivityIndicator size={SIZES.xxLarge}
//   color={COLORS.primary}
//   ></ActivityIndicator>
//   </View> */}

<View>
<Heading name={"Cars For Rent"}
         navigate={"CarForRent"}
        />
      
{ carsData.cars_for_rent? <CarsRow cars={carsData.cars_for_rent}/>:
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge}
   color={COLORS.primary}
   ></ActivityIndicator>
   </View> 
} 
</View> 
        
  <View>
        <Heading name={"Spare parts"}
         navigate={"SpareParts"}
        />
     { carsData.spare_parts? <CarsRow cars={carsData.spare_parts}/>:
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge}
   color={COLORS.primary}
   ></ActivityIndicator>
   </View> 
} 
</View> 

<View>
<Heading name={"Maintenance Center"}
         navigate={"Maintenance"}
        />
      
{ carsData.maintenance_centers?  <CarsRow cars={carsData.maintenance_centers}/>:
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge}
   color={COLORS.primary}
   ></ActivityIndicator>
   </View> 
} 
</View>    

        
       
   
    </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
