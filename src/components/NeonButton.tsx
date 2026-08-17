import { ButtonHTMLAttributes, ReactNode } from 'react';

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'cyan' | 'purple';
}

const NeonButton = ({ children, variant = 'cyan', className = '', ...props }: NeonButtonProps) => {
    const colorClass = variant === 'cyan' 
        ? 'border-neon-cyan text-neon-cyan shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:shadow-[0_0_22px_rgba(6,182,212,0.6)] hover:bg-neon-cyan/10' 
        : 'border-neon-purple text-neon-purple shadow-[0_0_12px_rgba(168,85,247,0.3)] hover:shadow-[0_0_22px_rgba(168,85,247,0.6)] hover:bg-neon-purple/10';

    return (
        <button
            className={`
                px-6 py-3 border-2 rounded-lg font-mono font-bold uppercase tracking-widest text-sm
                transition-all duration-300 transform hover:-translate-y-0.5
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
