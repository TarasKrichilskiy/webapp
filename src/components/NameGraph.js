import React, { useState, useEffect } from 'react';

function NameGraph({ names }) {
  // Use useState to manage the data for each name and its corresponding random number
  const [data, setData] = useState(names.map(name => ({
    name,
    value: Math.floor(Math.random() * 10) + 1 // Initialize with random numbers
  })));

  // useEffect to regenerate random numbers for demonstration purposes (e.g., on a button click)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(names.map(name => ({
        name,
        value: Math.floor(Math.random() * 10) + 1
      })));
    }, 5000); // Update every 5 seconds for example

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [names]); // Dependency array to control when to re-run the effect

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ margin: '10px 0' }}>
          <span>{item.name}: </span>
          <div
            style={{
              display: 'inline-block',
              background: 'blue',
              width: `${item.value * 10}px`, // Scale the bar length
              height: '20px'
            }}
          />
          <span> {item.value}</span>
        </div>
      ))}
    </div>
  );
}

export default NameGraph;
