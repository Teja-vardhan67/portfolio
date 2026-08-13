
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GlitchText from '../components/GlitchText';
import NeonButton from '../components/NeonButton';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <ParticleBackground />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-cyan font-mono text-lg mb-4 tracking-widest">
                        HELLO_WORLD
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        I am <GlitchText text="Paspula Teja Vardhan" />
                    </h1>

                    <div className="text-xl md:text-3xl text-gray-300 font-mono mb-8 h-[60px]">
                        <span>&gt; </span>
                        <span className="text-neon-purple">
                            <Typewriter
                                words={[
                                    'Full-Stack Developer',
                                    'AI/ML Enthusiast',
                                    'Oracle Cloud Certified',
                                    'CS Undergrad @ Anurag University'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>

                    <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Third-year B.Tech Computer Science student at Anurag University, Hyderabad (CGPA 8.29).
                        AI/ML enthusiast building intelligent full-stack applications — from LLM-powered platforms to cloud-certified solutions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <NeonButton variant="cyan" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                        </NeonButton>
                        <NeonButton variant="purple" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </NeonButton>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6 text-gray-400">
                        <a href="https://github.com/Teja-vardhan67" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/paspulatejavardhan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:tejavardhanreddy67@gmail.com" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Mail size={24} />
                        </a>

                        {/* Resume Link - User should place 'resume.pdf' in the public folder */}
                        <a
                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-neon-cyan transition-colors hover:scale-110 transform duration-200"
                            title="View Resume"
                        >
                            <FileText size={24} />
                            <span className="text-sm font-mono hidden md:inline">RESUME</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <span className="text-gray-500 text-sm">SCROLL DOWN_</span>
            </div>
        </section>
    );
};

export default Hero;
