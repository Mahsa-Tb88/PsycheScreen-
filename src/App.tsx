import Home from './components/Home/Home';

import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7f5ff' }}>
      <Navbar />
      <Home />
    </div>
  );
}
