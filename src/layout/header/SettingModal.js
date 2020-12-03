import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function SettingModal(props) {
    const { modalTitle, isModalVisible, onVisibleModal, onMoveTab, onMoveScreenGroup } = props

    return (
        <Modal 
          isVisible={isModalVisible}
          style={styles.headerModal}
          onBackdropPress={onVisibleModal}
          onRequestClose={onVisibleModal}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.logOutView}>
                        <TouchableOpacity onPress={() => { onMoveScreenGroup('auth'); }}>
                            <Text style={styles.logOut}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.counterView}>
                        <View style={styles.profileStat}>
                            <Image
                                style={styles.totalStateImage}
                                source={require('../../../assets/header/icon-interview.png')}
                            />
                            <Text style={styles.statName}>Total Interviews </Text>
                            <Text style={styles.statNumber}> 20 </Text>
                        </View>
                        <View style={styles.profileStat}>
                            <Image
                                style={styles.totalStateImage}
                                source={require('../../../assets/header/icon-minute.png')}
                            />
                            <Text style={styles.statName}>Total Minutes </Text>
                            <Text style={styles.statNumber}> 34 </Text>
                        </View>
                        <View style={styles.specialNav}>
                            <TouchableOpacity onPress={() => { onMoveTab('settings'); }}>
                                <Text style={styles.specialTitle}>{modalTitle}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={onVisibleModal}>
                                <IonIcon name="remove-outline" size={70} color="#F17720"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    headerModal: {
        margin: 0,
    },
    logOutView: {
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderBottomColor: '#013551',
        borderBottomWidth: 2,
        paddingTop: 20,
        paddingBottom: 20,
    },
    logOut: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#F17720',
    }, 
    centeredView: {
      flex: 1,
      backgroundColor: 'rgba(1, 53, 81, 0.35)',
    },
    profileStat: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        paddingVertical: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#013551',
    },
    totalStateImage: {
        width: 30, 
        height: 30, 
        marginTop: 12,
    },
    statName: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 20,
        color: '#013551',
        fontFamily: 'Poppins',
        fontWeight: '500',
    },
    statNumber: {
        fontSize: 36,
        lineHeight: 54,
        color: '#013551',
        fontFamily: 'Poppins',
        fontWeight: '300',
    },
    specialNav: {
        height: 80,
        backgroundColor: '#013551',
        alignItems: 'center',
        paddingTop: 20,
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
    },
    specialTitle: {
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#F17720',
        marginBottom: -20
    },
})