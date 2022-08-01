import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import { questions } from './data'
import FormInputs from './components/FormInputs';
import { QAaccordion } from './components/QAaccordion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  let localItems = JSON.parse(localStorage.getItem("items"))


  const [data, setData] = useState(questions)

  //to add new item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...questions]))
    setData([...questions])


  }



  // delete all Qs
  const deleteAllHandler = () => {
    localStorage.removeItem("items")

    // setData(data.filter(item => item.id !== item.id))
    setData([])
    notify(' تم مسح جميع الأسئلة   ')


    // questions.splice(0, questions.length)

  }

  const deleteOneItem = (id) => {
    let newList = localItems.filter(item => item.id !== id)
    // setData([...newList])
    // (localStorage.setItem("items", JSON.stringify([...newList])))
    localStorage.setItem("items", JSON.stringify([...newList]))
    setData([...newList])

    notify(' تم مسح السؤال بنجاح    ')


    if (localItems.length <= 0) {
      deleteAllHandler()

    }



  }
  const notify = (message) => toast(message);


  return (
    <div className="font text-center color-body">
      <Container className="p-5">

        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm="8">
            <FormInputs onAdd={addItem} notify={notify} />
            <QAaccordion data={data} deleteOneHandler={deleteOneItem} localItemsData={localItems} />
            {

              localItems && localItems.length >= 1 ? (
                <button onClick={deleteAllHandler} className="btn-color w-100">مسح الكل</button>

              ) : null
            }


          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App