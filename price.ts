import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum ProductID {
  STORAGE = 1,
  UPLAOD = 2,
  NETWORK = 3,
  SHOW = 4,
  SHOW_PAYOUT = 5,
}

export let PRODUCT_I_D: EnumDescriptor<ProductID> = {
  name: 'ProductID',
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
    name: 'SHOW_PAYOUT',
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
    name: 'description',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'pricesInCurrency',
    index: 3,
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
    name: 'divideBy',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'rounding',
    index: 6,
    enumType: ROUNDING_TYPE,
  }, {
    name: 'unit',
    index: 7,
    primitiveType: PrimitiveType.STRING,
  }],
};
