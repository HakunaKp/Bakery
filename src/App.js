import React from 'react';

// Site Navigation
import Navbar from './components/Navbar/Navbar';
import Routes from './Routes';

// Amplify
import Amplify from "aws-amplify";

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
