import React from "react";

// BC Tax Guide - Single-file React component using Tailwind CSS
// Default export: TaxGuide

export default function TaxGuide() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">BC Tax Guide</h1>
            <p className="text-sm opacity-90">Comprehensive, non-duplicated sections on BC tax rules, refunds, and tax-saving strategies</p>
          </div>
          <nav className="space-x-4">
            <a href="#bc-tax-info" className="text-sm hover:underline">BC Tax Information</a>
            <a href="#tax-refunds" className="text-sm hover:underline">Tax Refunds</a>
            <a href="#tax-savings" className="text-sm hover:underline">Tax Savings</a>
            <a href="#resources" className="text-sm hover:underline">Resources</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="hero" className="mb-8">
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold mb-3">Practical tax information for residents of British Columbia</h2>
            <p className="leading-relaxed text-gray-600">This single-page guide is organized into three focused sections so information is not duplicated: <strong>BC Tax Information</strong> (what the province and federal systems require), <strong>Tax Refunds</strong> (refunds, credits and how to claim them), and <strong>Tax Savings</strong> (actionable strategies and accounts to reduce taxable income).</p>
          </div>
        </section>

        <article id="bc-tax-info" className="mb-10">
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-4">1. BC Tax Information</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Provincial & Federal Basics</h4>
                <p className="mt-2 text-gray-600">Residents of British Columbia pay both federal and provincial income tax. Key items you should know:</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li><strong>BC basic personal amount</strong> – a provincial non-refundable credit that reduces provincial tax; claim on your annual return.</li>
                  <li><strong>Federal basic personal amount</strong> – shields a portion of income from federal tax and phases out at higher incomes.</li>
                  <li><strong>Provincial non-refundable credits</strong> (spouse/common-law, caregiver, disability, age) — apply these only on your provincial calculation.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Tax Residency & Reporting</h4>
                <p className="mt-2 text-gray-600">Your tax duties depend on residency for tax purposes. Important rules:</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li>Establishing residential ties (home, spouse, dependants) generally makes you a Canadian resident for tax purposes from the date you arrive.</li>
                  <li>Once a resident, you must report <em>worldwide income</em> from your date of residency.</li>
                  <li>If you hold foreign assets above reporting thresholds, specific forms (e.g., T1135) may be required.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Payroll Deductions & Contributions</h4>
                <p className="mt-2 text-gray-600">Your pay stub will include mandatory contributions and withholdings:</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li><strong>Canada Pension Plan (CPP)</strong> — employee and employer contributions to CPP based on pensionable earnings.</li>
                  <li><strong>Employment Insurance (EI)</strong> — small payroll deduction to fund EI benefits.</li>
                  <li>Income tax withheld at source based on federal+provincial rates and claimed credits on your TD1 forms.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Sales Taxes & PST Overview</h4>
                <p className="mt-2 text-gray-600">BC uses a combination of federal and provincial sales taxes:</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li><strong>GST (federal)</strong> — federal value-added tax (5%) applied across Canada.</li>
                  <li><strong>PST (provincial)</strong> — Province of BC sales tax applied to many goods and services (check exemptions for essentials).</li>
                  <li>Some items are PST-exempt (basic groceries, certain medical supplies); check official PST guides before purchasing large items.</li>
                </ul>
              </div>

            </div>

            <div className="mt-6 border-t pt-6">
              <h4 className="font-semibold">Filing Deadlines & Documents</h4>
              <p className="mt-2 text-gray-600">Important civic deadlines and documents:</p>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li><strong>Personal filing deadline:</strong> Typically April 30 each year (self-employed have extended filing date but payment is usually due April 30).</li>
                <li>Keep slips like T4s, T5s, RRSP receipts, medical receipts and any foreign tax statements.</li>
                <li>Apply for a Social Insurance Number (SIN) immediately — required to work and to file taxes accurately.</li>
              </ul>
            </div>

          </div>
        </article>

        <article id="tax-refunds" className="mb-10">
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-4">2. Tax Refunds</h3>

            <p className="text-gray-600">This section focuses exclusively on refundable credits, periodic government payments, and how to claim refunds — distinct from general tax rules covered above.</p>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">GST/HST Credit</h4>
                <p className="mt-2 text-gray-700">A tax-free quarterly payment to help offset consumption taxes for low- and modest-income households.</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li>Automatically assessed when you file; newcomers may need to complete CRA forms to register for benefits.</li>
                  <li>Payments are made quarterly — ensure your address and direct deposit info are up to date in CRA My Account.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Canada Child Benefit (CCB)</h4>
                <p className="mt-2 text-gray-700">Monthly, tax-free support for families with children under 18. Amounts depend on family income and number/age of children.</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li>Newcomers (permanent residents) can typically apply immediately; temporary residents may have waiting periods.</li>
                  <li>File taxes every year — CCB is recalculated annually based on your reported income.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">One-time/Temporary Rebates & Special Payments</h4>
                <p className="mt-2 text-gray-700">Government sometimes issues one-time relief payments or special rebates (e.g., cost-of-living supports). These are distributed separately from recurring credits and usually have specific eligibility windows.</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li>Check official federal and provincial announcements for eligibility dates and application steps.</li>
                  <li>One-time payments often require you to have filed a recent tax return or to have registered your profile with CRA.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Claiming Refunds & Common Forms</h4>
                <p className="mt-2 text-gray-700">Practical steps to access refunds:</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li>File a tax return every year, even with zero income — many refunds and credits are administered through tax returns.</li>
                  <li>Register for <strong>CRA My Account</strong> to view refund status, set up direct deposit, and update personal info.</li>
                  <li>Keep supporting documents (receipts, birth certificates for dependants) in case CRA requests verification.</li>
                </ul>
              </div>

            </div>

            <div className="mt-6 border-t pt-6">
              <h4 className="font-semibold">Timelines & What to Expect</h4>
              <p className="mt-2 text-gray-600">Typical timing and delivery methods:</p>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>Refunds and credits can be delivered by direct deposit (fastest) or by mailed cheque.</li>
                <li>Processing times vary — CRA My Account provides the most accurate status updates.</li>
                <li>If you disagree with an assessment, there are formal review and objection processes (follow CRA guidance).</li>
              </ul>
            </div>

          </div>
        </article>

        <article id="tax-savings" className="mb-10">
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-4">3. Tax Savings</h3>

            <p className="text-gray-600">Actionable strategies and registered accounts that reduce taxable income and support long-term wealth building. This section avoids repeating filing or refund mechanics described above.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Registered Retirement Savings Plan (RRSP)</h4>
                <p className="mt-2 text-gray-700">Contributions to an RRSP are tax-deductible for the year you claim them, lowering your taxable income immediately. Growth inside the RRSP is tax-deferred until withdrawal.</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li>Contribution room is 18% of prior year earned income up to a yearly maximum; unused room carries forward.</li>
                  <li>Withdrawals are taxable — plan strategically (retirement, homebuyer's program, life events).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Tax-Free Savings Account (TFSA)</h4>
                <p className="mt-2 text-gray-700">Contributions to a TFSA are not tax-deductible, but investment growth and withdrawals are tax-free — excellent for mid-term savings, emergency funds, and tax-free income later.</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li>Unused contribution room carries forward; withdrawn amounts are added back to your room the following year.</li>
                  <li>Use TFSAs for investments where tax-free growth matters (indices, ETFs, savings). Avoid over-contributing to prevent penalties.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">First Home Savings Account (FHSA)</h4>
                <p className="mt-2 text-gray-700">An FHSA blends RRSP-like deductions with TFSA-like tax-free withdrawals when used to purchase a first home.</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li>Annual and lifetime contribution limits apply — use them if you plan to buy your first home.</li>
                  <li>Plan contributions across years to maximize tax and purchase benefits.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Deductions & Credits to Mind</h4>
                <p className="mt-2 text-gray-700">Other ways to reduce tax payable without repeating refund mechanics:</p>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  <li><strong>Medical expense credit:</strong> Claim eligible medical costs exceeding the CRA threshold for the year.</li>
                  <li><strong>Childcare and employment expenses:</strong> Some work-related costs and childcare expenses can be claimed.</li>
                  <li><strong>Charitable donations:</strong> Provide non-refundable credits that reduce tax payable.</li>
                </ul>
              </div>

            </div>

            <div className="mt-6 border-t pt-6">
              <h4 className="font-semibold">Practical Strategy Checklist</h4>
              <ol className="mt-3 list-decimal list-inside text-gray-700">
                <li>Maximize RRSP contributions if you want immediate tax relief and expect to be in a lower tax bracket in retirement.</li>
                <li>Use TFSA for tax-free growth and flexibility (emergency funds, investing).</li>
                <li>Combine FHSA + RRSP/TFSA planning if buying your first home within a few years.</li>
                <li>Keep clear records of medical, donation, and childcare receipts for claims.</li>
                <li>Consider speaking with a licensed tax advisor for complex cross-border or multi-source-income situations.</li>
              </ol>
            </div>
          </div>
        </article>

        <section id="resources" className="mb-16">
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-semibold mb-3">Resources & Official Links</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><a className="hover:underline" href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">Canada Revenue Agency (CRA)</a></li>
              <li><a className="hover:underline" href="https://www2.gov.bc.ca/gov/content/taxes" target="_blank" rel="noopener noreferrer">BC Ministry of Finance - Taxes</a></li>
              <li><a className="hover:underline" href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">Government of Canada - Benefits & Credits</a></li>
              <li><a className="hover:underline" href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer">Immigration, Refugees and Citizenship Canada (IRCC) - for SIN & residency guidance</a></li>
            </ul>

            <div className="mt-6 text-sm text-gray-500">
              <p>Tip: Always verify specific amounts and thresholds on official CRA and BC government pages for the tax year you are filing — rates and limits change annually.</p>
            </div>
          </div>
        </section>

       
      </main>


    </div>
  );
}
