import React from "react";

import Header from './partials/Header';
import BlogF1 from './templates/home/BlogF1';

import './app.scss';

function App() {

  return (
    <div className="container">
      <Header />
      <BlogF1 />
    </div>
  );
}

export default App;
