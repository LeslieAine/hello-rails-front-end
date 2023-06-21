import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Greetings from './components/greetings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;