import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum ProductID {
  STORAGE = 1,
  UPLOAD = 2,
  NETWORK = 3,
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
  }]
}

export interface PlatformPrice {
  productID?: ProductID,
  description?: string,
  startMonth?: string,
  endMonth?: string,
  amount?: number,
  quantity?: number,
  unit?: string,
}

export let PLATFORM_PRICE: MessageDescriptor<PlatformPrice> = {
  name: 'PlatformPrice',
  fields: [{
    name: 'productID',
    index: 1,
    enumType: PRODUCT_I_D,
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
  }, {
    name: 'unit',
    index: 7,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface PlatformPrices {
  prices?: Array<PlatformPrice>,
}

export let PLATFORM_PRICES: MessageDescriptor<PlatformPrices> = {
  name: 'PlatformPrices',
  fields: [{
    name: 'prices',
    index: 1,
    messageType: PLATFORM_PRICE,
    isArray: true,
  }],
};
