import React from 'react';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const MyButton = (props) => {
    return (
        {...props.disabled ? 
            <Button
            buttonColor= 'blue'
            {...props}
            labelStyle={{ color: 'white', fontSize: 16 }}
            style={{ borderRadius: 50, width:230,left: 62 }}
        >
        {props.title}
        </Button>
        :
        <LinearGradient
        colors={['#7191f7', '#2f38f4']}
        style={{ borderRadius: 50, width:230,left:62 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        >
            
            <Button
                buttonColor='transparent'
                {...props}
                labelStyle={{ color: 'white', fontSize: 16 }}
                
            >
            {props.title}
            </Button>
        </LinearGradient>
    }
    );
};

export default MyButton;