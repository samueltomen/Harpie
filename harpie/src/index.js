import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App1 from './App';
import './Components/Main/Main.css'
import './Components/Nos_Projets/NosProjets.css'
import NavBar from './Components/Main/1_NavBar/NavBar';
import Footer from './Components/Main/8_Footer/Footer';
import NosProjets from './Components/Nos_Projets/NosProjets';


export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<App1/>} />
        <Route path="nosProjets" element={<NosProjets/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

