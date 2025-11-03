import About from "./components/About";
import Artists from "./components/Artists";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="bg-back">
      <Hero />
      <About />
      <Events />
      <Artists />
      <Footer />
    </div>
  );
}

export default App;
