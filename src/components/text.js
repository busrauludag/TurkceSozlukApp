import { Text as T } from 'react-native';
import styled from 'styled-components';
import { compose, color, size, space, typography } from 'styled-system';

const Text = styled(T)(
  compose(
    color,
    size,
    space,
    typography,
  ),
);

export default Text;
