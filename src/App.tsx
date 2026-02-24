import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MobeeWeb } from './pages/solutions/MobeeWeb';
import { NephroCall } from './pages/solutions/NephroCall';
import { Sante } from './pages/secteurs/Sante';
import { Industrie } from './pages/secteurs/Industrie';
import { Contact } from './pages/Contact';
import { References } from './pages/References';
import { About } from './pages/About';
import { Legal } from './pages/Legal';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookieManagement } from './pages/CookieManagement';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-deep-dark text-white font-sans selection:bg-neon-blue selection:text-deep-dark">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions/mobeeweb" element={<MobeeWeb />} />
            <Route path="/solutions/nephrocall" element={<NephroCall />} />
            <Route path="/secteurs/sante" element={<Sante />} />
            <Route path="/secteurs/industrie" element={<Industrie />} />
            <Route path="/references" element={<References />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/gestion-cookies" element={<CookieManagement />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
