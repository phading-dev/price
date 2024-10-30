import { DatedPrice } from "./price";
import {
  NETWORK_RPICE,
  PLATFORM_CUT_SHOW_PRICE,
  SHOW_PRICE,
  STORAGE_RPICE,
  UPLOAD_PRICE,
} from "./price_config";
import { assertThat, eq, gt } from "@selfage/test_matcher";
import { TEST_RUNNER, TestCase } from "@selfage/test_runner";

function toISODateString(date: Date): string {
  let year = date.getUTCFullYear().toString().padStart(4, "0");
  let month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  let day = date.getUTCDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function assertTimeMsIsUTCDate(timeMs: number, context: string): Date {
  let date = new Date(timeMs);
  assertThat(timeMs, eq(new Date(toISODateString(date)).valueOf()), context);
  return date;
}

class DatesAreConsecutive implements TestCase {
  public constructor(
    public name: string,
    private datedPrice: DatedPrice,
  ) {}
  public execute() {
    assertThat(
      this.datedPrice.datedAmounts.length,
      gt(0),
      `number of datedAmounts`,
    );
    let startDateMs = this.datedPrice.datedAmounts[0].startDateMs;
    assertThat(startDateMs, eq(0), "datedAmounts[0].startDateMs");
    let lastEndDateMs = this.datedPrice.datedAmounts[0].endDateMs;
    for (let i = 1; i < this.datedPrice.datedAmounts.length; i++) {
      let lastEndDate = assertTimeMsIsUTCDate(
        lastEndDateMs,
        `datedAmount[${i - 1}].endDateMs`,
      );
      assertTimeMsIsUTCDate(
        this.datedPrice.datedAmounts[i].startDateMs,
        `datedAmount[${i}].startDateMs`,
      );
      lastEndDate.setUTCDate(lastEndDate.getUTCDate() + 1);
      assertThat(
        lastEndDate.valueOf(),
        eq(this.datedPrice.datedAmounts[i].startDateMs),
        `datedAmount[${i - 1}].endDateMs + 1 day`,
      );
      lastEndDateMs = this.datedPrice.datedAmounts[i].endDateMs;
    }
    assertThat(
      lastEndDateMs,
      eq(Number.MAX_SAFE_INTEGER),
      "datedAmounts[last].endDateMs",
    );
  }
}

TEST_RUNNER.run({
  name: "PriceConfigTest",
  cases: [
    new DatesAreConsecutive("StoragePriceDatesAreConsecutive", STORAGE_RPICE),
    new DatesAreConsecutive("UploadPriceDatesAreConsecutive", UPLOAD_PRICE),
    new DatesAreConsecutive("NetworkPriceDatesAreConsecutive", NETWORK_RPICE),
    new DatesAreConsecutive("ShowPriceDatesAreConsecutive", SHOW_PRICE),
    new DatesAreConsecutive(
      "PlatformCutShowPriceDatesAreConsecutive",
      PLATFORM_CUT_SHOW_PRICE,
    ),
  ],
});
