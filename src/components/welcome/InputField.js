import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const InputField = ({errorText, ...props}) => (
  <View style={styles.inputView}>
    <IonIcon style={styles.icon} name={props.icon} size={18} color="#F17720" />
    <TextInput
      style={styles.textInput}
      autoCapitalize={'none'}
      autoCorrect={false}
      {...props}
      placeholderTextColor="#F17720"
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  inputView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#FDF9F3',
    paddingHorizontal: 20,
    paddingVertical: 3,
    width: '70%',
    borderColor: 'rgba(241, 119, 32, 0.24)',
    borderRadius: 30,
    borderWidth: 1,
    overflow: 'hidden',
    fontFamily: 'Poppins',
  },
  textInput: {
    width: '100%',
    color: '#F17720',
    fontFamily: 'Poppins',
  },
  icon: {
    marginRight: 10,
  },
  error: {
    fontSize: 14,
    color: 'red',
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default InputField;
