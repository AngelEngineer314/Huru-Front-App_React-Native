import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,   
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const CategoryCard = itemData => (
    <View style={styles.item}>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            paddingHorizontal: 20,
            maxWidth: 180,
            paddingTop: 10,
            paddingBottom: 10,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            zIndex: -999,
            marginBottom: 10,
          }}
          colors={[itemData.item.colorOne, itemData.item.colorTwo]}>
          <Text style={styles.itemTitle}>{itemData?.item.title}</Text>
          <Text style={styles.itemDetails}>{itemData?.item.details}</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('SubCategory', {
                name: itemData.item.title,
              })
            }>
            <Text style={styles.catButtonText}>View Details</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
);

const styles = StyleSheet.create({
    itemView: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 100,
    },
    item: {
      marginHorizontal: 10,
      marginVertical: 10,
      // width: 200,
    },
    itemTitle: {
      color: '#fff',
      fontWeight: '600',
      fontFamily: 'Poppins',
      fontSize: 16,
      paddingVertical: 10,
    },
    itemDetails: {
      color: '#fff',
      fontWeight: '400',
      fontFamily: 'Poppins',
      fontSize: 14,
      // paddingVertical: 10,
    },
    catButtonText: {
      color: '#fff',
      backgroundColor: 'rgba(255,255, 255, 0.2)',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 14,
      alignSelf: 'center',
      fontWeight: '600',
      borderRadius: 5,
      overflow: 'hidden',
      marginVertical: 20,
    },
});

export default CategoryCard