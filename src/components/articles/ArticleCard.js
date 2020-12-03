import React from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// export default function ArticleCard(props) {
//   const { itemData } = props

//   return (
//       <View style={{alignItems: 'center'}}>
//           <View style={{zIndex: 2000}}>
//               <Image source={{uri: itemData.image}} style={styles.itemImage} />
//           </View>
//           <View
//               style={{
//                 backgroundColor: itemData.bgColor,
//                 width: windowWidth * 0.7,
//                 height: windowHeight * 0.45,
//                 paddingTop: 100,
//                 paddingBottom: 20,
//                 borderRadius: 10,
//                 paddingHorizontal: 25,
//                 top: -100,
//                 zIndex: 1,
//               }}>
//               <Text style={styles.itemTitle}>{itemData.title} </Text>
//               <Text style={styles.itemDetails}>{itemData.details} </Text>
//           </View>
//       </View>
//   )
// }

const ArticleCard = itemData => (
    <View style={{alignItems: 'center'}}>
      <View style={{zIndex: 2000}}>
        <Image source={{uri: itemData.item.image}} style={styles.itemImage} />
      </View>
      <View 
        style={{
          backgroundColor: itemData.item.bgColor,
          marginRight: 20,
          width: windowWidth * 0.6,
          height: windowHeight * 0.45,
          paddingTop: 100,
          paddingBottom: 20,
          borderRadius: 10,
          paddingHorizontal: 40,
          top: -100,
          zIndex: 1,
          }}>
        <Text style={styles.itemTitle}>{itemData.item.title} </Text>
        <Text style={styles.itemDetails}>{itemData.item.details} </Text>
      </View>
    </View>
);

export default ArticleCard

const styles = StyleSheet.create({
    itemImage: {
      width: 209,
      height: 162,
      zIndex: 2,
    },
    itemTitle: {
      color: '#013551',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 40,
      marginBottom: 15,
    },
    itemDetails: {
      color: '#013551',
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Poppins',
      lineHeight: 19,
    },
});

