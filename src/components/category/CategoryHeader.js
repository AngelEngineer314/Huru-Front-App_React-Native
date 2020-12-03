import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function CategoryHeader(props) {
    const { onMoveScreen, moveScreen, screenName, previousItem, selectedItem } = props

    return (
        <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => onMoveScreen(moveScreen, '', previousItem)}>
                <FontAwesome5 name="chevron-left" color="#013551" size={20} style={styles.titleNav}/>
            </TouchableOpacity>
            <View style={styles.titleView}>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.title}>{screenName}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FontAwesome5 name="chevron-left" color="#fff" size={20}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      paddingBottom: 10,
    //   marginTop: 5,
    },
    titleNav: {
      fontWeight: 'bold',
    },
    titleView: {
    //   marginTop: -5
    },
    title: {
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'Poppins',
      color: '#F17720',
    },
})