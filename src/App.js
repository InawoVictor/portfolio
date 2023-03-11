import styles from'./App.module.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Layout from './pages/Layout';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Expertise from './components/expertise/Expertise';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import useLocalStorage from "use-local-storage";



function App() {
  const [mode, setMode] = useLocalStorage("mode", "light")

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  }

  return (
    <div data-theme={mode}>
    <BrowserRouter>
      <div className={`bg-primary ${styles.container}`}>
        <Header mode={mode} toggleMode={toggleMode}/>
        
        <Routes>
          <Route path='/' element={
          <Layout>
            <Hero/>
            <Expertise/>
            <Works />
            <Skills/> 
            <Portfolio/>
          </Layout>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>

  );
}

export default App;
