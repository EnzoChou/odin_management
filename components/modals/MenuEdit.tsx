import { View, Text, Modal } from 'react-native';
import { MenuContext } from '@/components/contexts/MenuManager';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MenuEdit = (props: {
  visible: boolean
}) => {
  const [modalVisible, setModalVisible] = useState(props['visible']);
  const menuManager = useContext(MenuContext);
  console.log('i\'ve been called');
  return (
    <SafeAreaView className='flex-1 justify-center align-middle'>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
      </Modal>
    </SafeAreaView>
  )
};