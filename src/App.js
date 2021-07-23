import './App.css';
import {Helmet} from "react-helmet";
import AwesomeCarousel from './components/AwesomeCarousel'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Crypto Gallery Art</title>
        <link rel="canonical" href="https://crypto-gallery-art.web.app/" />
      </Helmet>
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
