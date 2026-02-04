// components/Countdown.jsx
"use client";

import { useState, useEffect } from "react";

const Countdown = ({ textColor }: { textColor: string }) => {
  const calculateTimeLeft = () => {
    // Target: May 30, 2025 at 8:30 WIB
    const targetDate = new Date(Date.UTC(2026, 3, 18, 8, 30, 0));
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    // Calculate immediately upon mounting
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    // Render a static placeholder OR null to avoid mismatch.
    // If we return the structure with 0s, it matches the initial state above.
    // This is consistent for both server and initial client render.
    return (
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
        {/* Days */}
        <div className="text-center w-20 md:w-36">
            <div className="font-bold text-4xl md:text-[96px] leading-none" style={{ color: textColor }}>0</div>
            <div className="text-white text-lg md:text-xl mt-2 md:mt-4">Days</div>
        </div>
        {/* Hours */}
         <div className="text-center w-20 md:w-36">
            <div className="font-bold text-4xl md:text-[96px] leading-none" style={{ color: textColor }}>0</div>
            <div className="text-white text-lg md:text-xl mt-2 md:mt-4">Hours</div>
        </div>
        {/* Minutes */}
         <div className="text-center w-20 md:w-36">
            <div className="font-bold text-4xl md:text-[96px] leading-none" style={{ color: textColor }}>0</div>
            <div className="text-white text-lg md:text-xl mt-2 md:mt-4">Minutes</div>
        </div>
        {/* Seconds */}
         <div className="text-center w-20 md:w-36">
            <div className="font-bold text-4xl md:text-[96px] leading-none" style={{ color: textColor }}>0</div>
            <div className="text-white text-lg md:text-xl mt-2 md:mt-4">Seconds</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
      {/* Days */}
      <div className="text-center w-20 md:w-36">
        <div
          className="font-bold text-4xl md:text-[96px] leading-none"
          style={{ color: textColor }}
        >
          {timeLeft.days}
        </div>
        <div className="text-white text-lg md:text-xl mt-2 md:mt-4">Days</div>
      </div>

      {/* Hours */}
      <div className="text-center w-20 md:w-36">
        <div
          className="font-bold text-4xl md:text-[96px] leading-none"
          style={{ color: textColor }}
        >
          {timeLeft.hours}
        </div>
        <div className="text-white text-lg md:text-xl mt-2 md:mt-4">Hours</div>
      </div>

      {/* Minutes */}
      <div className="text-center w-20 md:w-36">
        <div
          className="font-bold text-4xl md:text-[96px] leading-none"
          style={{ color: textColor }}
        >
          {timeLeft.minutes}
        </div>
        <div className="text-white text-lg md:text-xl mt-2 md:mt-4">
          Minutes
        </div>
      </div>

      {/* Seconds */}
      <div className="text-center w-20 md:w-36">
        <div
          className="font-bold text-4xl md:text-[96px] leading-none"
          style={{ color: textColor }}
        >
          {timeLeft.seconds}
        </div>
        <div className="text-white text-lg md:text-xl mt-2 md:mt-4">
          Seconds
        </div>
      </div>
    </div>
  );
};

export default Countdown;
