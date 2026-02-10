import React from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
    return (
        <Layout>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </Layout>
    );
}

export default App;
