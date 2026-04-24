import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SecondaryNavbar from './components/SecondaryNavbar';
import './App.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar />
      <SecondaryNavbar />

      <main className="flex-grow">

      </main>
      
      <Footer />
      <Outlet />
    </div>
  );
};

export default App
