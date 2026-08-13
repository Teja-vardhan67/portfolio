
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const certifications = [
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        issuer: "Oracle",
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
    },
    {
        title: "Zscaler Zero Trust Associate (ZTCA)",
        issuer: "Zscaler Academy",
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-neon-purple transition-all duration-300"
                    >
                        <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-lg w-fit mb-4 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                            <Award size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-neon-purple transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-mono">{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
