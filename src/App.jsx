import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <section className="hero">
          <h1>Turn Your Commercial Property Into Revenue</h1>
          <p>Get an instant estimate of your property's potential to generate new revenue today</p>
        </section>
      </main>
    </div>
  );
}

export default App;