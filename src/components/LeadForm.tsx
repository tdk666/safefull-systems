import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { FadeIn } from './FadeIn';

const industryEnum = [
    "Santé & Médical",
    "Industrie & Logistique",
    "Infrastructures Publiques",
] as const;

const leadSchema = z.object({
    company_name: z.string().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères"),
    contact_name: z.string().min(2, "Le nom du contact est requis"),
    email: z.string().email("Veuillez entrer une adresse email valide"),
    industry: z.enum([
        "Santé & Médical",
        "Industrie & Logistique",
        "Infrastructures Publiques"
    ], {
        errorMap: () => ({ message: "Veuillez sélectionner un secteur valide" }),
    }),
    message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
    rgpd_consent: z.literal(true, {
        errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité pour envoyer votre demande" })
    })
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadForm() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<LeadFormValues>({
        resolver: zodResolver(leadSchema),
    });

    const onSubmit = async (data: LeadFormValues) => {
        setSubmitError(null);
        try {
            const { error } = await supabase.from('leads').insert([
                {
                    company_name: data.company_name,
                    contact_name: data.contact_name,
                    email: data.email,
                    industry: data.industry,
                    message: data.message,
                },
            ]);

            if (error) throw error;

            setIsSuccess(true);
            reset();
        } catch (err: any) {
            console.error('Submission error:', err);
            setSubmitError("Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.");
        }
    };

    if (isSuccess) {
        return (
            <FadeIn>
                <div className="rounded-none border border-matrix-green/30 bg-matrix-green/5 p-8 text-center backdrop-blur-sm">
                    <ShieldCheck className="mx-auto h-12 w-12 text-matrix-green mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Demande reçue avec succès</h3>
                    <p className="text-gray-300">
                        Notre équipe d'experts prendra contact avec vous dans les plus brefs délais pour
                        organiser une démonstration ou un audit de vos besoins de sécurité.
                    </p>
                </div>
            </FadeIn>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {submitError && (
                <div className="rounded-none border border-red-500/30 bg-red-500/5 p-4 text-red-500 text-sm">
                    {submitError}
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="company_name" className="block text-sm font-medium text-gray-300">
                        Entreprise
                    </label>
                    <input
                        id="company_name"
                        type="text"
                        {...register('company_name')}
                        className="block w-full rounded-none border border-gray-800 bg-deep-dark px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
                        placeholder="Nom de votre structure"
                    />
                    {errors.company_name && (
                        <p className="text-xs text-red-400">{errors.company_name.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact_name" className="block text-sm font-medium text-gray-300">
                        Nom du Contact
                    </label>
                    <input
                        id="contact_name"
                        type="text"
                        {...register('contact_name')}
                        className="block w-full rounded-none border border-gray-800 bg-deep-dark px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
                        placeholder="Votre nom complet"
                    />
                    {errors.contact_name && (
                        <p className="text-xs text-red-400">{errors.contact_name.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email Professionnel
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="block w-full rounded-none border border-gray-800 bg-deep-dark px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
                        placeholder="vous@entreprise.com"
                    />
                    {errors.email && (
                        <p className="text-xs text-red-400">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-300">
                        Secteur d'Activité
                    </label>
                    <select
                        id="industry"
                        {...register('industry')}
                        className="block w-full rounded-none border border-gray-800 bg-deep-dark px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
                    >
                        <option value="">Sélectionnez un secteur...</option>
                        {industryEnum.map((industry) => (
                            <option key={industry} value={industry}>
                                {industry}
                            </option>
                        ))}
                    </select>
                    {errors.industry && (
                        <p className="text-xs text-red-400">{errors.industry.message}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Votre Besoin (Audit / Démonstration)
                </label>
                <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="block w-full rounded-none border border-gray-800 bg-deep-dark px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
                    placeholder="Décrivez brièvement le contexte de votre demande (PTI, alarmes hospitalières, etc.)."
                />
                {errors.message && (
                    <p className="text-xs text-red-400">{errors.message.message}</p>
                )}
            </div>

            <div className="space-y-4">
                <div className="flex items-start rounded-none border border-white/5 bg-deep-dark p-4">
                    <div className="flex h-5 items-center">
                        <input
                            id="rgpd_consent"
                            type="checkbox"
                            {...register('rgpd_consent')}
                            className="h-4 w-4 rounded-none border-gray-800 bg-deep-dark text-neon-blue focus:ring-neon-blue focus:ring-offset-gray-900"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="rgpd_consent" className="font-medium text-gray-300">
                            J'ai lu et j'accepte la <a href="/politique-confidentialite" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">Politique de Confidentialité</a>.
                        </label>
                        {errors.rgpd_consent && (
                            <p className="mt-1 text-xs text-red-400">{errors.rgpd_consent.message}</p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex w-full items-center justify-center border border-neon-blue bg-neon-blue px-8 py-4 text-base font-bold text-deep-dark transition-all hover:bg-neon-blue/90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                        'Demander un rappel expert'
                    )}
                </button>
                <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-4">
                    <ShieldCheck className="h-5 w-5 flex-shrink-0 text-matrix-green" />
                    <p className="text-xs leading-relaxed text-gray-500">
                        En soumettant ce formulaire, j'accepte que les informations saisies soient traitées dans le strict cadre de ma demande. Pour connaître et exercer vos droits, notamment d'accès, de rectification ou de retrait de votre consentement, veuillez consulter notre <a href="/politique-confidentialite" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">Politique de Confidentialité</a>. Vos données sont chiffrées de bout en bout et ne sont jamais partagées à des tiers.
                    </p>
                </div>
            </div>
        </form>
    );
}
