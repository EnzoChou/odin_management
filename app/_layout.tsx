import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { OrderContext } from '../components/contexts/OrderManager';
import { MenuContext } from '../components/contexts/MenuManager';
import { useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from "nativewind";
import { UserContext } from '@/components/contexts/UserManager';
import retrieve_all_orders from '@/api/order/retrieve';

NativeWindStyleSheet.setOutput({
  default: "native",
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

let dummyMenuList: menu_meal[] = require('@/scripts/utils/menu.json');

let dummyUser = {
  _id: 'abc',

};



const retrieve_orders = async (orderSetter: React.Dispatch<React.SetStateAction<order[]>>) => {
  // const data = await apis.order.retrieve();
  const data = await apis.orderRetrieve();
  orderSetter(data);
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    "spaceMono": require('@/assets/fonts/SpaceMono-Regular.ttf'),
    "vinque": require('@/assets/fonts/vinque rg.otf'),
    "MoriaCitadel": require('@/assets/fonts/MoriaCitadel.ttf'),
    "Norse": require('@/assets/fonts/Norse.otf'),
    'Norsebold': require('@/assets/fonts/Norsebold.otf'),
  });
  const initial_order: order[] = []; 
  const [orderList, orderSetList] = useState(initial_order);
  const orderListWrapper = {
    orders: orderList,
    setOrders: orderSetList
  };
  const [menuList, menuSetList] = useState(dummyMenuList);
  const menuListWrapper = {
    menu: menuList,
    setMenu: menuSetList
  };

  useEffect(() => {
    retrieve_orders(orderSetList);
  }, []);

  useEffect(() => {
    if (error) throw error;
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    // <UserContext.Provider value={null}>
    <OrderContext.Provider value={orderListWrapper}>
      <MenuContext.Provider value={menuListWrapper}>
        <ThemeProvider value={colorScheme === 'light' ? DefaultTheme : DefaultTheme}>
          <StatusBar backgroundColor='black' style='light' />
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </MenuContext.Provider>
    </OrderContext.Provider>
    // </UserContext.Provider>
  );
}
