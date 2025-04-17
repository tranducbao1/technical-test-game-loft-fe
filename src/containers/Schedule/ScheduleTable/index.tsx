const ScheduleTable: React.FC<Props> = ({ weekStart, isHalfDay }) => {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  return (
    <div className="grid grid-cols-5 gap-2">
      {weekdays.map((day, idx) => (
        <div key={day} className="border p-2 rounded bg-gray-100">
          <div className="font-medium mb-2">{day}</div>
          {isHalfDay ? (
            <div>
              <select className="w-full mb-1">
                <option>WFH</option>
                <option>WAO</option>
                <option>OFF</option>
              </select>
              <select className="w-full">
                <option>WFH</option>
                <option>WAO</option>
                <option>OFF</option>
              </select>
            </div>
          ) : (
            <select className="w-full">
              <option>WFH</option>
              <option>WAO</option>
              <option>OFF</option>
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

type Props = {
  weekStart?: any;
  isHalfDay?: boolean;
};

export default ScheduleTable;
