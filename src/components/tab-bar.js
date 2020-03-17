/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text} from 'react-native';

import Button from './button';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Button flex={1} onPress={onPress}>
            <Text>{label}</Text>
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
