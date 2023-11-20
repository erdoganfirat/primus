import React, { useState } from 'react';

const MyTabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleTabClick(0)} style={{ marginRight: '5px' }}>
          Tab 1
        </button>
        <button onClick={() => handleTabClick(1)} style={{ marginRight: '5px' }}>
          Tab 2
        </button>
        <button onClick={() => handleTabClick(2)}>Tab 3</button>
      </div>

      {activeTab === 0 && (
        <div>
          <h2>Content for Tab 1</h2>
          <p>This is the content for Tab 1.</p>
        </div>
      )}

      {activeTab === 1 && (
        <div>
          <h2>Content for Tab 2</h2>
          <p>This is the content for Tab 2.</p>
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <h2>Content for Tab 3</h2>
          <p>This is the content for Tab 3.</p>
        </div>
      )}
    </div>
  );
};

export default MyTabsComponent;
