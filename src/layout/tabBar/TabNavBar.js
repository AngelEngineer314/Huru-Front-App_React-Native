import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';


const windowWidth = Dimensions.get("window").width;

export default function TabNavBar(props) {
    const { onMoveTab, focusedTab } = props

    return (
        <View style={styles.tabNavBar}>
            <View style={styles.tabNavBarView}>
                <View style={styles.bgImageView}>
                    <Image style={styles.bgImage} source={require('../../../assets/tabNavBar/tab_bg.png')}></Image>
                </View>
                <View style={focusedTab !== 'category' ? styles.tabIconView : styles.tabIconViewCategory}>
                    <TouchableOpacity onPress={() => onMoveTab('dashboard') }>
                        <MaterialIcon style={focusedTab === 'dashboard' ? styles.selectedIcon : styles.icon} name="dashboard" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={focusedTab === 'category' ? styles.articleIconView : null} onPress={() => onMoveTab('article') }>
                        <Foundation style={focusedTab === 'article' ? styles.selectedIcon : styles.icon} name="lightbulb" size={34} />
                    </TouchableOpacity>
                    
                    {focusedTab === 'category' ? null :
                        <View style={styles.logoButtonView}>
                            <TouchableOpacity onPress={() => onMoveTab('category') }>
                                <Image source={require('../../../assets/tabNavBar/logo_bg.png')} style={styles.logoBgImage}></Image>
                            </TouchableOpacity>
                        </View>
                    }
                    
                    <TouchableOpacity style={focusedTab === 'category' ? styles.analyticsIconView : null} onPress={() => onMoveTab('analytics') }>
                        <Entypo style={focusedTab === 'analytics' ? styles.selectedIcon : styles.icon} name="pie-chart" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onMoveTab('settings') }}>
                        <IonIcon style={focusedTab === 'settings' ? styles.selectedIcon : styles.icon} name="settings" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabNavBar: {
        width: '100%',
        position: 'absolute',
        zIndex: 9999,
        bottom: -1,
    },
    tabNavBarView: {
        position: 'relative',
    },
    bgImage: {
        width: '100%'
    },
    tabIconView: {
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: -10,
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    tabIconViewCategory: {
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 30,
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    articleIconView: {
        paddingRight: '20%'
    },
    analyticsIconView: {
        paddingLeft: '20%',
    },
    logoButtonView: {
        left: '3%',
        bottom: 30,
    },
    logoBgImage: {
        width: 120,
        zIndex: 1,
    },
    icon: {
        color: 'rgba(251, 124, 0, 0.52)',
    },
    selectedIcon: {
        color: '#F17720',
    }
})