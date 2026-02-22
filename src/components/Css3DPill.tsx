import { memo } from 'react';

interface Css3DPillProps {
    colorMain: string;
    colorShadow: string;
    glowColor: string;
}

export const Css3DPill = memo(({ colorMain, colorShadow, glowColor }: Css3DPillProps) => {
    // Generate 16 faces for a smooth 3D cylinder
    const faces = Array.from({ length: 16 }).map((_, i) => i * (360 / 16));
    const radius = 30; // Radius for the width of the pill

    return (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
            {/* Center parting line (The capsule split) */}
            <div 
                className="absolute w-[64px] h-[3px] bg-black/80 top-1/2 left-1/2 -ml-[32px] -mt-[1.5px] z-50 rounded-full drop-shadow-md" 
                style={{ transform: `translateZ(${radius + 1}px)` }} 
            />
            <div 
                className="absolute w-[64px] h-[3px] bg-black/80 top-1/2 left-1/2 -ml-[32px] -mt-[1.5px] z-50 rounded-full drop-shadow-md" 
                style={{ transform: `translateZ(-${radius + 1}px)` }} 
            />
            
            {/* The 3D cylinder body */}
            <div 
                className="absolute w-[60px] h-[100px] top-1/2 left-1/2 -ml-[30px] -mt-[50px] shadow-2xl" 
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Glow ring behind */}
                <div className="absolute inset-0 w-full h-full rounded-full blur-[20px] scale-125 -z-10" style={{ backgroundColor: glowColor, opacity: 0.6 }} />

                {faces.map((deg, i) => (
                    <div
                        key={i}
                        className="absolute inset-y-0 w-[14px] left-1/2 -ml-[7px]"
                        style={{
                            transform: `rotateY(${deg}deg) translateZ(${radius}px)`,
                            background: `linear-gradient(to bottom, ${colorMain} 0%, ${colorMain} 49%, ${colorShadow} 51%, ${colorShadow} 100%)`,
                            opacity: 1, // Keep solid to hide the inside
                            boxShadow: `inset 0 0 15px rgba(0,0,0,${Math.sin((deg * Math.PI) / 180) > 0 ? 0.4 : 0.1})`,
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        {/* Highlights on front faces */}
                        {Math.sin((deg * Math.PI) / 180) > 0.8 && (
                            <div className="absolute top-[10%] bottom-[10%] left-0 right-0 bg-white/30 blur-[2px]" />
                        )}
                    </div>
                ))}

                {/* Top Dome (approximated with rotated circles) */}
                <div 
                    className="absolute -top-[30px] left-0 w-[60px] h-[60px] rounded-full border border-white/10"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${colorMain} 40%, #000000 100%)`,
                        transform: `rotateX(90deg) translateZ(50px)`,
                        backfaceVisibility: 'hidden'
                    }}
                />
                <div 
                    className="absolute -top-[30px] left-0 w-[60px] h-[60px] rounded-full border border-white/10"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${colorMain} 40%, #000000 100%)`,
                        transform: `rotateX(90deg) translateZ(50px) rotateY(90deg)`,
                        backfaceVisibility: 'hidden'
                    }}
                />

                {/* Bottom Dome */}
                <div 
                    className="absolute -bottom-[30px] left-0 w-[60px] h-[60px] rounded-full border border-black/30"
                    style={{
                        background: `radial-gradient(circle at 70% 70%, #000000 0%, ${colorShadow} 60%, ${colorMain} 100%)`,
                        transform: `rotateX(-90deg) translateZ(50px)`,
                        backfaceVisibility: 'hidden'
                    }}
                />
                <div 
                    className="absolute -bottom-[30px] left-0 w-[60px] h-[60px] rounded-full border border-black/30"
                    style={{
                        background: `radial-gradient(circle at 70% 70%, #000000 0%, ${colorShadow} 60%, ${colorMain} 100%)`,
                        transform: `rotateX(-90deg) translateZ(50px) rotateY(90deg)`,
                        backfaceVisibility: 'hidden'
                    }}
                />
            </div>
        </div>
    );
});
