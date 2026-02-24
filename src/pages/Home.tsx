import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { SEOHead } from '../components/SEOHead';
import { ClientMarquee } from '../components/ClientMarquee';
import { Stethoscope, Factory, ArrowRight } from 'lucide-react';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-deep-dark">
            <SEOHead
                title="Safefull Systems | Sécurité Communicante & B2B"
                description="Leader français de la sécurité communicante B2B : Protection des travailleurs isolés (PTI), Supervision de centres de dialyse, environnements ATEX et appels malades."
                canonicalUrl="https://safefull-systemes.netlify.app/"
            />
            <Hero />
            <ClientMarquee />

            {/* Aiguillage Cognitif (Bento Sectoriel CRO) */}
            <section className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
                {/* Lueur d'ambiance */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-4xl rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none"></div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                                Ingénierie Sectorielle
                            </h2>
                            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Des architectures pensées pour votre écosystème
                            </h3>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Carte Santé */}
                        <FadeIn delay={0.2} direction="up" className="h-full">
                            <Link to="/secteurs/sante" className="group block relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-matrix-green/5 to-transparent p-10 overflow-hidden transition-all duration-500 hover:border-matrix-green/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,255,65,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-matrix-green">
                                <div className="absolute inset-0 bg-matrix-green/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-deep-dark border border-matrix-green/30 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                        <Stethoscope className="h-8 w-8 text-matrix-green" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Hôpitaux & Cliniques</h4>
                                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                                        Supervision native Fresenius (NephroCall), alertes PTI en chambre, et traçabilité d'alarmes hétérogènes pour équipes biomédicales.
                                    </p>
                                    <div className="inline-flex items-center text-sm font-bold text-matrix-green uppercase tracking-wider">
                                        Explorer les solutions santé
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>

                        {/* Carte Industrie */}
                        <FadeIn delay={0.3} direction="up" className="h-full">
                            <Link to="/secteurs/industrie" className="group block relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-neon-blue/5 to-transparent p-10 overflow-hidden transition-all duration-500 hover:border-neon-blue/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,210,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue">
                                <div className="absolute inset-0 bg-neon-blue/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-deep-dark border border-neon-blue/30 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                        <Factory className="h-8 w-8 text-neon-blue" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Industrie & Logistique</h4>
                                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                                        Protection des Travailleurs Isolés (MobeeWeb) en zone ATEX, géolocalisation Indoor BLE précise, et gestion de crise sur sites à risques.
                                    </p>
                                    <div className="inline-flex items-center text-sm font-bold text-neon-blue uppercase tracking-wider">
                                        Explorer les solutions industrielles
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    </div>

                    {/* Maillage Secondaire Discret (Loi de Fitts) */}
                    <FadeIn delay={0.5} direction="up">
                        <div className="mt-16 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-10 text-sm">
                            <Link to="/solutions/mobeeweb" className="text-gray-500 hover:text-white transition-colors">Plateforme MobeeWeb</Link>
                            <span className="text-gray-800">•</span>
                            <Link to="/solutions/nephrocall" className="text-gray-500 hover:text-white transition-colors">Architecture NephroCall</Link>
                            <span className="text-gray-800">•</span>
                            <Link to="/references" className="text-gray-500 hover:text-white transition-colors">Nos Références Clients</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
