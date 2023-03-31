import { View, TouchableOpacity, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const ActivityCard = ({type, description, name,itemLevel}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity className="mr-3 mb-3" >
      
      <Card style={{
        height:180,
        flexDirection:'column',
        justifyContent:'space-between',
    width: Dimensions.get('window').width / 2
  }} onPress={()=>{
        navigation.navigate('Activity',{
          name:name,
          description:description,
          type:type,
          itemLevel:itemLevel
        });
       
        }}>
          
          {/* <Card.Cover style={{height:150}} /> */}
        {/* <Card.Title  title={name}  style={styles.titleText}
          titleStyle={{color:'brown',flexWrap:'wrap',flexShrink:1 }} >
        </Card.Title> */}
        <View className='flex-column justify-between'>
        <Text className=' h-16 ml-4 text-textColor text-lg font-bold' >{name}</Text>

        <Card.Content >
          <Text className=' text-textColor font-interRegular'>{description}</Text>
        </Card.Content>

        <Button className='alignItem-center'>Level: {itemLevel}</Button>

        </View>
        
      </Card>
     
      
    </TouchableOpacity>
  )
}

export default ActivityCard;

const styles= StyleSheet.create({
  titleText:{
    fontFamily:'inter-extrabold'
  },
  text:{
    fontFamily:'inter-regular'
  },
  btn:{

  }
})


// export class MyCarousel extends Component {

//     _renderItem = ({item, index}) => {
//         return (
//             <View style={styles.slide}>
//                 <Text style={styles.title}>{ item.title }</Text>
//             </View>
//         );
//     }

//     render () {
//         return (
//             <Carousel
//               ref={(c) => { this._carousel = c; }}
//               data={this.state.entries}
//               renderItem={this._renderItem}
//               sliderWidth={sliderWidth}
//               itemWidth={itemWidth}
//             />
//         );
//     }
// }