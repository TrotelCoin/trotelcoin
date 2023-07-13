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
          <img className='trotelcoin-logo' src="../../assets/trotelcoin-minimalist.jpg" alt="TrotelCoin logo"></img>
          <img src="../../assets/line-navbar.svg" alt="just a line"></img>
          <ul className="pages">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a target="_blank" href="../../whitepaper.pdf">Whitepaper</a>
            </li>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li>
                <a href="../../staking">{getStakingText()}</a>
              </li>
            </div>
            <li>
              <a href="../../about">About</a>
            </li>
          </ul>
          <a href="https://app.trotelcoin.com">
            <button className="button-text" id="app-button">App</button>
          </a>
      </nav>
    </header>
  );
};

export default Header;
