
import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  id: 'mysql autocrement bigint',
  first_name: 'string',
  last_name: 'string',
  email: 'email, string unique',
  password: 'string',
  is_admin: 'boolean'
  };

const wallet = {
  id: 'mysql autocrement bigint',
  balance: 'integer !! if you have 15€, balance = 1500',
  };

const card = {
  id: 'mysql autocrement bigint',
  last_4: 'string, 4 last card numbers',
  brand: 'string, can be : visa, master_card, american_express, union_pay, jcb',
  expired_at: 'string, date mysql format',
  };

const payin = {
  id: 'mysql autocrement bigint',
  wallet_id: 'secondary key bigint mysql',
  amount: 'integer !! 15€: amount = 1500',
  };

const payout = {
  id: 'mysql autocrement bigint',
  wallet_id: 'secondary key bigint mysql',
  amount: 'integer !! 15e: amount = 1500',
  };

const transfer = {
  id: 'mysql autocrement bigint',
  debited_wallet_id: 'secondary key bigint mysql for debited wallet',
  credited_wallet_id: 'secondary key bigint mysql for credited wallet',
  amount: 'integer !! 15€: amount = 1500',
  };

ReactDOM.render(document.getElementById('root'));
