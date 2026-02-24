import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { SEOHead } from '../components/SEOHead';
import { ClientMarquee } from '../components/ClientMarquee';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <SEOHead
                title="Safefull Systems | Sécurité Communicante & B2B"
                description="Leader français de la sécurité communicante B2B : Protection des travailleurs isolés (PTI), Supervision de centres de dialyse, environnements ATEX et appels malades."
                canonicalUrl="https://safefull-systemes.netlify.app/"
            />
            <Hero />
            <ClientMarquee />

            {/* Maillage Interne SEO (PageRank Distribution) */}
            <section className="bg-deep-dark py-16 border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn direction="up">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 text-center">
                            <Link to="/solutions/mobeeweb" className="text-gray-400 hover:text-neon-blue transition-colors text-sm font-semibold uppercase tracking-wider">
                                MobeeWeb (PTI)
                            </Link>
                            <Link to="/solutions/nephrocall" className="text-gray-400 hover:text-matrix-green transition-colors text-sm font-semibold uppercase tracking-wider">
                                NephroCall (Santé)
                            </Link>
                            <Link to="/secteurs/sante" className="text-gray-400 hover:text-neon-blue transition-colors text-sm font-semibold uppercase tracking-wider">
                                Hôpitaux & Cliniques
                            </Link>
                            <Link to="/secteurs/industrie" className="text-gray-400 hover:text-matrix-green transition-colors text-sm font-semibold uppercase tracking-wider">
                                Industrie & Logistique
                            </Link>
                            <Link to="/references" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider md:col-span-1 col-span-2">
                                Nos Références
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
