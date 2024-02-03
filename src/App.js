import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Selector from './components/Selector';

function App() {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <Selector />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
