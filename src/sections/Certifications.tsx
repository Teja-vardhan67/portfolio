import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const certifications = [
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        issuer: "Oracle",
        badge: "Oracle Certified",
        color: "purple"
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
        badge: "Oracle Certified",
        color: "cyan"
    },
    {
        title: "Zscaler Zero Trust Associate (ZTCA)",
        issuer: "Zscaler Academy",
        badge: "Zero Trust Certified",
        color: "purple"
    }
];

const Certifications = () => {
    return (
        <SectionWrapper id="certifications">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <GlitchText text="Certifications" />
                </h2>
                <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_#a855f7]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ y: -6 }}
                        className="group bg-gray-900/40 backdrop-blur-md p-7 rounded-2xl border border-gray-800 hover:border-neon-purple/60 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-5">
                                <div className={`p-3 rounded-xl ${cert.color === 'cyan' ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-purple/10 text-neon-purple'} group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all`}>
                                    {cert.issuer === 'Zscaler Academy' ? <ShieldCheck size={26} /> : <Award size={26} />}
                                </div>
                                <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1.5">
                                    <CheckCircle2 size={12} className="text-neon-cyan" />
                                    {cert.badge}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-neon-purple transition-colors">
                                {cert.title}
                            </h3>
                        </div>

                        <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono text-gray-400">
                            <span>ISSUER</span>
                            <span className="text-neon-cyan font-bold">{cert.issuer}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
