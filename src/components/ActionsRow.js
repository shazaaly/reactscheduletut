import React from 'react'
import { Row, Col } from "react-bootstrap";


export const ActionsRow = ({ view, deletehandle }) => {


  return (
    <div>

      <Row className="justify-content-center my-2">
        <Col sm="8" className="d-flex justify-content-between">
          <button onClick={deletehandle} className=" btn-style py-2">مسح الكل </button>
          <button onClick={view} className=" btn-style py-2">عرض </button>
        </Col>
      </Row>
    </div>
  )
}
