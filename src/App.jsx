import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Stack from "./components/Stack";
import Focus from "./components/Focus";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Stack />
        <Focus />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}