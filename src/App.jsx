import Header from './components/Header';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/1.home/Home';
import { ToastContainer } from 'react-toastify';
import Contact from './pages/contact/Contact';
import Register from './pages/register/Register';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
