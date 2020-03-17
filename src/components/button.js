import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {compose, color, size, space, flexbox} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(
    color,
    size,
    space,
    flexbox,
  ),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
