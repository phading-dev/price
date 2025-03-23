import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AmountType, AMOUNT_TYPE } from './amount_type';

export enum ProductID {
  STORAGE = 1,
  UPLOAD = 2,
  NETWORK = 3,
  SHOW = 4,
  SHOW_CREDIT = 5,
}

export let PRODUCT_I_D: EnumDescriptor<ProductID> = {
  name: 'ProductID',
  values: [{
    name: 'STORAGE',
    value: 1,
  }, {
    name: 'UPLOAD',
    value: 2,
  }, {
    name: 'NETWORK',
    value: 3,
  }, {
    name: 'SHOW',
    value: 4,
  }, {
    name: 'SHOW_CREDIT',
    value: 5,
  }]
}

export enum RoundingType {
  CEIL = 1,
  FLOOR = 2,
}

export let ROUNDING_TYPE: EnumDescriptor<RoundingType> = {
  name: 'RoundingType',
  values: [{
    name: 'CEIL',
    value: 1,
  }, {
    name: 'FLOOR',
    value: 2,
  }]
}

export interface PriceInMonth {
  amount?: number,
  divideBy?: number,
  rounding?: RoundingType,
  unit?: string,
  startMonth?: string,
  endMonth?: string,
}

export let PRICE_IN_MONTH: MessageDescriptor<PriceInMonth> = {
  name: 'PriceInMonth',
  fields: [{
    name: 'amount',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'divideBy',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'rounding',
    index: 3,
    enumType: ROUNDING_TYPE,
  }, {
    name: 'unit',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'startMonth',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endMonth',
    index: 6,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface PriceInCurrency {
  currency?: string,
  pricesInMonth?: Array<PriceInMonth>,
}

export let PRICE_IN_CURRENCY: MessageDescriptor<PriceInCurrency> = {
  name: 'PriceInCurrency',
  fields: [{
    name: 'currency',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'pricesInMonth',
    index: 2,
    messageType: PRICE_IN_MONTH,
    isArray: true,
  }],
};

export interface PriceOfProduct {
  productID?: ProductID,
  amountType?: AmountType,
  description?: string,
  pricesInCurrency?: Array<PriceInCurrency>,
}

export let PRICE_OF_PRODUCT: MessageDescriptor<PriceOfProduct> = {
  name: 'PriceOfProduct',
  fields: [{
    name: 'productID',
    index: 1,
    enumType: PRODUCT_I_D,
  }, {
    name: 'amountType',
    index: 2,
    enumType: AMOUNT_TYPE,
  }, {
    name: 'description',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'pricesInCurrency',
    index: 4,
    messageType: PRICE_IN_CURRENCY,
    isArray: true,
  }],
};

export interface PriceConfig {
  pricesOfProduct?: Array<PriceOfProduct>,
}

export let PRICE_CONFIG: MessageDescriptor<PriceConfig> = {
  name: 'PriceConfig',
  fields: [{
    name: 'pricesOfProduct',
    index: 1,
    messageType: PRICE_OF_PRODUCT,
    isArray: true,
  }],
};

export interface Price {
  productID?: ProductID,
  description?: string,
  currency?: string,
  amount?: number,
  amountType?: AmountType,
  divideBy?: number,
  rounding?: RoundingType,
  unit?: string,
}

export let PRICE: MessageDescriptor<Price> = {
  name: 'Price',
  fields: [{
    name: 'productID',
    index: 1,
    enumType: PRODUCT_I_D,
  }, {
    name: 'description',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'currency',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'amount',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'amountType',
    index: 5,
    enumType: AMOUNT_TYPE,
  }, {
    name: 'divideBy',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'rounding',
    index: 7,
    enumType: ROUNDING_TYPE,
  }, {
    name: 'unit',
    index: 8,
    primitiveType: PrimitiveType.STRING,
  }],
};
