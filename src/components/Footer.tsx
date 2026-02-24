import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-deep-dark pt-16 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
                    <div className="space-y-4 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-8 w-8 text-matrix-green" />
                            <span className="font-mono text-xl font-bold uppercase tracking-wider text-white">
                                Safefull<span className="text-matrix-green">Sys</span>
                            </span>
                        </div>
                        <p className="text-sm">
                            Leader de la sécurité communicante. Solutions B2B pour la Protection des Travailleurs Isolés (PTI) et la supervision d'environnements critiques.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Solutions</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link to="/solutions/mobeeweb" className="hover:text-neon-blue">MobeeWeb (PTI)</Link>
                            </li>
                            <li>
                                <Link to="/solutions/nephrocall" className="hover:text-matrix-green">NephroCall (Dialyse)</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Secteurs</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link to="/secteurs/sante" className="hover:text-neon-blue">Santé & Cliniques</Link>
                            </li>
                            <li>
                                <Link to="/secteurs/industrie" className="hover:text-matrix-green">Industrie & Chimie</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">La Société</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link to="/a-propos" className="hover:text-neon-blue">À Propos</Link>
                            </li>
                            <li>
                                <Link to="/mentions-legales" className="hover:text-white">Mentions Légales</Link>
                            </li>
                            <li>
                                <Link to="/politique-confidentialite" className="hover:text-white">Confidentialité</Link>
                            </li>
                            <li>
                                <Link to="/gestion-cookies" className="hover:text-white">Gestion des Cookies</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex flex-col gap-1 mb-2">
                                <span className="font-semibold text-white">Marc Dequecker</span>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-neon-blue" />
                                    <span>06 62 14 90 24</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-matrix-green" />
                                <span>marc.dequecker@safefull.com</span>
                            </li>
                            <li className="flex items-center gap-2 mt-2">
                                <MapPin className="h-4 w-4 text-white" />
                                <span>France</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 py-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Safefull Systems. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
