import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface Money {
  currency?: string,
  amount?: number,
}

export let MONEY: MessageDescriptor<Money> = {
  name: 'Money',
  fields: [{
    name: 'currency',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'amount',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
