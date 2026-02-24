import { LeadForm } from '../components/LeadForm';
import { FadeIn } from '../components/FadeIn';
import { ShieldCheck, Clock, PhoneCall, Lock } from 'lucide-react';

export function Contact() {
    return (
        <div className="relative min-h-screen bg-deep-dark py-24 sm:py-32 border-b border-white/5">
            {/* Grille de fond subtile */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Ambient glows */}
            <div className="absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-neon-blue/10 blur-[120px]"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

                    {/* Colonne de Réassurance (Gauche) */}
                    <FadeIn direction="up" delay={0.1} className="lg:col-span-5 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-matrix-green/30 bg-matrix-green/5 px-3 py-1 text-xs font-medium text-matrix-green mb-6 w-fit">
                            <ShieldCheck className="h-4 w-4" />
                            Connexion Chiffrée
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                            Initiez votre <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-matrix-green">
                                Audit Sécurité
                            </span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            Nos ingénieurs analysent vos infrastructures (hôpitaux, sites industriels) pour déployer une solution PTI ou de supervision d'alarmes sur-mesure.
                        </p>

                        {/* Trust Signals (SLA) */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                    <Clock className="h-6 w-6 text-neon-blue" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold tracking-wide">Réponse sous 2h</h3>
                                    <p className="text-sm text-gray-500">Un expert technique vous rappelle pour qualifier votre besoin.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                    <PhoneCall className="h-6 w-6 text-matrix-green" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold tracking-wide">Ligne Directe B2B</h3>
                                    <p className="text-sm text-gray-500 font-mono mt-1">06 62 14 90 24</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                    <Lock className="h-6 w-6 text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold tracking-wide">Confidentialité Stricte</h3>
                                    <p className="text-sm text-gray-500">Vos données ne sont jamais partagées.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Colonne Formulaire (Droite) */}
                    <FadeIn direction="up" delay={0.3} className="lg:col-span-7">
                        <div className="relative rounded-2xl border border-white/10 bg-[#0f0f11]/80 p-8 sm:p-10 shadow-glass backdrop-blur-2xl">
                            {/* Inner glow border top */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent opacity-50"></div>
                            <LeadForm />
                        </div>
                    </FadeIn>

                </div>
            </div>
        </div>
    );
}
