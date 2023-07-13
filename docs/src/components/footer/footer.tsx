import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="trotelcoin-minimalist-footer"></div>
      <div className="line-footer"></div>
      <div className="trotelcoin">
        <h3 className="footer-title">TrotelCoin</h3>
        <a href="#"><p>Home</p></a>
        <a href="../../about"><p>About</p></a>
        <a href="https://app.trotelcoin.com"><p>The App</p></a>
      </div>
      <div className="token">
        <h3 className="footer-title">Token</h3>
        <a target="_blank" href="https://flooz.xyz/trade/how-to-buy/0xf04ab1a43cBA1474160B7B8409387853D7Be02d5?network=bsc"><p>Buy $TROTEL</p></a>
        <a href="https://staking.trotelcoin.com"><p>Staking</p></a>
        <a target="_blank" href="https://bscscan.com/token/0xf04ab1a43cBA1474160B7B8409387853D7Be02d5"><p>BSC Scan</p></a>
        <a target="_blank" href="https://coinmarketcap.com/currencies/trotelcoin-v2/"><p>CoinMarketCap</p></a>
      </div>
      <div className="socials">
        <h3 className="footer-title">Socials</h3>
        <a target="_blank" href="https://twitter.com/trotelcoin"><p>Twitter</p></a>
        <a target="_blank" href="https://discord.gg/zNCyUaVpmV"><p>Discord</p></a>
        <a target="_blank" href="https://medium.com/@trotelcoin"><p>Medium</p></a>
        <a target="_blank" href="https://instagram.com/trotelcoin"><p>Instagram</p></a>
      </div>
      <div className="rectangle-footer"></div>
    </footer>
  )
}

export default Footer;