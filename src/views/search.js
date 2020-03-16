import React from 'react';
import {Text, Button} from 'react-native';

import BoxCenter from './../components/box-center';
import Box from './../components/box';

import {Bookmark} from '../components/icons';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Text>Ara!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box size={20} bg="blue" mt={20} />
      <Bookmark width={50} height={50} stroke="black" />
    </BoxCenter>
  );
}

export default SearchView;
