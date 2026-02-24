import type { FC } from 'react';

export const ClientMarquee: FC = () => {
    return (
        <div className="w-full overflow-hidden bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <h2 className="text-sm font-bold tracking-widest text-[#1a1f2e] uppercase">
                    Ils nous font confiance
                </h2>
            </div>
            {/* 
                We use two identical image blocks to create a seamless infinite scroll effect.
                The animation 'marquee' translates from 0 to -100%. 
            */}
            <div className="relative flex w-full overflow-hidden group">
                <div className="flex w-max animate-marquee space-x-16 px-8 items-center justify-center">
                    <img src="/clients-collage.png" alt="Nos Clients" className="h-32 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    <img src="/clients-collage.png" alt="Nos Clients" className="h-32 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>
                {/* Clone for seamless loop */}
                <div className="absolute top-0 flex w-max animate-marquee2 space-x-16 px-8 items-center justify-center">
                    <img src="/clients-collage.png" alt="Nos Clients" className="h-32 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    <img src="/clients-collage.png" alt="Nos Clients" className="h-32 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>
            </div>
        </div>
    );
};
