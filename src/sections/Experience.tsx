import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const experiences = [
    {
        role: "Infosys Springboard Virtual Intern",
        company: "Infosys Springboard (Batch 6.0)",
        duration: "Present",
        location: "Remote",
        description: [
            "Currently participating in the Infosys Springboard Virtual Internship 6.0 (Batch 13).",
            "Focused on Full-Stack Development and emerging technologies.",
            "Gaining hands-on experience through project-based learning and industry-standard mentorship."
        ],
        tech: ["Full-Stack", "Java/Python", "Springboard"]
    },
    {
        role: "Cisco VIP Virtual Internship",
        company: "Network Automation & Simulation Tool",
        duration: "2025",
        location: "Remote",
        description: [
            "Developed Python-based automation to parse Cisco router configurations & generate visual topology.",
            "Implemented validation engine for network integrity (MTU mismatches, etc.).",
            "Engineered multithreaded simulation for Day-1 network activity (OSPF discovery)."
        ],
        tech: ["Python", "Network Automation", "Cisco Packet Tracer"]
    },
    {
        role: "AI & Cloud Technologies Intern",
        company: "Edunet Foundation & IBM SkillsBuild",
        duration: "2024", // Assumed year based on context, update if needed
        location: "Remote",
        description: [
            "Selected for competitive, mentor-led internship on AI/Cloud technologies.",
            "Developed end-to-end AI project using Python & IBM Watson Studio for predictive insights.",
            "Engineered ML models to solve real-world problems & presented to industry mentors."
        ],
        tech: ["Python", "IBM Watson", "Machine Learning", "Cloud"]
    },
    {
        role: "Virtual Internship Program",
        company: "SmartBridge & ServiceNow",
        duration: "2024", // Assumed
        location: "Remote",
        description: [
            "Gained hands-on experience in ServiceNow Administration, Agentic AI, and Flows.",
            "Mastered Automated Test Framework (ATF) essentials & Data Visualization.",
            "Prepared for Certified System Administrator (CSA) Exam."
        ],
        tech: ["ServiceNow", "Agentic AI", "ATF", "Data Visualization"]
    },
    {
        role: "Cloud Security Intern",
        company: "AICTE - EduSkills & Zscaler",
        duration: "Oct 2025 - Dec 2025",
        location: "Remote",
        description: [
            "Completed 10-week program on Cloud Security & Zero Trust Architecture.",
            "Gained practical knowledge in securing digital transformation using Zscaler Zero Trust Exchange.",
            "Evaluated 'Grade O (Outstanding)' for project performance."
        ],
        tech: ["Cloud Security", "Zero Trust", "Zscaler"]
    }
];

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="bg-black/80">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <GlitchText text="Experience_Log" />
                </h2>
                <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full shadow-[0_0_10px_#06b6d4]"></div>
            </div>

            <div className="relative border-l border-gray-700 ml-4 md:ml-1/2 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Dot on the line */}
                        <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-[5px] w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_10px_#a855f7] z-10"></div>

                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto text-left'}`}>
                            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-cyan transition-colors duration-300 group">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                                <div className={`flex items-center gap-2 text-neon-purple font-mono text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <Briefcase size={14} />
                                    <span>{exp.company}</span>
                                </div>

                                <div className={`flex flex-wrap gap-4 text-gray-400 text-xs mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {exp.duration}</span>
                                    <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                                </div>

                                <ul className={`space-y-2 text-gray-300 text-sm mb-4 list-disc list-inside ${index % 2 === 0 ? 'md:list-none' : ''}`}>
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>

                                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded border border-neon-cyan/20">
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

export default Experience;
