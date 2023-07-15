import {
    Community,
    Footer,
    Header,
    Hero,
    Learncard,
    Token,
  } from "./components";
  
  const Home = () => {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
        <Community></Community>
        <Token></Token>
        <Learncard></Learncard>
        <Footer></Footer>
      </div>
    );
  };
  
  export default Home;