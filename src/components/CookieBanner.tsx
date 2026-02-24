import { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('safefull_cookie_consent');
        if (!hasConsented) {
            // Petit délai pour ne pas agresser l'utilisateur dès la milliseconde d'arrivée
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('safefull_cookie_consent', 'granted');
        setIsVisible(false);
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
        localStorage.setItem('safefull_cookie_consent', 'denied');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 right-6 left-6 z-[100] md:left-auto md:w-full md:max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0c]/80 p-6 shadow-glass backdrop-blur-2xl"
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-3">
                            <ShieldAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-safefull-orange" />
                            <p className="text-sm leading-relaxed text-gray-300">
                                Nous utilisons des cookies pour sécuriser votre navigation et analyser notre trafic B2B.
                                <a href="/gestion-cookies" className="ml-1 text-safefull-orange hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-safefull-orange rounded-sm">En savoir plus</a>.
                            </p>
                        </div>
                        <div className="flex w-full flex-col gap-2 sm:flex-row">
                            <button
                                onClick={declineCookies}
                                className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-gray-400 transition-all hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Refuser
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-safefull-slate bg-safefull-slate py-2.5 text-xs font-bold text-deep-dark transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                Accepter
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
