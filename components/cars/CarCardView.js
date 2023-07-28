import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./CarCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import saveAddchange from "../../store/actions/saveAdd";

const CarCardView = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const saveAdd = useSelector((state) => state.SaveAdd.SaveAdd);
  const AddId = useSelector((state) => state.SaveAdd.SaveAdd.map((f) => f.id));
  function addfav(obj) {
    dispatch(saveAddchange([...saveAdd, obj]));
    console.log(saveAdd);
  }

  const deletAdd = (id) => {
    const list = saveAdd.filter((f) => f.id !== id);
    dispatch(saveAddchange(list));
  };
  function hanedlAddDelete(item) {
    var x = AddId.includes(item.id);
    console.log(x);
    console.log(item);
    if (x) {
      deletAdd(item.id);
    } else {
      addfav(item);
    }
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CarDetails", { item })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
     
          </Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
       
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons
          name="heart"
          size={28}
          color={AddId.includes(item.id) ? COLORS.red : COLORS.gray}
          onPress={() => hanedlAddDelete(item)}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CarCardView;
