import { Trophy, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SEOHead } from '../components/SEOHead';

export function References() {
    const references = [
        "Air France", "SNECMA", "CEA", "Procter & Gamble",
        "SKF", "Cogema", "ABB", "Yoplait",
        "Danone", "Nestlé", "Schneider",
        "Saint Louis Sucre", "LFB Lafarge", "Pechiney",
        "Dalkia", "Parkings de Reims", "Hôpital de Valenciennes",
        "Cliniques Groupe Hospitalor", "AFM (Association France Myopathe)"
    ];

    return (
        <div className="bg-deep-dark min-h-screen pb-24">
            <SEOHead
                title="Références Clients et Confiance | Safefull Systems"
                description="Découvrez les leaders de l'industrie, de l'aéronautique (Air France, SNECMA) et du médical qui font confiance à Safefull Systems pour leur sécurité critique."
                canonicalUrl="https://safefull-systemes.netlify.app/references"
            />

            {/* Grid d'arrière plan type technologie sombre */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none h-[50vh]"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
                <div className="mx-auto max-w-3xl text-center">
                    <FadeIn direction="up">
                        <h2 className="text-sm font-bold tracking-widest text-matrix-green uppercase">La Preuve Sociale Absolue</h2>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            Ils s'appuient sur notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-neon-blue">Résilience</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium">
                            Depuis des années, SafeFull Systems sécurise les infrastructures les plus exigeantes de France. Du pôle nucléaire aux chaînes d'assemblage aéronautiques, l'erreur n'est pas une option.
                        </p>
                    </FadeIn>
                </div>

                {/* Bannière Visuelle B2B: Les Logos Modernes */}
                <FadeIn delay={0.2} direction="up" className="mt-16 w-full max-w-5xl mx-auto border border-gray-800 bg-dark-surface p-8">
                    <div className="relative w-full overflow-hidden bg-deep-dark p-8 flex flex-wrap items-center justify-center gap-12 border border-white/5 shadow-inner">
                        <img src="/logos/ARKEMA_logo.png" alt="Arkema" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/Logo_Sanofi_(2022).png" alt="Sanofi" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/Logo_Tereos_2016.png" alt="Tereos" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/Viatris.svg.png" alt="Viatris" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/Logo-Ramsay-Sante.png" alt="Ramsay Santé" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/Safran_-_logo_2016.png" alt="Safran" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/Borealis_logo.svg.png" alt="Borealis" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/ChrHansen.svg.png" alt="Chr Hansen" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/Remymartin_logo_317px.png" alt="Rémy Martin" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/logo-delpharm-300x180.png" alt="Delpharm" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                        <img src="/logos/lu-logo.png" alt="LU" className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <Trophy className="h-8 w-8 text-matrix-green" />
                        <span className="text-2xl font-bold text-white tracking-wide">Excellence Industrielle & Médicale</span>
                    </div>
                </FadeIn>

                {/* Grille des clients en CSS Grid */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-white mb-10 text-center border-b border-gray-800 pb-6 max-w-2xl mx-auto">
                        L'Exigence Partagée par les Leaders
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
                        {references.map((ref, index) => (
                            <FadeIn key={ref} delay={0.1 + (index * 0.05)} direction="up" className="h-full">
                                <div className="group flex items-center gap-3 h-full rounded-none border border-white/5 bg-white/5 p-4 transition-all hover:border-neon-blue/40 hover:bg-white/10">
                                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-matrix-green group-hover:text-neon-blue transition-colors" />
                                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{ref}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
