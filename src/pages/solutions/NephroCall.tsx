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
                                <div className={`group relative h-full flex flex-col rounded-none border border-gray-800 bg-dark-surface p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${feature.borderColor}`}>
                                    <div className={`mb-6 p-4 inline-flex items-center justify-center rounded-none bg-deep-dark border border-gray-800 transition-colors ${feature.borderColor}`}>
                                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                                        {feature.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <FadeIn delay={0.4} direction="up" className="mt-32">
                    <div className="relative border border-matrix-green/30 bg-gradient-to-br from-matrix-green/10 to-transparent p-12 text-center overflow-hidden group">
                        <div className="absolute inset-0 bg-matrix-green/5 transform transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-6">Réactivité et fiabilité sans compromis pour le médical</h2>
                            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                                NephroCall est fourni sous forme de package clef en main, télé-paramétrable 24/7 par nos ingénieurs SafeFull Systems : Serveur applicatif, Boîtiers IoT IP, et passerelle GSM.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-3 border border-matrix-green bg-matrix-green px-10 py-5 text-lg font-bold text-deep-dark transition-all hover:bg-matrix-green/80 hover:gap-5"
                            >
                                Demandez un audit de votre centre de dialyse
                                <ArrowRight className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
