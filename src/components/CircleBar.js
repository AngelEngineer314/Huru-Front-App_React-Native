import React from 'react';
import {View, Text} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const CircleBar = ({
  radius,
  bgColor,
  shadowColor,
  percent,
  borderWidth,
  color,
  title,
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <ProgressCircle
        percent={percent}
        radius={radius}
        borderWidth={borderWidth}
        color={color}
        shadowColor={shadowColor}
        bgColor={bgColor}>
        <Text
          style={{
            fontSize: 14,
            color: color,
            fontWeight: '600',
            fontFamily: 'Poppins',
          }}>{`${percent}%`}</Text>
      </ProgressCircle>
      <Text
        style={{
          fontSize: 10,
          color: color,
          fontWeight: '600',
          fontFamily: 'Poppins',
          paddingVertical: 10,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default CircleBar;
