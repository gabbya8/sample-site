import './App.css';
import Title from './pages/Title';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Title />} />
          <Route path="/home" element={<Title />} />
          <Route path="/search" element={<Search code={code} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
