import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const experiences = [
    {
        role: "Full Stack Intern",
        company: "Infosys SpringBoard Virtual Internship 6.0",
        duration: "Feb 2026 – Apr 2026",
        location: "Remote",
        description: [
            "Built InsureAI, a full-stack insurance platform with role-based dashboards and JWT authentication.",
            "Implemented real-time conflict detection for policy management workflows.",
            "Designed and integrated Oracle DB backend for secure, scalable data operations."
        ],
        tech: ["Full-Stack", "JWT", "Oracle DB", "React", "InsureAI"]
    },
    {
        role: "Networking Intern",
        company: "Cisco VIP 2025",
        duration: "Jun 2025 – Aug 2025",
        location: "Remote",
        description: [
            "Built a Python-based network automation engine to parse Cisco router configurations and generate visual topology.",
            "Engineered multithreaded OSPF simulation for Day-1 network activity.",
            "Conducted performance analysis and validation for network integrity."
        ],
        tech: ["Python", "Network Automation", "OSPF", "Cisco Packet Tracer"]
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

            <div className="relative max-w-5xl mx-auto px-4">
                {/* Central vertical line for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2" />
                
                {/* Vertical line for mobile */}
                <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-center ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Dot on the timeline */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-neon-purple rounded-full shadow-[0_0_10px_#a855f7] z-20 border-2 border-black" />

                            {/* Content card */}
                            <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                <div className={`p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-neon-cyan transition-all duration-300 group ${
                                    index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                                }`}>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-neon-purple font-mono text-sm mb-3">
                                        <Briefcase size={15} />
                                        <span>{exp.company}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-gray-400 text-xs mb-4">
                                        <span className="flex items-center gap-1"><Calendar size={13} /> {exp.duration}</span>
                                        <span className="flex items-center gap-1"><MapPin size={13} /> {exp.location}</span>
                                    </div>

                                    <ul className="space-y-2 text-gray-300 text-sm mb-5 list-disc list-inside">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="leading-relaxed">{item}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-mono rounded-md border border-neon-cyan/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
