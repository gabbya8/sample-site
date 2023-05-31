import './App.css';
import Title from './pages/Title';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Title />} />
        <Route path="/home" element={<Title />} />
        <Route path="/main" element={<Main code={code}/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
