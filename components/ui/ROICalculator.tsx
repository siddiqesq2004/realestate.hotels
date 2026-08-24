"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function ROICalculator() {
  const [investment, setInvestment] = useState<number>(1200000);

  // Simplified calculation logic for demo
  const yieldRate = investment >= 8500000 ? 0.065 : 0.08; // 6.5% for residences, 8% for suites
  const capitalAppreciation = 0.04; // 4% YoY estimated appreciation
  const annualIncome = investment * yieldRate;
  const appreciationValue = investment * capitalAppreciation;
  const usageDays = investment >= 8500000 ? "Unlimited" : "45 Days";

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-white/5">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-ivory-100 mb-4">
            Projected <span className="text-bronze-400 italic">Returns</span>
          </h2>
          <p className="text-ivory-300 font-sans font-light">
            Estimate your annual rental yield based on your initial investment tier.
          </p>
        </div>

        <div className="bg-[#151515] border border-bronze-900/30 p-8 md:p-12 rounded-sm shadow-2xl">
          <div className="mb-12">
            <div className="flex justify-between text-ivory-100 font-serif text-2xl mb-6">
              <span>Investment Amount</span>
              <span className="text-bronze-400">{formatCurrency(investment)}</span>
            </div>
            <input
              type="range"
              min="1200000"
              max="15000000"
              step="100000"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-bronze-500"
            />
            <div className="flex justify-between text-xs text-ivory-400 uppercase tracking-widest mt-4">
              <span>Branded Suites</span>
              <span>Private Residences</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center pt-8 border-t border-white/5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ivory-400 mb-2">Net Rental Yield</p>
              <p className="text-3xl font-serif text-ivory-100">{(yieldRate * 100).toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ivory-400 mb-2">Annual Income</p>
              <p className="text-3xl font-serif text-ivory-100">{formatCurrency(annualIncome)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ivory-400 mb-2">Est. Appreciation</p>
              <p className="text-3xl font-serif text-ivory-100">4.0%</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ivory-400 mb-2">Owner Usage</p>
              <p className="text-3xl font-serif text-ivory-100">{usageDays}</p>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-white/30 font-light font-sans max-w-2xl mx-auto">
            * Returns and capital appreciation figures are projected estimates based on historical data and market analysis. Actual returns may vary and are not guaranteed. Please consult with our advisory team for a detailed prospectus.
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
