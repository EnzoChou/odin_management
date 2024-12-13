import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import React, { useContext, useEffect } from 'react';
import { RenderMeal } from '../../components/RenderOrder';
import { SafeAreaView } from 'react-native-safe-area-context';
import OdinFace from '../../assets/images/odin-face.png';
import { OrderContext } from '../../components/contexts/OrderManager';

const bar = () => {
  const ordersManager = useContext(OrderContext);
  const [refreshing, setRefreshing] = React.useState(false);
  // set up this useEffect
    useEffect(() => {
      if (refreshing) {
        apis.orderRetrieve()
          .then((res: order[]) => {
            ordersManager['setOrders'](res);
            setRefreshing(false);
          })
          .catch((error: unknown) => {
            setRefreshing(false);
          });
      }
    }, [refreshing]);

  return (
    <SafeAreaView className='flex-1'>
      <ImageBackground source={OdinFace} resizeMode="contain" className='flex-1'>
        <View className="flex-1 p-2">
          <View className='p-4'>
            <Text className='text-center text-orange-500 text-5xl font-semibold font-Norsebold'>DRINKS</Text>
          </View>
          <View className='flex-1'>
            {/* <OdinFace width={1028} height={1028} preserveAspectRatio="true"> */}
            <FlatList
              onRefresh={() => setRefreshing(true)}
              refreshing={refreshing}
              data={ordersManager['orders']}
              // renderItem={(item)=> <Text style={styles.text}>{item}</Text>}
              renderItem={
                ({ item }) => <RenderMeal order={item} type='drink' />
                // ({ item }) => <Text
                //   // style={styles.text}
                //   className='text-center text-cyan-700'
                // >{item.id}</Text>
              }
            />
            {/* </OdinFace> */}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default bar

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#ff8800'
//   }
// })