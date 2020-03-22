import React from 'react';
import { Text, Button } from 'react-native';

import BoxCenter from './../components/box-center';

import { Logo } from '../components/icons';

function SearchView({ navigation }) {
  return (
    <BoxCenter bg="atasozleriLight">
      <Text>Ara!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Logo width={120} color="red" />
    </BoxCenter>
  );
}

export default SearchView;
