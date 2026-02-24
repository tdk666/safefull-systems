import { Activity, Zap, Network, ShieldCheck, ServerCrash, Clock, ArrowRight } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';

export function NephroCall() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "NephroCall by SafeFull Systems",
        "category": "Supervision Centre Dialyse",
        "description": "Package technologique logiciel de supervision des alarmes hétérogènes pour les Centres de Dialyse. Intégration en temps réel de la Centrale Fresenius, des défauts électriques, connectivité TCP/IP et architecture ultra-sécurisée Watch Dog.",
        "audience": {
            "@type": "MedicalAudience",
            "audienceType": "Équipes Bio Médicales"
        }
    };

    const features = [
        {
            title: "Acquisition Centrale Fresenius",
            description: "Collecte des alarmes natives et fluides issues de la centrale de traitement d'eau Fresenius. Gestion des pompes de relevage, de l'osmolalité, et détection fiable des niveaux hauts des fosses.",
            icon: Activity,
            color: "text-neon-blue",
            borderColor: "group-hover:border-neon-blue/50"
        },
        {
            title: "Supervision Électrique Critique",
            description: "Monitoring permanent de l'infrastructure vitale : Défaut Inverseur Normal/Secours, disjoncteurs centraux ascenseur/chaufferie, et niveaux bas de fuel du Groupe Électrogène.",
            icon: Zap,
            color: "text-matrix-green",
            borderColor: "group-hover:border-matrix-green/50"
        },
        {
            title: "Infrastructure TCP/IP Intégrée",
            description: "Boîtiers d'acquisition IP sécurisés directement connectés sur l'architecture réseau de la clinique. Permet un maillage robuste et des capacités de déploiement multi-sites simultanés.",
            icon: Network,
            color: "text-neon-blue",
            borderColor: "group-hover:border-neon-blue/50"
        },
        {
            title: "Sécurité Positive 'Watch Dog'",
            description: "Auto-test permanent bi-directionnel entre le serveur NephroCall, les équipements d'extraction de datas et les passerelles de diffusion. Aucune rupture silencieuse n'échappe à la supervision.",
            icon: ShieldCheck,
            color: "text-matrix-green",
            borderColor: "group-hover:border-matrix-green/50"
        },
        {
            title: "Diffusion d'Alarmes Multicanal",
            description: "Scenarii d'escalade paramétrables vers tout type de médias : SMS sur flotte GSM du pôle biomédical, réseau DECT hospitalier, Pagers ou E-mails de maintenance préventive.",
            icon: ServerCrash,
            color: "text-neon-blue",
            borderColor: "group-hover:border-neon-blue/50"
        },
        {
            title: "Historisation Médicale Complète",
            description: "Traçage strict de chaque événement (apparition, prise en compte, acquittement). Un requêteur SQL synthétise l'historique d'activité pour les rapports réglementaires biomédicaux.",
            icon: Clock,
            color: "text-matrix-green",
            borderColor: "group-hover:border-matrix-green/50"
        }
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
                        <h2 className="text-sm font-bold tracking-widest text-matrix-green uppercase">Supervision de Centres de Dialyse</h2>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            Architecture <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-neon-blue">NephroCall</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium">
                            Une agilité totale pour l'équipe Bio-Médicale. Collectez vos alarmes Fresenius, monitorez vos éléments électriques critiques, et diffusez vos scénarios de crises instantanément via Ethernet & GSM.
                        </p>
                    </FadeIn>
                </div>

                <div className="mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FadeIn key={feature.title} delay={0.1 + index * 0.1} direction="up" className="h-full">
                                <div className={`group relative h-full flex flex-col rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 shadow-glass backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-neon ${feature.borderColor}`}>
                                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-deep-dark shadow-inner border border-white/10 transition-transform duration-300 group-hover:scale-110 ${feature.borderColor}`}>
                                        <feature.icon className={`h-6 w-6 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                                        {feature.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <FadeIn delay={0.4} direction="up" className="mt-32">
                    <div className="relative overflow-hidden rounded-2xl border border-matrix-green/30 bg-glass-gradient p-12 text-center shadow-glass backdrop-blur-2xl group">
                        <div className="absolute inset-0 bg-matrix-green/5 transform transition-transform duration-1000 group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Supervisez votre architecture vitale dès aujourd'hui</h2>
                            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                                NephroCall est fourni sous forme de package clef en main, télé-paramétrable 24/7 par nos ingénieurs. Obtenez un audit métier pour votre centre.
                            </p>

                            {/* LE SEUL ET UNIQUE CALL TO ACTION */}
                            <div className="flex justify-center mb-12">
                                <Link
                                    to="/contact"
                                    className="group/btn relative inline-flex items-center justify-center rounded-sm bg-matrix-green px-10 py-5 text-lg font-extrabold tracking-wide text-deep-dark shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    Organiser mon Audit Métier
                                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                </Link>
                            </div>

                            {/* Ressources secondaires - Loi de Fitts : petites, discrètes, en dessous */}
                            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                                <span className="uppercase tracking-widest text-xs font-bold text-gray-600">Documentation Clinique :</span>
                                <a href="/downloads/nephrocall-presentation.pptx" className="hover:text-matrix-green transition-colors flex items-center gap-1">Présentation PPTX <ArrowRight className="h-3 w-3" /></a>
                                <a href="/downloads/Vignette1_NephroCall.pptx" className="hover:text-matrix-green transition-colors flex items-center gap-1">Vignette 1 <ArrowRight className="h-3 w-3" /></a>
                                <a href="/downloads/Vignette2_NephroCall.pptx" className="hover:text-matrix-green transition-colors flex items-center gap-1">Vignette 2 <ArrowRight className="h-3 w-3" /></a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
