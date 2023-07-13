import "./Hero.css";

const Hero = () => {
  return (
    <section>
      <div className="learn">
        <h2 className="hero-title"><span className="blue">Learn</span> <span className="text-hover-blue">Crypto.</span></h2>
        <p>Unlock the potential of cryptocurrencies and secure a confident financial future with <span className="blue">TrotelCoin</span>.</p>
      </div>
      <div className="earn">
      <h2 className="hero-title"><span className="yellow">Earn</span> <span className="text-hover-yellow">Crypto.</span></h2>
        <p>Unleash the power of earning cryptocurrencies with <span className="yellow">TrotelCoin</span> in actively learning about crypto and blockchain.</p>
      </div>
    </section>
  )
}

export default Hero;