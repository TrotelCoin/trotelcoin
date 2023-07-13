import React from 'react';
import "./Learncard.css";

const Learncard = () => {
  return (
    <section className="learncard">
      <div className="learn-card-text">
        <p className="ready-text">ARE YOU READY?</p>
        <h1 className="learn-crypto-now">Learn Crypto Now.</h1>
        <a href="https://app.trotelcoin.com"><button id="launch-app-card">Launch The App</button></a>
      </div>
      <div id='rectangle-learn-card'></div>
    </section>
  )
}

export default Learncard;