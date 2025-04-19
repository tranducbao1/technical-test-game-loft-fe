import { useCallback } from 'react';
import { Button, Container } from 'react-bootstrap';
import { PiRepeatOnceBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { hideDialog, showDialog } from 'src/redux/dialog/dialogSlice';
import { DIALOG_TYPES } from 'src/redux/dialog/types';
import { Callback } from 'src/services';
import RepeatModel from './RepeatModel';
import './styles.scss';

const RepeatSchedule: React.FC<Props> = ({
  handleReset,
  isDirty,
  isUpdating,
  handleUpdate,
  isHalfDay,
  startTime,
  endTime,
}) => {
  const dispatch = useDispatch();

  const onShowConfirm = useCallback(() => {
    dispatch(
      showDialog({
        type: DIALOG_TYPES._YESNO_DIALOG,
        data: {
          title: 'Confirm Schedule',
          content: 'Are you sure you want to Confirm Schedule?',
          size: 'sm',
          okText: 'Confirm',
          cancelText: 'Cancel',
          okVariant: 'success',
          onOk: () => {
            handleUpdate();
            dispatch(hideDialog());
          },
        },
      }),
    );
  }, [dispatch, handleUpdate]);

  const onShowReset = useCallback(() => {
    dispatch(
      showDialog({
        type: DIALOG_TYPES._YESNO_DIALOG,
        data: {
          title: 'Reset Schedule',
          content: 'Are you sure you want to Reset Schedule?',
          size: 'sm',
          okText: 'Reset',
          cancelText: 'Cancel',
          okVariant: 'success',
          onOk: () => {
            handleReset();
            dispatch(hideDialog());
          },
        },
      }),
    );
  }, [dispatch, handleReset]);

  const onRepeatModel = () => {
    dispatch(
      showDialog({
        type: DIALOG_TYPES._CONTENT_DIALOG,
        data: {
          title: `Repeat the schedule`,
          content: <RepeatModel isHalfDay={isHalfDay} startTime={startTime} endTime={endTime} />,
          size: 'lg',
        },
      }),
    );
  };

  return (
    <Container className="mt-4 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center gap-2"
          style={{ height: '32px', width: 'auto' }}
          onClick={() => onRepeatModel()}
        >
          <PiRepeatOnceBold style={{ width: '18px', height: '18px' }} />
          <div style={{ fontSize: '12px', fontWeight: '500' }}>Repeat the schedule</div>
        </Button>
      </div>
      <div className="d-flex align-items-center">
        <Button
          className={`ms-4 rounded-5 d-flex align-items-center justify-content-center ${!isDirty ? 'dirty-button' : ''}`}
          variant="dark"
          style={{ height: '32px', width: 'auto', fontSize: '12px', fontWeight: '500' }}
          hidden={!isDirty}
          disabled={isUpdating}
          onClick={() => onShowReset()}
        >
          Reset
        </Button>
        <Button
          className={`ms-2 rounded-5 d-flex align-items-center justify-content-center ${!isDirty ? 'dirty-button' : ''}`}
          variant="warning"
          style={{ height: '32px', width: 'auto', fontSize: '12px', fontWeight: '500' }}
          disabled={isUpdating}
          onClick={() => onShowConfirm()}
        >
          Confirm schedule
        </Button>
      </div>
    </Container>
  );
};

type Props = {
  isDirty?: boolean;
  isUpdating?: boolean;
  handleReset?: Callback;
  handleUpdate?: Callback;
  isHalfDay?: boolean;
  startTime?: string;
  endTime?: string;
};

export default RepeatSchedule;
