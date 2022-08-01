import React, { useState } from 'react'
import { Row, Form, Col } from 'react-bootstrap';
import { questions } from '../data'


const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState('')
  const [an, setAn] = useState('')

  //to push data to array
  const addNewItem = () => {

    if (qu === "" || an === " ") {
      notify("من فضلك أكمل البيانات")
      return;

    } else {
      questions.push({ id: Math.random(), question: qu, answer: an });
      setQu('')
      setAn('')
      onAdd();
      notify('تم إضافة سؤال جديد')



    }



    // console.log(questions);

  }
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="ادخل السوال" />
      </Col>

      <Col sm="5">
        <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="ادخل الاجابه" />
      </Col>
      <Col sm="2">
        <button onClick={addNewItem} className="btn-color w-100" type="submit">
          اضافة
        </button>
      </Col>
    </Row>
  )
}

export default FormInput