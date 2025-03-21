import { EnumDescriptor } from '@selfage/message/descriptor';

export enum AmountType {
  DEBIT = 1,
  CREDIT = 2,
}

export let AMOUNT_TYPE: EnumDescriptor<AmountType> = {
  name: 'AmountType',
  values: [{
    name: 'DEBIT',
    value: 1,
  }, {
    name: 'CREDIT',
    value: 2,
  }]
}
