import React, { useState } from 'react'

import SettingScreen from './SettingScreen'
import ProfileScreen from './ProfileScreen'
import NotificationScreen from './NotificationScreen'
import PlanScreen from './PlanScreen'
import Premium from './PremiumScreen'
import TabNavBar from '../../layout/tabBar/TabNavBar'


export default function SettingScreenGroup(props) {
    const { onMoveScreenGroup, onMoveTab, focusedTab } = props

    const [screenNum, setScreenNum] = useState('Settings')

    const handleMoveScreen = ( selectedScreenNum ) => {
        setScreenNum(selectedScreenNum)
    }

    return (
        <>
            <>
                {screenNum === 'Settings' ? <SettingScreen onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} onMoveScreen={handleMoveScreen} /> : null}
                {screenNum === 'Profile' ? <ProfileScreen onMoveScreen={handleMoveScreen} /> : null}
                {screenNum === 'Notifications' ? <NotificationScreen onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} onMoveScreen={handleMoveScreen} /> : null}
                {screenNum === 'Plan' ? <PlanScreen onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} onMoveScreen={handleMoveScreen} /> : null}
                <TabNavBar onMoveTab={onMoveTab} focusedTab={focusedTab}/>
            </>
            {screenNum === 'Premium' ? <Premium onMoveScreen={handleMoveScreen} /> : null}
        </>
    )
} 