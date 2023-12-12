import './App.css';
import Header from './components/Header';
import { BrowserRouter, HashRouter, Navigate, Route, RouterProvider, Routes, createHashRouter } from 'react-router-dom';

function App() {

  const routersO = createHashRouter([
    {
      "path": "/",
      "element": <h1>Home</h1>
    }
  ])

  return (
    <HashRouter>
      <RouterProvider
        router={routersO}></RouterProvider>
    </HashRouter>
  );
}

export default App;
