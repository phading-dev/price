import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Money, MONEY } from './money';

export enum ProductType {
  STORAGE = 1,
  UPLAOD = 2,
  NETWORK = 3,
  SHOW = 4,
  PLATFORM_CUT_SHOW = 5,
}

export let PRODUCT_TYPE: EnumDescriptor<ProductType> = {
  name: 'ProductType',
  values: [{
    name: 'STORAGE',
    value: 1,
  }, {
    name: 'UPLAOD',
    value: 2,
  }, {
    name: 'NETWORK',
    value: 3,
  }, {
    name: 'SHOW',
    value: 4,
  }, {
    name: 'PLATFORM_CUT_SHOW',
    value: 5,
  }]
}

export interface DatedAmount {
  money?: Money,
  divideBy?: number,
  startMonthMs?: number,
  endMonthMs?: number,
}

export let DATED_AMOUNT: MessageDescriptor<DatedAmount> = {
  name: 'DatedAmount',
  fields: [{
    name: 'money',
    index: 1,
    messageType: MONEY,
  }, {
    name: 'divideBy',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'startMonthMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'endMonthMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface DatedPrice {
  productType?: ProductType,
  datedAmounts?: Array<DatedAmount>,
}

export let DATED_PRICE: MessageDescriptor<DatedPrice> = {
  name: 'DatedPrice',
  fields: [{
    name: 'productType',
    index: 1,
    enumType: PRODUCT_TYPE,
  }, {
    name: 'datedAmounts',
    index: 2,
    messageType: DATED_AMOUNT,
    isArray: true,
  }],
};

export interface Price {
  productType?: ProductType,
  money?: Money,
  divideBy?: number,
}

export let PRICE: MessageDescriptor<Price> = {
  name: 'Price',
  fields: [{
    name: 'productType',
    index: 1,
    enumType: PRODUCT_TYPE,
  }, {
    name: 'money',
    index: 2,
    messageType: MONEY,
  }, {
    name: 'divideBy',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
