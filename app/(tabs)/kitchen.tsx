import { RefreshControl, StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import React, { useContext, useEffect } from 'react';
import { RenderMeal } from '@/components/RenderOrder';
import { SafeAreaView } from 'react-native-safe-area-context';
import OdinFace from '@/assets/images/odin-face.png';
import { OrderContext } from '@/components/contexts/OrderManager';
import { useRetrieveOrders } from '@/hooks/useOrders';

const kitchen = () => {
  const ordersManager = useContext(OrderContext);
  const [refreshing, setRefreshing] = React.useState(false);
  // set up this useEffect
  useEffect(() => {
    if (refreshing) {
      // do your heavy or asynchronous data fetching & update your state
      // set the refreshing back to false
      // const fakeOrders: order[] = [];
      apis.orderRetrieve()
        .then((res: order[]) => {
          ordersManager['setOrders'](res);
        })
        .catch((error: unknown) => {

        });

      setRefreshing(false);
    }
  }, [refreshing]);
  return (
    <SafeAreaView className='flex-1'>
      <ImageBackground source={OdinFace} resizeMode="contain" className='flex-1'>
        <View className="flex-1 p-2">
          <View className='p-4'>
            <Text className='text-center text-orange-500 text-5xl font-semibold font-Norsebold'>FOOD</Text>
          </View>
          <View className='flex-1'>
            <FlatList
              // className='border-2 border-red-300'
              onRefresh={() => setRefreshing(true)}
              refreshing={refreshing}
              data={ordersManager['orders']}
              renderItem={
                ({ item }) => <RenderMeal order={item} type='food' />
              }
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default kitchen;