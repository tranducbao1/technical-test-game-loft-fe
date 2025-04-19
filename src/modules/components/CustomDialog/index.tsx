import React from 'react';
import { Modal } from 'react-bootstrap';
import { Callback } from 'src/services';
import './styles.scss';

type CustomDialogProps = {
  show: boolean;
  onHide: Callback;
  children?: React.ReactNode;
  fullscreen?: string | true;
  title: string;
  hideCloseButton?: boolean;
  size: 'sm' | 'lg' | 'xl';
  maxwidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  dialogActions?: React.ReactNode;
  hideTitle?: boolean;
};

const CustomDialog: React.FC<CustomDialogProps> = ({
  show,
  onHide,
  children,
  fullscreen,
  title,
  hideCloseButton,
  size,
  maxwidth,
  dialogActions,
  hideTitle,
}) => {
  return (
    <Modal
      backdrop="static"
      size={size}
      fullscreen={fullscreen}
      maxwidth={maxwidth}
      show={show}
      onHide={onHide}
      centered
      animation
      keyboard={false}
      dialogClassName="custom-dialog-width"
    >
      <Modal.Header closeButton={!hideCloseButton}>
        {!hideTitle && <Modal.Title>{title}</Modal.Title>}
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {dialogActions && <Modal.Footer>{dialogActions}</Modal.Footer>}
    </Modal>
  );
};

export default CustomDialog;
