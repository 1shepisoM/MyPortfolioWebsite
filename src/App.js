import HomePage from "./Components/HomePage"
import AboutPage from "./Components/AboutPage"
import SkillsPage from "./Components/SkillsPage"
import PortfolioPage from "./Components/PortfolioPage"
import ContactPage from "./Components/ContactPage"
import Footer from "./Components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
    <HomePage/>
     <AboutPage/>
     <SkillsPage/>
     <PortfolioPage/>
     <ContactPage/>
     <Footer/>

    </div>
  );
}

export default App;
