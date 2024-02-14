import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Description({show, handleClose}) {


    return (
        <>
  <Modal
                size="sm"
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                // backdrop="static"
                keyboard={false} >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Project Description
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}