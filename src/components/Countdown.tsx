'use client';

import { calculateTimeLeft } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Props {
  targetDate: string;
}

export const Countdown = ({ targetDate }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    setHasMounted(true);
}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDate]);

  const dir = {
    'days': 'DÍAS',
    'hours': 'HRS',
    'minutes': 'MIN.',
    'seconds': 'SEG',
  }

  if (!hasMounted) {
    return null;
}

  return (
    <div className="flex justify-center gap-2 w-full items-center">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex border-2 border-white rounded-full w-20 h-20">
          <div className="flex justify-center items-center flex-col p-2 text-white w-full">
            <h1 className='text-center font-extrabold tracking-[-0.64px] leading-[50p] text-2xl'>
              {timeLeft[interval as keyof typeof timeLeft].toString().padStart(2, '0')}
            </h1>
            <span className='capitalize font-extrabold text-sm leading-5'>{dir[interval as keyof typeof dir]}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
