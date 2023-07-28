import { StyleSheet, Text, View } from "react-native";
import React from "react";
import  {SliderBox}  from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const sliders = [
    "https://souq.car/imgs/sliders/aftereid-2.png",
    "https://souq.car/imgs/sliders/aftereid-3.png",
  ];

  return (
    <View style={styles.carouselContainer}>
  
      <SliderBox
        images={sliders}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    
  },
});