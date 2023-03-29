import { View, TouchableOpacity, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';


const ActivityCard = ({type, description, name,itemLevel}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity className="mr-3 mb-3" >
      <View className=" font-interSBold bg-white">
      <Card className=""  onPress={()=>{
        navigation.navigate('Activity',{
          name:name,
          description:description,
          type:type,
          itemLevel:itemLevel
        });
       
        }}>
          
          {/* <Card.Cover style={{height:150}} /> */}
        <Card.Title  title={name}  style={styles.titleText}
          titleStyle={{color:'brown'}} >
        </Card.Title>

        <Card.Content className="text-red font-interSBold">
          <Text className='text-textColor font-interSBold'>{description}</Text>
        </Card.Content>
        <Card.Actions style={{alignItems:'center'}}>
          <Button>Level: {itemLevel}</Button>
        </Card.Actions>
      </Card>
      </View>
      
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