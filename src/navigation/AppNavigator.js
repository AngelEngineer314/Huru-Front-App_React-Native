import React, { useState, useRef } from 'react'

import Dashboard from '../screen/dashboard/Content'
import Articles from '../screen/article/Articles'
import Category from '../screen/category/Category'
import Interview from '../screen/Interview/Interviews'
import Analytics from '../screen/analytics/Analytics'
import Settings from '../screen/settings/Settings';

export default function AppNavigator(props) {
    const { onMoveScreenGroup } = props

    const categoryRef = useRef(null);

    const [focusedTab, setFocusedTab] = useState('dashboard')
    const [latestTab, setLatestTab] = useState('dashboard')

    const handleFocusTab = (focusedTab) => {
        setFocusedTab(focusedTab)
        // alert(JSON.stringify(categoryRef))
        if (focusedTab === 'category') {
            if (categoryRef.current !== null) {
                categoryRef.current.showBottomSheet()
                categoryRef.current.showBottomSheet()
            }
        }

        if (focusedTab !== 'category' && focusedTab !== 'interview' ) {
            setLatestTab(focusedTab)
        }
    }

    return (
        <>
            {focusedTab === 'dashboard' ? <Dashboard onMoveScreenGroup={onMoveScreenGroup} onMoveTab={handleFocusTab} focusedTab={focusedTab}/> : null}
            {focusedTab === 'article' ? <Articles onMoveScreenGroup={onMoveScreenGroup} onMoveTab={handleFocusTab} focusedTab={focusedTab}/> : null}
            {focusedTab === 'category' ? 
                <Category onMoveScreenGroup={onMoveScreenGroup} onMoveTab={handleFocusTab} focusedTab={focusedTab} latestTab={latestTab} categoryRef={categoryRef}/> : null}
            {focusedTab === 'interview' ? <Interview onMoveTab={handleFocusTab} focusedTab={focusedTab}/> : null}
            {focusedTab === 'analytics' ? <Analytics onMoveScreenGroup={onMoveScreenGroup} onMoveTab={handleFocusTab} focusedTab={focusedTab}/> : null}
            {focusedTab === 'settings' ? <Settings onMoveScreenGroup={onMoveScreenGroup} onMoveTab={handleFocusTab} focusedTab={focusedTab}/> : null}
        </>
    )
}