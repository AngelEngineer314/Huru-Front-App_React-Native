import React from 'react'

import AppHeader from '../../layout/header/AppHeader'
import ArticleTopNavigator from '../../navigation/ArticleTopNavigator'
import TabNavBar from '../../layout/tabBar/TabNavBar'


export default function DashboardContent(props) {
    const { onMoveScreenGroup, onMoveTab, focusedTab } = props

    return (
        <>
            <AppHeader title="Articles & Tips" onMoveTab={onMoveTab} onMoveScreenGroup={onMoveScreenGroup}/>
            <ArticleTopNavigator />
            <TabNavBar onMoveTab={onMoveTab} focusedTab={focusedTab}/>
        </>
    )
}