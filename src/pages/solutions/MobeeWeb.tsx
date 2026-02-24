import { Smartphone, MapPin, Radio, ShieldAlert, Route, Activity, ArrowRight } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';

export function MobeeWeb() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "MobeeWeb V2 B.L.E & MutualDroid",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Android >= 4.3, Web",
        "description": "Plate-forme Web de réception et de traitement d'alertes pour la Protection des Travailleurs Isolés (PTI/DATI). Intégration certifiée des balises BLE et Tags NFC pour une localisation Indoor d'une précision absolue.",
    };

    const features = [
        {
            title: "MutualDroid & Détection Algorithmique",
            description: "Application native sous Android garantissant l'alerte sur perte de verticalité, immobilité prolongée, agression et appel manuel (Bouton SOS). Timers, angles et sensibilités entièrement paramétrables.",
            icon: Smartphone,
            color: "text-neon-blue",
            borderColor: "group-hover:border-neon-blue/50"
        },
        {
            title: "Localisation Indoor Absolue (BLE & NFC)",
            description: "Précision infaillible à l'intérieur des bâtiments via balises Bluetooth Low Energy (Beacons BLE) et Tags NFC. Affichage du lieu exact (ex: Bâtiment Stock Chimie, 1er étage, escalier B).",
            icon: MapPin,
            color: "text-matrix-green",
            borderColor: "group-hover:border-matrix-green/50"
        },
        {
            title: "Bi-modalité de Transmissions Critiques",
            description: "Émission redondante des alertes PTI via SMS et data GPRS/IP simultanément. Répétition programmable jusqu'à la prise en compte intégrale par nos serveurs, palliant les zones d'ombre.",
            icon: Radio,
            color: "text-neon-blue",
            borderColor: "group-hover:border-neon-blue/50"
        },
        {
            title: "Consignes de Sécurité Contextuelles",
            description: "Affichage immédiat des consignes associées spécifiquement à la zone de l'incident (ex: Attention Zone Dangereuse ATEX, Port du masque, Accès restreint).",
            icon: ShieldAlert,
            color: "text-matrix-green",
            borderColor: "group-hover:border-matrix-green/50"
        },
        {
            title: "Génération de Fiche Itinéraire",
            description: "Depuis le PC Sécurité (Interface MobeeWeb), génération et impression immédiate d'une fiche d'itinéraire guidant de manière fluide les secours terrestres vers la localisation exacte.",
            icon: Route,
            color: "text-neon-blue",
            borderColor: "group-hover:border-neon-blue/50"
        },
        {
            title: "Autotest & Sécurité Positive",
            description: "Vérification automatisée et programmée de la connectivité de bout en bout : du terminal MutualDroid à la passerelle GSM, jusqu'au réseau IP centralisé.",
            icon: Activity,
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
                        <h2 className="text-sm font-bold tracking-widest text-matrix-green uppercase">Protection des Travailleurs Isolés (PTI)</h2>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            MobeeWeb <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-matrix-green">V2 B.L.E</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium">
                            Plate-forme web d'hypercentralisation et traitement d'alertes PTI couplée à l'application native MutualDroid. Des algorithmes de détection intraitables, une localisation Indoor (BLE/NFC) sur-mesure.
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
                    <div className="relative border border-neon-blue/30 bg-gradient-to-br from-neon-blue/10 to-transparent p-12 text-center overflow-hidden group">
                        <div className="absolute inset-0 bg-neon-blue/5 transform transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-6">Protégez votre capital humain avec la précision absolue</h2>
                            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                                Des usines chimiques aux plateformes logistiques, MobeeWeb adapte ses algorithmes de détection DATI et sa cartographie GPS/BLE à vos infrastructures.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 border border-neon-blue bg-neon-blue px-8 py-4 text-base font-bold text-deep-dark transition-all hover:bg-neon-blue/80 hover:gap-5"
                                >
                                    Sécurisez vos équipes
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                                <a
                                    href="/downloads/mobeeweb-synthese.pdf"
                                    download
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/5 hover:border-white/40"
                                >
                                    Fiche Synthèse (PDF)
                                </a>
                                <a
                                    href="/downloads/mobeeweb-isafe.ppt"
                                    download
                                    className="inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/5 hover:border-white/40"
                                >
                                    Présentation Complète (PPT)
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
