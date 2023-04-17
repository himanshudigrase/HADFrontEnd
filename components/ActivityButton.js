import React from 'react';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const MyButton = (props) => {
    return (
        
        <LinearGradient
            colors={['#7191f7', '#2f38f4']}
            style={{ borderRadius: 50, width:140,left:20 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            {console.log(props.title)}
            <Button
                buttonColor='transparent'
                {...props}
                labelStyle={{ color: 'white', fontSize: 16 }}
                
            >
                Level: {props.title}
            </Button>
        </LinearGradient>
    );
};

export default MyButton;