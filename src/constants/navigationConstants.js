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

// APP FLOW
export const APP_FLOW = 'APP_FLOW';
export const MAIN_FLOW = 'MAIN_FLOW';
export const ASSETS = 'ASSETS';
export const SERVICES = 'SERVICES';
export const ADD_CASH = 'ADD_CASH';
export const SERVICES_FLOW = 'SERVICES_FLOW';
export const ME_TAB = 'ME_TAB';
export const ASSET = 'ASSET';
export const MARKET = 'MARKET';
export const CONTACT_INFO = 'CONTACT_INFO';
export const REVEAL_BACKUP_PHRASE = 'REVEAL_BACKUP_PHRASE';
export const CHAT_LIST = 'CHAT_LIST';
export const NEW_CHAT = 'NEW_CHAT';
export const CHAT = 'CHAT';
export const ICO = 'ICO';
export const BACKUP_WALLET_IN_SETTINGS_FLOW = 'BACKUP_WALLET_IN_SETTINGS_FLOW';
export const COLLECTIBLE = 'COLLECTIBLE';
export const CONFIRM_CLAIM = 'CONFIRM_CLAIM';
export const MENU = 'MENU';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const STORYBOOK = 'STORYBOOK';
export const CONNECT_FLOW = 'CONNECT_FLOW';
export const PIN_CODE = 'PIN_CODE';
export const SPLASH_SCREEN = 'SPLASH_SCREEN';
export const ETHERSPOT_DEPLOYMENT_INTERJECTION = 'ETHERSPOT_DEPLOYMENT_INTERJECTION';

// BACKUP WALLET
export const BACKUP_WALLET_INTRO = 'BACKUP_WALLET_INTRO';
export const BACKUP_PHRASE_VALIDATE = 'BACKUP_PHRASE_VALIDATE';

// TUTORIAL FLOW
export const TUTORIAL_FLOW = 'TUTORIAL_FLOW';
export const TUTORIAL = 'TUTORIAL';

// ASSETS FLOW
export const ACCOUNTS = 'ACCOUNTS';
export const UNSETTLED_ASSETS = 'UNSETTLED_ASSETS';

// CHANGE PIN FLOW
export const CHANGE_PIN_FLOW = 'CHANGE_PIN_FLOW';
export const CHANGE_PIN_CURRENT_PIN = 'CHANGE_PIN_CURRENT_PIN';
export const CHANGE_PIN_NEW_PIN = 'CHANGE_PIN_NEW_PIN';
export const CHANGE_PIN_CONFIRM_NEW_PIN = 'CHANGE_PIN_CONFIRM_NEW_PIN';

// ONBOARDING FLOW
export const WELCOME = 'WELCOME';
export const ONBOARDING_FLOW = 'ONBOARDING_FLOW';
export const NEW_WALLET = 'NEW_WALLET';
export const WELCOME_BACK = 'WELCOME_BACK';
export const IMPORT_WALLET = 'IMPORT_WALLET';
export const IMPORT_WALLET_LEGALS = 'IMPORT_WALLET_LEGALS';
export const SET_WALLET_PIN_CODE = 'SET_WALLET_PIN_CODE';
export const PIN_CODE_CONFIRMATION = 'PIN_CODE_CONFIRMATION';
export const PERMISSIONS = 'PERMISSIONS';
export const BIOMETRICS_PROMPT = 'BIOMETRICS_PROMPT';

// PINCODE FLOW
export const AUTH_FLOW = 'AUTH_FLOW';
export const PIN_CODE_UNLOCK = 'PIN_CODE_UNLOCK';
export const FORGOT_PIN = 'FORGOT_PIN';

// SEND TOKEN FLOW
export const SEND_TOKEN_FROM_ASSET_FLOW = 'SEND_TOKEN_FROM_ASSET_FLOW';
export const SEND_TOKEN_FROM_CONTACT_FLOW = 'SEND_TOKEN_FROM_CONTACT_FLOW';
export const SEND_TOKEN_AMOUNT = 'SEND_TOKEN_AMOUNT';
export const SEND_TOKEN_ASSETS = 'SEND_TOKEN_ASSETS';
export const SEND_TOKEN_CONFIRM = 'SEND_TOKEN_CONFIRM';
export const SEND_TOKEN_TRANSACTION = 'SEND_TOKEN_TRANSACTION';
export const SEND_TOKEN_PIN_CONFIRM = 'SEND_TOKEN_PIN_CONFIRM'; // TODO: consider to extract to a common screen
export const SEND_TOKEN_FROM_HOME_FLOW = 'SEND_TOKEN_FROM_HOME_FLOW';

