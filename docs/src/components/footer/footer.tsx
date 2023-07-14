import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img
        className="trotelcoin-logo"
        src="./assets/trotelcoin-minimalist.jpg"
        alt="TrotelCoin logo"
      ></img>
      <div className="footer-all-sections">
        <div className="footer-section">
          <h3 className="footer-title">TrotelCoin</h3>
          <a href="#">
            <p className="footer-label">Home</p>
          </a>
          <a href="../../about">
            <p className="footer-label">About</p>
          </a>
          <a href="https://app.trotelcoin.com">
            <p className="footer-label">The App</p>
          </a>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Token</h3>
          <a
            target="_blank"
            href="https://flooz.xyz/trade/how-to-buy/0xf04ab1a43cBA1474160B7B8409387853D7Be02d5?network=bsc"
          >
            <p className="footer-label">Buy $TROTEL</p>
          </a>
          <a href="https://staking.trotelcoin.com">
            <p className="footer-label">Staking</p>
          </a>
          <a
            target="_blank"
            href="https://bscscan.com/token/0xf04ab1a43cBA1474160B7B8409387853D7Be02d5"
          >
            <p className="footer-label">BNB Chain Explorer</p>
          </a>
          <a
            target="_blank"
            href="https://coinmarketcap.com/currencies/trotelcoin-v2/"
          >
            <p className="footer-label">CoinMarketCap</p>
          </a>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Socials</h3>
          <a target="_blank" href="https://twitter.com/trotelcoin">
            <p className="footer-label">Twitter</p>
          </a>
          <a target="_blank" href="https://discord.gg/zNCyUaVpmV">
            <p className="footer-label">Discord</p>
          </a>
          <a target="_blank" href="https://medium.com/@trotelcoin">
            <p className="footer-label">Medium</p>
          </a>
          <a target="_blank" href="https://instagram.com/trotelcoin">
            <p className="footer-label">Instagram</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
