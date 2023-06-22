import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Particle from './Components/Particle';
import Work from './Components/Work';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Information from './Components/Information';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='bg-[#1f1f1f] '>
      <Navbar />
      <div className='flex'>
        <div className='lg:w-full lg:max-w-[30rem]'></div>
        <div className='w-[90%]  m-auto'>
          <Particle />
          <AboutMe />
          <Header />
          <Information />
          <Resume />
          <Work />
          <Contact />
        </div>
      </div>
    </div>

  );
}

export default App;
