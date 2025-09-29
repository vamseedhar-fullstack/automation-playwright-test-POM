import {test as base} from "@playwright/test";
import { Loginpage } from "../pages/loginPage";


export const test = base.extend({
    loginpage: async({page},use) => {
        await use(new Loginpage(page))
    }
})

export { expect } from '@playwright/test';