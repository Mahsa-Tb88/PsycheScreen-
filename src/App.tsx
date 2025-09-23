import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-violet-50 ">
      <Navbar />
      <Outlet />
    </div>
  );
}
