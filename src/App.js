import Home from './pages/Home';
import './App.css'
import Team from './pages/Team';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';

function App() {
  return (
      <>
      <Navbar />
       <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/blogs' element={<Blogs />}/>
       </Routes>

       <Footer />
      </>
  );
}

export default App;
