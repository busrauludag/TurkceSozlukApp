/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, Keyboard } from 'react-native';
import Input from './input';
import Box from './box';
import Button from './button';
import { Search, Close } from './icons';

import theme from '../utils/theme';

function SearchBox() {
  const [value, setValue] = React.useState('');
  const [isFocus, setFocus] = React.useState(false);

  const onCancel = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          placeholder="Türkçe Sözlük'te Ara"
          bg="white"
          color="textDark"
          borderWidth={1}
          borderColor={isFocus ? '#d1d1d1' : 'transparent'}
          placeholderTextColor="textMedium"
          height={52}
          pl={52}
          borderRadius="normal"
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={text => setValue(text)}
        />
        {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Close color={theme.colors.textMedium} />
          </Button>
        )}
        <Button position="absolute" left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
      </Box>
      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
}

export default SearchBox;
