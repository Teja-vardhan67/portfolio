import { motion } from 'framer-motion';
import { Terminal, Globe, Database, Cpu, Wrench } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const skillCategories = [
    {
        category: "Programming Languages",
        icon: Terminal,
        skills: ["Python", "JavaScript", "TypeScript", "Java", "C"]
    },
    {
        category: "Web & Frameworks",
        icon: Globe,
        skills: ["React.js", "Node.js", "Express.js", "FastAPI", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"]
    },
    {
        category: "Databases & Storage",
        icon: Database,
        skills: ["PostgreSQL", "Oracle DB", "MongoDB", "MySQL", "Firebase"]
    },
    {
        category: "AI / ML & Data Science",
        icon: Cpu,
        skills: ["Scikit-learn", "SpaCy", "TF-IDF", "LLM Integration (Groq, Llama 3)", "RAG", "pgvector", "Generative AI"]
    },
    {
        category: "Tools & Infrastructure",
        icon: Wrench,
        skills: ["Git/GitHub", "Postman", "Linux", "Docker", "Cisco Packet Tracer"]
    }
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

            <div className="space-y-10 max-w-5xl mx-auto">
                {skillCategories.map((group, groupIndex) => {
                    const IconComponent = group.icon;
                    return (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/80 hover:border-gray-700 transition-colors"
                        >
                            <div className="flex items-center gap-3 text-neon-cyan font-mono text-sm uppercase tracking-widest mb-4">
                                <div className="p-2 bg-neon-cyan/10 text-neon-cyan rounded-lg">
                                    <IconComponent size={18} />
                                </div>
                                <span>{group.category}</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: groupIndex * 0.05 + index * 0.03 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 font-mono text-sm hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-default flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60"></span>
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </SectionWrapper>
    );
};

export default Skills;
