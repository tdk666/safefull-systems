import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-dark-surface pt-20 pb-10 text-gray-400 relative overflow-hidden">
            {/* Lueur subtile en fond */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12 mb-16">
                    {/* Colonne Marque (plus large) */}
                    <div className="space-y-6 md:col-span-4">
                        <Link to="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-sm">
                            {/* Utilise le même logo que la Navbar pour une cohérence absolue */}
                            <img src="/logoSAFEFULL.png" alt="Safefull Systems" className="h-10 w-auto object-contain opacity-90 transition-opacity hover:opacity-100" />
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500 pr-4">
                            Solutions B2B d'hypercentralisation sécurisée pour la Protection des Travailleurs Isolés (PTI) et la supervision d'environnements hospitaliers et industriels critiques.
                        </p>
                    </div>

                    {/* Colonnes Liens */}
                    <div className="md:col-span-2">
                        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Technologie</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/solutions/mobeeweb" className="group flex items-center transition-colors hover:text-neon-blue">
                                    MobeeWeb PTI <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/solutions/nephrocall" className="group flex items-center transition-colors hover:text-matrix-green">
                                    NephroCall <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Expertise</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/secteurs/sante" className="transition-colors hover:text-white">Milieu Hospitalier</Link>
                            </li>
                            <li>
                                <Link to="/secteurs/industrie" className="transition-colors hover:text-white">Sites Industriels</Link>
                            </li>
                            <li>
                                <Link to="/a-propos" className="transition-colors hover:text-white">Notre ADN</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne Contact (Actionnable) */}
                    <div className="md:col-span-4 lg:col-span-3 lg:col-start-10">
                        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Ligne Directe</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex flex-col">
                                <span className="text-xs text-gray-500 mb-1">Directeur Commercial</span>
                                <a href="tel:+33662149024" className="group inline-flex items-center text-white transition-colors hover:text-neon-blue">
                                    <Phone className="mr-2 h-4 w-4 text-gray-500 group-hover:text-neon-blue transition-colors" />
                                    <span className="font-mono tracking-wider">06 62 14 90 24</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:marc.dequecker@safefull.com" className="group inline-flex items-center transition-colors hover:text-white">
                                    <Mail className="mr-2 h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                                    marc.dequecker@safefull.com
                                </a>
                            </li>
                            <li className="flex items-start pt-2">
                                <MapPin className="mr-2 h-4 w-4 mt-0.5 text-gray-600" />
                                <span className="text-gray-500 leading-tight">France<br />(Déploiement National)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Legal */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} Safefull Systems. Chiffrement de bout en bout.</p>
                    <div className="flex gap-6">
                        <Link to="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions Légales</Link>
                        <Link to="/politique-confidentialite" className="hover:text-gray-300 transition-colors">RGPD & Confidentialité</Link>
                        <Link to="/gestion-cookies" className="hover:text-gray-300 transition-colors">Gestion des Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
