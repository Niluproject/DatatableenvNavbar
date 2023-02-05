import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './Navbar';
import Users from './Users';
import Didmount from './components/Didmount';
import Didupdate from './components/Didupdate';
import Shouldupdate from './components/Shouldupdate';
import Databledemo from './components/Databledemo';
import Tabledata from './components/Tabledata';
import Test from './components/Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datatable" element={<Databledemo />} />
        <Route path="/tabledata" element={<Tabledata />} />
        <Route path="/about" element={<About name = "Nilesh" />} />
        <Route path="/user/:name" element={<Users />} />
      </Routes>
    </BrowserRouter>
    <Shouldupdate />
    <Test />
    </div>
  );
}

export default App;
