import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import { Button } from "react-native-paper";
import { set } from "react-native-reanimated";

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
    <View className='h-full bg-backgr'>
    <View style={styles.container}>
      {startbreath === false  ? <Button mode='contained' style={{marginRight:180,marginBottom:280}} onPress = {()=>setStartbreath(true)} >Start</Button>
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
                  backgroundColor: "purple",
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
      <Button style={{marginRight:180}} mode="contained" onPress={()=>setStartbreath(false)}>Stop</Button>
      </>)
   }
        
    </View>
    </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f2eb",
    alignItems: "center",
    justifyContent: "center",
    left: width / 4,
    top: height / 4,
  },
});