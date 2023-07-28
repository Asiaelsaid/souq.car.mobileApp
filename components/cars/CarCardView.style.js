import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/index";
const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginLeft: 5,
    marginBottom: 20,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: SIZES.large,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    position: "absolute",
    bottom: SIZES.xSmall,
    paddingTop: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xLarge,
    right: SIZES.xSmall,
  },
});
export default styles;
