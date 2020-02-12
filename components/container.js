import React from 'react';
import {View} from 'react-native';
const Container = props => {
  return (
    <View
      style={Object.assign(
        {
          paddingHorizontal: 20,
          justifyContent: 'center',
          display: 'flex',
          flex: 1,
        },
        props.style,
      )}>
      {props.children}
    </View>
  );
};

export default Container;
