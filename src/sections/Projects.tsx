import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const projects = [
    {
        title: "CareerCraft",
        subtitle: "AI-Powered Career Prep Platform",
        description: "An AI-powered platform for resume analysis, mock interviews, and job recommendations. Features ATS scoring using Google Gemini AI and a responsive React frontend.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Gemini AI"],
        github: "https://github.com/palankivinay272-lgtm/career-craft",
        link: "https://github.com/palankivinay272-lgtm/career-craft",
        color: "cyan"
    },
    {
        title: "MediTrack",
        subtitle: "Health Manager Web App",
        description: "Patient-centric app for medication alerts and health schedule management. Integrates maps for nearby professionals and inventory tracking for medicine stock.",
        tech: ["HTML/CSS/JS", "Third-party APIs", "Interactive Maps"],
        github: "https://github.com/Teja-vardhan67/MediTrack",
        link: "https://github.com/Teja-vardhan67/MediTrack",
        color: "purple"
    },
    {
        title: "LearnMate",
        subtitle: "AI-Powered Study Buddy",
        description: "Full-stack AI study assistant with quiz generation, note summarization, and flashcards. Built with Node.js/Express and deployed on Render.",
        tech: ["Node.js", "Express.js", "Vanilla JS", "OpenRouter API"],
        github: "https://github.com/Teja-vardhan67/LearnMate",
        link: "https://github.com/Teja-vardhan67/LearnMate",
        color: "cyan"
    },
    {
        title: "AI Resume Analyzer",
        subtitle: "Python-based Resume Parsing Tool",
        description: "A Python application that analyzes resumes against job descriptions to provide compatibility scores and improvement suggestions.",
        tech: ["Python", "NLP", "Machine Learning"],
        github: "https://github.com/Teja-vardhan67/AI_Resume_Analyzer",
        link: "https://github.com/Teja-vardhan67/AI_Resume_Analyzer",
        color: "purple"
    },
    {
        title: "SmartCampus",
        subtitle: "Complaint Management System",
        description: "A complex complaint management system where students can post complaints for authorized personnel to resolve efficiently. 'Report Smarter, Resolve Faster'.",
        tech: ["Web Development", "Database", "Management System"],
        github: "https://github.com/palankivinay272-lgtm/SmartCampus",
        link: "https://github.com/palankivinay272-lgtm/SmartCampus",
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
