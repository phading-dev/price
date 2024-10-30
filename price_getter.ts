import { DatedPrice, Price } from "./price";

export function getPriceFromTimeMs(
  datedPrice: DatedPrice,
  dateTimeMs: number,
): Price {
  for (let datedAmount of datedPrice.datedAmounts) {
    if (
      datedAmount.startDateMs <= dateTimeMs &&
      dateTimeMs <= datedAmount.endDateMs
    ) {
      return {
        productType: datedPrice.productType,
        currency: datedPrice.currency,
        amount: datedAmount.amount,
        divideBy: datedAmount.divideBy,
      };
    }
  }
  throw new Error(`${dateTimeMs} doesn't match any configured price.`);
}

export function getPriceFromDate(
  datedPrice: DatedPrice,
  dateISOString: string,
): Price {
  return getPriceFromTimeMs(datedPrice, new Date(dateISOString).valueOf());
}
