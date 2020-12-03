import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CheckBox} from 'native-base';

const QaItem = props => {
  const [isSelected, setSelection] = useState(true);

  const handleCheckboxPress = () => {
    setSelection(!isSelected);
  };

  return (
    <>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{props.title}</Text>
        <CheckBox
          color="#FB7633"
          checked={isSelected}
          onPress={handleCheckboxPress}
          style={styles.listCheckbox}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#dddddd',
    paddingLeft: 20,
    paddingRight: 30,
    alignItems: 'center',
    marginVertical: 10,
    // minWidth: 365,
    borderRadius: 20,
  },
  itemText: {
    color: '#3B4A58',
    textAlign: 'left',
    marginRight: 10,
    fontFamily: 'Poppins',
  },
  listCheckbox: {
    borderRadius: 25,
  }
});

export default QaItem;
