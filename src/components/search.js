import React from 'react';
import Input from './input';
import Box from './box';
import { Search } from './icons';

import theme from '../utils/theme';

function SearchBox() {
  return (
    <Box position="relative">
      <Input
        placeholder="Türkçe Sözlük'te Ara"
        placeholderTextColor="textMedium"
        bg="white"
        color="textDark"
        height={52}
        pl={52}
        borderRadius="normal"
      />
      <Box position="absolute" left={16} top={12}>
        <Search color={theme.colors.textMedium} />
      </Box>
    </Box>
  );
}

export default SearchBox;
