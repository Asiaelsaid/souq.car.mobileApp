import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({

  loadingContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center', 
    alignContent: 'center',          
},
  margin:{
    marginBottom:70,
  },
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:SIZES.small,
    paddingBottom:SIZES.small,
    borderBottomColor:COLORS.gray,
    //borderBottomWidth:1,
    shadowOffset: {width: 0, height: 2},  
    shadowColor: '#171717',  
    shadowOpacity: 0.1,  
  },
  location: {
    fontFamily: "semiBold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightwhite,
  },
});

export default styles;
