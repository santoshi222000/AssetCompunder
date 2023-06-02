import React from 'react'
import "../App.css";
import "./aboutFeed.css";
import about from '../assets/Images/banner1.png'
import Banner01 from './Banner01';
import Upperfooter from './Upperfooter';
import Footer from './Footer';

function AboutFeed() {
  return (
    <div className='aboutFeed'>
      <div className="banner">
        <img src={about} alt="" />
      </div>

      <div className='description'>
        <h1>About Us</h1>
        <p><span>"Asset Compounder Academy Pvt Ltd"</span> makes you able to Learn & Earn from Stock Market. We provide online and offline courses and training for every segment of the Stock Market. Our Popular courses are based on USDINR Trading, Forex Trading, Currency Trading, Derivative Market Strategies, Alg orithmic Trading, Short Term and Long Term Investment, Portfolio Management, Fundamental and Technical Analysis of Stocks, Share Market, Ption Trading Strategies, Option Selling Strategies, Arbitrage Strategies, Pair Trading, Market Neutral Strategies, No loss Derivatives Strategies, Fixed Income based Strategies, BreakoutStrategies, Multibagger Stocks, Cryptocurrency, Commodity Trading and much more.
          <br /><br /><br />Asset Compounder Academy having a team with experience approx 12 year in Stock Market, Currency Market and Algo Trading. We work for makeyou aware from Equity Market, you can compound your investment in stock market, earn exceptional profit in trading and create your wealth with exceptionally good percentage.</p>
      </div>
      <Banner01 />

      <div className="trading">
        <h1>Why People want to Learn Trading</h1>
        <p>Trading is a skill; in trading, you get paid for your skill, whereas in a job, you get paid for your time. It is important to understand that money is made by smart work in trading</p>

        <h2 className='quotes'>"You can be free. You can live and work anywhere in the world. You can be independent from routine and not answer to anybody." <br /> <br /> <span>-Alexander Elder</span>
        </h2>
        <h2 className='quotes'>"That cotton trade was almost the deal breaker for me. It was at that point that I said, ‘Mr. Stupid, why risk everything on one trade? Why not make your life a pursuit of happiness rather than pain? <br /> <br /> <span> -Paul Tudor Jones</span> </h2>
      </div>

      <Upperfooter/>
      <Footer/>
    </div>
  )
}

export default AboutFeed
