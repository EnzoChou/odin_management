import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import React, { useContext } from 'react';
import { RenderMenu } from '@/components/RenderMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
import OdinFace from '@/assets/images/odin-face.png';
import { MenuContext } from '@/components/contexts/MenuManager';
import { MenuEditor } from '@/components/MenuEditor';

const Menu = () => {
  const menuManager = useContext(MenuContext);
  return (
    <SafeAreaView className='flex-1'>
      <ImageBackground source={OdinFace} resizeMode="contain" className='flex-1'>
        <View className="flex-1 p-2">
          <View className='p-4'>
            <Text className='text-center text-orange-500 text-5xl font-semibold font-Norsebold'>MENU</Text>
          </View>
          <View className='flex-1'>
            <FlatList
              data={menuManager['menu']}
              renderItem={
                ({ item, index }) => <RenderMenu menu={item} menuIndex={index} />
              }
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Menu;