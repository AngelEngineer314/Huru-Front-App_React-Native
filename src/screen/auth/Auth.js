import React, { useState } from 'react'

import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import ForgotPassword from './ForgotPassword'


export default function AuthScreens(props) {
    const { onMoveScreenGroup } = props

    const [selectedScreen, setSelectedScreenNum] = useState('login')

    const handleMoveScreen = (selectedScreen) => {
        setSelectedScreenNum(selectedScreen)
    }

    return (
        <>
            {selectedScreen === 'login' ? <LoginScreen onMoveScreen={handleMoveScreen} onMoveScreenGroup={onMoveScreenGroup}/> : null}
            {selectedScreen === 'signUp' ? <SignUpScreen onMoveScreen={handleMoveScreen} /> : null}
            {selectedScreen === 'forgotPassword' ? <ForgotPassword onMoveScreen={handleMoveScreen} onMoveScreenGroup={onMoveScreenGroup} /> : null}
        </>
    )
}