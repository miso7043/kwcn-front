
// src/locales/tax_en.ts

export const taxEn = {
  hero: {
    title: "TAX ACADEMY",
  },

  intro: {
    heading: "Practical tax information for residents of British Columbia",
    description:
      "This single-page guide is organized into three focused sections so information is not duplicated: " +
      "**BC Tax Information** (what the province and federal systems require), " +
      "**Tax Refunds** (refunds, credits and how to claim them), " +
      "**Tax Savings** (actionable strategies and accounts to reduce taxable income).",
  },

  sections: {
    taxInfo: {
      title: "1. BC Tax Information",
      blocks: [
        {
          title: "Provincial & Federal Basics",
          content:
            "Residents of British Columbia pay both federal and provincial income tax. Key items you should know:",
          list: [
            "**BC basic personal amount** – a provincial non-refundable credit that reduces provincial tax; claim on your annual return.",
            "**Federal basic personal amount** – shields a portion of income from federal tax and phases out at higher incomes.",
            "**Provincial non-refundable credits** (spouse/common-law, caregiver, disability, age) — apply these only on your provincial calculation.",
          ],
        },
        {
          title: "Tax Residency & Reporting",
          content: "Your tax duties depend on residency for tax purposes. Important rules:",
          list: [
            "Establishing residential ties (home, spouse, dependants) generally makes you a Canadian resident for tax purposes from the date you arrive.",
            "Once a resident, you must report worldwide income from your date of residency.",
            "If you hold foreign assets above reporting thresholds, specific forms (e.g., T1135) may be required.",
          ],
        },
        {
          title: "Payroll Deductions & Contributions",
          content: "Your pay stub will include mandatory contributions and withholdings:",
          list: [
            "Canada Pension Plan (CPP) — employee and employer contributions to CPP based on pensionable earnings.",
            "Employment Insurance (EI) — small payroll deduction to fund EI benefits.",
            "Income tax withheld at source based on federal+provincial rates and claimed credits on your TD1 forms.",
          ],
        },
        {
          title: "Sales Taxes & PST Overview",
          content: "BC uses a combination of federal and provincial sales taxes:",
          list: [
            "GST (federal) — federal value-added tax (5%) applied across Canada.",
            "PST (provincial) — Province of BC sales tax applied to many goods and services (check exemptions for essentials).",
            "Some items are PST-exempt (basic groceries, certain medical supplies); check official PST guides before purchasing large items.",
          ],
        },
        {
          title: "Filing Deadlines & Documents",
          content: "Important civic deadlines and documents:",
          list: [
            "Personal filing deadline: Typically April 30 each year (self-employed have extended filing date but payment is usually due April 30).",
            "Keep slips like T4s, T5s, RRSP receipts, medical receipts and any foreign tax statements.",
            "Apply for a Social Insurance Number (SIN) immediately — required to work and to file taxes accurately.",
          ],
        },
      ],
    },

    taxRefunds: {
      title: "2. Tax Refunds",
      intro:
        "This section focuses exclusively on refundable credits, periodic government payments, and how to claim refunds — distinct from general tax rules covered above.",
      blocks: [
        {
          title: "GST/HST Credit",
          content: "A tax-free quarterly payment to help offset consumption taxes for low- and modest-income households.",
          list: [
            "Automatically assessed when you file; newcomers may need to complete CRA forms to register for benefits.",
            "Payments are made quarterly — ensure your address and direct deposit info are up to date in CRA My Account.",
          ],
        },
        {
          title: "Canada Child Benefit (CCB)",
          content: "Monthly, tax-free support for families with children under 18. Amounts depend on family income and number/age of children.",
          list: [
            "Newcomers (permanent residents) can typically apply immediately; temporary residents may have waiting periods.",
            "File taxes every year — CCB is recalculated annually based on your reported income.",
          ],
        },
        {
          title: "One-time/Temporary Rebates & Special Payments",
          content:
            "Government sometimes issues one-time relief payments or special rebates (e.g., cost-of-living supports). These are distributed separately from recurring credits and usually have specific eligibility windows.",
          list: [
            "Check official federal and provincial announcements for eligibility dates and application steps.",
            "One-time payments often require you to have filed a recent tax return or to have registered your profile with CRA.",
          ],
        },
        {
          title: "Claiming Refunds & Common Forms",
          content: "Practical steps to access refunds:",
          list: [
            "File a tax return every year, even with zero income — many refunds and credits are administered through tax returns.",
            "Register for CRA My Account to view refund status, set up direct deposit, and update personal info.",
            "Keep supporting documents (receipts, birth certificates for dependants) in case CRA requests verification.",
          ],
        },
        {
          title: "Timelines & What to Expect",
          content: "Typical timing and delivery methods:",
          list: [
            "Refunds and credits can be delivered by direct deposit (fastest) or by mailed cheque.",
            "Processing times vary — CRA My Account provides the most accurate status updates.",
            "If you disagree with an assessment, there are formal review and objection processes (follow CRA guidance).",
          ],
        },
      ],
    },

    taxSavings: {
      title: "3. Tax Savings",
      intro:
        "Actionable strategies and registered accounts that reduce taxable income and support long-term wealth building. This section avoids repeating filing or refund mechanics described above.",
      blocks: [
        {
          title: "Registered Retirement Savings Plan (RRSP)",
          content:
            "Contributions to an RRSP are tax-deductible for the year you claim them, lowering your taxable income immediately. Growth inside the RRSP is tax-deferred until withdrawal.",
          list: [
            "Contribution room is 18% of prior year earned income up to a yearly maximum; unused room carries forward.",
            "Withdrawals are taxable — plan strategically (retirement, homebuyer's program, life events).",
          ],
        },
        {
          title: "Tax-Free Savings Account (TFSA)",
          content:
            "Contributions to a TFSA are not tax-deductible, but investment growth and withdrawals are tax-free — excellent for mid-term savings, emergency funds, and tax-free income later.",
          list: [
            "Unused contribution room carries forward; withdrawn amounts are added back to your room the following year.",
            "Use TFSAs for investments where tax-free growth matters (indices, ETFs, savings). Avoid over-contributing to prevent penalties.",
          ],
        },
        {
          title: "First Home Savings Account (FHSA)",
          content:
            "An FHSA blends RRSP-like deductions with TFSA-like tax-free withdrawals when used to purchase a first home.",
          list: [
            "Annual and lifetime contribution limits apply — use them if you plan to buy your first home.",
            "Plan contributions across years to maximize tax and purchase benefits.",
          ],
        },
        {
          title: "Deductions & Credits to Mind",
          content: "Other ways to reduce tax payable without repeating refund mechanics:",
          list: [
            "Medical expense credit: Claim eligible medical costs exceeding the CRA threshold for the year.",
            "Childcare and employment expenses: Some work-related costs and childcare expenses can be claimed.",
            "Charitable donations: Provide non-refundable credits that reduce tax payable.",
          ],
        },
        {
          title: "Practical Strategy Checklist",
          content: "",
          list: [
            "Maximize RRSP contributions if you want immediate tax relief and expect to be in a lower tax bracket in retirement.",
            "Use TFSA for tax-free growth and flexibility (emergency funds, investing).",
            "Combine FHSA + RRSP/TFSA planning if buying your first home within a few years.",
            "Keep clear records of medical, donation, and childcare receipts for claims.",
            "Consider speaking with a licensed tax advisor for complex cross-border or multi-source-income situations.",
          ],
        },
      ],
    },

    resources: {
      title: "Resources & Official Links",
      links: [
        {
          label: "Canada Revenue Agency (CRA)",
          url: "https://www.canada.ca/en/revenue-agency.html",
        },
        {
          label: "BC Ministry of Finance - Taxes",
          url: "https://www2.gov.bc.ca/gov/content/taxes",
        },
        {
          label: "Government of Canada - Benefits & Credits",
          url: "https://www.canada.ca/en/services/benefits.html",
        },
        {
          label:
            "Immigration, Refugees and Citizenship Canada (IRCC) - for SIN & residency guidance",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
        },
      ],
      tip: "Tip: Always verify specific amounts and thresholds on official CRA and BC government pages for the tax year you are filing — rates and limits change annually.",
    },
  },
};
