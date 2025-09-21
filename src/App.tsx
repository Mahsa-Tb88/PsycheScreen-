import Home from './components/Home/Home';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Home />
    </div>
  );
}

// style={{ backgroundColor: '#f7f5ff' }}
