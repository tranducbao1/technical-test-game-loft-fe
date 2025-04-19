import { useMemo } from 'react';
import { Button, Container } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Callback } from 'src/services';
import { formatWeekRange } from './helpers';

const WeekSelector: React.FC<Props> = ({
  isHalfDay,
  setIsHalfDay,
  startTime,
  endTime,
  handleClickNext,
  handleClickPrevious,
}) => {
  const currentWeekRange = useMemo(() => formatWeekRange(startTime, endTime), [startTime, endTime]);

  return (
    <Container className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center"
          style={{ height: '32px', width: 'auto', fontWeight: '500' }}
        >
          Today
        </Button>
        <Button
          variant="light"
          className="ms-2 p-1 rounded-circle d-flex align-items-center justify-content-center"
          style={{ height: '32px', width: '32px' }}
          onClick={() => handleClickPrevious()}
        >
          <IoIosArrowBack />
        </Button>
        <Button
          variant="light"
          className="ms-2 p-1 rounded-circle d-flex align-items-center justify-content-center"
          style={{ height: '32px', width: '32px' }}
          onClick={() => handleClickNext()}
        >
          <IoIosArrowForward />
        </Button>
        <div className="ms-2" style={{ fontSize: '16px', fontWeight: '500' }}>
          {currentWeekRange}
        </div>
      </div>
      <div className="d-flex align-items-center">
        <Button
          className="ms-4 rounded-5 d-flex align-items-center justify-content-center"
          variant="primary "
          style={{ height: '32px', width: 'auto', fontSize: '12px', fontWeight: '500' }}
          disabled
        >
          Notify manager
        </Button>
        <Button
          className="ms-2 rounded-5 d-flex align-items-center justify-content-center"
          variant="light"
          style={{ height: '32px', width: 'auto', fontSize: '12px', fontWeight: '500' }}
          onClick={() => setIsHalfDay(!isHalfDay)}
        >
          {isHalfDay ? 'Schedule as full day' : 'Schedule as half day'}
        </Button>
      </div>
    </Container>
  );
};

type Props = {
  setIsHalfDay?: Callback;
  isHalfDay?: boolean;
  startTime?: string;
  endTime?: string;
  handleClickPrevious?: Callback;
  handleClickNext?: Callback;
};

export default WeekSelector;
