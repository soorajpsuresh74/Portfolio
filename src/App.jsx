import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Stack from "./components/Stack";
import Focus from "./components/Focus";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { useContent } from "./lib/useContent";

export default function App() {
  const content = useContent();
  const hash = useHash();

  if (hash === "#resume") return <Resume content={content} />;

  return (
    <>
      <Navbar nav={content.nav} personal={content.personal} />
      <main>
        <Hero hero={content.hero} />
        <About about={content.about} />
        <Capabilities capabilities={content.capabilities} />
        <Stack stack={content.stack} />
        <Focus focus={content.focus} />
        <Projects projects={content.projects} />
        <Contact contact={content.contact} personal={content.personal} />
      </main>
      <Footer personal={content.personal} />
    </>
  );
}

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return hash;
}
