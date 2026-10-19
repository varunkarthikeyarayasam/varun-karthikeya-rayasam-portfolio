import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Upcoming } from './components/Upcoming';
import { SkillsAndAchievements } from './components/SkillsAndAchievements';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Projects />
        <About />
        <SkillsAndAchievements />
        <Upcoming />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
