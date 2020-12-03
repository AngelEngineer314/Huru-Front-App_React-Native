import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get("window").width;

export default function SettingsButton(props) {
    const { text, icon, backgroundColor, textColor, borderColor, onMoveScreen, moveScreen, onMoveScreenGroup, isMoveScreenGroup } = props

    const styles = StyleSheet.create({
        button: {
            width: windowWidth * 0.7,
            backgroundColor: backgroundColor,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: borderColor,
            paddingVertical: 10,
            marginVertical: 10,
            alignItems: 'center',
        },
        buttonTextView: {
            flexDirection: 'row',
        },
        buttonIconView: {
            paddingTop: 4,
        },  
        buttonText: {
            color: textColor,
            paddingHorizontal: 10,
            fontFamily: 'Poppins',
            fontSize: 25,
            fontWeight: 'bold',
            alignSelf: 'center',
        },
    })

    return (
        <TouchableOpacity
            onPress={() => { isMoveScreenGroup ? onMoveScreenGroup(moveScreen) : onMoveScreen(moveScreen)
        }}>
            <View style={styles.button}>
                <View style={styles.buttonTextView}>
                    <View style={styles.buttonIconView}>
                        {text === 'Profile' ? 
                            <IonIcon
                                name={icon}
                                color={textColor}
                                size={35}
                            /> :
                            <MaterialIcon
                                name={icon}
                                color={textColor}
                                size={35}
                            />
                        }
                    </View>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}