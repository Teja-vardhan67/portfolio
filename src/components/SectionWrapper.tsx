import React, { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className = '' }: SectionWrapperProps) => {
    return (
        <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
