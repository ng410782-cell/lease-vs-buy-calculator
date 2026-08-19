# ⚙️ Equipment Lease vs. Buy Decision Tool 📊

An interactive managerial accounting utility designed to evaluate whether purchasing or leasing capital assets yields a lower Net Present Value (NPV) of cash outflows.

🔗 **[Live Demo](https://ng410782-cell.github.io/lease-vs-buy-calculator/)**

---

## 🌟 Key Features

- **Capital Budgeting Logic:** Accounts for initial purchase price, salvage value, recurring lease payments, and time-value-of-money discount rates.
- **Tax Shield Modeling:** Factor in corporate tax deduction benefits from annual asset depreciation vs. full tax deductions on operating lease payments.
- **Dynamic Recommendation Engine:** Compares the Net Present Value (NPV) of net cash outflows for both options to deliver a clear economic choice.
- **Indian Currency Formatting:** Formats output calculations using standard Indian numbering (`₹`).

---

## 📐 Financial Logic & Formulas

The tool calculates the Net Present Value of Net Cash Outflows for both paths:

### 1. Buy Option NPV
$$\text{NPV}_{\text{Buy}} = P - \sum_{t=1}^{N} \frac{\text{Depreciation} \times T}{(1 + k)^t} - \frac{S}{(1 + k)^N}$$

### 2. Lease Option NPV
$$\text{NPV}_{\text{Lease}} = \sum_{t=1}^{N} \frac{L \times (1 - T)}{(1 + k)^t}$$

**Where:**
* $P$ = Initial Purchase Price
* $N$ = Useful Life in Years
* $S$ = Estimated Salvage / Resale Value
* $L$ = Annual Lease Payment
* $k$ = Discount Rate / Cost of Capital
* $T$ = Corporate Tax Rate

---

## 🛠️ Built With

- **HTML5 & CSS3** – Clean responsive layout
- **JavaScript (ES6)** – NPV financial algorithms and DOM manipulation
- **GitHub Pages** – Automated static web hosting
