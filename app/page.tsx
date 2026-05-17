export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Restaurant Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Ensure Your Menu Complies with{" "}
          <span className="text-[#58a6ff]">Local Regulations</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your menu PDF or image. Our AI scans for missing allergen disclosures, calorie labeling gaps, and food regulation violations — then gives you a clear, actionable compliance report.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Compliance Check — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for first scan. Cancel anytime.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Allergen Detection", desc: "Flags missing allergen disclosures required by FDA and local health codes." },
            { icon: "📊", title: "Calorie Labeling", desc: "Checks calorie count requirements for chain and independent restaurants." },
            { icon: "📋", title: "Labeling Violations", desc: "Identifies non-compliant item descriptions and missing required statements." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu scans",
              "Allergen & calorie compliance checks",
              "Detailed violation reports",
              "Actionable fix recommendations",
              "PDF & image upload support",
              "Email delivery of reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What file formats can I upload?",
              a: "You can upload menu PDFs, JPEGs, and PNGs. Our OCR engine extracts all text and our AI analyzes it for compliance issues."
            },
            {
              q: "Which regulations does the checker cover?",
              a: "We cover FDA menu labeling rules, ADA allergen disclosure requirements, and common state/local food labeling regulations across the US."
            },
            {
              q: "How quickly do I get my compliance report?",
              a: "Most reports are generated within 60 seconds. You'll receive a detailed breakdown of violations and recommended fixes immediately."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Menu Compliance Checker. All rights reserved.
      </footer>
    </main>
  );
}
