import HomePage from './home';
import ButtonAppBar from './components/other';
import './App.css';
import {Routes, Route } from "react-router-dom";
import BasicCard from './components/appBar';
import Home from './about us';
  
function App() {
  return (
    <div>
        <ButtonAppBar/>
        <Routes>
        <Route path="/Products" element={<HomePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<BasicCard />} />
      </Routes>
    </div>
    );
}

export default App;
