import React, { useState } from 'react'

import AnalyticScreen from './AnalyticsScreen'
import AnalyticDetailScreen from './AnalyticsDetailsScreen'
import TabNavBar from '../../layout/tabBar/TabNavBar'


export default function AnalyticScreenGroup(props) {
    const { onMoveScreenGroup, onMoveTab, focusedTab } = props

    const [selectedScreen, setSelectedScreen] = useState('Analytic')

    const handleSelectScreen = (selectedScreen) => {
        setSelectedScreen(selectedScreen)
    }

    return (
        <>
            {selectedScreen === 'Analytic' ? 
                <AnalyticScreen onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} onMoveScreen={handleSelectScreen} /> : null }
            {selectedScreen === 'AnalyticsDetails' ? 
                <AnalyticDetailScreen onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} onMoveScreen={handleSelectScreen} /> : null}
            <TabNavBar onMoveTab={onMoveTab} focusedTab={focusedTab}/>
        </>
    )
}
