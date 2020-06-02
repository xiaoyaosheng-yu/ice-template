import React from 'react';
import { Link } from 'ice';

const Home = () => {
  return (
    <div>
      <h1>首页</h1>
      <div><Link to="/seller">seller</Link></div>
    </div>
  );
};

export default Home;