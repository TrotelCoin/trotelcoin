import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getStakingText = () => {
    return isHovered ? 'Soon...' : 'Staking';
  };

  return (
    <header>
      <nav>
        <div className="trotelcoin-minimalist"></div>
        <div className="line-navbar"></div>
        <div className="pages">
          <a href="#">Home</a>
          <a target="_blank" href="../../../whitepapers/trotelcoin-whitepaper-english.pdf">
            Whitepaper
          </a>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="../../staking">{getStakingText()}</a>
          </div>
          <a href="../../about">About</a>
        </div>
        <a href="https://app.trotelcoin.com">
          <button className="button-text" id="app-button">App</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
