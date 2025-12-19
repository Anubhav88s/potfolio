import "./App.scss";
import Header from "./container/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Work from "./container/Work/Work";
import About from "./container/About/About";

import Skills from "./container/Skills/Skills";
import Footer from "./container/Footer/Footer";

function App() {
 

  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer /> 
      </div>
    </>
  );
}

export default App;
