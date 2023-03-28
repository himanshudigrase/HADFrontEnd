import { View, TouchableOpacity, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const qaUrl = require('../assets/images/Assignments/QA.jpg')


const AssignmentCard = ({id, information, title ,imgUrl}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity className="mr-3 mb-3" >
      <View className=" font-interSBold">
      <Card   onPress={()=>{
        console.log(imgUrl)
        if(id%2 === 1)
        navigation.navigate('Activity');
        else navigation.navigate('Post');
        }}>
          
          <Card.Cover style={{height:150}} source={require('../assets/images/Assignments/QA.jpg')}/>
        <Card.Title  title={title}
          style={styles.titleText} titleStyle={{color:'brown'}}>
        </Card.Title>

        <Card.Content className="text-red font-interSBold">
          <Text className='text-textColor font-interSBold'>{information}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Read More</Button>
        </Card.Actions>
      </Card>
      </View>
      
    </TouchableOpacity>
  )
}

export default AssignmentCard;

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