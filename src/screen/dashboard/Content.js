import React from 'react'

import AppHeader from '../../layout/header/AppHeader'
import DashboardScreen from './DashboardScreen'
import TabNavBar from '../../layout/tabBar/TabNavBar'


export default function DashboardContent(props) {
    const { onMoveScreenGroup, onMoveTab, focusedTab } = props

    return (
        <>
            <AppHeader title="Dashboard" onMoveTab={onMoveTab} onMoveScreenGroup={onMoveScreenGroup}/>
            <DashboardScreen />
            <TabNavBar onMoveTab={onMoveTab} focusedTab={focusedTab}/>
        </>
    )
}