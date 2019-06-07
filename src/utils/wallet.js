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
import DeviceInfo from 'react-native-device-info';
import ethers, { providers } from 'ethers';

import { isHexString } from '@walletconnect/utils';
import { NETWORK_PROVIDER } from 'react-native-dotenv';
import { getRandomInt, ethSign } from 'utils/common';
import Storage from 'services/storage';
import { saveDbAction } from 'actions/dbActions';
import { Sentry } from 'react-native-sentry';

const storage = Storage.getInstance('db');

export function generateMnemonicPhrase(mnemonicPhrase?: string) {
  return mnemonicPhrase || ethers.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));
}

export function generateWordsToValidate(numWordsToGenerate: number, maxWords: number) {
  const chosenWords = [];
  while (chosenWords.length < numWordsToGenerate) {
    const randomNumber = getRandomInt(1, maxWords);
    if (chosenWords.includes(randomNumber)) continue; // eslint-disable-line
    chosenWords.push(randomNumber);
  }
  chosenWords.sort((a, b) => a - b);
  return chosenWords;
}

export async function getSaltedPin(pin: string, dispatch: Function): Promise<string> {
  let { deviceUniqueId = null } = await storage.get('deviceUniqueId') || {};
  if (!deviceUniqueId) {
    deviceUniqueId = DeviceInfo.getUniqueID();
    await dispatch(saveDbAction('deviceUniqueId', { deviceUniqueId }, true));
  }
  return deviceUniqueId + pin + deviceUniqueId.slice(0, 5);
}

export function normalizeWalletAddress(walletAddress: string): string {
  if (walletAddress.indexOf('0x') !== 0) {
    walletAddress = `0x${walletAddress}`;
  }
  return walletAddress;
}

export function catchTransactionError(e: Object, type: string, tx: Object) {
  Sentry.captureException({
    tx,
    type,
    error: e.message,
  });
  return { error: e.message };
}

// handle eth_signTransaction
export async function signTransaction(trx: Object, wallet: Object): Promise<string> {
  wallet.provider = providers.getDefaultProvider(NETWORK_PROVIDER);
  if (trx && trx.from) {
    delete trx.from;
  }
  const result = await wallet.sign(trx);
  return result;
}

// handle eth_sign
export async function signMessage(message: any, wallet: Object): Promise<string> {
  wallet.provider = providers.getDefaultProvider(NETWORK_PROVIDER);
  // TODO: this method needs to be replaced when ethers.js is migrated to v4.0
  const result = ethSign(message, wallet.privateKey);
  return result;
}

// handle personal_sign
export async function signPersonalMessage(message: string, wallet: Object): Promise<string> {
  wallet.provider = providers.getDefaultProvider(NETWORK_PROVIDER);
  const result = await wallet.signMessage(isHexString(message) ? ethers.utils.arrayify(message) : message);
  return result;
}
