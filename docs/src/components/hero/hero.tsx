import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="learn">
        <h2 className="hero-title"><span className="blue">Learn</span> <span className="text-hover-blue">Crypto.</span></h2>
        <p><span className="blue">TrotelCoin</span> thinks learning about crypto and blockchain unlocks the potential for revolutionary advancements in finance and technology.</p>
      </div>
      <div className="earn">
      <h2 className="hero-title"><span className="yellow">Earn</span> <span className="text-hover-yellow">Crypto.</span></h2>
        <p>Unleash the power of earning cryptocurrencies with <span className="yellow">TrotelCoin</span> in actively learning about crypto and blockchain.</p>
      </div>
    </section>
  )
}

export default Hero;