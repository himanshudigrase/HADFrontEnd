import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import breath from './breath';
const CountdownIndicator = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <View>
      {countdown > 0 ? (
        <Text>{countdown}</Text>
      ) : (
        <breath/>
      )}
    </View>
  );
};

export default CountdownIndicator;