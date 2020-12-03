import React, { useState } from 'react'

import WelcomeScreen from './WelcomeScreen'
import WalkThroughScreen from './WalkthroughScreen'
import WalkThroughTwoScreen from './WalkThroughTwoScreen'
import WalkThroughThreeScreen from './WalkthroughThreeScreen'


export default function QuestionScreens(props) {
    const { onMoveScreenGroup } = props

    const [screenNum, setScreenNum] = useState(1)

    const handleMoveScreen = ( selectedScreenNum ) => {
        setScreenNum(selectedScreenNum)
    }

    return (
        <>
            {screenNum === 1 ? <WelcomeScreen onMoveScreen={handleMoveScreen} /> : null}
            {screenNum === 2 ? <WalkThroughScreen onMoveScreen={handleMoveScreen} /> : null}
            {screenNum === 3 ? <WalkThroughTwoScreen onMoveScreen={handleMoveScreen} /> : null}
            {screenNum === 4 ? <WalkThroughThreeScreen onMoveScreenGroup={onMoveScreenGroup} /> : null}
        </>
    )
} 