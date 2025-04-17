import dayjs from 'dayjs';
import { useState } from 'react';
import {
  Accordion,
  Button,
  Card,
  Container,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-bootstrap';
import ScheduleTable from './ScheduleTable';
import WeekSelector from './WeekSelector';

const SchedulePageContainer = () => {
  const [weekStart, setWeekStart] = useState(dayjs().startOf('week').add(1, 'day')); // Monday
  const [isHalfDay, setIsHalfDay] = useState(false);
  const [showRepeatModal, setShowRepeatModal] = useState(false);

  const [open, setOpen] = useState(true);
  const [view, setView] = useState('week');

  return (
    // <Container className="mt-5">
    //   <WeekSelector weekStart={weekStart} setWeekStart={setWeekStart} />
    //   <ScheduleTable weekStart={weekStart} isHalfDay={isHalfDay} />
    //   <div className="flex justify-between items-center mt-4">
    //     <button
    //       className="bg-yellow-500 text-white px-4 py-2 rounded"
    //       onClick={() => setShowRepeatModal(true)}
    //     >
    //       Repeat
    //     </button>
    //     <SaveResetControls />
    //   </div>
    //   {/* {showRepeatModal && <RepeatModal onClose={() => setShowRepeatModal(false)} />} */}
    // </Container>

    //

    // <Container className="mt-5">
    //   <Accordion defaultActiveKey="0" className="my-4">
    //     <Accordion.Item eventKey="0">
    //       <Accordion.Header>My Schedule</Accordion.Header>
    //       <Accordion.Body className="bg-light rounded shadow-sm p-3">
    //         <Row className="mb-3">
    //           <Col>
    //             <WeekSelector />
    //           </Col>
    //         </Row>
    //         <Row className="mb-3">
    //           <Col>
    //             <ScheduleTable />
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col>
    //             <SaveResetControls />
    //           </Col>
    //         </Row>
    //       </Accordion.Body>
    //     </Accordion.Item>
    //   </Accordion>
    // </Container>
    <Container className="mt-5">
      <Card className="shadow rounded-2">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0 px-4 pt-4">
          <div className="d-flex align-items-center">
            <h4 className="mb-0 fw-bold">My Schedule</h4>
            <Button
              variant="light"
              className="ms-2 p-1 rounded-circle"
              onClick={() => setOpen(!open)}
              style={{ height: '32px', width: '32px' }}
            >
              {/* <ChevronDown /> */}
            </Button>
          </div>

          <ToggleButtonGroup type="radio" name="view" value={view} onChange={(val) => setView(val)}>
            <ToggleButton id="tbg-radio-week" value="week" variant="outline-warning">
              Week
            </ToggleButton>
            <ToggleButton id="tbg-radio-month" value="month" variant="outline-light">
              Month
            </ToggleButton>
          </ToggleButtonGroup>
        </Card.Header>

        <Accordion activeKey={open ? '0' : null}>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="bg-light rounded-bottom-4 p-4">
              <WeekSelector />
              <ScheduleTable />
              {/* <RepeatSchedule /> */}
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </Card>
    </Container>
  );
};

export default SchedulePageContainer;
