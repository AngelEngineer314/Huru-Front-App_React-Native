import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
  } from 'react-native';

export default function InterviewDescription(props) {
    const { description } = props

    return (
        <View style={styles.interviewDescription}>
            <Image
                style={styles.interviewDescriptionImage}
                source={require('../../../assets/category/categoryHeader.png')} />
            <Text style={styles.interviewDescriptionText}>
                {description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    interviewDescription: {
        width: '100%',
        position: 'relative',
        alignItems: 'center',
        alignSelf: 'center',
    },
    interviewDescriptionImage: { 
        width: '100%',
        height: 115, 
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },  
    interviewDescriptionText: {
        width: '90%',
        position: 'absolute',
        marginTop: '8%',
        fontSize: 18,
        fontFamily: 'Poppins',
        textAlign: 'center',
        color: '#013551',
        lineHeight: 27,
    },
})