import { HardHat, Factory, RadioTower, Box, Wind, Video } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';

export function Industrie() {
    const features = [
        {
            name: 'PTI en Milieu Hostile',
            description: 'Déploiement de terminaux ATEX (Atmosphère Explosive). Algorithmes MobeeWeb gérant la perte de verticalité, l\'immobilité et l\'arrachement dans des silos chimiques ou raffineries.',
            icon: HardHat,
        },
        {
            name: 'Rondes Techniques Appliquées',
            description: 'Application RondiDroid permettant la lecture de Tags NFC ou Bluetooth BLE pour valider le passage de l\'agent avec signalement d\'anomalies en temps réel.',
            icon: RadioTower,
        },
        {
            name: 'Couplage Process Industriel (M2M)',
            description: 'Acquisition d\'alarmes via automates GTC/GTB, modules TOR, ou contacts analogiques sur les chaînes de production (ex: niveau haut fluide, arrêt chaîne).',
            icon: Factory,
        },
        {
            name: 'Logistique & Grande Distribution',
            description: 'Protection des caristes et préparateurs de commandes isolés couplée à la surveillance anti-intrusion des racks et entrepôts logistiques.',
            icon: Box,
        },
        {
            name: 'Secteurs Nucléaire & Aéronautique',
            description: 'Réponses aux environnements les plus critiques imposant un audit permanent de l\'infrastructure radio (WatchDog bi-directionnel).',
            icon: Wind,
        },
        {
            name: 'Synthèse Vidéo et Intrusion',
            description: 'Interface avec caméras, détection de mouvement et barrières infrarouges (ex: centrales type ESPA) pour une levée de doute par SMS/IP.',
            icon: Video,
        },
    ];

    const references = [
        "SNECMA", "CEA", "Procter & Gamble",
        "SKF", "Cogema", "ABB",
        "Danone", "Nestlé", "Schneider",
        "Saint Louis Sucre", "LFB Lafarge", "Pechiney"
    ];

    return (
        <div className="bg-deep-dark py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <FadeIn>
                        <h2 className="text-base font-semibold leading-7 text-neon-blue uppercase tracking-wide">Secteur Industrie & Logistique</h2>
                        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                            Protection Extrême des Hommes et des Process
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Des zones SEVESO/ATEX aux plateformes logistiques massives, SafeFull Systems sécurise l'intervention des techniciens de nuit comme la remontée préventive des machines.
                        </p>
                    </FadeIn>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <FadeIn key={feature.name} delay={index * 0.1} direction="up">
                                <div className="flex flex-col rounded-none border border-white/5 bg-dark-surface p-8 transition-all hover:border-matrix-green/30 hover:bg-white/5">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                        <feature.icon className="h-5 w-5 flex-none text-matrix-green" aria-hidden="true" />
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
                    <div className="border border-white/10 bg-deep-dark p-8">
                        <h3 className="text-xl font-bold text-center text-white mb-8">Références Industrielles de Premier Plan</h3>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                            {references.map((ref) => (
                                <div key={ref} className="text-center p-3 border border-white/5 bg-white/5 text-xs text-gray-300 font-medium whitespace-nowrap overflow-hidden text-ellipsis hover:text-white hover:border-neon-blue/50 transition-colors">
                                    {ref}
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 flex justify-center gap-4 flex-wrap">
                            <a
                                href="/contact"
                                className="inline-block rounded-none border border-neon-blue bg-neon-blue px-8 py-3 text-sm font-semibold text-deep-dark transition-all hover:bg-neon-blue/90"
                            >
                                Projet Industriel / ATEX
                            </a>
                            <a
                                href="/contact"
                                className="inline-block rounded-none border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all hover:border-white/50"
                            >
                                Étude Rondes Techniques
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
