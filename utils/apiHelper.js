export class ApiHelper {
  constructor(request) {
    this.request = request;
    this.baseURL = 'https://www.saucedemo.com';
  }

  async getInventory() {
    return await this.request.get(`${this.baseURL}/inventory.html`);
  }

  async login(username, password) {
    return await this.request.post(`${this.baseURL}/v1/login`, {
      data: { username, password }
    });
  }
}
