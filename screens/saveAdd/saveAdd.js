import { Text,View,TouchableOpacity ,TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from '../carList,style'
import{COLORS,SIZES} from '../../constants/index'
import CarList from '../../components/cars/CarList'
import {  Ionicons ,Feather } from "@expo/vector-icons";
  import { useSelector } from 'react-redux';

const SaveAdd =({navigation})=> {
    const saveAdd= useSelector((state)=>state.SaveAdd.SaveAdd)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper} >
            <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightwhite}/>
        </TouchableOpacity> 
        <Text style={styles.heading}>Save Add</Text>
    
             </View>
            <CarList cars={saveAdd}/>
            </View>  
        </SafeAreaView>
    )
}
export default SaveAdd