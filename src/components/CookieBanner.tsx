import { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Technical local storage to check if user already consented
        const hasConsented = localStorage.getItem('safefull_cookie_consent');
        if (!hasConsented) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        // Technically remembering the choice
        localStorage.setItem('safefull_cookie_consent', 'granted');
        setIsVisible(false);

        // Update Google Consent Mode dynamically
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
            });
        }
    };

    const declineCookies = () => {
        // Technically remembering the choice
        localStorage.setItem('safefull_cookie_consent', 'denied');
        setIsVisible(false);
        // Default is already denied in index.html, no need to update GTAG
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-deep-dark/95 p-4 shadow-2xl backdrop-blur-md sm:p-6 pb-safe">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-start gap-3 md:items-center">
                    <ShieldAlert className="mt-1 h-6 w-6 flex-shrink-0 text-neon-blue md:mt-0" />
                    <p className="text-sm text-gray-300">
                        Afin de vous offrir la meilleure expérience et d'analyser le trafic de notre site, nous utilisons des cookies.
                        Vous pouvez personnaliser vos choix dans notre <a href="/gestion-cookies" className="text-neon-blue hover:underline">politique de gestion des cookies</a>.
                    </p>
                </div>
                <div className="flex w-full flex-shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
                    <button
                        onClick={declineCookies}
                        className="rounded-none border border-white/20 bg-transparent px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                    >
                        Continuer sans accepter
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="flex items-center justify-center gap-2 rounded-none border border-matrix-green bg-matrix-green px-6 py-2 text-sm font-semibold text-deep-dark transition-colors hover:bg-matrix-green/90"
                    >
                        <CheckCircle2 className="h-4 w-4" />
                        Tout Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}
