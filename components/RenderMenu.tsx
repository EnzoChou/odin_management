import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { MenuEditor } from '@/components/MenuEditor';
import { DotsFiller } from './DotsFiller';

export const RenderTags = (props: {
  tag: string
}) => {

  return (
    <View className='mr-1 border-2 rounded-sm border-orange-300'>
      <Text className='text-xs text-orange-800'>{props['tag']}</Text>
    </View>
  );
}

export const RenderCategory = (props: {
  meal: meal,
  categoryIndex: number
}) => {

  return (
    <View className={`flex-row justify-between ${props['categoryIndex'] % 2 ? 'ml-1' : 'mr-1'}`}>
      <View className='flex-col pr-1'>
        <Text className='break-words'>{props['meal']['name']}</Text>
        {!!props['meal']['description'] ?
          <Text className='text-xs'>{props['meal']['description']}</Text> :
          <></>}
        <FlatList
          data={props['meal']['tags']}
          renderItem={({ item, index }) => <RenderTags tag={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
        ></FlatList>
      </View>
      <DotsFiller/>
      <View className=''>
        <Text className='text-wrap'>{props['meal']['price']}€</Text>
      </View>
    </View>
  );
};

export const RenderCategory2 = (props: {
  meal: meal,
  categoryIndex: number
}) => {

  return (

    <View className={`flex-col p-1 rounded-md ${props['categoryIndex'] % 2 ? 'bg-green-100' : 'bg-green-300'}`}>
      {/*  ${props['categoryIndex'] % 2 ? 'ml-1' : 'mr-1'} */}
      <View className='flex-row justify-between'>
        <View className='flex-auto'>
          <Text className='break-words font-semibold'>{props['meal']['name']}</Text>
        </View>
        <View className='min-w-min'>
          <Text className='text-wrap font-semibold'>{props['meal']['price']}€</Text>
        </View>
      </View>
      <View className='flex-col pr-1'>
        {!!props['meal']['description'] ?
          <Text className='text-xs'>{props['meal']['description']}</Text> :
          <></>}
        <FlatList
          data={props['meal']['tags']}
          renderItem={({ item, index }) => <RenderTags tag={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
        ></FlatList>
      </View>

    </View>
  );
};

export const RenderMenu = (props: {
  menu: menu_meal
  menuIndex: number
}) => {
  return (
    <View className='flex-col'>
      {props['menuIndex'] == 0 ?
        <View className={`flex-auto border-2 border-slate-600 p-2 m-1 rounded-lg bg-green-200`}>
          <MenuEditor />
        </View>
        : <></>
      }
      <View className={`flex-auto border-2 border-slate-600 p-2 m-1 rounded-lg bg-green-200`}>
        <View className="p-1 m-2">
          <View className="flex-row p-1 justify-center">
            <Text className='text-2xl text-center font-Norsebold'>
              {props['menu']['category']}
            </Text>
          </View>
        </View>
        <View className="flex-col">
          <FlatList
            data={props['menu']['meals']}
            renderItem={({ item, index }) => <RenderCategory2 meal={item} categoryIndex={index} />}
            keyExtractor={item => item._id || ''}
          >
          </FlatList>
        </View>
      </View>
    </View>
  );
};