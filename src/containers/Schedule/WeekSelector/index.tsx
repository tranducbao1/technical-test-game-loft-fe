const WeekSelector: React.FC<Props> = () => {
  //   const changeWeek = (amount) => {
  //     setWeekStart(weekStart.add(amount, 'week'));
  //   };

  //   const weekRange = `${weekStart.format('DD/MM')} - ${weekStart.add(4, 'day').format('DD/MM')}`;

  return (
    <div className="flex items-center justify-between mb-4">
      {/* <button onClick={() => changeWeek(-1)} className="text-blue-500"> */}
      <button className="text-blue-500">← Previous</button>
      {/* <div className="font-semibold">Week: {weekRange}</div> */}
      <div className="font-semibold">Week: {1}</div>
      {/* <button onClick={() => changeWeek(1)} className="text-blue-500"> */}
      <button className="text-blue-500">Next →</button>
    </div>
  );
};

type Props = {
  weekStart?: any;
  setWeekStart?: any;
};

export default WeekSelector;
