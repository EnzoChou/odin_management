import { View, Text, Modal, Button } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export const SingleOrderLongPressModal = (props: {
  open: boolean,
  onClose: React.Dispatch<React.SetStateAction<boolean>>,
  checkboxes: Checkbox[],
  setAllCheckBoxesToDone: React.Dispatch<React.SetStateAction<Checkbox[]>>
}) => {
  const checkAllBoxAndCloseModal = () => {
    // useEffect(() => {
    let are_all_checkboxes_flagged = props['checkboxes'].every(el => !!el.value);
    let tmp = props['checkboxes'].map((sc) => {
      if (are_all_checkboxes_flagged) {
        sc.value = false;
      } else {
        sc.value = true;
      }
      return sc;
    });
    props['setAllCheckBoxesToDone']([...tmp]);
    // }, []);
    props['setAllCheckBoxesToDone']([]);
    props['onClose'](false);
    return;
  };
  return (
    // <SafeAreaProvider className='flex-auto place-content-center border-2 border-red-400'>
    // <SafeAreaView className='flex-auto justify-center border-2 border-blue-400'>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props['open']}
        onRequestClose={() => {
          props['onClose'](!props['open']);
        }}>
        <View 
        // style={{flex: 1, justifyContent: "center", alignItems: "center"}}
        className='flex-col self-center my-80 max-w-xs max-h-40 bg-yellow-200 border-2 border-yellow-600 rounded-lg p-3'
        >
          <Text className='mb-5'>Set all to done/undone?</Text>
          <Button
            title='Confirm'
            onPress={checkAllBoxAndCloseModal}
          />
        </View>
      </Modal>
    // </SafeAreaView>
    // </SafeAreaProvider>
  )
};