import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Community.css';

const Community = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setCount1(25); // learners
      setCount2(2); // courses
    }
  }, [inView]);

  return (
    <section className="community" ref={ref}>
      <h1 className="community-title">Community.</h1>
      <div className="community-statistics">
        <img className="divider" src="../../assets/divider.svg"></img>
        <div className='community-stats-flex'>
          <h2 className="statistics-text-learners">
            <span className="statistic-community">
              <CountUp end={count1} duration={6} suffix="+" /><br></br>
            </span>
            {' learners'}
          </h2>
          <h2 className="statistics-text-courses">
            <span className="statistic-community">
              <CountUp end={count2} duration={6} /><br></br>
            </span>
            {' courses'}
          </h2>
        </div>
        <img className="divider" src="../../assets/divider.svg"></img>
      </div>
    </section>
  );
};

export default Community;
