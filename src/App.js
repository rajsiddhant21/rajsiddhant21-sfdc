import './App.css';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='rajsiddhant21-sfdc/home' element={<h1>Home</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
