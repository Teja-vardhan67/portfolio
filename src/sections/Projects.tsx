
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const projects = [
    {
        title: "CareerCraft",
        subtitle: "AI-Powered Career Platform",
        description: "Full-stack AI career platform with LLM-powered mock interviews, NLP-based ATS resume scoring, TF-IDF job matching, and integrated college placement portal.",
        tech: ["React", "FastAPI", "Groq", "SpaCy", "Scikit-learn", "Firebase", "Tailwind CSS"],
        github: "https://github.com/palankivinay272-lgtm/career-craft",
        link: "https://github.com/palankivinay272-lgtm/career-craft",
        color: "cyan"
    },
    {
        title: "SmartCampus",
        subtitle: "AI-Powered Campus Complaint System",
        description: "AI-powered campus complaint system with NLP auto-categorisation, real-time WebSocket updates, and role-based dashboards for efficient complaint resolution.",
        tech: ["Node.js", "Express", "MongoDB", "WebSocket", "JWT", "Firebase"],
        github: "https://github.com/palankivinay272-lgtm/SmartCampus",
        link: "https://smartcampus-3cbb4.web.app",
        color: "purple"
    },
    {
        title: "YoursVault",
        subtitle: "Group Finance Tracker",
        description: "Group finance tracker with role-based dashboards, atomic batch writes, secondary Firebase app pattern for friend account creation, and automated email notifications.",
        tech: ["React", "Firebase Auth", "Firestore", "EmailJS", "Tailwind CSS"],
        github: "https://yoursvault.web.app",
        link: "https://yoursvault.web.app",
        color: "cyan"
    }
];

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <GlitchText text="Project_Showcase" />
                </h2>
                <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_#a855f7]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
                    >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${project.color === 'cyan' ? 'from-neon-cyan via-transparent to-transparent' : 'from-neon-purple via-transparent to-transparent'}`}></div>

                        <div className="p-8 relative z-10 h-full flex flex-col">
                            <div className="mb-4 flex justify-between items-start">
                                <div className={`p-3 rounded-lg ${project.color === 'cyan' ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-purple/10 text-neon-purple'}`}>
                                    <Code size={24} />
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                            <p className="text-sm text-neon-purple font-mono mb-4">{project.subtitle}</p>

                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
