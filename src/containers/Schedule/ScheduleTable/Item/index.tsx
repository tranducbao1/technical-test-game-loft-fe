import { Button, Card, Form } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { CiClock2 } from 'react-icons/ci';
import { GoHome } from 'react-icons/go';
import { PiLaptopThin } from 'react-icons/pi';
import {
  ScheduleResponseType,
  ScheduleTypeEnum,
  UpdateSchedulesPayload,
} from 'src/queries/schedule';
import './styles.scss';

const Item: React.FC<Props> = ({ schedule, control, index }) => {
  return (
    <Controller
      control={control}
      name={`data.${index}.type`}
      defaultValue={schedule?.type}
      render={({ field }) => (
        <Card className="rounded-3">
          <Card.Header className="d-flex justify-content-center align-items-center fw-bold">
            {field?.value ?? <span style={{ visibility: 'hidden' }}>WAO</span>}
          </Card.Header>
          <Card.Body>
            <Form.Select
              className={`schedule-select-seat ${field?.value !== ScheduleTypeEnum.WAO ? 'invisible-select' : ''}`}
              disabled
            >
              <option>F7 - Seat 01</option>
            </Form.Select>
            <div className="mt-3 d-flex align-items-center justify-content-center gap-2">
              <Button
                variant="light"
                className="border rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  height: '45px',
                  width: '45px',
                  backgroundColor: field?.value === ScheduleTypeEnum.WAO ? '#1E90FF' : '',
                }}
                onClick={() => field.onChange(ScheduleTypeEnum.WAO)}
              >
                <PiLaptopThin style={{ width: '40px', height: '40px' }} />
              </Button>
              <Button
                variant="light"
                className="border rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  height: '45px',
                  width: '45px',
                  backgroundColor: field?.value === ScheduleTypeEnum.WFH ? '#ffb3c1' : '',
                }}
                onClick={() => field.onChange(ScheduleTypeEnum.WFH)}
              >
                <GoHome style={{ width: '40px', height: '40px' }} />
              </Button>
              <Button
                variant="light"
                className="border rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  height: '45px',
                  width: '45px',
                  backgroundColor: field?.value === ScheduleTypeEnum.OFF ? '#c0c0c0' : '',
                }}
                onClick={() => field.onChange(ScheduleTypeEnum.OFF)}
              >
                <CiClock2 style={{ width: '40px', height: '40px' }} />
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    />
  );
};

type Props = {
  schedule?: ScheduleResponseType;
  control?: Control<UpdateSchedulesPayload>;
  index?: number;
};

export default Item;
