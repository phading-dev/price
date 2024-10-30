import { DatedPrice, Price } from "./price";

export function getPriceFromTimeMs(
  datedPrice: DatedPrice,
  timeMs: number,
): Price {
  for (let datedAmount of datedPrice.datedAmounts) {
    if (
      datedAmount.startMonthMs <= timeMs &&
      timeMs <= datedAmount.endMonthMs
    ) {
      return {
        productType: datedPrice.productType,
        currency: datedPrice.currency,
        amount: datedAmount.amount,
        divideBy: datedAmount.divideBy,
      };
    }
  }
  throw new Error(`${timeMs} doesn't match any configured price.`);
}

export function getPriceFromMonth(
  datedPrice: DatedPrice,
  monthISOString: string,
): Price {
  return getPriceFromTimeMs(datedPrice, new Date(monthISOString).valueOf());
}
