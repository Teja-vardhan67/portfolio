import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, Sparkles } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-black/90">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <GlitchText text="About_Me" />
                </h2>
                <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full shadow-[0_0_10px_#06b6d4]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
                {/* Left Column: Bio Narrative */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-neon-cyan/40 transition-colors duration-300"
                >
                    <div>
                        <div className="flex items-center gap-3 text-neon-cyan font-mono text-sm mb-4">
                            <Sparkles size={18} />
                            <span>SOFTWARE ENGINEER & AI/ML ENTHUSIAST</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                            Building intelligent full-stack applications with AI at the core.
                        </h3>

                        <p className="text-gray-300 leading-relaxed mb-6 text-base">
                            I am <span className="text-white font-semibold">Paspula Teja Vardhan</span>, a passionate 3rd-year Computer Science Engineering student at <span className="text-neon-cyan font-semibold">Anurag University, Hyderabad</span>. 
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                            My expertise spans modern web development (React, FastAPI, Node.js), artificial intelligence (LLM integration with Groq/Llama 3, SpaCy NLP, Scikit-learn), network automation, and cloud security. I thrive on engineering end-to-end platforms that solve real-world problems with high scalability and role-based security.
                        </p>
                    </div>

                    <div className="pt-6 border-t border-gray-800/80 flex flex-wrap gap-6 text-sm font-mono text-gray-400">
                        <div>
                            <span className="text-neon-cyan font-bold block text-xl">8.29</span>
                            <span>Current CGPA</span>
                        </div>
                        <div className="w-px h-10 bg-gray-800"></div>
                        <div>
                            <span className="text-neon-purple font-bold block text-xl">2023 - 2027</span>
                            <span>B.Tech CSE</span>
                        </div>
                        <div className="w-px h-10 bg-gray-800"></div>
                        <div>
                            <span className="text-neon-cyan font-bold block text-xl">3+</span>
                            <span>Cloud Certifications</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Key Stats & Education Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-5 flex flex-col gap-6"
                >
                    {/* Education Card */}
                    <div className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-neon-purple/40 transition-colors duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-xl group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <span className="text-xs font-mono text-neon-purple uppercase tracking-wider">Education</span>
                                <h4 className="text-lg font-bold text-white mt-1">Anurag University, Hyderabad</h4>
                                <p className="text-gray-300 text-sm mt-1">B.Tech in Computer Science & Engineering</p>
                                <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-400">
                                    <span>2023 – 2027</span>
                                    <span className="px-2 py-0.5 bg-neon-purple/20 text-neon-purple rounded border border-neon-purple/30 font-bold">CGPA: 8.29</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certifications Quick Highlight Card */}
                    <div className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-neon-cyan/40 transition-colors duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-neon-cyan/10 text-neon-cyan rounded-xl group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                                <Award size={24} />
                            </div>
                            <div>
                                <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Certifications Highlight</span>
                                <h4 className="text-lg font-bold text-white mt-1">Oracle & Zscaler Certified</h4>
                                <p className="text-gray-300 text-sm mt-1">OCI Data Science, OCI Generative AI, and Zscaler Zero Trust Associate.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Focus Card */}
                    <div className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-neon-purple/40 transition-colors duration-300 group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 text-white rounded-xl group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all">
                                <Code2 size={24} />
                            </div>
                            <div>
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Primary Stack</span>
                                <h4 className="text-lg font-bold text-white mt-1">Full-Stack & AI Systems</h4>
                                <p className="text-gray-300 text-sm mt-1">React, FastAPI, Node.js, Python, PostgreSQL, MongoDB, LLMs & RAG.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
