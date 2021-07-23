import './App.css';

import AwesomeCarousel from './components/AwesomeCarousel'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div id="PageContainer">
      <Navbar/>
      <main >
        <AwesomeCarousel></AwesomeCarousel>
      </main>
      </div>
      <footer/>
    </div>
  );
}

export default App;
