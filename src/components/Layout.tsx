import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-neon-cyan selection:text-black overflow-hidden relative">
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Global distinct background elements can go here if needed, 
              but we will rely on individual sections for major effects to keep performance high */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
            </div>
            <Navbar />
            <main className="relative z-10 w-full">
                {children}
            </main>
        </div>
    );
};

export default Layout;
