import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import "./Token.css";

const Token = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setCount1(100); // total supply
      setCount2(49); // in circulation
    }
  }, [inView]);

  return (
    <section className="token" ref={ref}>
      <div className="line-token-left"></div>
      <div className="line-token-right"></div>
      <h1 className="token-title">Token.</h1>
      <div className="token-statistics">
        <img className="divider" src="../../assets/divider.svg"></img>
        <div className="token-stats-flex">
          <h2 className="token-text-supply">
            <span className="statistic-token">
              <CountUp end={count1} duration={6} suffix="k" /><br></br>
            </span>
            {' total supply'}
          </h2>
          <h2 className="token-text-circulation">
            <span className="statistic-token">
              <CountUp end={count2} duration={6} suffix="k" /><br></br>
            </span>
            {' in circulation'}
          </h2>
        </div>
        <img className="divider" src="../../assets/divider.svg"></img>
      </div>
      <div className='partners'>
      <iframe className='flooz' width="400" height="720" frameBorder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=true&onRampDefaultAmount=50&onRampTokenAddress=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5&onRampLockToken=true&stakeDisabled=true&network=bsc&lightMode=true&primaryColor=%23eecc00&backgroundColor=transparent&roundedCorners=10&padding=20&refId=WfjJqs" ></iframe>
        <div className='platforms'>
          <a target='_blank' href='https://pancakeswap.finance/swap?outputCurrency=0xf04ab1a43cBA1474160B7B8409387853D7Be02d5'>
            <div className='rectangle-partners' id='rectangle-pancakeswap'>
              <img className='platforms-image' id='pancakeswap' src='../../assets/pancakeswap.png' alt='PancakeSwap'></img>
              <p className='partners-label' id='pancakeswap-label'>PancakeSwap</p>
            </div>
          </a>
          <a target='_blank' href='https://coinmarketcap.com/currencies/trotelcoin-v2/'>
            <div className='rectangle-partners' id='rectangle-coinmarketcap'>
              <img className='platforms-image' id='coinmarketcap' src='../../assets/coinmarketcap.png' alt='CoinMarketCap'></img>
              <p className='partners-label' id='coinmarketcap-label'>CoinMarketCap</p>
            </div>
          </a>
          <a target='_blank' href='https://flooz.xyz/trade/0xf04ab1a43cBA1474160B7B8409387853D7Be02d5?network=bsc'>
            <div className='rectangle-partners' id='rectangle-flooz'>
              <img className='platforms-image' id='flooz' src='../../assets/flooz.png' alt='Flooz'></img>
              <p className='partners-label' id='flooz-label'>Flooz</p>
            </div>
          </a>
          <a target='_blank' href='https://bscscan.com/token/0xf04ab1a43cBA1474160B7B8409387853D7Be02d5'>
            <div className='rectangle-partners' id='rectangle-bscchain'>
              <img className='platforms-image' id='bscchain' src='../../assets/binancesmartchain.png' alt='BSC Chain'></img>
              <p className='partners-label' id='bscchain-label'>BNB Chain</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Token;