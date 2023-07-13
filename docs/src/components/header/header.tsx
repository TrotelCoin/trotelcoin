import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="trotelcoin-minimalist"></div>
        <div className="line-navbar"></div>
        <div className="pages">
            <a href="#">Home</a>
            <a target="_blank" href="../../../whitepapers/trotelcoin-whitepaper-english.pdf">Whitepaper</a>
            <a href="../../staking">Staking</a>
            <a href="../../about">About</a>
        </div>
        <a href="https://app.trotelcoin.com"><button className="button-text">App</button></a>
      </nav>
    </header>
  )
}

export default Header;