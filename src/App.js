import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Detail from './pages/Detail'

import Layout from './components/Layout';

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>

  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