// PPN SEND TOKEN FLOW
export const PPN_SEND_TOKEN_FROM_ASSET_FLOW = 'PPN_SEND_TOKEN_FROM_ASSET_FLOW';
export const PPN_SEND_TOKEN_AMOUNT = 'PPN_SEND_TOKEN_AMOUNT';

// SEND COLLECTIBLE FLOW
export const SEND_COLLECTIBLE_FROM_ASSET_FLOW = 'SEND_COLLECTIBLE_FROM_ASSET_FLOW';
export const SEND_COLLECTIBLE_CONFIRM = 'SEND_COLLECTIBLE_CONFIRM';

// PEOPLE FLOW
export const CONTACT = 'CONTACT';

// HOME FLOW
export const HOME_FLOW = 'HOME_FLOW';
export const HOME = 'HOME';
export const HOME_HISTORY = 'HOME_HISTORY';

// EXCHANGE FLOW
export const EXCHANGE_FLOW = 'EXCHANGE_FLOW';
export const EXCHANGE = 'EXCHANGE';
export const EXCHANGE_CONFIRM = 'EXCHANGE_CONFIRM';

// UPGRADE TO SMART WALLET FLOW
export const WALLET_ACTIVATED = 'WALLET_ACTIVATED';

// MANAGE WALLETS FLOW
export const MANAGE_WALLETS_FLOW = 'MANAGE_WALLETS_FLOW';

// PPN
export const PPN_HOME = 'PPN_HOME';

// MANAGE TANK FLOW
export const TANK_SETTLE_FLOW = 'TANK_SETTLE_FLOW';
export const TANK_FUND_FLOW = 'TANK_FUND_FLOW';
export const TANK_DETAILS = 'TANK_DETAILS';
export const FUND_TANK = 'FUND_TANK';
export const FUND_CONFIRM = 'FUND_CONFIRM';
export const SETTLE_BALANCE = 'SETTLE_BALANCE';
export const SETTLE_BALANCE_CONFIRM = 'SETTLE_BALANCE_CONFIRM';
export const PILLAR_NETWORK_INTRO = 'PILLAR_NETWORK_INTRO';
export const TANK_WITHDRAWAL_FLOW = 'TANK_WITHDRAWAL_FLOW';
export const TANK_WITHDRAWAL = 'TANK_WITHDRAWAL';
export const TANK_WITHDRAWAL_CONFIRM = 'TANK_WITHDRAWAL_CONFIRM';
export const UNSETTLED_ASSETS_FLOW = 'UNSETTLED_ASSETS_FLOW';

// WALLETCONNECT FLOW
export const WALLETCONNECT_FLOW = 'WALLETCONNECT_FLOW';
export const WALLETCONNECT = 'WALLETCONNECT';
export const WALLETCONNECT_CONNECTED_APPS = 'WALLETCONNECT_CONNECTED_APPS';
export const WALLETCONNECT_CONNECTOR_REQUEST_SCREEN = 'WALLETCONNECT_CONNECTOR_REQUEST_SCREEN';
export const WALLETCONNECT_CALL_REQUEST_SCREEN = 'WALLETCONNECT_CALL_REQUEST_SCREEN';
export const WALLETCONNECT_PIN_CONFIRM_SCREEN = 'WALLETCONNECT_PIN_CONFIRM_SCREEN';
export const WALLETCONNECT_CALL_REQUEST_FLOW = 'WALLETCONNECT_CALL_REQUEST_FLOW';
export const WALLETCONNECT_BROWSER = 'WALLETCONNECT_BROWSER';

// USERS FLOW
export const ADD_EDIT_USER = 'ADD_EDIT_USER';

// PPN SEND SYNTHETICS FLOW
export const PPN_SEND_SYNTHETIC_ASSET_FLOW = 'PPN_SEND_SYNTHETIC_ASSET_FLOW';
export const SEND_SYNTHETIC_AMOUNT = 'SEND_SYNTHETIC_AMOUNT';
export const SEND_SYNTHETIC_CONFIRM = 'SEND_SYNTHETIC_CONFIRM';

// MENU FLOW
export const MENU_FLOW = 'MENU_FLOW';
export const MENU_SETTINGS = 'MENU_SETTINGS';
export const MENU_SELECT_LANGUAGE = 'MENU_SELECT_LANGUAGE';
export const MENU_SELECT_CURRENCY = 'MENU_SELECT_CURRENCY';
export const MENU_SYSTEM_INFORMATION = 'MENU_SYSTEM_INFORMATION';

