import React, { useState } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default function InterviewStopScreen(props) {
    const { onMoveScreen } = props

    return (
        <View style={styles.interviewStopScreen}>
            <View style={styles.interviewStopContent}>
                <View style={styles.logo}>
                    <Image source={require('../../../assets/category/logo_interviewStop.png')} />
                </View>
                <View style={styles.readyForm}>
                    <Text style={styles.title}>Ready for the next question</Text>
                    <View style={styles.buttonForm}>
                        <TouchableOpacity style={styles.buttonView} onPress={() => onMoveScreen('camera')}>
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonView} onPress={() => onMoveScreen('interviewDone')}>
                            <Text style={styles.nextButton}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    interviewStopScreen: {
        width: '100%',
        height: '100%',
        position: 'relative',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    interviewStopContent: {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        top: '35%'
    },
    logo: {

    },
    readyForm: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        alignSelf: 'center',
        color: '#013551',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
    },
    buttonForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    buttonView: {
        width: 100, 
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#013551',
        paddingVertical: 15,
    },
    cancelButton: {
        alignSelf: 'flex-start',
        color: '#013551',
        paddingLeft: 26,
    },
    nextButton: {
        alignSelf: 'flex-end',
        color: '#013551',
        paddingRight: 32,
    }
})