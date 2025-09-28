import { EnumDescriptor, MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export enum ProductType {
  MISC = 1,
  SUBSCRIPTION = 2,
  VIDEO_RENTAL = 3,
  VIDEO_METERING = 4,
}

export let PRODUCT_TYPE: EnumDescriptor<ProductType> = {
  name: 'ProductType',
  values: [{
    name: 'MISC',
    value: 1,
  }, {
    name: 'SUBSCRIPTION',
    value: 2,
  }, {
    name: 'VIDEO_RENTAL',
    value: 3,
  }, {
    name: 'VIDEO_METERING',
    value: 4,
  }]
}

export enum AccountGroup {
  NORMAL = 1,
  FOUNDER = 2,
}

export let ACCOUNT_GROUP: EnumDescriptor<AccountGroup> = {
  name: 'AccountGroup',
  values: [{
    name: 'NORMAL',
    value: 1,
  }, {
    name: 'FOUNDER',
    value: 2,
  }]
}

export interface RevenueShareInMonth {
}

export let REVENUE_SHARE_IN_MONTH: MessageDescriptor<RevenueShareInMonth> = {
  name: 'RevenueShareInMonth',
  fields: [],
};

export interface RevenueShare {
  productType?: ProductType,
  accountGroup?: AccountGroup,
  description?: string,
  startMonth?: string,
  endMonth?: string,
  sharePercent?: number,
}

export let REVENUE_SHARE: MessageDescriptor<RevenueShare> = {
  name: 'RevenueShare',
  fields: [{
    name: 'productType',
    index: 1,
    enumType: PRODUCT_TYPE,
  }, {
    name: 'accountGroup',
    index: 2,
    enumType: ACCOUNT_GROUP,
  }, {
    name: 'description',
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
  }, {
    name: 'sharePercent',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface RevenueShares {
  shares?: Array<RevenueShare>,
}

export let REVENUE_SHARES: MessageDescriptor<RevenueShares> = {
  name: 'RevenueShares',
  fields: [{
    name: 'shares',
    index: 1,
    messageType: REVENUE_SHARE,
    isArray: true,
  }],
};
