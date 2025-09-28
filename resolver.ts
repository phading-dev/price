import { ExchangeRate, ExchangeRates } from "./exchange_rate";
import { PlatformPrice, PlatformPrices, ProductID } from "./platform_price";
import {
  AccountGroup,
  ProductType,
  RevenueShare,
  RevenueShares,
} from "./revenue_share";

export function resolveExchangeRate(
  currency: string,
  monthISOString: string,
  config: ExchangeRates,
): ExchangeRate {
  for (let rate of config.rates) {
    if (
      rate.currency === currency &&
      rate.startMonth <= monthISOString &&
      monthISOString <= rate.endMonth
    ) {
      return rate;
    }
  }
  throw new Error(
    `Exchange rate for currency ${currency} at ${monthISOString} is not found.`,
  );
}

export function calculateMoney(
  coins: number,
  targetCurrency: string,
  monthISOString: string,
  config: ExchangeRates,
): {
  amount: number;
  rate: ExchangeRate;
} {
  let rate = resolveExchangeRate(targetCurrency, monthISOString, config);
  let amount = Math.round((coins / rate.quantity) * rate.amount);
  return {
    amount,
    rate,
  };
}

export function resolveRevenueShare(
  productType: ProductType,
  accountGroup: AccountGroup,
  monthISOString: string,
  config: RevenueShares,
): RevenueShare {
  for (let share of config.shares) {
    if (
      share.productType === productType &&
      share.accountGroup === accountGroup &&
      share.startMonth <= monthISOString &&
      monthISOString <= share.endMonth
    ) {
      return share;
    }
  }
  throw new Error(
    `Revenue share for product ${ProductType[productType]} and account group ${AccountGroup[accountGroup]} at ${monthISOString} is not found.`,
  );
}

export function resolvePlatformPrice(
  productID: ProductID,
  monthISOString: string,
  config: PlatformPrices,
): PlatformPrice {
  for (let price of config.prices) {
    if (
      price.productID === productID &&
      price.startMonth <= monthISOString &&
      monthISOString <= price.endMonth
    ) {
      return price;
    }
  }
  throw new Error(
    `Price for product ${ProductID[productID]} at ${monthISOString} is not found.`,
  );
}
