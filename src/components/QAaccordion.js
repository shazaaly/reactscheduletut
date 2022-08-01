import React from 'react'
import { Row, Accordion } from 'react-bootstrap';

export const QAaccordion = ({ data, deleteOneHandler, localItemsData }) => {



  return (
    <Row>
      <Accordion defaultActiveKey="0" className="py-2 my-2">

        {
          localItemsData && localItemsData.length >= 1 ? (

            localItemsData.map((question, index) => {

              return <Accordion.Item key={index} eventKey={question.id}>
                <Accordion.Header>
                  <div className='m-auto'>
                    {question.question}

                  </div>

                </Accordion.Header>
                <Accordion.Body className='d-flex justify-content-around text-end'>

                  <div className=''>
                    {question.answer}


                  </div>

                  <button onClick={() => deleteOneHandler(question.id)} className="btn-color">مسح السؤال</button>
                </Accordion.Body>
              </Accordion.Item>
            })
          ) : (<h2 className='fs-4 text-center p-5'>لا يوجد أسئلة </h2>)
        }



      </Accordion>


    </Row>
  )
}
