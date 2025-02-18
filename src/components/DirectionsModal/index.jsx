import PropTypes from "prop-types"; // Importa PropTypes
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({ show, handleClose, onConfirm, children }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Instrucciones del Juego</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        {onConfirm && (
          <Button variant="primary" onClick={onConfirm}>
            Aceptar
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

// 🔹 Validación de props con PropTypes
CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func, // Opcional
  children: PropTypes.node.isRequired, // Contenido dinámico
};

export default CustomModal;
