import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import NavBar from "./components/navBar";
import ProductViewer from "./components/ProductViewer";
import ShowCase from "./components/showCase";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <ShowCase />
    </main>
  );
};

export default App;
