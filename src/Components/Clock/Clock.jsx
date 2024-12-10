import React, { useState, useEffect } from "react";
import ClockStyle from './Clock.module.css'
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className={ClockStyle.clockCntainer}>
      <div className={ClockStyle.clockCard}>
        <h1 className={ClockStyle.clockTitle}>Digital Clock</h1>
        <h2 className={ClockStyle.clockTime}>{currentTime}</h2>
      </div>
    </div>
  );

};

export default Clock;









