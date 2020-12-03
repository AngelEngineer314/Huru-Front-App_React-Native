import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import CategoryScreen from '../../screen/category/CategoryScreen'
import TabNavBar from '../../layout/tabBar/TabNavBar'


const CategoryScreenModal = props => {
  const { isModalVisible, onVisibleModal, onMoveScreen, onMoveTab, focusedTab } = props

  return (
    <Modal 
      isVisible={isModalVisible}
      style={styles.headerModal}
      onBackdropPress={onVisibleModal}
      onRequestClose={onVisibleModal}>
        <View style={styles.centeredView}>
            <CategoryScreen onMoveScreen={onMoveScreen}/>
            <TabNavBar onMoveTab={onMoveTab} focusedTab={focusedTab}/>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({ 
  headerModal: {
    margin: 0,
  },
  centeredView: {
    flex: 1,
  },
});

export default CategoryScreenModal;

