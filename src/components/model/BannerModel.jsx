import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";

function BaneerModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button
        variant="primary"
        className="play-btn popup-video"
        onClick={handleShow}
      >
        Launch demo modal
      </Button> */}
      <div className="play-btn popup-video" onClick={handleShow}>
        <i className="fa-sharp fa-solid fa-play" />
      </div>
      <Modal show={show} onHide={handleClose} centered size="lg">
        
        <button className="btn-close" onClick={handleClose}><IoClose /></button>
        <Modal.Body>
          <iframe
            className="mfp-iframe"
            src="//www.youtube.com/embed/_sI_Ps7JSEk?autoplay=1"
            frameBorder={0}
            allowFullScreen
            width="100%"
            height={500}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BaneerModel;
