import { test, expect } from "../../fixtures/pages.fixture";
import { testdata } from "../../fixtures/testData";


test("complete flow" , async ({page , context, loginpage}) => {

    await context.tracing.start({
        snapshots:true,
        screenshots: true
    });

    await loginpage.goto();

    await loginpage.login(testdata.validuser.username, testdata.validuser.password);

    await page.waitForTimeout(3000);

    await context.tracing.stop({ path: 'reports/traces/checkout-trace.zip' });
})