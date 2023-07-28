import { StyleSheet } from "react-native";
import{COLORS,SIZES} from '../constants/index'
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.lightwhite
    },
    wrapper:{
        flex: 1,
        backgroundColor:COLORS.lightwhite 
    },
    upperRow:{
        width:SIZES.width-50,
        marginHorizontal:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        position:"absolute",
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.large,
        top:SIZES.large,
        zIndex:999
    },
    heading:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.lightwhite,
        marginLeft:5
        

    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginHorizontal: SIZES.small,
        marginVertical: SIZES.medium,
        height: "50",
      },
      searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        // marginTop: SIZES.small,
      },
      searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
      },
      searchInput: {
        fontFamily: "regular",
        height: "100%",
        width: "100%",
        paddingHorizontal: SIZES.small,
      },
      searchBtn: {
        width: 50,
        backgroundColor: COLORS.primary,
        height: "100%",
        borderRadius: SIZES.medium,
        alignItems: "center",
        justifyContent: "center",
      },
});
export default styles