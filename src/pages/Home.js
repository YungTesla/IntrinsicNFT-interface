import Hero from "./Home/Hero";
import Collections from "./Home/Collections";
import Rarities from "./Home/Rarities";
import Process from "./Home/Process";
import Characteristics from "./Home/Characteristics";
import Header from "../components/Header";
import Footer from "../components/Footer";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Collections />
      <Characteristics />
      <Rarities />
      <Process />
      <Footer />
    </div>
  );
}

export default Home;
