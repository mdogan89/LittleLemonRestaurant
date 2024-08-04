import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReservationsPage from './pages/ReservationsPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import About from './components/About';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route path='/reservations' element={<ReservationsPage />}></Route>
        <Route path='/confirmed-booking' element={<ConfirmedBooking />}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
