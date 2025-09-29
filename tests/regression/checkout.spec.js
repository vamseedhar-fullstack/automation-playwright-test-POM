import { test, expect } from "../../fixtures/pages.fixture";
import { testdata } from "../../fixtures/testData";


test("complete flow" , async ({page , context, loginpage, inventorypage, cart}) => {

    await context.tracing.start({
        snapshots:true,
        screenshots: true
    });

    await loginpage.goto();

    await loginpage.login(testdata.validuser.username, testdata.validuser.password);

    await inventorypage.selectproduct(testdata.product);

    await inventorypage.selectproduct(testdata.product1);

    await inventorypage.selectproduct(testdata.product2);

    await cart.cart();

    const cartItems = await cart.checkproductnames();

    await expect(cartItems).toContain(testdata.product);
    await expect(cartItems).toContain(testdata.product1);
    await expect(cartItems).toContain(testdata.product2);

    await cart.clickcontinue();

    await cart.submitcheckoutdetails(testdata.userinfo.firstname,testdata.userinfo.lastname,testdata.userinfo.pincode);

    const message = await cart.finalsteptocheck();
     await expect(message).toBe("Thank you for your order!");

    await page.waitForTimeout(3000);

    await context.tracing.stop({ path: 'reports/traces/checkout-trace.zip' });
})