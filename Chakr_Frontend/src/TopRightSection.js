import React from 'react';
import './TopRightSection.css';
import SemiCircleProgressBar from "react-progressbar-semicircle";


function TopRightSection() {
  return (
    <div className="top-right-section">
      <div className="card revenue-percentage">
        <div className="card-title">Revenues</div>
        <span className="percentage">15%</span>
        <span className="arrow">↑</span>
        <div className="subtitle">Increase compared to last week</div>
        <div className="bottom-text">
          <span className="horizontal-arrow">Revenue Report →</span>
        </div>
      </div>
      
      <div className="card revenue-percentage">
        <div className="card-title">Lost Deals</div>
        <span className="percentage">4%</span>
        <div className="subtitle">You closed 96 out 100 deals</div>
        <div className="bottom-text">
          <span className="horizontal-arrow">All deals →</span>
        </div>
        
      </div>
      <div className="card quarter-goal">
        <div className="card-title">Quarter Goal</div>
        <div className="progress-bar-container">
        <SemiCircleProgressBar
          percentage={84}
          strokeWidth={15}
          background="#ddd"
          stroke="#5cb85c" 
          diameter={150}
        />
        <div className="progress-bar-label">84%</div>
        <div className="bottom-text">
          <span className="horizontal-arrow">All goals →</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TopRightSection;
