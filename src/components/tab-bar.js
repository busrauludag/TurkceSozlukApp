/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

import Button from './button';
import Box from './box';
import { Search, Bookmark, Clock } from './icons';

import theme from './../utils/theme';

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
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

        return label === 'Search' ? (
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
            <Button size={56} borderRadius="full" bg="red" onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            height={56}
            flex={1}
            flexDirection="column"
            onPress={onPress}>
            {label === 'History' && (
              <Clock
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === 'Favorite' && (
              <Bookmark
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={3}
              bg={isFocused ? 'red' : 'white'}
              mt={6}
              borderRadius="full"
            />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
