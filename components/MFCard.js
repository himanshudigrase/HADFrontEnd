import { View, TouchableOpacity, Text, Image ,StyleSheet} from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MFCard = ({ url,id,question,explanation }) => {

  return (
    <View className='flex-row' style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/mfs.png')}
      />
       </View>
  )
}

export default MFCard;
const styles = StyleSheet.create({
  container: {
    display:'flex',
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
