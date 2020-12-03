import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tooltip from 'react-native-walkthrough-tooltip';
// import { Tooltip } from 'react-native-elements';

const CameraScreen = props => {
  const { onMoveTab, onMoveScreen } = props

  let cameraRef = useRef(null);
  const [camType, setCamType] = useState(RNCamera.Constants.Type.front);
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.on);
  const [isRecord, setIsRecord] = useState(false);
  const [isStopRecord, setStopRecord] = useState(false);
  const [toolTipOneVisible, setToolTipOneVisible] = useState(true);
  const [toolTipTwoVisible, setToolTipTwoVisible] = useState(false);

  // const takePicture = async () => {
  //   if (cameraRef) {
  //     const options = {quality: 0.5, base64: true};
  //     const data = await cameraRef.current.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };

  const recordVideo = async () => {
    if (cameraRef) {
      const recordOptions = {mute: false};
      setIsRecord(true);

      const data = await cameraRef.current.recordAsync(recordOptions);
      console.log(data.uri);
      console.log('record start');
    }
  };

  const stopRecord = async () => {
    // setIsRecord(false);
    // setStopRecord(true);
    // setToolTipTwoVisible(true);

    // const data = await cameraRef.current.stopRecording();
    // console.log(data.uri);
    // console.log('record stopped');

    onMoveScreen('interviewStop')
  };

  // const flipCam = () => {
  //   if (camType === RNCamera.Constants.Type.back) {
  //     setCamType(RNCamera.Constants.Type.front);
  //   } else {
  //     setCamType(RNCamera.Constants.Type.back);
  //   }
  // };

  // const toggleflash = () => {
  //   if (flash === RNCamera.Constants.FlashMode.on) {
  //     setFlash(RNCamera.Constants.FlashMode.off);
  //   } else {
  //     setFlash(RNCamera.Constants.FlashMode.on);
  //   }
  // };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={camType}
        flashMode={flash}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <View style={styles.cameraHeader}>
          <SafeAreaView>
            <Text style={styles.frameTitle}>What are your weaknesses?</Text>
            <TouchableOpacity style={styles.frameCount}>
                <Text
                  style={styles.frameCountText}>
                  1/5
                </Text>
            </TouchableOpacity>
            {/* {isRecord === true ? (
              <View style={styles.frameItemList}>
                <TouchableOpacity style={styles.timeCounter}>
                  <Text style={styles.timeCounterValue}>00:00:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.frameCounnt}>
                  <ImageBackground
                    style={styles.countBg}
                    source={require('../../../assets/category/count.png')}>
                    <Text
                      style={{paddingTop: 20, fontSize: 18, fontFamily: 'Poppins'}}>
                      1/5
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeCounter}>
                  <Text style={styles.recordStateText}>Rec{' '} 
                    <MaterialCommunityIcon
                      style={styles.recordIcon}
                      name="circle"
                      color="#D20100"
                      size={18}
                    />
                  </Text>
                </TouchableOpacity>
              </View> ) :
              <TouchableOpacity style={styles.frameCounnt}>
                <ImageBackground
                  style={styles.countBg}
                  source={require('../../../assets/category/count.png')}>
                  <Text
                    style={{paddingTop: 20, fontSize: 18, fontFamily: 'Poppins'}}>
                    1/5
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            } */}
          </SafeAreaView>
        </View>
        <View style={styles.controlView}>
          {isRecord === true ? (
            <>
            <TouchableOpacity
              onPress={() => stopRecord()}
              style={styles.stopButton}>
              <View
                style={styles.stopRecordIconView}
              >
                <MaterialCommunityIcon
                  name="square"
                  color="#FF0000"
                  size={50}
                  style={styles.stopRecordIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeCounter}>
              <Text style={styles.timeCounterValue}>00:00:00</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => props.navigation.navigate('InterviewResult')}
              style={styles.capture}>
              <Entypo name="chevron-thin-right" color="#000" size={30} />
            </TouchableOpacity> */}
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => recordVideo()}
                style={styles.playButton}>
                <Tooltip
                  animated
                  isVisible={toolTipOneVisible}
                  contentStyle={{
                    width: 193,
                    height: 65,
                    borderRadius: 50,
                    textAlign: 'center',
                  }}
                  content={<Text style={styles.tooltipOneText}>Click to start</Text>}
                  placement="top"
                  onClose={() => setToolTipOneVisible(false)}>
                  <View
                    style={styles.playRecordIconView}>
                    <MaterialCommunityIcon
                      style={styles.stopRecordIcon}
                      name="circle"
                      color="#FF0000"
                      size={70}
                    />
                  </View>
                </Tooltip>
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() => props.navigation.navigate('InterviewResult')}
                style={styles.capture}>
                <Entypo name="chevron-thin-right" color="#000" size={30} />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => onMoveTab('category')}>
                  <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  cameraHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    // alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  frameTitle: {
    alignSelf: 'center',
    fontFamily: 'Poppins',
    color: '#013551',
    fontSize: 25,
    paddingTop: 50,
  },
  frameItemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '100%',
  },
  recordStateText: {
    color: '#fff',
    fontSize: 16,
  },
  recordIcon: {
    marginTop: 15,
  },
  frameCount: {
    alignSelf: 'flex-end',
  },
  frameCountText: {
    paddingTop: 30, 
    paddingBottom: 5,
    paddingRight: 30,
    fontSize: 18, 
    fontFamily: 'Poppins',
    color: '#013551',
  },
  countBg: {
    width: 70,
    height: 70,
    alignItems: 'center',
    flexDirection: 'column',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignSelf: 'center',
    margin: 10,
  },
  controlView: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#4A4F62',
    // width: '100%',
    // paddingTop: 5,
    // paddingBottom: 5,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
  },
  playButton: {
    alignSelf: 'center',
    // top: -60,
    // borderRadius: 999,
    // borderColor: '#4A4F62',
    // backgroundColor: '#4A4F62',
    padding: 5,
  },
  readyText: {
    color: '#fff',
    fontSize: 20,
    top: 20,
  },
  tooltipOneText: {
    color: '#013551',
    fontFamily: 'Poppins',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 8,
  },
  tooltipTwoText: {
    color: '#013551',
    fontFamily: 'Poppins',
    fontSize: 22,
    paddingTop: 1,
    paddingLeft: 19,
  },
  cancelButton: {
    color: '#013551',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
  },
  stopButton: {
    alignSelf: 'center',
    top: -40,
  },
  playRecordIconView: {
    marginTop: 15,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#FF0000',
    borderRadius: 999,
  },
  playRecordIcon: {
    borderRadius: 5,
  },
  stopRecordIconView: {
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 999,
    // backgroundColor: '#4A4F62',
    padding: 10,
  },
  stopRecordIcon: {
    borderRadius: 5,
  },
  timeCounter: {
    alignSelf: 'center',
    top: -30,
  },
  timeCounterValue: {
    color: '#fff',
    fontSize: 16
  },
});

CameraScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default CameraScreen;
