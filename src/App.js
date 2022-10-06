import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail'
import NewEntry from './pages/newentry/NewEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beitrag" element={<Detail />} />
        <Route path="/add" element={<NewEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
