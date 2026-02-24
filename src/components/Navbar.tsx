import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'MobeeWeb', path: '/solutions/mobeeweb' },
        { name: 'NephroCall', path: '/solutions/nephrocall' },
        { name: 'Santé', path: '/secteurs/sante' },
        { name: 'Industrie', path: '/secteurs/industrie' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-deep-dark/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logoSAFEFULL.png" alt="Safefull Systems Logo" className="h-10 w-auto object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-neon-blue ${location.pathname === link.path ? 'text-neon-blue' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="rounded-none border border-neon-blue bg-neon-blue/10 px-4 py-2 text-sm font-semibold text-neon-blue transition-all hover:bg-neon-blue hover:text-deep-dark inline-block"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-white/10 bg-deep-dark px-4 py-4 md:hidden">
                    <div className="flex flex-col space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-base font-medium ${location.pathname === link.path ? 'text-neon-blue' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full rounded-none border border-neon-blue bg-neon-blue/10 px-4 py-2 text-left font-semibold text-neon-blue inline-block mb-4"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
