import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProfuctList from "./components/projectList/ProjectList";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <ProfuctList />
      <Contact />
    </div>
  );
}

export default App;
