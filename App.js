import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import BottomTapNavigation from "./navigation/BottomTapNavigation";
import * as SplashScreen from "expo-splash-screen";
import {
  Cart,
  CarDetails,
  CarForSale,
  CarForRent,
  SpareParts,
  Maintenance,
  SaveAdd,
  Login,
} from "./screens/index";
import { Provider } from "react-redux";
import store from "./store/store";

import Main from "./screens/Main/main";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/* <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false }}
        /> */}
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomTapNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarDetails"
            component={CarDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarForSale"
            component={CarForSale}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarForRent"
            component={CarForRent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SpareParts"
            component={SpareParts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Maintenance"
            component={Maintenance}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SaveAdd"
            component={SaveAdd}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
