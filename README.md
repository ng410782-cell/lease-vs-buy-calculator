# ⚙️ Equipment Lease vs. Buy Decision Tool (AS 19 vs. Ind AS 116) 📊

An interactive managerial accounting and corporate finance utility designed to evaluate whether purchasing or leasing capital assets yields a lower Net Present Value (NPV) of cash outflows under Indian Accounting Standards (**AS 19 / AS 10**) and Indian Accounting Standards compliant with IFRS (**Ind AS 116 / Ind AS 16**).# ⚙️ Equipment Lease vs. Buy Decision Tool (AS 19 vs. Ind AS 116) 📊

An advanced managerial accounting and corporate finance utility designed to evaluate whether purchasing or leasing capital assets yields a lower Net Present Value (NPV) of cash outflows under Indian Accounting Standards (**AS 19 / AS 10**) and IFRS-aligned Indian Accounting Standards (**Ind AS 116 / Ind AS 16**).

🔗 **[Live Demo](https://ng410782-cell.github.io/lease-vs-buy-calculator/)**

---

## 🌟 Key Features

- **Dual Accounting Standard Toggle:**
  - **SME Mode (AS 19 / AS 10):** Models off-balance-sheet operating leases where rental payments act as flat operational tax deductions.
  - **Corporate Mode (Ind AS 116 / Ind AS 16):** Models on-balance-sheet lease recognition, calculating the initial **Present Value of Lease Liability**, **Right-of-Use (ROU) Asset** depreciation, and front-loaded finance interest expense tax shields.
- **Dynamic Financial Statement Disclosures:** Generates line-by-line accounting breakdowns showing the exact impact on the **Profit & Loss Statement (P&L)**, **Balance Sheet**, and **Cash Flow Statement**.
- **Capital Budgeting Logic:** Factors in asset purchase price, useful life, salvage/resale value, annual lease rentals, corporate tax rates, and discount rates (cost of capital).
- **Non-Financial Strategic Evaluation:** Highlights qualitative risk factors like equipment obsolescence, working capital preservation, and maintenance liabilities.
- **Indian Currency Formatting:** Automatically formats inputs and outputs using the standard Indian numbering system (`₹`).

---

## 📐 Accounting Standards Framework & Formulas

### 1. Buy Option (AS 10 / Ind AS 16 - Property, Plant & Equipment)
$$\text{NPV}_{\text{Buy}} = P - \sum_{t=1}^{N} \frac{\text{Depreciation} \times T}{(1 + k)^t} - \frac{S}{(1 + k)^N}$$

### 2. Lease Option — SME Mode (AS 19)
$$\text{NPV}_{\text{Lease (AS 19)}} = \sum_{t=1}^{N} \frac{L \times (1 - T)}{(1 + k)^t}$$

### 3. Lease Option — Corporate Mode (Ind AS 116)
$$\text{Lease Liability (Day 1)} = \sum_{t=1}^{N} \frac{L}{(1 + k)^t}$$

$$\text{NPV}_{\text{Lease (Ind AS 116)}} = \sum_{t=1}^{N} \frac{L - [(\text{ROU Depreciation}_t + \text{Interest Expense}_t) \times T]}{(1 + k)^t}$$

**Where:**
* $P$ = Initial Equipment Purchase Price
* $N$ = Useful Life in Years
* $S$ = Estimated Salvage / Resale Value
* $L$ = Annual Lease Payment
* $k$ = Incremental Borrowing / Discount Rate
* $T$ = Corporate Tax Rate

---

## 📋 Financial Statement Impact Summary

| Financial Statement | SME Mode (AS 19) | Corporate Mode (Ind AS 116) |
| :--- | :--- | :--- |
| **Profit & Loss (P&L)** | Full lease payment deducted as an Operational Expense. | Rent replaced by **ROU Asset Depreciation** + **Interest Expense**. Boosts reported EBITDA. |
| **Balance Sheet** | *Off-Balance Sheet.* Disclosed in Notes to Accounts only. | **ROU Asset** & **Lease Liability** recognized on Day 1. Impacts debt ratios. |
| **Cash Flow** | Classified entirely under **Operating Cash Outflows**. | Payments split between **Financing** (Principal) & **Operating/Financing** (Interest). |

---

## 🚀 How to Run Locally

1. Clone or download this repository:
   ```bash
   git clone [https://github.com/ng410782-cell/lease-vs-buy-calculator.git](https://github.com/ng410782-cell/lease-vs-buy-calculator.git)

🔗 **[Live Demo](https://ng410782-cell.github.io/lease-vs-buy-calculator/)**

---

## 🌟 Key Features

- **Dual Compliance Mode Toggle:**
  - **SME / Individual Mode (AS 19 & AS 10):** Models off-balance-sheet operating leases where full lease payments act as operational tax deductions.
  - **Corporate Mode (Ind AS 116 & Ind AS 16):** Models on-balance-sheet lease recognition, calculating the **Present Value of Lease Liability** and **Right-of-Use (ROU) Asset** amortization.
- **Capital Budgeting Logic:** Incorporates purchase price, salvage value, annual lease rentals, cost of capital discount rates, and corporate tax shields.
- **Dynamic Recommendation Engine:** Compares total NPV cash outflows for both paths to recommend the most cost-effective option.
- **Indian Currency Formatting:** Automatically formats inputs and outputs using the standard Indian numbering system (`₹`).

---

## 📐 Accounting Standards Framework & Formulas

### 1. Buy Option (AS 10 / Ind AS 16 - Property, Plant and Equipment)
$$\text{NPV}_{\text{Buy}} = P - \sum_{t=1}^{N} \frac{\text{Depreciation} \times T}{(1 + k)^t} - \frac{S}{(1 + k)^N}$$

### 2. Lease Option - SME Mode (AS 19)
$$\text{NPV}_{\text{Lease (AS 19)}} = \sum_{t=1}^{N} \frac{L \times (1 - T)}{(1 + k)^t}$$

### 3. Lease Option - Corporate Mode (Ind AS 116)
$$\text{Lease Liability (Day 1)} = \sum_{t=1}^{N} \frac{L}{(1 + k)^t}$$
$$\text{NPV}_{\text{Lease (Ind AS 116)}} = \sum_{t=1}^{N} \frac{L - [(\text{ROU Depreciation}_t + \text{Interest Expense}_t) \times T]}{(1 + k)^t}$$

**Where:**
* $P$ = Initial Purchase Price
* $N$ = Useful Life in Years
* $S$ = Salvage / Resale Value
* $L$ = Annual Lease Payment
* $k$ = Discount Rate / Cost of Capital
* $T$ = Corporate Tax Rate

---

## 🛠️ Built With

- **HTML5 & CSS3** – Responsive user interface with custom toggle controls
- **JavaScript (ES6)** – Dynamic accounting algorithms and DOM manipulation
- **GitHub Pages** – Automated static web hosting
