// @flow
/*
    Pillar Wallet: the personal data locker
    Copyright (C) 2021 Stiftung Pillar Project

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// Components
import Text from 'components/modern/Text';

// Utils
import { fontStyles, appFont, spacing } from 'utils/variables';

// Types
import type { ViewStyleProp, TextStyleProp } from 'utils/types/react-native';

type Variant = 'primary' | 'secondary' | 'text' | 'primary-destructive' | 'text-destructive';

type Size = 'regular' | 'large' | 'compact';

type Props = {|
  title?: string,
  onPress: () => mixed,
  variant?: Variant,
  size?: Size,
  disabled?: boolean,
  style?: ViewStyleProp,
  btnTextStyle?: TextStyleProp,
|};

function Button({ title, onPress, variant = 'primary', size = 'regular', disabled, style, btnTextStyle }: Props) {
  return (
    <TouchableContainer onPress={onPress} disabled={disabled} style={style} $variant={variant} $size={size}>
      <Title $variant={variant} style={btnTextStyle}>{title}</Title>
    </TouchableContainer>
  );
}

export default Button;

const TouchableContainer = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  ${({ disabled }) => disabled && 'opacity: 0.5;'}
  ${({ $size }) => $size === 'regular' && `width: 100%; padding: 14px ${spacing.large}px;`}
  ${({ $size }) =>
    $size === 'large' && `width: 100%; padding: ${spacing.largePlus}px ${spacing.large}px; border-radius: 14px;`}
  ${({ $size }) => $size === 'compact' && `padding: 6px ${spacing.medium}px;`}
  ${({ theme, $variant }) => $variant === 'primary' && `background-color: ${theme.colors.buttonPrimaryBackground}`};
  ${({ theme, $variant }) => $variant === 'primary-destructive' && `background-color: ${theme.colors.negative}`};
  ${({ theme, $variant }) => $variant === 'secondary' && `background-color: ${theme.colors.buttonSecondaryBackground};`}
`;

const Title = styled(Text)`
  ${fontStyles.medium};
  ${({ theme, $variant }) => ($variant === 'primary' && `color: ${theme.colors.buttonPrimaryTitle};`)};
  ${({ theme, $variant }) => ($variant === 'primary-destructive' && `color: ${theme.colors.buttonPrimaryTitle};`)};
  ${({ theme, $variant }) => ($variant === 'secondary' && `color: ${theme.colors.buttonSecondaryTitle};`)};
  ${({ theme, $variant }) => ($variant === 'text' && `color: ${theme.colors.buttonTextTitle};`)};
  ${({ theme, $variant }) => ($variant === 'text-destructive' && `color: ${theme.colors.negative};`)};
  ${({ $size }) => $size === 'large' && `font-family: ${appFont.medium}`};
`;
