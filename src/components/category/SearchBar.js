import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';


export default function SearchBar(props) {

    return (
        <View style={styles.searchView}>
            <IonIcon color="#F17720" name="search" size={20} />
            <TextInput
                style={styles.inputText}
                onChangeText={text => setTerm(text)}
                value={term}
                placeholderTextColor="#F17720"
                placeholder="Search"
                autoCorrect={false}
                autoCapitalize="none"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchView: {
        backgroundColor: '#FFF2E6',
        marginHorizontal: 10,
        marginVertical: 15,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#F8E6D6',
        borderWidth: 2,
    },
    inputText: {
        fontSize: 16,
        alignItems: 'center',
        paddingHorizontal: 20,
        fontFamily: 'Poppins',
        width: '100%',
    },
});