import React from 'react'
import { Row, Col } from 'react-bootstrap'


export const DatesCount = (props) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="py-4">
          لديك {props.persons.length} مواعيد اليوم
        </Col>
      </Row>
    </div>
  )
}