// WALLET MIGRATION ARCHANOVA FLOW
export const WALLET_MIGRATION_ARCHANOVA_FLOW = 'WALLET_MIGRATION_ARCHANOVA_FLOW';
export const WALLET_MIGRATION_ARCHANOVA_INTRO = 'WALLET_MIGRATION_ARCHANOVA_INTRO';
export const WALLET_MIGRATION_ARCHANOVA_STATUS = 'WALLET_MIGRATION_ARCHANOVA_STATUS';
export const WALLET_MIGRATION_ARCHANOVA_SELECT_ASSETS = 'WALLET_MIGRATION_ARCHANOVA_SELECT_ASSETS';
export const WALLET_MIGRATION_ARCHANOVA_SET_AMOUNT = 'WALLET_MIGRATION_ARCHANOVA_SET_AMOUNT';
export const WALLET_MIGRATION_ARCHANOVA_REVIEW = 'WALLET_MIGRATION_ARCHANOVA_REVIEW';
export const WALLET_MIGRATION_ARCHANOVA_PIN_CONFIRM = 'WALLET_MIGRATION_ARCHANOVA_PIN_CONFIRM';

// KEY BASED WALLET ASSET MIGRATION FLOW
export const KEY_BASED_ASSET_TRANSFER_FLOW = 'KEY_BASED_ASSET_TRANSFER_FLOW';
export const KEY_BASED_ASSET_TRANSFER_INTRO = 'KEY_BASED_ASSET_TRANSFER_INTRO';
export const KEY_BASED_ASSET_TRANSFER_CHOOSE = 'KEY_BASED_ASSET_TRANSFER_CHOOSE';
export const KEY_BASED_ASSET_TRANSFER_EDIT_AMOUNT = 'KEY_BASED_ASSET_TRANSFER_EDIT_AMOUNT';
export const KEY_BASED_ASSET_TRANSFER_CONFIRM = 'KEY_BASED_ASSET_TRANSFER_CONFIRM';
export const KEY_BASED_ASSET_TRANSFER_UNLOCK = 'KEY_BASED_ASSET_TRANSFER_UNLOCK';
export const KEY_BASED_ASSET_TRANSFER_STATUS = 'KEY_BASED_ASSET_TRANSFER_STATUS';

// CONTACTS
export const CONTACTS_FLOW = 'CONTACTS_FLOW';
export const CONTACTS_LIST = 'CONTACTS_LIST';

// LIQUIDITY POOLS FLOW
export const LIQUIDITY_POOLS_FLOW = 'LIQUIDITY_POOLS_FLOW';
export const LIQUIDITY_POOLS = 'LIQUIDITY_POOLS';
export const LIQUIDITY_POOL_DASHBOARD = 'LIQUIDITY_POOL_DASHBOARD';
export const LIQUIDITY_POOLS_ADD_LIQUIDITY = 'LIQUIDITY_POOLS_ADD_LIQUIDITY';
export const LIQUIDITY_POOLS_ADD_LIQUIDITY_REVIEW = 'LIQUIDITY_POOLS_ADD_LIQUIDITY_REVIEW';
export const LIQUIDITY_POOLS_STAKE = 'LIQUIDITY_POOLS_STAKE';
export const LIQUIDITY_POOLS_STAKE_REVIEW = 'LIQUIDITY_POOLS_STAKE_REVIEW';
export const LIQUIDITY_POOLS_UNSTAKE = 'LIQUIDITY_POOLS_UNSTAKE';
export const LIQUIDITY_POOLS_UNSTAKE_REVIEW = 'LIQUIDITY_POOLS_UNSTAKE_REVIEW';
export const LIQUIDITY_POOLS_REMOVE_LIQUIDITY = 'LIQUIDITY_POOLS_REMOVE_LIQUIDITY';
export const LIQUIDITY_POOLS_REMOVE_LIQUIDITY_REVIEW = 'LIQUIDITY_POOLS_REMOVE_LIQUIDITY_REVIEW';
export const LIQUIDITY_POOLS_CLAIM_REWARDS_REVIEW = 'LIQUIDITY_POOLS_CLAIM_REWARDS_REVIEW';
export const LIQUIDITY_POOLS_INFO = 'LIQUIDITY_POOLS_INFO';

// ENS MIGRATION
export const ENS_MIGRATION_FLOW = 'ENS_MIGRATION_FLOW';
export const ENS_MIGRATION_CONFIRM = 'ENS_MIGRATION_CONFIRM';

// STORYLY
export const WEB_VIEW = 'WEB_VIEW';

// TERMS AND PRIVACY POLICY
export const LEGAL_SCREEN = 'LEGAL_SCREEN';

// IMPORT FLOW FROM SETTINGS
export const IMPORT_FLOW_FROM_SETTINGS = 'IMPORT_FLOW_FROM_SETTINGS';

// REGISTER_ENS
export const REGISTER_ENS = 'REGISTER_ENS';

// CONTRACT
export const CONTRACT_FLOW = 'CONTRACT_FLOW';
export const STORE_VALUE_CONTRACT = 'STORE_VALUE_CONTRACT';
