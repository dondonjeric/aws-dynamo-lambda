import './App.css';
import Navigation from './components/Navigation';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Project from './components/projects/Project';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/projects" element={<Project />} exact/>
      </Routes>
    </div>
  );
}

export default App;
