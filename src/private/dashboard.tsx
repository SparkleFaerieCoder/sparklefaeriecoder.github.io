import React from 'react';
import Header from '../components/Navigation';
import {auth} from '../services/firebase-service';

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <div>
        <h1>Coming soon</h1>
      </div>
    </div>
  );
};

export default Dashboard;
