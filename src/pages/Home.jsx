import Categaries from "../components/Categaries";
import CategariesCards from "../components/CategariesCards";
import Footer from "../components/Footer";
import HelpBanner from "../components/HelpBanner";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

const Home = () => {
return(
  <>
  <Hero/>
  <SearchBar/>
  <Categaries/>
  <CategariesCards/>
  <HelpBanner/>
  <Footer/>
  </>
  );
};

export default Home;