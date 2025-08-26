// BC Tax Guide - Single-file React component using Tailwind CSS
// Default export: TaxGuide

export default function TaxGuide() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            TAX ACADEMY
          </h1>
        </div>
      </div>

      <div className="max-w-6xl md:max-w-7xl mx-auto rounded-lg p-8 mt-3">
        <div className="bg-black rounded-2xl shadow p-8">
          <h2 className="font-bold text-white drop-shadow-lg text-[clamp(1rem,2.5vw,2.5rem)] mb-4">Practical tax information for residents of British Columbia</h2>
          <p className="text-gray-200 leading-relaxed text-lg">
            This single-page guide is organized into three focused sections so information is not duplicated:
            <strong className="text-white"> BC Tax Information</strong> (what the province and federal systems require),
            <strong className="text-white"> Tax Refunds</strong> (refunds, credits and how to claim them),
            <strong className="text-white"> Tax Savings</strong> (actionable strategies and accounts to reduce taxable income).
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* BC Tax Information */}
        <section id="tax-info" className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            1. BC Tax Information
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Provincial & Federal Basics</h4>
            <p>Residents of British Columbia pay both federal and provincial income tax. Key items you should know:</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong className="text-white">BC basic personal amount</strong> – a provincial non-refundable credit that reduces provincial tax; claim on your annual return.</li>
              <li><strong className="text-white">Federal basic personal amount</strong> – shields a portion of income from federal tax and phases out at higher incomes.</li>
              <li><strong className="text-white">Provincial non-refundable credits</strong> (spouse/common-law, caregiver, disability, age) — apply these only on your provincial calculation.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Tax Residency & Reporting</h4>
            <p>Your tax duties depend on residency for tax purposes. Important rules:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Establishing residential ties (home, spouse, dependants) generally makes you a Canadian resident for tax purposes from the date you arrive.</li>
              <li>Once a resident, you must report <em>worldwide income</em> from your date of residency.</li>
              <li>If you hold foreign assets above reporting thresholds, specific forms (e.g., T1135) may be required.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Payroll Deductions & Contributions</h4>
            <p>Your pay stub will include mandatory contributions and withholdings:</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Canada Pension Plan (CPP)</strong> — employee and employer contributions to CPP based on pensionable earnings.</li>
              <li><strong>Employment Insurance (EI)</strong> — small payroll deduction to fund EI benefits.</li>
              <li>Income tax withheld at source based on federal+provincial rates and claimed credits on your TD1 forms.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Sales Taxes & PST Overview</h4>
            <p>BC uses a combination of federal and provincial sales taxes:</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>GST (federal)</strong> — federal value-added tax (5%) applied across Canada.</li>
              <li><strong>PST (provincial)</strong> — Province of BC sales tax applied to many goods and services (check exemptions for essentials).</li>
              <li>Some items are PST-exempt (basic groceries, certain medical supplies); check official PST guides before purchasing large items.</li>
            </ul>
          </div>

          <div className="bg-yellow-900/10 rounded-lg border-l-4 border-yellow-400 text-gray-200 leading-relaxed text-lg space-y-4 p-6 mb-4">
            <h4 className="text-white text-xl font-bold mb-2">Filing Deadlines & Documents</h4>
            <p>Important civic deadlines and documents:</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Personal filing deadline:</strong> Typically April 30 each year (self-employed have extended filing date but payment is usually due April 30).</li>
              <li>Keep slips like T4s, T5s, RRSP receipts, medical receipts and any foreign tax statements.</li>
              <li>Apply for a Social Insurance Number (SIN) immediately — required to work and to file taxes accurately.</li>
            </ul>
          </div>
        </section>

        {/* Tax Refunds */}
        <section id="tax-refunds" className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            2. Tax Refunds
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <h3 className="text-white">This section focuses exclusively on refundable credits, periodic government payments, and how to claim refunds — distinct from general tax rules covered above.</h3>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">GST/HST Credit</h4>
            <p>A tax-free quarterly payment to help offset consumption taxes for low- and modest-income households.</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Automatically assessed when you file;</strong> newcomers may need to complete CRA forms to register for benefits.</li>
              <li><strong>Payments are made quarterly</strong> — ensure your address and direct deposit info are up to date in CRA My Account.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Canada Child Benefit (CCB)</h4>
            <p>Monthly, tax-free support for families with children under 18. Amounts depend on family income and number/age of children.</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Newcomers (permanent residents) can typically apply immediately;</strong> temporary residents may have waiting periods.</li>
              <li><strong>File taxes every year</strong> — CCB is recalculated annually based on your reported income.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">One-time/Temporary Rebates & Special Payments</h4>
            <p>Government sometimes issues one-time relief payments or special rebates (e.g., cost-of-living supports). These are distributed separately from recurring credits and usually have specific eligibility windows.</p>
            <ul className="list-disc list-inside ml-6">
              <li>Check official federal and provincial announcements for eligibility dates and application steps.</li>
              <li>One-time payments often require you to have filed a recent tax return or to have registered your profile with CRA.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Claiming Refunds & Common Forms</h4>
            <p>Practical steps to access refunds:</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>File a tax return every year, even with zero income</strong> — many refunds and credits are administered through tax returns.</li>
              <li>Register for <strong>CRA My Account</strong> to view refund status, set up direct deposit, and update personal info.</li>
              <li>Keep supporting documents (receipts, birth certificates for dependants) in case CRA requests verification.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-4">
            <h4 className="text-white text-xl font-bold mb-2">Timelines & What to Expect</h4>
            <p>Typical timing and delivery methods:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Refunds and credits can be delivered by direct deposit (fastest) or by mailed cheque.</li>
              <li>Processing times vary — CRA My Account provides the most accurate status updates.</li>
              <li>If you disagree with an assessment, there are formal review and objection processes (follow CRA guidance).</li>
            </ul>
          </div>
        </section>

        {/* 3. Tax Savings */}
        <section id="tax-savings" className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            3. Tax Savings
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <h3 className="text-white">Actionable strategies and registered accounts that reduce taxable income and support long-term wealth building. This section avoids repeating filing or refund mechanics described above.</h3>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Registered Retirement Savings Plan (RRSP)</h4>
            <p>Contributions to an RRSP are tax-deductible for the year you claim them, lowering your taxable income immediately. Growth inside the RRSP is tax-deferred until withdrawal.</p>
            <ul className="list-disc list-inside ml-6">
              <li>Contribution room is 18% of prior year earned income up to a yearly maximum; unused room carries forward.</li>
              <li>Withdrawals are taxable — plan strategically (retirement, homebuyer's program, life events).</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Tax-Free Savings Account (TFSA)</h4>
            <p>Contributions to a TFSA are not tax-deductible, but investment growth and withdrawals are tax-free — excellent for mid-term savings, emergency funds, and tax-free income later.</p>
            <ul className="list-disc list-inside ml-6">
              <li>Unused contribution room carries forward; withdrawn amounts are added back to your room the following year.</li>
              <li>Use TFSAs for investments where tax-free growth matters (indices, ETFs, savings). Avoid over-contributing to prevent penalties.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">First Home Savings Account (FHSA)</h4>
            <p>An FHSA blends RRSP-like deductions with TFSA-like tax-free withdrawals when used to purchase a first home.</p>
            <ul className="list-disc list-inside ml-6">
              <li>Annual and lifetime contribution limits apply — use them if you plan to buy your first home.</li>
              <li>Plan contributions across years to maximize tax and purchase benefits.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-10">
            <h4 className="text-white text-xl font-bold mb-2">Deductions & Credits to Mind</h4>
            <p>Other ways to reduce tax payable without repeating refund mechanics:</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Medical expense credit:</strong> Claim eligible medical costs exceeding the CRA threshold for the year.</li>
              <li><strong>Childcare and employment expenses:</strong> Some work-related costs and childcare expenses can be claimed.</li>
              <li><strong>Charitable donations:</strong> Provide non-refundable credits that reduce tax payable.</li>
            </ul>
          </div>

          <div className="bg-gray-800/40 rounded-lg border-l-4 border-blue-500 p-6 text-gray-200 leading-relaxed text-lg space-y-4 mb-4">
            <h4 className="text-white text-xl font-bold mb-2">Practical Strategy Checklist</h4>
            <p></p>
            <ul className="list-disc list-inside ml-6">
              <li>Maximize RRSP contributions if you want immediate tax relief and expect to be in a lower tax bracket in retirement.</li>
              <li>Use TFSA for tax-free growth and flexibility (emergency funds, investing).</li>
              <li>Combine FHSA + RRSP/TFSA planning if buying your first home within a few years.</li>
              <li>Keep clear records of medical, donation, and childcare receipts for claims.</li>
              <li>Consider speaking with a licensed tax advisor for complex cross-border or multi-source-income situations.</li>
            </ul>
          </div>
        </section>

        {/* Resources & Official Links */}
        <section id="resources" className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Resources & Official Links
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <ul className="mt-3 space-y-2 text-gray-200">
            <li><a className="hover:underline" href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">Canada Revenue Agency (CRA)</a></li>
            <li><a className="hover:underline" href="https://www2.gov.bc.ca/gov/content/taxes" target="_blank" rel="noopener noreferrer">BC Ministry of Finance - Taxes</a></li>
            <li><a className="hover:underline" href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">Government of Canada - Benefits & Credits</a></li>
            <li><a className="hover:underline" href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer">Immigration, Refugees and Citizenship Canada (IRCC) - for SIN & residency guidance</a></li>
          </ul>

          <div className="mt-6 text-sm text-gray-200">
            <p>Tip: Always verify specific amounts and thresholds on official CRA and BC government pages for the tax year you are filing — rates and limits change annually.</p>
          </div>
        </section>


      </div>


    </div>
  );
}
