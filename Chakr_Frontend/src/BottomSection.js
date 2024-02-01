// YourComponent.js

import React from 'react';
import './BottomSection.css';

const bottomSectionData = {
  chats: [
    { id: 1, name: 'Person 1', unread: true, photo: './Person1.jpeg' },
    { id: 2, name: 'Person 2', unread: false, photo: './Person1.jpeg' },
    { id: 3, name: 'Person 3', unread: true, photo: './Person1.jpeg' },
    { id: 4, name: 'Person 4', unread: false, photo: './Person1.jpeg' },
  ],
  topStates: [
    { id: 1, place: 'NY', value: 50 },
    { id: 2, place: 'LA', value: 100 },
    { id: 3, place: 'WDC', value: 75 },
  ],
  newDeals: [
    { id: 1, text: 'Deal 1' },
    { id: 2, text: 'Deal 2' },
    { id: 3, text: 'Deal 3' },
    { id: 4, text: 'Deal 4' },
    { id: 5, text: 'Deal 5' },
    { id: 6, text: 'Deal 6' },
    { id: 7, text: 'Deal 7' },
    { id: 8, text: 'Deal 8' },
    { id: 9, text: 'Deal 9' },
    { id: 10, text: 'Deal 10' },
  ],
};


function ChatCard({ chat }) {
  return (
    <div className={`chat-item ${chat.unread ? 'unread' : ''}`}>
      <img src={chat.photo} />
      {chat.unread && <div className="red-dot"></div>}
    </div>
  );
}


function BottomSection() {
  return (
    <div className="bottom-section">
      {/* Chats Card */}
      <div className="card chat-card">
        <h3>Chats</h3>
        <div className="chats-container">
          {bottomSectionData.chats.map((chat) => (
            <ChatCard key={chat.id} chat={chat} />
          ))}
        </div>
      </div>

      {/* Top States Card */}
      <div className="card top-states-card">
        <h3>Top States</h3>
        <div className="bar-graph-container">
          {bottomSectionData.topStates.map((state) => (
            <div key={state.id} className="bar-graph-item">
              <div className="place">{state.place}</div>
              <div className="value">{state.value}K</div>
              <div className="bar" style={{ width: `${state.value}%` }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* New Deals Card */}
      <div className="card new-deals-card">
        <h3>New Deals</h3>
        <div className="buttons-container">
          {bottomSectionData.newDeals.map((deal) => (
            <button key={deal.id} className="deal-button">
              {deal.text} <span className="plus">+</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
