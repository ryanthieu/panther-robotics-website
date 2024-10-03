/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        milliseconds: Math.floor((difference % 1000) / 10)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 10);  // Update every 10ms for smooth millisecond display

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number, digits: number): string => 
    num.toString().padStart(digits, '0');

  const formattedTime = `${formatNumber(timeLeft.days, 2)} : ${formatNumber(timeLeft.hours, 2)} : ${formatNumber(timeLeft.minutes, 2)} : ${formatNumber(timeLeft.seconds, 2)} : ${formatNumber(timeLeft.milliseconds, 2)}`;

  return (
    <div className="text-center p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">COUNTDOWN UNTIL COMP</h2>
      <div className="text-3xl font-mono">
        {+targetDate > +new Date() ? formattedTime : "00 : 00 : 00 : 00 : 00"}
      </div>
    </div>
  );
};

export default CountdownTimer;