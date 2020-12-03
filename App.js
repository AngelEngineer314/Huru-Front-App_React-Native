import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import QuestionScreens from './src/screen/questions/Question'
import AuthScreens from './src/screen/auth/Auth'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [selectedGroup, setSelectedGroup] = useState('question')

  const handleMoveScreenGroup = ( selectedGroup ) => {
    setSelectedGroup(selectedGroup)
  }

  return (
    <>
      {selectedGroup === 'question'   ? <QuestionScreens onMoveScreenGroup={handleMoveScreenGroup} /> : null}
      {selectedGroup === 'auth'       ? <AuthScreens onMoveScreenGroup={handleMoveScreenGroup} /> : null}
      {selectedGroup === 'dashboard'  ? <AppNavigator onMoveScreenGroup={handleMoveScreenGroup} /> : null}
    </>
  );
};

export default App;
