import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
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
import IntroScreen from './components/IntroScreen';
import LoadingScreen from './components/LoadingScreen';
import AudioController from './components/AudioController';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import PoliticaDeCookies from './pages/PoliticaDeCookies';
import Reembolsos from './pages/Reembolsos';
import Contato from './pages/Contato';
import AccessGranted from './pages/AccessGranted';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStartedAudio, setHasStartedAudio] = useState(false);

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
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Attempt to play audio when user leaves the loading screen
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio) {
      if (!isLoading && !hasStartedAudio && !isMuted) {
        audio.volume = 0.5;
        audio.play().catch((err) => {
          console.warn("Autoplay blocked or audio missing: ", err);
        });
        setHasStartedAudio(true);
      }

      // Sync mute state
      audio.muted = isMuted;
    }
  }, [isLoading, hasStartedAudio, isMuted]);

  const toggleAudio = () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio) {
      if (isMuted) {
        audio.play().catch(() => { });
      }
      setIsMuted(!isMuted);
    }
  };

  const handleStart = () => {
    setIsLoading(false);
    // Directly play audio here to use the user gesture from the button click
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio && !isMuted) {
      audio.volume = 0.5;
      audio.play().catch((err) => console.warn("Audio play failed:", err));
      setHasStartedAudio(true);
    }
  };

  // Simple Hash Router Config
  if (currentHash === '#termos') return <TermosDeUso />;
  if (currentHash === '#privacidade') return <PoliticaDePrivacidade />;
  if (currentHash === '#cookies') return <PoliticaDeCookies />;
  if (currentHash === '#reembolsos') return <Reembolsos />;
  if (currentHash === '#contato') return <Contato />;
  if (currentHash === '#access-granted') return <AccessGranted />;

  return (
    <>
      <audio id="bg-music" src="/trilha.mp3" loop />

      {!isLoading && (
        <AudioController
          isMuted={isMuted}
          onToggle={toggleAudio}
          isVisible={true}
        />
      )}

      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleStart} />
      ) : (!currentHash && showIntro) ? (
        <IntroScreen onComplete={() => setShowIntro(false)} />
      ) : (
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
          <Analytics />
        </div>
      )}
    </>
  );
}

// DataLayer type declaration for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default App;
