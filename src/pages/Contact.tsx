import { LeadForm } from '../components/LeadForm';
import { FadeIn } from '../components/FadeIn';

export function Contact() {
    return (
        <div className="relative overflow-hidden bg-deep-dark py-24 sm:py-32 border-b border-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <FadeIn direction="up" delay={0.1}>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                            Demander un audit ou une démonstration de nos solutions <span className="text-neon-blue">PTI / Supervision</span>
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                            Nos experts vous accompagnent dans la sécurisation de vos environnements critiques.
                            Contactez-nous pour une étude personnalisée de vos infrastructures B2B.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn direction="up" delay={0.3} className="mx-auto mt-16 max-w-2xl">
                    <div className="bg-dark-surface/50 p-8 shadow-2xl shadow-neon-blue/5 border border-white/5 backdrop-blur-md">
                        <LeadForm />
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
