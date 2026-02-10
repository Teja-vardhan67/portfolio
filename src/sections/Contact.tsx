import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlitchText from '../components/GlitchText';
import NeonButton from '../components/NeonButton';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);

        // Open in new window to force action
        window.open(`mailto:tejavardhanreddy67@gmail.com?subject=${subject}&body=${body}`, '_blank');

        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <SectionWrapper id="contact" className="pb-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <GlitchText text="Initialize_Comms" />
                </h2>
                <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_#a855f7]"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        I'm currently open to new opportunities and collaborations.
                        Whether you have a project in mind or just want to discuss the latest in AI and Cyber Security, feel free to drop a message.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:tejavardhanreddy67@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group">
                            <div className="p-3 bg-gray-900 rounded-lg group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                                <Mail size={24} />
                            </div>
                            <span>tejavardhanreddy67@gmail.com</span>
                        </a>
                        <a href="https://linkedin.com/in/paspulatejavardhan" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors group">
                            <div className="p-3 bg-gray-900 rounded-lg group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                                <Linkedin size={24} />
                            </div>
                            <span>linkedin.com/in/paspulatejavardhan</span>
                        </a>
                        <a href="https://github.com/Teja-vardhan67" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                            <div className="p-3 bg-gray-900 rounded-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
                                <Github size={24} />
                            </div>
                            <span>github.com/Teja-vardhan67</span>
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    className="flex-1 space-y-6 bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">NAME</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">MESSAGE</label>
                        <textarea
                            id="message"
                            rows={4}
                            required
                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all resize-none"
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        ></textarea>
                    </div>

                    <NeonButton type="submit" variant="cyan" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
                        <Send size={18} /> {isSubmitting ? 'Opening Email...' : 'Send Message'}
                    </NeonButton>
                </motion.form>
            </div>

            <footer className="w-full py-6 text-center text-gray-600 text-sm border-t border-gray-900 mt-12">
                <p>&copy; {new Date().getFullYear()} Paspula Teja Vardhan. All rights reserved.</p>
                <p className="text-xs mt-1">Built with React, Tailwind & Caffeine.</p>
            </footer>
        </SectionWrapper>
    );
};

export default Contact;
