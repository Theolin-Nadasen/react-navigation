import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Page';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
