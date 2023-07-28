import { ActivityIndicator, FlatList,Text ,View } from "react-native"
import styles from "./CarList.style"
import { COLORS, SIZES } from "../../constants/index"
import CarCardView from "./CarCardView"
const CarList =({cars}) =>{
    
    
return(

//     {cars?
        <View style={styles.container}>
    <FlatList
      data={cars}
      numColumns ={2}
      renderItem={({ item }) => <CarCardView  item={item}/>}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={()=><View style={styles.separator}></View>}

    />
   </View> 
//: <View style={styles.loadingContainer}>
//   <ActivityIndicator size={SIZES.xxLarge}
//   color={COLORS.primary}
//   ></ActivityIndicator>
//   </View>}

)
}
export default CarList
{/* <View style={styles.container}>
    <FlatList>
        data = {data}
        numColumns ={2}
        renderItem={(item) => (<CarCardView item={item}/>)}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={()=><View style={styles.separator}></View>}
    </FlatList>
</View> */}