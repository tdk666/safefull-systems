import { SEOHead } from '../components/SEOHead';
import { FadeIn } from '../components/FadeIn';

export function PrivacyPolicy() {
    return (
        <div className="bg-deep-dark min-h-screen pb-24">
            <SEOHead
                title="Politique de Confidentialité | Safefull Systems"
                description="Notre politique de traitement des deonnées, conformité RGPD, et modalités d'exercice de vos droits."
                canonicalUrl="https://safefull-systemes.netlify.app/politique-confidentialite"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none h-[50vh]"></div>

            <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-24 sm:pt-32">
                <FadeIn direction="up">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-12">
                        Politique de <span className="text-matrix-green">Confidentialité</span>
                    </h1>
                </FadeIn>

                <div className="space-y-12">
                    <FadeIn delay={0.1} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">1. Données Collectées</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Nous collectons les données que vous nous soumettez explicitement via nos formulaires de contact :
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-2">
                                    <li>Nom de votre entreprise</li>
                                    <li>Nom du contact principal</li>
                                    <li>Adresse email professionnelle</li>
                                    <li>Secteur d'activité</li>
                                    <li>Contenu de votre demande</li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">2. Finalité du Traitement</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Celles-ci sont traitées uniquement afin de répondre à votre demande académique, d'organiser une démonstration de nos solutions B2B ou de dimensionner un audit de sécurité (PTI, alertes).
                                    Aucune donnée n'est revendue ou transférée à des entités tierces à des fins commerciales.
                                </p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">3. Sécurité</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Vos données sont transmises via chiffrement SSL/TLS et stockées dans une infrastructure cloud sécurisée (Supabase), conforme aux exigences d'anonymat et de restriction de base de données asynchrone imposées par le RGPD.
                                </p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">4. Droit d'Accès et de Rectification</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Conformément à la Loi Informatique et Libertés et au RGPD européen, vous disposez d'un droit de retrait, d'accès, d'opposition et de rectification de vos données.
                                </p>
                                <p>
                                    Délégué à la Protection des Données (DPO) :<br />
                                    <strong className="text-neon-blue">Marc Dequecker</strong><br />
                                    Contact : <a href="mailto:marc.dequecker@safefull.com" className="hover:text-white underline">marc.dequecker@safefull.com</a>
                                </p>
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
