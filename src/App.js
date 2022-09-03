import React from 'react';
import { Particle } from './componenets/Particle';
import { Banner } from './componenets/Banner';
import { NavBar } from './componenets/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Particle />
    </div>
  );
}

/*
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/secret">Secret</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/secret" element={<Secret/>} />
        </Routes>
      </div>
    </Router>

function Home() {
  return <h2>Home</h2>;
}

function Blog() {
  return <h2>Blog</h2>;
}

function Secret() {
  return <h2>Secret</h2>;
}
*/
