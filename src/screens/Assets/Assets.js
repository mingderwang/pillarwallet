// @flow
import * as React from 'react';
import styled from 'styled-components/native';
import {
  TouchableOpacity,
  Animated,
  Easing,
  RefreshControl,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { baseColors } from 'utils/variables';
import type { NavigationScreenProp } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';
import { connect } from 'react-redux';
import { TextLink } from 'components/Typography';
import type { Assets } from 'models/Asset';
import Button from 'components/Button';
import {
  fetchInitialAssetsAction,
  fetchAssetsBalancesAction,
  fetchExchangeRatesAction,
} from 'actions/assetsActions';
import AssetCard from 'components/AssetCard';
import { Container } from 'components/Layout';
import Title from 'components/Title';
import { formatMoney } from 'utils/common';
import { FETCH_INITIAL_FAILED, defaultFiatCurrency, ETH, FETCHED } from 'constants/assetsConstants';
import { ASSET, ADD_TOKEN, SEND_TOKEN_FLOW } from 'constants/navigationConstants';

// TODO: change to actual token colors that is fetch with the asset
const tokenColor = {};
tokenColor.ETH = '#3c3c3d';
tokenColor.PLR = '#00bfff';
tokenColor.QTM = '#1297d7';
tokenColor.EOS = '#443f53';
tokenColor.OMG = '#1a56f0';
tokenColor.ICX = '#1aaaba';
tokenColor.STORJ = '#2683FF';
tokenColor.BAT = '#ff5500';
tokenColor.GNT = '#282f41';
tokenColor.PPT = '#5a9ef6';
tokenColor.SALT = '#85C884';

type Props = {
  fetchInitialAssets: (walletAddress: string) => Function,
  fetchAssetsBalances: (assets: Assets, walletAddress: string) => Function,
  fetchExchangeRates: (assets: Assets) => Function,
  assets: Assets,
  wallet: Object,
  rates: Object,
  assetsState: ?string,
  navigation: NavigationScreenProp<*>,
  baseFiatCurrency: string,
}

type State = {
  assetsMedia: Object,
}

const AssetsHeader = styled.View`
  flexDirection: row;
  backgroundColor: ${baseColors.white};
  elevation: 1;
  padding: 0 16px;
  alignItems: center;
  justifyContent: space-between;
`;

class AssetsScreen extends React.Component<Props, State> {
  state = {
    assetsMedia: {},
  };

  static navigationOptions = {
    transitionConfig: {
      duration: 300,
      timing: Animated.timing,
      easing: Easing.easing,
    },
  };

  componentDidMount() {
    const {
      fetchInitialAssets,
      fetchAssetsBalances,
      fetchExchangeRates,
      assets,
      wallet,
    } = this.props;

    fetchAssetsBalances(assets, wallet.address);
    fetchExchangeRates(assets);

    if (!Object.keys(assets).length) {
      fetchInitialAssets(wallet.address);
    }

    this.fetchAssetsMedia();
  }
  // TODO: change to the asset icon that is fetched with the asset
  fetchAssetsMedia = async () => {
    const response = await fetch('https://api.myjson.com/bins/19uwn2');
    const json = await response.json();
    this.setState({
      assetsMedia: json,
    });
  };

  handleCardTap = (assetData: Object) => {
    this.props.navigation.navigate(ASSET, {
      assetData,
    });
  };

  goToAddTokenPage = () => {
    this.props.navigation.navigate(ADD_TOKEN);
  };

  goToSendTokenFlow = (asset: Object) => {
    this.props.navigation.navigate(SEND_TOKEN_FLOW, {
      asset,
    });
  };

  renderAssets() {
    const {
      wallet,
      assets,
      rates,
      baseFiatCurrency,
    } = this.props;

    const { assetsMedia } = this.state;

    const fiatCurrency = baseFiatCurrency || defaultFiatCurrency;
    return Object.keys(assets)
      .map(id => assets[id])
      .map(({ symbol, balance = 0, ...rest }) => ({
        balance,
        symbol,
        balanceInFiat: rates[symbol] ? balance * rates[symbol][fiatCurrency] : 0,
        ...rest,
      }))
      .sort((a, b) => b.balanceInFiat - a.balanceInFiat)
      .map((asset) => {
        const {
          name,
          symbol,
          balanceInFiat,
          balance,
        } = asset;
        const formattedBalanceInFiat = formatMoney(balanceInFiat);
        const displayAmount = formatMoney(balance, 4);

        // @TODO: remove this, use the color that the backend returns
        const cardColor = assetsMedia[symbol] && assetsMedia[symbol].bgColor
          ? assetsMedia[symbol].bgColor
          : tokenColor[symbol];

        const assetData = {
          name: name || symbol,
          token: symbol,
          amount: displayAmount,
          contractAddress: asset.address,
          description: asset.description,
          balance,
          balanceInFiat: { amount: formattedBalanceInFiat, currency: fiatCurrency },
          address: wallet.address,
          icon: assetsMedia[symbol] ? assetsMedia[symbol].icon : assetsMedia[ETH].icon,
          color: cardColor,
        };
        return (
          <Transition key={assetData.name} shared={assetData.name}>
            <AssetCard
              id={assetData.token}
              name={assetData.name}
              token={assetData.token}
              amount={assetData.amount}
              balanceInFiat={assetData.balanceInFiat}
              color={assetData.color}
              onPress={() => this.handleCardTap(assetData)}
              address={assetData.address}
              icon={assetData.icon}
            />
          </Transition>
        );
      });
  }

  render() {
    const {
      assets,
      wallet,
      assetsState,
      fetchInitialAssets,
    } = this.props;

    if (!Object.keys(assets).length && assetsState === FETCHED) {
      return (
        <Container center>
          <Text style={{ marginBottom: 20 }}>Loading default assets</Text>
          {assetsState !== FETCH_INITIAL_FAILED && (
            <ActivityIndicator
              animating
              color="#111"
              size="large"
            />
          )}
          {assetsState === FETCH_INITIAL_FAILED && (
            <Button title="Try again" onPress={() => fetchInitialAssets(wallet.address)} />
          )}
        </Container>
      );
    }

    return (
      <Container>

        <AssetsHeader>
          <Title title="assets" />
          <TouchableOpacity onPress={this.goToAddTokenPage} >
            <TextLink>
              Add token
            </TextLink>
          </TouchableOpacity>
        </AssetsHeader>
        <ScrollView
          contentContainerStyle={{ padding: 16 }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                const {
                  fetchAssetsBalances,
                  fetchExchangeRates,
                } = this.props;
                fetchAssetsBalances(assets, wallet.address);
                fetchExchangeRates(assets);
              }}
            />
          }
        >
          {Object.keys(this.state.assetsMedia).length ? this.renderAssets() : <ActivityIndicator animating />}
        </ScrollView>
      </Container >
    );
  }
}

const mapStateToProps = ({
  wallet: { data: wallet },
  assets: { data: assets, assetsState },
  rates: { data: rates },
  appSettings: { data: { baseFiatCurrency } },
}) => ({
  wallet,
  assets,
  assetsState,
  rates,
  baseFiatCurrency,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchInitialAssets: (walletAddress) => {
    dispatch(fetchInitialAssetsAction(walletAddress));
  },
  fetchAssetsBalances: (assets, walletAddress) => {
    dispatch(fetchAssetsBalancesAction(assets, walletAddress));
  },
  fetchExchangeRates: (assets) => {
    dispatch(fetchExchangeRatesAction(assets));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetsScreen);
