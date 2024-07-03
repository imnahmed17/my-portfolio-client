import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import Blog from '../../components/Blog/Blog';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
        </>
    );
};

export default Home;