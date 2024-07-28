/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Modal, ActivityIndicator} from 'react-native';
// eslint-disable-next-line semi
import React from 'react';
interface LoadProps {
  visible: boolean;
}
const Loader = ({visible}: LoadProps) => {
  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'white',
          }}>
          <ActivityIndicator size={'large'} color={'black'} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
