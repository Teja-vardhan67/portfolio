import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Sparkles } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const projects = [
    {
        title: "CareerCraft",
        subtitle: "AI-Powered Career Prep Platform",
        description: "Full-stack AI career platform featuring LLM-powered mock interviews, NLP-based ATS resume scoring, TF-IDF job matching, and integrated college placement portal.",
        tech: ["React", "FastAPI", "Groq", "SpaCy", "Scikit-learn", "Firebase", "Tailwind CSS"],
        github: "https://github.com/palankivinay272-lgtm/career-craft",
        link: "https://github.com/palankivinay272-lgtm/career-craft",
        color: "cyan"
    },
    {
        title: "SmartCampus",
        subtitle: "AI-Powered Campus Complaint System",
        description: "AI-powered campus complaint management system with NLP auto-categorisation, real-time WebSocket updates, JWT authentication, and role-based resolution dashboards.",
        tech: ["Node.js", "Express", "MongoDB", "WebSocket", "JWT", "Firebase"],
        github: "https://github.com/palankivinay272-lgtm/SmartCampus",
        link: "https://smartcampus-3cbb4.web.app",
        color: "purple"
    },
    {
        title: "YoursVault",
        subtitle: "Group Finance Tracker",
        description: "Comprehensive group finance tracker with role-based dashboards, atomic batch writes, secondary Firebase app pattern for friend account creation, and automated email notifications.",
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ y: -8 }}
                        className="group relative bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                    >
                        {/* Top Gradient Accent */}
                        <div className={`h-1.5 w-full bg-gradient-to-r ${project.color === 'cyan' ? 'from-neon-cyan to-blue-500' : 'from-neon-purple to-pink-500'}`}></div>

                        {/* Ambient Glow on Hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.color === 'cyan' ? 'from-neon-cyan via-transparent to-transparent' : 'from-neon-purple via-transparent to-transparent'}`}></div>

                        <div className="p-7 relative z-10 flex flex-col h-full justify-between space-y-6">
                            <div>
                                <div className="mb-4 flex justify-between items-center">
                                    <div className={`p-3 rounded-xl ${project.color === 'cyan' ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-purple/10 text-neon-purple'}`}>
                                        <Code size={22} />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            title="View GitHub Repository"
                                        >
                                            <Github size={19} />
                                        </a>
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="p-2 text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-lg transition-colors flex items-center gap-1 text-xs font-mono"
                                                title="View Live Demo"
                                            >
                                                <ExternalLink size={19} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                <p className="text-xs text-neon-purple font-mono mb-4 flex items-center gap-1">
                                    <Sparkles size={12} />
                                    {project.subtitle}
                                </p>

                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-800/80">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
