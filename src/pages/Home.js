import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Collections from "../components/Home/Collections";
import Characteristics from "../components/Home/Characteristics/Characteristics";
import Rarities from "../components/Home/Rarities";
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
      <Footer />
    </div>
  );
}

export default Home;
