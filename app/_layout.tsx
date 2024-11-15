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

NativeWindStyleSheet.setOutput({
  default: "native",
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const keyGenerator = (k?: number): string => '_' + Math.random().toString(36).substring(2, ((k || 1) + 2));

let dummyOrderList: order[] = [{
  _id: keyGenerator(9),
  table: '1',
  paid: false,
  name: 'gino',
  created_at: new Date('2024-10-19T22:05:32'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Pulled Pork',
    quantity: 3,
    price: 6.5,
    add_on: [{
      key: 'mayo',
      name: 'mayo',
      add: true
    }],
    description: 'Sono Celiaco',
    status: 'in progress',
  }, {
    _id: keyGenerator(9),
    name: 'Patatine Grandi',
    quantity: 1,
    price: 6,
    description: '',
    status: 'in progress',

    add_on: [{
      key: 'ketchup',
      name: 'ketchup',
      add: true
    }, {
      key: 'burger',
      name: 'burger',
      add: true
    }, {
      key: 'cheddar',
      name: 'cheddar',
      add: true
    }, {
      key: 'mayo',
      name: 'mayo',
      add: true
    }, {
      key: 'barbecue',
      name: 'barbecue',
      add: true
    },]
  }, {
    _id: keyGenerator(9),
    name: 'Nuggets di Pollo Grandi',
    quantity: 1,
    price: 6,
    description: '',
    status: 'in progress',

    add_on: [{
      key: 'ketchup',
      name: 'ketchup',
      add: true
    }, {
      key: 'burger',
      name: 'burger',
      add: true
    }, {
      key: 'cheddar',
      name: 'cheddar',
      add: true
    }, {
      key: 'mayo',
      name: 'mayo',
      add: true
    }, {
      key: 'barbecue',
      name: 'barbecue',
      add: true
    },]
  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Birra chiara',
    quantity: 1,
    price: 5,
    description: '',
    status: 'in progress',

  },]
}, {
  _id: keyGenerator(9),
  table: '2',
  paid: false,
  name: 'adriano',
  created_at: new Date('2024-10-19T20:05:32'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Burger',
    quantity: 1,
    price: 5.5,
    description: '',
    status: 'done',

    add_on: [{
      key: 'ketchup',
      name: 'ketchup',
      add: true
    }, {
      key: 'barbecue',
      name: 'barbecue',
      add: true
    }, {
      key: 'pomodoro',
      name: 'pomodoro',
      add: false
    }],
  }, {
    _id: keyGenerator(9),
    name: 'Patatine Medie',
    quantity: 1,
    price: 6,
    description: '',
    status: 'in progress',

  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Acqua naturale',
    quantity: 1,
    price: 1.5,
    description: '',
    status: 'in progress',

  },]
}, {
  _id: keyGenerator(9),
  table: '3',
  paid: true,
  name: 'pino',
  created_at: new Date('2024-10-19T21:15:32'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Cheese Chicken burger',
    quantity: 100,
    price: 7,
    description: '',
    status: 'in progress',

  }, {
    _id: keyGenerator(9),
    name: 'Nuggets di Pollo Grandi',
    quantity: 1,
    price: 7,
    description: '',
    status: 'in progress',
    add_on: [{ 'add': true, key: 'ketchup', name: 'ketchup' }]
  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Alchemist Stout',
    quantity: 1,
    price: 6,
    description: '',
    status: 'in progress',

  },]
}, {
  _id: keyGenerator(9),
  table: '4',
  paid: false,
  name: 'agata',
  created_at: new Date('2024-10-19T21:19:40'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Bacon Burger',
    quantity: 1,
    price: 8,
    description: '',
    status: 'in progress',

  }, {
    _id: keyGenerator(9),
    name: 'Patatine Medie',
    quantity: 1,
    price: 4.5,
    description: '',
    status: 'in progress',

  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Birra chiara',
    quantity: 1,
    price: 5,
    description: '',
    status: 'in progress',

  },]
}, {
  _id: keyGenerator(9),
  table: '5',
  paid: false,
  name: 'banana',
  created_at: new Date('2024-10-19T20:55:32'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Hotdog',
    quantity: 2,
    price: 5,
    description: '',
    status: 'in progress',

  }, {
    _id: keyGenerator(9),
    name: 'Pops di Pollo',
    quantity: 1,
    price: 4,
    description: '',
    status: 'in progress',

  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Birra chiara',
    quantity: 1,
    price: 5,
    description: '',
    status: 'in progress',

  },]
}, {
  _id: keyGenerator(9),
  table: '6',
  paid: false,
  name: 'clara',
  created_at: new Date('2024-10-19T22:05:32'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Pulled Pork',
    quantity: 3,
    price: 6.5,
    description: '',
    status: 'in progress',

  }, {
    _id: keyGenerator(9),
    name: 'Patatine Grandi',
    quantity: 1,
    price: 6,
    description: '',
    status: 'in progress',

  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Birra chiara',
    quantity: 1,
    price: 5,
    description: '',
    status: 'in progress',

  },]
}, {
  _id: keyGenerator(9),
  table: '7',
  paid: false,
  name: 'solfito',
  created_at: new Date('2024-10-19T22:05:32'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Pulled Pork',
    quantity: 3,
    price: 6.5,
    description: '',
    status: 'in progress',

  }, {
    _id: keyGenerator(9),
    name: 'Patatine Grandi',
    quantity: 1,
    price: 6,
    description: '',
    status: 'in progress',

  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Birra chiara',
    quantity: 1,
    price: 5,
    description: '',
    status: 'in progress',

  },]
}, {
  _id: keyGenerator(9),
  table: '8',
  paid: false,
  name: 'tzetze',
  created_at: new Date('2024-10-19T22:05:32'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Pulled Pork',
    quantity: 3,
    price: 6.5,
    description: '',
    status: 'in progress',

  }, {
    _id: keyGenerator(9),
    name: 'Patatine Grandi',
    quantity: 1,
    price: 6,
    description: '',
    status: 'in progress',

  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Birra chiara',
    quantity: 1,
    price: 5,
    description: '',
    status: 'in progress',

  },]
}, {
  _id: keyGenerator(9),
  table: '9',
  paid: false,
  name: 'lallo',
  created_at: new Date('2024-10-19T22:05:32'),
  status: 'in progress',
  food: [{
    _id: keyGenerator(9),
    name: 'Odin Pulled Pork',
    quantity: 3,
    price: 6.5,
    description: '',
    status: 'in progress',

  }, {
    _id: keyGenerator(9),
    name: 'Patatine Grandi',
    quantity: 1,
    price: 6,
    description: '',
    status: 'in progress',

  },],
  drink: [{
    _id: keyGenerator(9),
    name: 'Birra chiara',
    quantity: 1,
    price: 5,
    description: '',
    status: 'in progress',

  },]
  // }, {
  //   _id: keyGenerator(9),
  //   table: '1',
  // paid: false,
  //   name: 'lollo',
  //   food: [{
  //     _id: keyGenerator(9),
  //     name: 'Odin Pulled Pork',
  //     quantity: 3,
  //     price: 6.5,
  //     description: '',
  // status: 'in progress',

  //     created_at: new Date('2024-10-19T22:05:32')
  // status: 'in progress',
  //   }, {
  //     _id: keyGenerator(9),
  //     name: 'Patatine Grandi',
  //     quantity: 1,
  //     price: 6,
  //     description: '',
  // status: 'in progress',

  //     created_at: new Date('2024-10-19T22:05:32')
  // status: 'in progress',
  //   },],
  //   drink: [{
  //     _id: keyGenerator(9),
  //     name: 'Birra chiara',
  //     quantity: 1,
  //     price: 5,
  //     description: '',
  // status: 'in progress',

  //     created_at: new Date('2024-10-19T22:06:32')
  // status: 'in progress',
  //   },]
  // }, {
  //   _id: keyGenerator(9),
  //   table: '1',
  // paid: false,
  //   name: 'luppolo',
  //   food: [{
  //     _id: keyGenerator(9),
  //     name: 'Odin Pulled Pork',
  //     quantity: 3,
  //     price: 6.5,
  //     description: '',
  // status: 'in progress',

  //     created_at: new Date('2024-10-19T22:05:32')
  // status: 'in progress',
  //   }, {
  //     _id: keyGenerator(9),
  //     name: 'Patatine Grandi',
  //     quantity: 1,
  //     price: 6,
  //     description: '',
  // status: 'in progress',

  //     created_at: new Date('2024-10-19T22:05:32')
  // status: 'in progress',
  //   },],
  //   drink: [{
  //     _id: keyGenerator(9),
  //     name: 'Birra chiara',
  //     quantity: 1,
  //     price: 5,
  //     description: '',
  // status: 'in progress',

  //     created_at: new Date('2024-10-19T22:06:32')
  // status: 'in progress',
  //   },]
  // }, {
  //   _id: keyGenerator(9),
  //   table: '1',
  // paid: false,
  //   name: 'gongolo',
  //   food: [{
  //     _id: keyGenerator(9),
  //     name: 'Odin Pulled Pork',
  //     quantity: 3,
  //     price: 6.5,
  //     description: '',
  // status: 'in progress',

  //     created_at: new Date('2024-10-19T22:05:32')
  // status: 'in progress',
  //   }, {
  //     _id: keyGenerator(9),
  //     name: 'Patatine Grandi',
  //     quantity: 1,
  //     price: 6,
  //     description: '',
  // status: 'in progress',

  //     created_at: new Date('2024-10-19T22:05:32')
  // status: 'in progress',
  //   },],
  //   drink: [{
  //     _id: keyGenerator(9),
  //     name: 'Birra chiara',
  //     quantity: 1,
  //     price: 5,
  //     description: '',
  // status: 'in progress',
  //     created_at: new Date('2024-10-19T22:06:32')
  // status: 'in progress',
  //   },]
},
];

dummyOrderList = dummyOrderList.map((el): order => {
  el.simple_date = el['created_at'] ? JSON.parse(JSON.stringify(el['created_at'])).split('T')[1].split('.')[0] : undefined;
  return el;
});

dummyOrderList.sort((a, b) => (b.simple_date || '') > (a.simple_date || '') ? -1 : 1);

let dummyMenuList: menu_meal[] = require('@/scripts/utils/menu.json');

let dummyUser = {
  _id: 'abc',
  
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

  const [orderList, orderSetList] = useState(dummyOrderList);
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
