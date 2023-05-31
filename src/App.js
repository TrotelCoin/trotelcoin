import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <p>Vous avez {balance} TROTEL.</p>
    </div>
  );
}

export default App;
