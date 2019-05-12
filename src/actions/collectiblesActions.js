// @flow
/*
    Pillar Wallet: the personal data locker
    Copyright (C) 2019 Stiftung Pillar Project

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
import { COLLECTIBLES } from 'constants/assetsConstants';
import {
  UPDATE_COLLECTIBLES,
  SET_COLLECTIBLES_TRANSACTION_HISTORY,
  COLLECTIBLE_TRANSACTION,
} from 'constants/collectiblesConstants';
import { getActiveAccountAddress } from 'utils/accounts';
import { saveDbAction } from './dbActions';
import { getExistingTxNotesAction } from './txNoteActions';

export const fetchCollectiblesAction = () => {
  return async (dispatch: Function, getState: Function, api: Object) => {
    const { accounts: { data: accounts } } = getState();
    const walletAddress = getActiveAccountAddress(accounts);
    const response = await api.fetchCollectibles(walletAddress);

    if (response.error || !response.assets) return;

    const collectibles = response.assets.map(collectible => {
      const {
        token_id: id,
        asset_contract: assetContract,
        name,
        description,
        image_preview_url: image,
      } = collectible;
      const { name: category, address: contractAddress } = assetContract;
      const collectibleName = name || `${category} ${id}`;

      return {
        id,
        category,
        name: collectibleName,
        description,
        icon: (/\.(png)$/i).test(image) ? image : '',
        contractAddress,
        assetContract: category,
        tokenType: COLLECTIBLES,
      };
    });

    dispatch(saveDbAction('collectibles', { collectibles }, true));
    dispatch({ type: UPDATE_COLLECTIBLES, payload: collectibles });
  };
};

export const fetchCollectiblesHistoryAction = () => {
  return async (dispatch: Function, getState: Function, api: Object) => {
    const { wallet: { data: wallet } } = getState();
    const response = await api.fetchCollectiblesTransactionHistory(wallet.address);

    if (response.error || !response.asset_events) return;

    const collectiblesHistory = response.asset_events.map(event => {
      const {
        asset,
        transaction,
        to_account: toAcc,
        from_account: fromAcc,
      } = event;
      const {
        asset_contract: assetContract,
        name,
        token_id: id,
        description,
        image_preview_url: image,
      } = asset;
      const { name: category, address: contractAddress } = assetContract;
      const { transaction_hash: trxHash, block_number: blockNumber, timestamp } = transaction;

      const collectibleName = name || `${category} ${id}`;

      const assetData = {
        id,
        category,
        name: collectibleName,
        description,
        icon: (/\.(png)$/i).test(image) ? image : '',
        contractAddress,
        assetContract: category,
        tokenType: COLLECTIBLES,
      };

      return {
        to: toAcc.address,
        from: fromAcc.address,
        hash: trxHash,
        createdAt: (new Date(timestamp).getTime()) / 1000,
        _id: transaction.id,
        protocol: 'Ethereum',
        asset: collectibleName,
        contractAddress,
        value: 1,
        blockNumber,
        status: 'confirmed',
        type: COLLECTIBLE_TRANSACTION,
        icon: (/\.(png)$/i).test(image) ? image : '',
        assetData,
      };
    });
    dispatch(getExistingTxNotesAction());
    dispatch(saveDbAction('collectiblesHistory', { collectiblesHistory }, true));
    dispatch({ type: SET_COLLECTIBLES_TRANSACTION_HISTORY, payload: collectiblesHistory });
  };
};

export const fetchAllCollectiblesDataAction = () => {
  return async (dispatch: Function) => {
    await dispatch(fetchCollectiblesAction());
    await dispatch(fetchCollectiblesHistoryAction());
  };
};
