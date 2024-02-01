import React from 'react';
import LeftSection from './LeftSection';
import TopRightSection from './TopRightSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection'

import './App.css';

function App() {
  return (
    <div className="app">
      <LeftSection />
      <div className="content">
        <TopRightSection />
        <MiddleSection/>
        <BottomSection/>
      </div>
    </div>
  );
}

export default App;
