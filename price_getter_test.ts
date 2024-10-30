import { PRICE, ProductType } from "./price";
import { SHOW_PRICE } from "./price_config";
import { getPriceFromMonth } from "./price_getter";
import { eqMessage } from "@selfage/message/test_matcher";
import { assertThat } from "@selfage/test_matcher";
import { TEST_RUNNER } from "@selfage/test_runner";

TEST_RUNNER.run({
  name: "PriceGetterTest",
  cases: [
    {
      name: "Default",
      execute: () => {
        let price = getPriceFromMonth(SHOW_PRICE, "2024-10");
        assertThat(
          price,
          eqMessage(
            {
              productType: ProductType.SHOW,
              currency: "USD",
              amount: 10,
              divideBy: 3600,
            },
            PRICE,
          ),
          "show price",
        );
      },
    },
  ],
});
