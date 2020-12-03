import React, { useState } from 'react';

import CameraScreen from './CameraScreen'
import InterviewStopScreen from './InterviewStopScreen'
import InterviewDoneScreen from './InterviewDoneScreen'


const InterviewGroup = props => {
  const { onMoveTab, focusedTab } = props

  const [selectedScreen, setSelectedScreen] = useState('camera')

  const handleMovedScreen = ( selectedScreen) => {
    setSelectedScreen(selectedScreen)
  }

  return (
    <>
    {selectedScreen === 'camera' ? <CameraScreen onMoveScreen={handleMovedScreen} onMoveTab={onMoveTab}/> : null}
    {selectedScreen === 'interviewStop' ? <InterviewStopScreen onMoveScreen={handleMovedScreen} /> : null}
    {selectedScreen === 'interviewDone' ? <InterviewDoneScreen onMoveTab={onMoveTab}/> : null}
    </>
  );
};

export default InterviewGroup
