import { useEffect, useState, useCallback } from 'react';
export const useDay = () => {
  const [currentDay, setCurrentDay] = useState('');
  const getDate = useCallback(() => {
    const cur_date = new Date();
    const day = cur_date.getDate();
    setCurrentDay(day);
  }, []);

  useEffect(() => {
    const run = setInterval(getDate, 1000);
    return () => clearInterval(run);
  }, []);

  return {
    currentDay,
  };
};

export const usePopupLive = (start, end) => {
  const { currentDay } = useDay();
  const [daysRemaining, setDaysRemaining] = useState(false);
  useEffect(() => {
    const calculatePopupLive = () => {
      const startDay = new Date(start).getDate();
      const endDay = new Date(end).getDate();
      if (currentDay <= endDay && currentDay >= startDay) {
        setDaysRemaining(true);
      } else {
        setDaysRemaining(false);
      }
    };

    calculatePopupLive();
  }, [currentDay]);
  return {
    daysRemaining,
  };
};
