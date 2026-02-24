import { HardHat, Flame, Wind, Factory, PackageOpen, Target, ShieldCheck, ArrowRight } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';

export function Industrie() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "B2B Industrial Safety Services & Lone Worker Protection",
        "provider": {
            "@type": "Organization",
            "name": "SafeFull Systems"
        },
        "description": "Protection des travailleurs isolés (PTI) en environnements industriels extrêmes (Nucléaire, ATEX, Logistique). Intégration logicielle MobeeWeb pour le M2M et la géolocalisation Indoor/Outdoor.",
        "areaServed": "Industrie Lourde, Chimie, Aéronautique, Supply Chain",
    };

    const industries = [
        { name: "Secteur Nucléaire", icon: ShieldCheck, desc: "Traçabilité des rondes et WatchDog d'infrastructure." },
        { name: "Secteur Chimique", icon: Flame, desc: "Sécurisation en environnements hautement classifiés ATEX." },
        { name: "Aéronautique", icon: Wind, desc: "Couverture de macro-plateformes de production." },
        { name: "Agro-alimentaire", icon: Target, desc: "Surveillance de chambre froide (Perte verticalité, immobilité)." },
        { name: "Logistique & Supply", icon: PackageOpen, desc: "Protection caristes isolés et supervision des quais." },
        { name: "Infrastructures (GTC)", icon: Factory, desc: "M2M, remonte d'arrêts de chaînes et de commandes analogiques." }
    ];

    return (
        <div className="bg-deep-dark min-h-screen pb-24">
            {/* Script JSON-LD injecté pour le Generative Engine Optimization */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Grid d'arrière plan type technologie sombre */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none h-[50vh]"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
                <div className="mx-auto max-w-3xl text-center">
                    <FadeIn direction="up">
                        <h2 className="text-sm font-bold tracking-widest text-safefull-orange uppercase">Industrie, Chimie & Supply Chain</h2>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            La Protection Ultime en <span className="text-transparent bg-clip-text bg-gradient-to-r from-safefull-orange to-safefull-slate">Milieux Hostiles</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium">
                            Nous déployons des solutions natives MobeeWeb (PTI) et des middlewares logistiques capables de géolocaliser et secourir avec précision tout ouvrier travaillant en isolation ou en environnement ATEX.
                        </p>
                    </FadeIn>
                </div>

                {/* Bento Grid layout */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">

                    <FadeIn delay={0.1} direction="up" className="md:col-span-2 md:row-span-2">
                        <div className="group relative h-full flex flex-col rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent p-8 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-safefull-orange/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-deep-dark border border-white/10 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:border-safefull-orange/50 self-start">
                                <HardHat className="h-8 w-8 text-safefull-orange" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Dispositifs PTI / DATI Extrêmes</h3>
                            <p className="text-gray-400 leading-relaxed text-base flex-grow">
                                Les environnements industriels et logistiques exigent une fiabilité mécanique. La plateforme logicielle MobeeWeb s'intègre avec des terminaux GSM certifiés ATEX, exploitant notre application MutualDroid. De la perte de verticalité dans un silo de céréales, au manque de mouvement prolongé en chambre froide, l'algorithme détecte l'anomalie, enclenche l'appel vocal mains libres d'urgence, et envoie le point GPS coordonné aux PC Sécurité en IP et SMS.
                            </p>
                            <div className="mt-8 border-l-2 border-safefull-orange pl-4">
                                <p className="text-sm text-safefull-orange font-bold tracking-wide uppercase">Certifié Zones SEVESO & Entrepôts Classés</p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up" className="md:col-span-2">
                        <div className="group relative h-full flex flex-col rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent p-8 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-safefull-slate/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-deep-dark border border-white/10 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:border-safefull-slate/50">
                                <Target className="h-6 w-6 text-safefull-slate" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Géolocalisation Indoor (BLE)</h3>
                            <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                                Le GPS décroche à l'intérieur de vous usines ? Nous déployons des cartographies d'incidents via balises Bluetooth Low Energy (Beacons) et tags NFC pour localiser le travailleur isolé à la pièce près (ex: "Bâtiment Chimie, Escalier B, Étage 1").
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up" className="md:col-span-2">
                        <div className="group relative h-full flex flex-col justify-center rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-safefull-orange/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]">
                            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-center border-b border-white/10 pb-4">Couverture Multisectorielle</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                {industries.map(ind => (
                                    <div key={ind.name} className="flex flex-col items-center text-center p-3 rounded-xl border border-transparent transition-colors hover:bg-safefull-orange/5 hover:border-safefull-orange/20">
                                        <ind.icon className="h-6 w-6 text-safefull-orange mb-2" />
                                        <span className="text-gray-300 font-bold text-xs">{ind.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                </div>

                <FadeIn delay={0.5} direction="up" className="mt-32">
                    <div className="relative overflow-hidden rounded-3xl border border-safefull-orange/20 bg-glass-gradient p-12 text-center shadow-2xl backdrop-blur-2xl group">
                        <div className="absolute inset-0 bg-safefull-orange/5 transform transition-transform duration-1000 group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Protégez les équipes qui construisent notre industrie</h2>
                            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                                Des usines de grande envergure font confiance à notre résilience pour couvrir leurs hommes et piloter leurs informations d'hypervision process.
                            </p>
                            <Link
                                to="/contact"
                                className="group/btn inline-flex items-center justify-center rounded-lg bg-safefull-orange px-10 py-5 text-lg font-extrabold tracking-wide text-deep-dark shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Obtenir une évaluation de sécurité pour votre site industriel
                                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
