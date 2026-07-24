/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Footer } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { NewMechanismSection } from './components/NewMechanismSection';
import { DreamOutcomeSection } from './components/DreamOutcomeSection';
import { WorkflowSection } from './components/WorkflowSection';
import { FeaturesSection } from './components/FeaturesSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ComparisonSection } from './components/ComparisonSection';
import { OfferSection } from './components/OfferSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. New Mechanism Section */}
        <NewMechanismSection />

        {/* 4. Dream Outcome Section */}
        <DreamOutcomeSection />

        {/* 5. Cara Kerja (Workflow Section) */}
        <WorkflowSection />

        {/* 6. Fitur Utama (Features Section) */}
        <FeaturesSection />

        {/* 7. Use Cases (Target Audience) */}
        <UseCasesSection />

        {/* 8. Perbandingan (Comparison) */}
        <ComparisonSection />

        {/* 9. Offer & Value Stack (Pricing) */}
        <OfferSection />

        {/* 10. FAQ */}
        <FAQSection />

        {/* 11. Final CTA */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}



