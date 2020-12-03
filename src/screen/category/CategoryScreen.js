import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {category} from './data';
import LinearGradient from 'react-native-linear-gradient';

import InterviewDescription from '../../components/category/InterviewDesription';
import CloseLine from '../../components/category/CloseLine'

const CategoryScreen = props => {
  const { onMoveScreen, onVisibleModal } = props

  console.disableYellowBox = true;
  const [term, setTerm] = useState('');

  const filteredData = term // based on text, filter data and use filtered data
    ? category.filter(item => {
        const itemData = item.title.toUpperCase();
        const textData = term.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
    : category; // on on text, u can return all data

  const renderCategoryItem = itemData => (
    <View style={styles.item}>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
            zIndex: -999,
          }}
          colors={[itemData.item.colorOne, itemData.item.colorTwo]}>
          <Text style={styles.itemTitle}>{itemData?.item.title}</Text>
          <Text style={styles.itemDetails}>{itemData?.item.details}</Text>
          <TouchableOpacity
            onPress={() =>
              onMoveScreen('subCategory', '', itemData.item.title)
              // props.navigation.navigate('SubCategory', {
              //   name: itemData.item.title,
              // })
            }>
            <Text style={styles.catButtonText}>View Details</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <SafeAreaView>
        <ScrollView>
          <TouchableHighlight>
            <View style={styles.mainView}>
              <View style={{alignItems: 'center', paddingHorizontal: '5%'}}>
                {/* <CloseLine onVisibleModal={onVisibleModal} /> */}
                <InterviewDescription description="Which type of interview would you like to"/>
              </View>
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
              <View style={styles.itemView}>
                <View>
                  <FlatList
                    data={filteredData}
                    renderItem={renderCategoryItem}
                    numColumns={2}
                  />
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0, 0, 0.4)',
  },
  mainView: {
    backgroundColor: '#fff',
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
    marginBottom: '15%',
  },
  searchView: {
    backgroundColor: '#FFF2E6',
    marginHorizontal: '5%',
    marginTop: 15,
    marginBottom: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
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
  itemView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 100,
  },
  item: {
    width: '45%',
    marginVertical: 10,
    marginLeft: '3%',
  },
  itemTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 16,
    paddingVertical: 10,
  },
  itemDetails: {
    color: '#fff',
    fontWeight: '400',
    fontFamily: 'Poppins',
    fontSize: 10,
    lineHeight: 15,
  },
  catButtonText: {
    width: '100%',
    color: '#fff',
    backgroundColor: 'rgba(255,255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 10,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 10,
  },
});
CategoryScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default CategoryScreen;
