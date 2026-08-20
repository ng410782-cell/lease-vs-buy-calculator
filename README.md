# ⚙️ Equipment Lease vs. Buy Decision Tool (AS 19 vs. Ind AS 116) 📊

An interactive managerial accounting and corporate finance utility designed to evaluate whether purchasing or leasing capital assets yields a lower Net Present Value (NPV) of cash outflows under Indian Accounting Standards (**AS 19 / AS 10**) and Indian Accounting Standards compliant with IFRS (**Ind AS 116 / Ind AS 16**).

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
