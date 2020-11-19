import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const Toaster = (props) => {
  const [show, setShow] = useState(false);
  const toggleShowA = () => setShow(!show);

  return (
    <div
      style={{
        position: "absolute",
        top: "4%",
        right: 0,
        padding: "20px",
      }}
    >
      <Toast show={show} onClose={toggleShowA} delay={2000} autohide>
        <Toast.Header>
          <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>Woohoo, Please Enter a valid Todo name!</Toast.Body>
      </Toast>
    </div>
  );
};

export default Toaster;
