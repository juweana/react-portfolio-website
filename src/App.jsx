import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MouseBackground from "./Components/MouseBackground/MouseBackground";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <div className="app">
      {/* Global background follows the cursor across the whole site */}
      <MouseBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
