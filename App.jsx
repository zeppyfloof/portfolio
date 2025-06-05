import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Adjust path to your component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;