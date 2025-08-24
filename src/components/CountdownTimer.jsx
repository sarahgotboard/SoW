import React, { useState, useEffect } from 'react';
import { COLORS } from './ColorTheme';

const CountdownTimer = ({ examDate = '2026-01-08' }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId = null;

    if (isActive) {
      intervalId = setInterval(() => {
        const now = new Date().getTime();
        const examTime = new Date(examDate).getTime();
        const difference = examTime - now;

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          setIsActive(false);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, examDate]);

  const daysLeft = timeLeft.days || 0;
  const isUrgent = daysLeft <= 30;
  
  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '20px 0',
    border: `2px solid ${isUrgent ? COLORS.WARNING : COLORS.INFO}`,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: isUrgent ? COLORS.WARNING_TEXT : COLORS.INFO_TEXT,
    marginBottom: '15px'
  };

  const timerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const timeUnitStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '10px 15px',
    borderRadius: '6px',
    minWidth: '60px'
  };

  const numberStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    display: 'block'
  };

  const labelStyle = {
    fontSize: '12px',
    color: '#666',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  };

  const getWeeksUntilExam = () => {
    const now = new Date();
    const exam = new Date(examDate);
    const diffTime = exam - now;
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    return diffWeeks;
  };

  const getMonthsUntilExam = () => {
    const now = new Date();
    const exam = new Date(examDate);
    const diffMonths = (exam.getFullYear() - now.getFullYear()) * 12 + (exam.getMonth() - now.getMonth());
    return diffMonths;
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>
        {isUrgent ? '🚨 URGENT' : '🎯'} EXAM COUNTDOWN: Wednesday, 8th January 2026
      </div>
      
      <div style={timerStyle}>
        <div style={timeUnitStyle}>
          <span style={numberStyle}>{timeLeft.days || 0}</span>
          <span style={labelStyle}>Days</span>
        </div>
        <div style={timeUnitStyle}>
          <span style={numberStyle}>{timeLeft.hours || 0}</span>
          <span style={labelStyle}>Hours</span>
        </div>
        <div style={timeUnitStyle}>
          <span style={numberStyle}>{timeLeft.minutes || 0}</span>
          <span style={labelStyle}>Minutes</span>
        </div>
        <div style={timeUnitStyle}>
          <span style={numberStyle}>{timeLeft.seconds || 0}</span>
          <span style={labelStyle}>Seconds</span>
        </div>
      </div>

      <div style={{ 
        marginTop: '15px', 
        fontSize: '14px', 
        color: COLORS.NEUTRAL_DARK,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div>📅 {getWeeksUntilExam()} weeks remaining</div>
        <div>🗓️ {getMonthsUntilExam()} months remaining</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
