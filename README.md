
# Playwright Automation Framework 

A modular **Playwright end-to-end & API automation framework** built with a clean structure, advanced reporting, environment management, and CI/CD readiness.

---

## 📂 Project Structure

```
playwright-framework/
│── 📂 tests/                   # Test cases
│   │── smoke/
│   │   └── login.spec.js
│   │── regression/
│   │   └── checkout.spec.js
│   │── api/
│   │   └── strapi.api.spec.js
│
│── 📂 pages/                   # Page Object Model classes
│   └── loginPage.js
│   └── inventoryPage.js
│   └── cartPage.js
│
│── 📂 fixtures/                # Test data / locators / custom fixtures
│   └── testData.js
│   └── pages.fixture.js
│
│── 📂 utils/                   # Reusable helpers / documentation
│   └── apiHelper.js
│   └── dataGenerator.js
│   └── allure_commands.txt
│
│── 📂 config/                  # Playwright configs for different envs
│   └── dev.config.js
│   └── qa.config.js
│   └── prod.config.js
│
│── 📂 reports/                 # Reports & traces
│   └── html-report/
│   └── traces/
│
│── 📂 .github/                 # GitHub Actions (CI/CD)
│   └── workflows/
│       └── playwright.yml
│
│── playwright.config.js
│── package.json
│── .gitignore
│── README.md
```

---

## 🧰 Tech Stack

* 🧪 **Playwright** — Web + API automation
* 🧱 **Page Object Model (POM)** — Clean structure for UI tests
* 🌐 **Strapi API Integration** — Real API testing using tokens
* 🧠 **Environment Management** — `.env` support for base URLs & secrets
* ⚡ **Parallel Execution & Tagging** — Faster runs with smoke/regression suites
* 📊 **Allure Reporting** — Rich test dashboards
* ☁️ **GitHub Actions** — CI/CD ready structure

---

## ⚙️ Setup Instructions

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/vamseedhar-fullstack/automation-playwright-test-POM.git
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file in the root of the project:

```
API_BASE_URL=https://your-strapi-api-url.com/api
STRAPI_API_TOKEN=your_strapi_token_here
```

*(You can check `.env.example` for reference)*

---

## 🧪 Running Tests

### ✅ Run All Tests

```bash
npm run test
```

### 🧭 Run Only Smoke Tests

```bash
npm run test:smoke
```

### 🧪 Run Regression Tests

```bash
npm run test:regression
```

### 🧠 Run API Tests

```bash
npx playwright test tests/api/strapi.api.spec.js
```

---

## 📝 Test Tagging

You can tag any test like this:

```javascript
test('Login Test @smoke', async () => { ... });
test('Checkout Flow @regression', async () => { ... });
```

Run tagged tests with:

```bash
npx playwright test --grep @smoke
npx playwright test --grep @regression
```

---

## 📊 Allure Reporting

### 🪄 Generate & Open Allure Report

```bash
# Run tests to generate allure-results
npx playwright test

# Generate the report
npx allure generate allure-results --clean -o allure-report

# Open the report in your browser
npx allure open allure-report
```

You can also find these commands in:

```
utils/allure_commands.txt
```

---

## 🧭 Parallel Execution

The framework is configured for **parallel execution** in `playwright.config.js`:

```javascript
fullyParallel: true
```

This ensures test files and scenarios run concurrently for faster feedback.

---

## 🚀 CI/CD Ready

Sure ✅ — here’s a **short and clean Jenkins section** you can use in your README 👇

---

## 🚀 CI/CD with Jenkins

This project uses **Jenkins** for running Playwright tests and generating Allure reports.

* 📄 Pipeline is defined in the root `Jenkinsfile`
* 🧪 Runs tests, generates reports, and publishes **Allure dashboards** in Jenkins
* ✅ Requires:

  * NodeJS (v18+) configured in Jenkins
  * Allure Jenkins Plugin installed
  * Playwright dependencies on the agent

### 📝 Quick Steps

1. Create a **Pipeline job** in Jenkins
2. Choose **Pipeline script from SCM** and point to this repo
3. Run the job — Allure report will be available in Jenkins after the run


---

## 👥 Author

**Vamseedhar Reddy**
🔗 [LinkedIn](https://www.linkedin.com/in/vamseedhar-fullstack)

---

## 📝 License

This project is licensed under the MIT License.


