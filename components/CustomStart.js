import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, ImageBackground, TouchableOpacity,Text,Image,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const MyButton = (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <ImageBackground
            resizeMode='center'
            source={require('../assets/images/start.png')}
            style={styles.backgroundImage}
            
            ></ImageBackground>
           
        
        
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    
    backgroundImage: {
    
        width: width * 0.8,
        height: height * 0.8,
        marginLeft:-42,
        marginTop: -40
    },
    
});

export default MyButton;
