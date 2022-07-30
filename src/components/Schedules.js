
import React from 'react'
import { Row, Col } from "react-bootstrap";

export const Schedules = ({ persons }) => {
  return (
    <div>

      <Row className="justify-content-center ">
        <Col sm="8">
          <div className="rectangle p-2">
            {


              persons.length ? persons.map((person) => {
                return (
                  <div key={person.id} className="d-flex py-1 border-bottom">
                    <img
                      className="img-avatar"
                      src={person.img}
                      alt="profile"
                    />

                    <div className="data d-flex flex-column px-5 align-items-center ">
                      <p className="d-inline fs-5">{person.name} </p>
                      <p className="fs-6"> {person.date} </p>
                    </div>
                  </div>
                );
              })
                :
                <div className='p-5 text-center'>
                  <h3 className='font'> لا يوجد مواعيد اليوم</h3>


                </div>


            }


          </div>
        </Col>
      </Row>
    </div>
  )
}
