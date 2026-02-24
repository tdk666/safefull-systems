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
                    <div className="relative overflow-hidden rounded-2xl border border-neon-blue/30 bg-glass-gradient p-12 text-center shadow-neon backdrop-blur-2xl group">
                        <div className="absolute inset-0 bg-neon-blue/5 transform transition-transform duration-1000 group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Sécurisez votre capital humain dès aujourd'hui</h2>
                            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                                Ne laissez pas vos travailleurs isolés sans supervision critique. Obtenez une démonstration sur-mesure de MobeeWeb.
                            </p>

                            {/* LE SEUL ET UNIQUE CALL TO ACTION */}
                            <div className="flex justify-center mb-12">
                                <Link
                                    to="/contact"
                                    className="group/btn relative inline-flex items-center justify-center rounded-sm bg-neon-blue px-10 py-5 text-lg font-extrabold tracking-wide text-deep-dark shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    Planifier ma Démonstration
                                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                </Link>
                            </div>

                            {/* Ressources secondaires - Loi de Fitts : petites, discrètes, en dessous */}
                            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                                <span className="uppercase tracking-widest text-xs font-bold text-gray-600">Ressources Techniques :</span>
                                <a href="/downloads/mobeeweb-synthese.pdf" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors flex items-center gap-1">Fiche PDF <ArrowRight className="h-3 w-3" /></a>
                                <a href="/downloads/mobeeweb-isafe.ppt" className="hover:text-neon-blue transition-colors flex items-center gap-1">Slides PPT <ArrowRight className="h-3 w-3" /></a>
                                <a href="/downloads/Vignette1_MobeeWeb.pptx" className="hover:text-neon-blue transition-colors flex items-center gap-1">Vignette 1 <ArrowRight className="h-3 w-3" /></a>
                                <a href="/downloads/Vignette2_MobeeWeb.pptx" className="hover:text-neon-blue transition-colors flex items-center gap-1">Vignette 2 <ArrowRight className="h-3 w-3" /></a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
