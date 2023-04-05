import React from 'react';
import { Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native-web';

const CustomCard = ({ title, imgUrl, description, author, information }) => {
    return (

        <Card >          
            <View className='flex-row'>
                <Image source={imgUrl} className='h-20 w-20'/>
                <View>
                    <Card.Content>
                        <Text>Blog</Text>
                        <Title>{title}</Title>
                        <Text>{author}</Text>
                    </Card.Content>
                </View>

            </View>
        </Card>


    );
};
export default CustomCard;