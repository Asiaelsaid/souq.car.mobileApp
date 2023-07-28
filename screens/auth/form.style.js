import { StyleSheet } from "react-native";
import{COLORS,SIZES} from '../../constants/index'
const styles = StyleSheet.create({
    saveAria:{
      
      marginVertical:"25%"
  
    },
     
      btnContainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
        
        marginVertical: SIZES.xxLarge,
       
        marginHorizontal: SIZES.xxLarge,
        backgroundColor:COLORS.red,
        borderRadius:10,
        alignItems:"center"

      },
      txt:{
      fontFamily:"semibold",
        color:COLORS.white,
        fontSize:SIZES.medium,
        fontWeight:"bold",
        paddingStart:5
      },

      Gtxt:{
        backgroundColor:"#df0739",
        fontFamily:"semibold",
          color:COLORS.white,
          fontSize:SIZES.xLarge,
          fontWeight:"bold",
          borderTopLeftRadius:10,
          borderBottomLeftRadius:10,
          paddingHorizontal:10,
          paddingVertical:5,
          
          
        },
        image:{
           width:200,
           height:60,  
          alignSelf:"center",
          marginVertical:SIZES.large,

        },

        Wtxt:{
          fontFamily:"semibold",
          color:COLORS.black,
          fontSize:SIZES.medium,
          fontWeight:"bold",
          alignSelf:"center",
          
        },
        images:{
          width:"25%",
          height:"25%",  
          padding:SIZES.large,
          alignSelf:"center",
          marginTop:SIZES.xLarge

        }
})
export default styles