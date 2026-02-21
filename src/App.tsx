import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import StacksWaveSection from './components/StacksWaveSection';
import ProblemSection from './components/ProblemSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import SystemOverviewSection from './components/SystemOverviewSection';
import DeliverablesSection from './components/DeliverablesSection';
import SocialProofSection from './components/SocialProofSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Pages
import TermosDeUso from './pages/TermosDeUso';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import PoliticaDeCookies from './pages/PoliticaDeCookies';
import Reembolsos from './pages/Reembolsos';
import Contato from './pages/Contato';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: window.location.pathname,
      page_title: 'A Falha Kernel',
    });

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Optional: push to dataLayer for legal routes if needed here.
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Hash Router Config
  if (currentHash === '#termos') return <TermosDeUso />;
  if (currentHash === '#privacidade') return <PoliticaDePrivacidade />;
  if (currentHash === '#cookies') return <PoliticaDeCookies />;
  if (currentHash === '#reembolsos') return <Reembolsos />;
  if (currentHash === '#contato') return <Contato />;

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text selection:bg-brand-neon/30 selection:text-white relative">
      <HeroSection />
      <StacksWaveSection />
      <ProblemSection />
      <TargetAudienceSection />
      <SystemOverviewSection />
      <DeliverablesSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

// DataLayer type declaration for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default App;
