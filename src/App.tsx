
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
    return (
        <Layout>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
        </Layout>
    );
}

export default App;
