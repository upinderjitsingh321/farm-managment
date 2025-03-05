import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css"
import { Link } from "react-router";

function OwnerLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false)
    return (
        <>
            <button className="btn  admin-set text-decoration-none" onClick={() => setShow(true)}>
                Admin

            </button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="custom-modal"
                aria-labelledby="example-custom-modal-styling-title"
                size='sm'
                style={{ padding: "80px" }}

            >
                <Modal.Header style={{ backgroundColor: "rgb(108, 146, 108)", padding: "0px 10px", color: "white", display: "flex", justifyContent: "space-between" }}>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Admin
                    </Modal.Title>
                    <CloseIcon className='text-danger' onClick={() => setShow(false)} style={{ cursor: "pointer" }} />
                </Modal.Header>


                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                                placeholder="Enter username"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="text-end pe-2">
                        <Link className="text-dark">Forget Password</Link>
                        </div>
                        <button type="submit" className="btn btn-success w-100 mt-3">
                            Login
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    );
}

export default OwnerLogin

