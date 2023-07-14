import './Header.css';

const Header = () => {
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
            <li>
              <a href="../../staking">Soon...</a>
            </li>
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
