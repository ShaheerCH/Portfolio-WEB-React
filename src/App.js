import './App.scss';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/navbar/sidebar';
import Rightbar from './components/navbar/rightbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Projects from './components/projects/projects';
import ContactForm from './components/contact/form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Rightbar />
      <Hero />
      <About />
      <Projects/>
      <ContactForm/>
    </div>
  );
}

export default App;
