import Aos from 'aos'
import 'aos/dist/aos.css'
import { Fragment, useState, useEffect } from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';


function App() {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 2000 })
    // emailjs.init("sIZU6tY7g2GoSxbW_");

    const timer = setTimeout(() => {
      setLoad(true)
    }, 3000);
    return () => clearTimeout(timer);
  }, [])
  return (
    <div>
      {load ? <Fragment>
        <Banner />
        <About />
        <Services />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </Fragment> : <Loading />}













    </div>
  );
}

export default App;
