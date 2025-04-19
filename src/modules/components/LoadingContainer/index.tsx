import { Modal, Spinner } from 'react-bootstrap';
import './styles.scss';

const LoadingContainer: React.FC = () => (
  <>
    <Modal
      show={true}
      onHide={() => {}}
      backdrop="static"
      keyboard={false}
      className="backdrop-modal-custom"
      centered
      size="xl"
    >
      <Modal.Body>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Modal.Body>
    </Modal>
  </>
);

export default LoadingContainer;
