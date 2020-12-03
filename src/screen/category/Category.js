import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import {
  SafeAreaView, View, Text, Dimensions, TouchableOpacity, StyleSheet
} from 'react-native';
import BottomSheet from '../../components/modules/react-native-gesture-bottom-sheet/src/BottomSheet';

import Dashboard from '../dashboard/Content'
import Articles from '../article/Articles'
import Analytics from '../analytics/Analytics'
import Settings from '../settings/Settings';

import CategoryScreenModal from '../../components/category/CategoryScreenModal'
import CategoryScreen from './CategoryScreen'
import SubCategoryScreen from './SubCategoryScreen'
import InterviewListScreen from './InterviewListScreen'
import InterviewScreen from './InterviewScreen'
import TabNavBar from '../../layout/tabBar/TabNavBar'

const windowHeight = Dimensions.get('window').height;

const CategoryGroup = props => {
  const { onMoveScreenGroup, onMoveTab, focusedTab, latestTab, categoryRef } = props

  const [modalVisible, setModalVisible] = useState(true);
  const [selectedScreen, setSelectedScreen] = useState('category')
  const [selectedItem, setSelectedItem] = useState('')
  const [previousItem, setPreviousItem] = useState('')

  const bottomSheetRef = useRef()

  useEffect(() => {
    setSelectedScreen('category')
    bottomSheetRef.current.show();

    return () => {
      // cleanup
    }
  }, [bottomSheetRef])

  useImperativeHandle(categoryRef, () => ({

    showBottomSheet() {
      bottomSheetRef.current.show();
      // alert("Child function called")
    }

  }));

  const handleMovedScreen = ( selectedScreen, previousItem, selectedItem) => {
    setSelectedScreen(selectedScreen)
    setSelectedItem(selectedItem)
    setPreviousItem(previousItem)
  }

  const handleVisibleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <>
      <SafeAreaView>
        <BottomSheet 
          hasDraggableIcon 
          dragIconColor={"#013551"} 
          dragBackgroundColor={selectedScreen !== 'interview' ? "#ffffff" : "#FFF5EC"} 
          draggable={false} 
          ref={bottomSheetRef} 
          height={windowHeight * 0.97}
        >
          {/* {selectedScreen === 'categoryScreenModal' ? 
            <CategoryScreenModal isModalVisible={modalVisible} onVisibleModal={handleVisibleModal} onMoveScreen={handleMovedScreen} onMoveTab={onMoveTab} focusedTab={focusedTab}/> : null } */}
          {selectedScreen === 'category' ? 
            <>
              <CategoryScreen onMoveScreen={handleMovedScreen} />
              <TabNavBar onMoveTab={onMoveTab} focusedTab={focusedTab}/>
            </> : null}
          {selectedScreen === 'subCategory' ? 
            <>
              <SubCategoryScreen onMoveScreen={handleMovedScreen} selectedItem={selectedItem} previousItem={previousItem}/>
              <TabNavBar onMoveTab={onMoveTab} focusedTab={focusedTab}/>
            </> : null}
          {selectedScreen === 'interviewList' ? 
            <>
              <InterviewListScreen onMoveScreen={handleMovedScreen} selectedItem={selectedItem} previousItem={previousItem}/>
              <TabNavBar onMoveTab={onMoveTab} focusedTab={focusedTab}/>
            </> : null}
          {selectedScreen === 'interview' ? <InterviewScreen onMoveTab={onMoveTab} onMoveScreen={handleMovedScreen} selectedItem={selectedItem} previousItem={previousItem}/> : null}
        </BottomSheet>
      </SafeAreaView>
      <>
        {latestTab === 'dashboard' ? <Dashboard onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} focusedTab={latestTab} /> : null}
        {latestTab === 'article' ? <Articles onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} focusedTab={latestTab} /> : null}
        {latestTab === 'analytics' ? <Analytics onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} focusedTab={latestTab} /> : null}
        {latestTab === 'settings' ? <Settings onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} focusedTab={latestTab} /> : null}
      </>
    </>
  );
};

export default CategoryGroup
