import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default function NotificationBlock(props) {
    const { title, text } = props

    return (
        <View style={styles.notificationView}>
            <Text style={styles.notificationTitle}>{title} :{' '}
              <Text style={styles.notificationText}>
                  {text}
              </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    notificationView: {
      marginVertical: 10,
      marginHorizontal: 40,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: '#ffffff',
      borderRadius: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderWidth: 1,
      borderColor: '#E9E9E9',
    },
    notificationTitle: {
      color: '#F17720',
      fontFamily: 'Poppins',
      fontWeight: '600',
      fontSize: 14,
    },
    notificationText: {
      fontFamily: 'Poppins',
      color: '#013551',
      fontFamily: 'Poppins',
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 21,
    },
  });
