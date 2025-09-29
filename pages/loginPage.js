export class Loginpage{

    constructor(page) {
        this.page = page;
        this.usernamefield = page.locator("#user-name");
        this.passwordfield = page.locator("#password");
        this.loginbtn = page.locator("#login-button");
    }

    async goto() {
       await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username, password) {
      await  this.usernamefield.fill(username);
      await  this.passwordfield.fill(password);
      await  this.loginbtn.click();
    }
}