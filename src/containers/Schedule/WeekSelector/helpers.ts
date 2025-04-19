import dayjs from 'dayjs';

export const getCurrentWeekRange = () => {
  const today = dayjs();
  const weekday = today.day();

  let baseDate;

  if (weekday === 0 || weekday === 6) {
    baseDate = today.subtract(weekday === 0 ? 2 : 1, 'day');
  } else {
    baseDate = today;
  }

  const startDate = baseDate.startOf('week').add(1, 'day');
  const endDate = startDate.add(4, 'day');

  return {
    startTime: startDate.format('YYYY-MM-DD'),
    endTime: endDate.format('YYYY-MM-DD'),
  };
};

export const formatWeekRange = (startDateStr: string, endDateStr: string) => {
  const start = dayjs(startDateStr);
  const end = dayjs(endDateStr);

  const month = start.format('MMM');
  const year = start.format('YYYY');
  const startDay = start.format('D');
  const endDay = end.format('D');

  return `${month} ${startDay} - ${endDay}, ${year}`;
};
