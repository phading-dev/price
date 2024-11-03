import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

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

export interface PriceInMonth {
  amount?: number,
  divideBy?: number,
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
    name: 'unit',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'startMonth',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endMonth',
    index: 5,
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
  productType?: ProductType,
  description?: string,
  pricesInCurrency?: Array<PriceInCurrency>,
}

export let PRICE_OF_PRODUCT: MessageDescriptor<PriceOfProduct> = {
  name: 'PriceOfProduct',
  fields: [{
    name: 'productType',
    index: 1,
    enumType: PRODUCT_TYPE,
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
  productType?: ProductType,
  description?: string,
  currency?: string,
  amount?: number,
  divideBy?: number,
  unit?: string,
}

export let PRICE: MessageDescriptor<Price> = {
  name: 'Price',
  fields: [{
    name: 'productType',
    index: 1,
    enumType: PRODUCT_TYPE,
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
    name: 'unit',
    index: 6,
    primitiveType: PrimitiveType.STRING,
  }],
};
