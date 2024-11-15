import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import React, { useContext } from 'react';
import { RenderMeal } from '@/components/RenderOrder';
import { SafeAreaView } from 'react-native-safe-area-context';
import OdinFace from '@/assets/images/odin-face.png';
import { OrderContext } from '@/components/contexts/OrderManager';

const kitchen = () => {
  const ordersManager = useContext(OrderContext);
  return (
    <SafeAreaView className='flex-1'>
      <ImageBackground source={OdinFace} resizeMode="contain" className='flex-1'>
        <View className="flex-1 p-2">
          <View className='p-4'>
            <Text className='text-center text-orange-500 text-5xl font-semibold font-Norsebold'>FOOD</Text>
          </View>
          <View className='flex-1'>
            <FlatList
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