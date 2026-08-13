import { ButtonHTMLAttributes, ReactNode } from 'react';

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'cyan' | 'purple';
}

const NeonButton = ({ children, variant = 'cyan', className = '', ...props }: NeonButtonProps) => {
    const colorClass = variant === 'cyan' ? 'border-neon-cyan text-neon-cyan shadow-neon-cyan' : 'border-neon-purple text-neon-purple shadow-neon-purple';

    return (
        <button
            className={`
        px-6 py-3 border-2 rounded-md font-mono font-bold uppercase tracking-widest
        transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]
        ${colorClass}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default NeonButton;
