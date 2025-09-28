import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface ExchangeRate {
  currency?: string,
  description?: string,
  startMonth?: string,
  endMonth?: string,
  amount?: number,
  quantity?: number,
}

export let EXCHANGE_RATE: MessageDescriptor<ExchangeRate> = {
  name: 'ExchangeRate',
  fields: [{
    name: 'currency',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'startMonth',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endMonth',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'amount',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'quantity',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ExchangeRates {
  rates?: Array<ExchangeRate>,
}

export let EXCHANGE_RATES: MessageDescriptor<ExchangeRates> = {
  name: 'ExchangeRates',
  fields: [{
    name: 'rates',
    index: 1,
    messageType: EXCHANGE_RATE,
    isArray: true,
  }],
};
