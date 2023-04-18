import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity,Text,Image,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');



const MyButtonS = (props) => (
    <TouchableOpacity onPress={props.onPress} >
        <ImageBackground
            resizeMode='center'
            
            source={require('../assets/images/stop.png')}
            style={styles.backgroundImage}
            
            >
           
        </ImageBackground>
        
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    
    backgroundImage: {
     
        width: width * 0.3,
        height: height * 0.3,
        marginTop: height/2.5,
        marginLeft:width/10,
       
    },
   
});

export default MyButtonS;
