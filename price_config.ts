import { DatedPrice, ProductType } from "./price";

// $0.26 per 10 GiB to match https://cloud.google.com/storage/pricing#multi-regions.
export let STORAGE_RPICE: DatedPrice = {
  productType: ProductType.STORAGE,
  currency: "USD",
  datedAmounts: [
    {
      amount: 26,
      divideBy: 10 * 1024 * 1024 * 1024,
      startDateMs: 0,
      endDateMs: Number.MAX_SAFE_INTEGER,
    },
  ],
};
// $0.02 per 1 GiB to match https://cloud.google.com/storage/pricing#inter-region-replication.
export let UPLOAD_PRICE: DatedPrice = {
  productType: ProductType.UPLAOD,
  currency: "USD",
  datedAmounts: [
    {
      amount: 2,
      divideBy: 1024 * 1024 * 1024,
      startDateMs: 0,
      endDateMs: Number.MAX_SAFE_INTEGER,
    },
  ],
};
// $0.12 per 1 GiB to match https://cloud.google.com/vpc/network-pricing.
export let NETWORK_RPICE: DatedPrice = {
  productType: ProductType.NETWORK,
  currency: "USD",
  datedAmounts: [
    {
      amount: 12,
      divideBy: 1024 * 1024 * 1024,
      startDateMs: 0,
      endDateMs: Number.MAX_SAFE_INTEGER,
    },
  ],
};
// $0.10 per 3600 seconds.
export let SHOW_PRICE: DatedPrice = {
  productType: ProductType.SHOW,
  currency: "USD",
  datedAmounts: [
    {
      amount: 10,
      divideBy: 3600,
      startDateMs: 0,
      endDateMs: Number.MAX_SAFE_INTEGER,
    },
  ],
};
// 20% cut of SHOW_PRICE.
export let PLATFORM_CUT_SHOW_PRICE: DatedPrice = {
  productType: ProductType.PLATFORM_CUT_SHOW,
  currency: "USD",
  datedAmounts: [
    {
      amount: 2,
      divideBy: 3600,
      startDateMs: 0,
      endDateMs: Number.MAX_SAFE_INTEGER,
    },
  ],
};
