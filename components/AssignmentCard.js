import { View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';

const AssignmentCard = ({id, information, title }) => {
  return (
    <TouchableOpacity className=" m-2" >
      <Card color='black' onPress={()=>{console.log(id)}}>

        <Card.Title title={title}
          style={{ alignContent: 'center' }}>
        </Card.Title>

        <Card.Content color='red'>
          <Text className="text-red">{information}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Read More</Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  )
}

export default AssignmentCard;




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