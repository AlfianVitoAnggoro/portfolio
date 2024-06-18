import Profile from '@/components/Layout/Profile';
import Certificates from '@/components/Layout/Certificates';
import Projects from '@/components/Layout/Projects';
import About from '@/components/Layout/About';
import Skills from '@/components/Layout/Skills';
import Contact from '@/components/Layout/Contact';
import Footer from '@/components/Layout/Footer';
import Timeline from '@/components/Layout/Timeline';

export default function Home() {
  return (
    <>
      <Profile />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
