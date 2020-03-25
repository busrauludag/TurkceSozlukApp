import React from 'react';
import { Text, Button } from 'react-native';

import { Logo } from '../components/icons';
import Search from '../components/search';
import Box from '../components/box';

function SearchView({ navigation }) {
  return (
    <Box>
      <Text>Ara!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box py={20}>
        <Logo width={120} color="red" />
      </Box>

      <Box p={10}>
        <Search />
      </Box>
    </Box>
  );
}

export default SearchView;
