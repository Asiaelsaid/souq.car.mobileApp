import { Dimensions } from 'react-native';
const {height} = Dimensions.get("window");
const COLORS={
    primary:"#2A4D50",
    secondary:"#DDF0FF",
    tertiary:"#FF7754",
    gray:"#83829A",
    gray2:"#C1C0CB",
    offwhite:"#F3F4F8",
    white:"#FFFFFF",
    black:"#000000",
    red:"#e81e4d",
    green:"#00C135",
    lightwhite:"#FAFAFC",
    font: "#333",
    background:" #f7f2f2f3",
    link: "cornflowerblue",
    backgroundColorHover:"#99b5ff",
    backgroundColorMain:"#eee",
}
const SIZES={
xSmall:10,
small:14,
medium:16,
large:20,
xLarge:24,
xxLarge:44,
width:"100%",
height
}
const SHADOWS={
small:{
    shadowColor:"#000",
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.25,
    shadowRedius:3.84,
    elevatoin:2,
},
medium:{
    shadowColor:"#000",
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.25,
    shadowRedius:5.84,
    elevatoin:5,

}
}

export {COLORS,SIZES,SHADOWS};