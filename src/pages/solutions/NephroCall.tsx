import { Activity, BellRing, Settings2, Link, ServerCrash, Clock } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';

export function NephroCall() {
    const features = [
        {
            name: 'Supervision Continue 24/7',
            description: 'Collecte des alarmes hétérogènes et monitoring des éléments actifs pour offrir de la réactivité et de l\'agilité aux équipes bio-médicales des centres de dialyse.',
            icon: Clock,
        },
        {
            name: 'Centrales Fresenius & Traitement d\'Eau',
            description: 'Interface native avec les centrales de traitement d\'eau (ex: Fresenius). Remontée des défauts pompes de relevage, niveaux hauts fosses et dysfonctionnements critiques.',
            icon: Activity,
        },
        {
            name: 'Infrastructure Électrique & Fluides',
            description: 'Monitoring des disjoncteurs ascenseur, chaufferie, CTA. Alertes sur inverseur Normal/Secours, défauts secteurs et niveaux bas de fuel sur groupes électrogènes.',
            icon: ServerCrash,
        },
        {
            name: 'Scénarios de Diffusion Flexibles',
            description: 'Paramétrage des scénarios de diffusion vers tout média (SMS GSM, e-mail, réseau DECT interne). Gestion des plages horaires (jour/nuit, exceptions week-end).',
            icon: BellRing,
        },
        {
            name: 'Extensibilité & Couplage Multi-Systèmes',
            description: 'Possibilité de couplage aux dispositifs d\'appels malades, centrales d\'intrusion et détection incendie par zone. Gestion jusqu\'à 32 alarmes primaires en mode digital/analogique.',
            icon: Link,
        },
        {
            name: 'Sécurité Positive et Traçabilité',
            description: 'Architecture avec auto-test paramétrable (WatchDog) de l\'infrastructure d\'acquisition et de diffusion. Historique complet des alarmes accessible via requêteur SQL natif.',
            icon: Settings2,
        },
    ];

    return (
        <div className="bg-deep-dark py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <FadeIn>
                        <h2 className="text-base font-semibold leading-7 text-neon-blue uppercase tracking-wide">Package de Supervision Biomédicale</h2>
                        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                            NephroCall : La réponse aux environnements critiques de dialyse
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            NephroCall centralise le traitement des équipements hétérogènes. Notre package informe
                            en temps réel et en mobilité d'une anomalie technique survenant dans un ou plusieurs
                            centres de dialyse interconnectés.
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
                    <div className="relative overflow-hidden bg-neon-blue/5 border border-neon-blue/20 px-6 py-10 shadow-2xl sm:rounded-none sm:px-12 xl:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h3 className="text-2xl font-bold tracking-tight text-white">Déploiement "Plug & Play"</h3>
                            <p className="mt-4 text-lg text-gray-300">
                                Fourniture complète du package télé-paramétrable : serveur Nephro Call, boîtiers IP d'acquisition de contacts et passerelle GSM de diffusion.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <a
                                href="/contact"
                                className="rounded-none border border-neon-blue bg-neon-blue px-8 py-3 text-sm font-semibold text-deep-dark transition-all hover:bg-neon-blue/90"
                            >
                                Démo NephroCall
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
