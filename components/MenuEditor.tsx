import { View, Text, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { MenuContext } from '@/components/contexts/MenuManager';
import { MenuEdit } from '@/components/modals/MenuEdit';
import { PropMenuModal } from '@/components/modals/PropMenuModal';

export const MenuEditor = () => {
    const menuManager = useContext(MenuContext);
    const [menuModalVisible, setMenuModalVisible] = useState(false);
    return (
        <View className='flex-auto'>
            <Pressable
                onPress={() => setMenuModalVisible(true)}
            >
                {/* {({ pressed }) => (
                    <Text className='text-2xl text-center font-Norsebold'>{pressed ? 'Editing' : 'Edit'}</Text>
                )} */}
                    <Text className='text-2xl text-center font-Norsebold'>Add Category</Text>
                    <PropMenuModal open={menuModalVisible} onClose={setMenuModalVisible} model='category'/>
            </Pressable>
        </View>
    )
};

