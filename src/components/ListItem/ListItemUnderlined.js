// @flow
import * as React from 'react';
import styled from 'styled-components/native';
import { baseColors, fontSizes, spacing, fontWeights } from 'utils/variables';
import { BoldText, BaseText } from 'components/Typography';
import Spinner from 'components/Spinner';

type Props = {
  label: string,
  value: any,
  valueAdditionalText?: string,
  spacedOut?: boolean,
  valueAddon?: React.Node,
  showSpinner?: boolean,
}

const ItemWrapper = styled.View`
  margin-top: ${spacing.mediumLarge}px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const ItemLabel = styled(BaseText)`
  text-align:center;
  font-size: ${fontSizes.extraExtraSmall}px;
  color: ${baseColors.darkGray};
  font-weight: ${fontWeights.medium};
`;

const ItemValueHolder = styled.View`
  border-bottom-width: 1px;
  border-color: ${baseColors.gallery};
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  padding-right: ${spacing.mediumLarge}px;
`;

const ItemValue = styled(BoldText)`
  font-size: ${fontSizes.large}px;
  font-weight: ${fontWeights.bold};
  margin-bottom: ${spacing.medium}px;
  margin-top: ${props => props.spacedOut ? '8px' : '0'};
  padding-left: ${props => props.additionalMargin ? '10px' : 0};
  text-align: right;
  max-width: 230px;
`;

const ListItemUnderlined = (props: Props) => {
  const {
    label,
    value,
    valueAdditionalText,
    spacedOut,
    valueAddon,
    showSpinner,
  } = props;
  return (
    <ItemWrapper>
      <ItemLabel>{label}</ItemLabel>
      <ItemValueHolder>
        {valueAddon}
        <ItemValue
          spacedOut={spacedOut}
          additionalMargin={valueAddon}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {value}
        </ItemValue>
        {!!valueAdditionalText && <ItemValue style={{ marginLeft: 4 }}>{valueAdditionalText}</ItemValue>}
        {!!showSpinner &&
        <Spinner width={20} height={20} style={{ marginBottom: 16, marginLeft: 10 }} />}
      </ItemValueHolder>
    </ItemWrapper>
  );
};

export default ListItemUnderlined;
