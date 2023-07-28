import { FlatList, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import CarCardView from './CarCardView';
import styles from './CarRow.style'


const CarsRow = ({cars}) => {
  
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarCardView  item={item}/>}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsRow;
