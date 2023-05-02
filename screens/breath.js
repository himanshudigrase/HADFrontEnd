import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Animated,Image,SafeAreaView} from "react-native";
import MyButton from '../components/CustomStart';
import { LinearGradient } from 'expo-linear-gradient';
import MyButtonS from '../components/CustomStop';

const { width, height } = Dimensions.get("window");
const circleWidth = width / 2;
export default function App() {

  const [startbreath, setStartbreath] = useState(false);
  const move = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;

      Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(textOpacity, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(move, {
              toValue: 1,
              duration: 4000,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(textOpacity, {
              delay: 100,
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(move, {
              delay: 1000,
              toValue: 0,
              duration: 4000,
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    
  // }, [startTimer]);

  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleWidth / 6],
  });
  const exhale = textOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });



  return (
    <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
      
    <SafeAreaView className='h-full '>
    <Image style={styles.bgImage} source={require('../assets/images/verti.png')} />
    <View className='mt-32 ml-20'>
    
      {startbreath === false  ? <MyButton   onPress = {()=>setStartbreath(true)} title='Start'></MyButton>
        : (<>
          <Animated.View
            style={{
              width: circleWidth,
              height: circleWidth,
              ...StyleSheet.absoluteFill,
              alignItems: "center",
              justifyContent: "center",
              opacity: textOpacity,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Inhale
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              width: circleWidth,
              height: circleWidth,
              ...StyleSheet.absoluteFill,
              alignItems: "center",
              justifyContent: "center",
              opacity: exhale,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Exhale
            </Text>
          </Animated.View>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
            const rotation = move.interpolate({
              inputRange: [0, 1],
              outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
            });
            return (
              <Animated.View
                key={item}
                style={{
                  opacity: 0.1,
                  backgroundColor: "#7190F9",
                  width: circleWidth,
                  height: circleWidth,
                  borderRadius: circleWidth / 2,
                  ...StyleSheet.absoluteFill,
                  transform: [
                    {
                      rotateZ: rotation,
                    },
                    { translateX: translate },
                    { translateY: translate },
                  ],
                }}
              ></Animated.View>
            );
          })}
      {/* <Button  onPress={()=>setStartbreath(false)}>Stop</Button> */}
      <MyButtonS  onPress = {()=>setStartbreath(false)} title='Stop'></MyButtonS>
      </>)
   }
        
    </View>
    </SafeAreaView>
    </LinearGradient>
    )
    
}

const styles = StyleSheet.create({
  
  bgImage: {
    position: 'absolute',
    left: '-76%',
    right: '-20%',
    top: '40%',
    bottom: '70.72%',
    zIndex: 0,

  },
});
