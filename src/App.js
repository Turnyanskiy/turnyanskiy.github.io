import React from 'react';
import { Banner } from './componenets/Banner';
import './App.css';

export default function App() {
  return (
    <Banner />
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
