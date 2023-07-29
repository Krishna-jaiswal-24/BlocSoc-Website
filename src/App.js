import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Newsletter from "./components/Newsletter";
import './App.css'
function App() {
  return (
      <>
        <Navbar />
        <div>
          <Newsletter />

        </div>
        <Footer />
      </>
  );
}

export default App;
