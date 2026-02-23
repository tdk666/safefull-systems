import { ShieldCheck, MapPin, Radio, Smartphone, AlertTriangle, Route } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';

export function MobeeWeb() {
    const features = [
        {
            name: 'Géolocalisation Hybride',
            description: 'Précision maximale garantie grâce au couplage GPS (Outdoor) et balises Bluetooth Low Energy (Indoor, Android >= 4.3). Localisation 2D avec libellé précis (ex: tunnel N°2 Km 4,5).',
            icon: MapPin,
        },
        {
            name: 'Détection Algorithmique MutualDroid',
            description: 'Analyse en temps réel des postures : perte de verticalité, immobilité prolongée, agression, et arrachement. Angles et sensibilités entièrement paramétrables.',
            icon: Smartphone,
        },
        {
            name: 'Bi-modalité de Transmission',
            description: 'Émission simultanée des alertes via SMS et data GPRS/IP pour garantir la réception en quelques secondes, même en zone de faible couverture. Répétition programmable.',
            icon: Radio,
        },
        {
            name: 'Protection Mutuelle des Équipes',
            description: 'Réception et localisation des alertes émises par les autres terminaux de l\'équipe (Mobile to Mobile). Concept de protection mutuelle vitale.',
            icon: ShieldCheck,
        },
        {
            name: 'Consignes d\'Intervention Dynamiques',
            description: 'Affichage des directives selon la zone d\'incident (ex: attention zone classée ATEX, code d\'accès porte 1234, extincteur à proximité).',
            icon: AlertTriangle,
        },
        {
            name: 'Génération de Fiches Itinéraires',
            description: 'Création automatique des chemins d\'accès depuis le PC Sécurité vers le lieu exact de l\'alerte PTI. Intégration de plans clients en surcouche.',
            icon: Route,
        },
    ];

    return (
        <div className="bg-deep-dark py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <FadeIn>
                        <h2 className="text-base font-semibold leading-7 text-neon-blue uppercase tracking-wide">Solutions PTI / DATI</h2>
                        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                            Protection du Travailleur Isolé et Géolocalisation Intelligente
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            MobeeWeb (V2 B.L.E) est notre plateforme web souveraine de réception et traitement
                            des alertes. Couplée à l'application native MutualDroid, elle assure la sécurité
                            absolue de vos intervenants isolés via des algorithmes de détection avancés.
                        </p>
                    </FadeIn>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <FadeIn key={feature.name} delay={index * 0.1} direction="up">
                                <div className="flex flex-col rounded-none border border-white/5 bg-dark-surface p-8 transition-all hover:border-neon-blue/30 hover:bg-white/5">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                        <feature.icon className="h-5 w-5 flex-none text-neon-blue" aria-hidden="true" />
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            </FadeIn>
                        ))}
                    </dl>
                </div>

                <FadeIn delay={0.4} className="mt-24">
                    <div className="relative overflow-hidden bg-matrix-green/5 border border-matrix-green/20 px-6 py-10 shadow-2xl sm:rounded-none sm:px-12 xl:p-14 text-center">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Performance et Fiabilité M2M</h3>
                        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
                            Autotest journalier validant bout-en-bout l'infrastructure : du serveur MobeeWeb jusqu'à la passerelle GSM et le réseau IP. L'application MutualDroid est protégée par mots de passe contre l'arrêt non autorisé.
                        </p>
                        <div className="mt-8 flex justify-center gap-x-4">
                            <a
                                href="/contact"
                                className="rounded-none border border-matrix-green bg-matrix-green px-8 py-3 text-sm font-semibold text-deep-dark transition-all hover:bg-matrix-green/90"
                            >
                                Planifier un Audit PTI
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
