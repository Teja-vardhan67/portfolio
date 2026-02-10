import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const skills = [
    "Java", "Python", "JavaScript", "C",
    "HTML", "CSS", "React.js", "Node.js", "Express.js",
    "Tailwind CSS", "MongoDB", "Oracle",
    "Cloud Security", "Zero Trust", "Packet Tracer",
    "Zscaler", "Git", "GitHub", "Visual Studio Code"
];

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-black/80">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <GlitchText text="Tech_Arsenal" />
                </h2>
                <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full shadow-[0_0_10px_#06b6d4]"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-full text-gray-300 font-mono text-sm hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-default"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </SectionWrapper>
    );
};

export default Skills;
