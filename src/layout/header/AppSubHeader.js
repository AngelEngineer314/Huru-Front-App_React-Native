import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import SettingModal from './SettingModal'

const AppSubHeader = props => {
  const { title, onMoveScreen, moveScreen, showUserImage, onMoveScreenGroup, onMoveTab } = props

  const [modalVisible, setModalVisible] = useState(false);

  const handleVisibleModal = () => {
    setModalVisible(!modalVisible)
  }

    return (
        <View style={title === 'Dashboard' ? styles.headerOne: styles.headerTwo}>
            <View style={styles.headerView}>
                <TouchableOpacity
                    onPress={() => {
                        onMoveScreen(moveScreen)
                    }}>
                    <FontAwesome5
                        style={styles.backIcon}
                        name="chevron-left"
                        size={25}
                    />
                </TouchableOpacity>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                    setModalVisible(true);
                    }}>
                    {showUserImage ?
                      <View style={styles.profileView}>
                        <Image
                            style={styles.profilePic}
                            source={require('../../../assets/header/profile.jpg')}
                        />
                        <FontAwesome5
                            style={styles.modalIcon}
                            name="chevron-down"
                            size={20}
                        />
                      </View> : 
                      <Text style={styles.rightText}>P</Text>
                    }
                </TouchableOpacity>
            </View>
            <SettingModal modalTitle="Settings" isModalVisible={modalVisible} onVisibleModal={handleVisibleModal} onMoveTab={onMoveTab} onMoveScreenGroup={onMoveScreenGroup}/>
        </View>
    );
};

const styles = StyleSheet.create({
  headerOne: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    fontFamily: 'Poppins',
    position: 'relative',
    zIndex: 9999,
  },
  headerTwo: {
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#fff',
    fontFamily: 'Poppins',
    position: 'relative',
    zIndex: 9999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  headerView: {
    // borderBottomEndRadius: 30,
    // borderBottomStartRadius: 30,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titleView: {
    // alignItems: 'center'
  },
  title: {
    color: '#013551',
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  profileView: {
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 999,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 30,
  },
  rightText: {
    color: '#ffffff',
    paddingVertical: 40
  },
  backIcon: {
    color: '#013551',
    marginTop: 20
  },
  modalIcon: {
    marginTop: -3,
  },
});

export default AppSubHeader;
