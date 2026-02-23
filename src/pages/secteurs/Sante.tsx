import { Activity, BellRing, PhoneCall, HeartPulse, Hospital, ShieldAlert } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';

export function Sante() {
    const features = [
        {
            name: 'Gestion des Appels Malades',
            description: 'Extraction protocolaire de toute information (appel normal, appel d\'urgence, acquittement) et diffusion vers les terminaux DECT, WiFi ou Pagers.',
            icon: BellRing,
        },
        {
            name: 'Intégration NephroCall',
            description: 'Couverture experte pour les centres de dialyse : alarmes centrales Fresenius, pompes de relevage, et monitoring du traitement d\'eau.',
            icon: Activity,
        },
        {
            name: 'Protection du Personnel Soignant',
            description: 'Déclenchement d\'alertes discrètes ou appels volontaires en cas d\'agression (Urgences, Unités Psychiatriques) avec localisation de la chambre ou de la zone.',
            icon: ShieldAlert,
        },
        {
            name: 'Centrales Incendie & GTC Hospitalière',
            description: 'Acquisition des alarmes techniques vitale (défaut oxygène, coupure courant, inverseur Normal/Secours) avec escalade scénarisée.',
            icon: Hospital,
        },
        {
            name: 'Réseaux WiFi Spécialisés',
            description: 'Exploitation native des terminaux WiFi cliniques (ex: Spectralink Netlink e340, i640) avec gestion de l\'annuaire hospitalier.',
            icon: PhoneCall,
        },
        {
            name: 'Traçabilité Médico-Légale',
            description: 'Historisation de tous les événements gérés. Suivi précis des temps d\'acquittement d\'un appel malade ou d\'une alarme biomédicale.',
            icon: HeartPulse,
        },
    ];

    const references = [
        "Hôpital de Valenciennes",
        "Groupe Cliniques Hospitalor",
        "AFM (Association France Myopathe)",
        "Hôpitaux Psychiatriques",
        "Maisons de retraite",
        "Centres de Dialyse"
    ];

    return (
        <div className="bg-deep-dark py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <FadeIn>
                        <h2 className="text-base font-semibold leading-7 text-neon-blue uppercase tracking-wide">Secteur Santé & Hospitalier</h2>
                        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                            Sécurité Communicante pour Établissements de Soins
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Des CHU aux cliniques privées, notre plateforme traite simultanément les appels malades,
                            la supervision biomédicale critique et la protection du personnel soignant contre les agressions.
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
                        <h3 className="text-xl font-bold text-center text-white mb-8">Ils nous confient leur sécurité</h3>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                            {references.map((ref) => (
                                <div key={ref} className="text-center p-4 border border-white/5 bg-white/5 text-sm text-gray-300 font-medium">
                                    {ref}
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <a
                                href="/contact"
                                className="inline-block rounded-none border border-neon-blue bg-neon-blue px-8 py-3 text-sm font-semibold text-deep-dark transition-all hover:bg-neon-blue/90"
                            >
                                Auditer votre CH / Clinique
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
