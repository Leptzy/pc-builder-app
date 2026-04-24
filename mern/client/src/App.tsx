import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SecondaryNavbar from './components/SecondaryNavbar';
import './App.css'

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <SecondaryNavbar />
      <Outlet />
    </div>
  );
};

export default App
