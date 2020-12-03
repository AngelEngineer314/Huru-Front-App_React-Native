import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const InterviewDoneHeader = props => {

  return (
    <View style={styles.header}>
        <View style={styles.headerView}>
            <Text style={styles.title}>Interview Done 👍</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#fff',
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
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: '#013551',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    paddingVertical: 50,
  }
});

export default InterviewDoneHeader;
