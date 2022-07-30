import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { ActionsRow } from "./components/ActionsRow";
import { DatesCount } from './components/DatesCount';
import { Schedules } from "./components/Schedules";
import { persons } from '../src/data'

function App() {

  let [personData, setPersonData] = useState(persons)

  const onDelete = () => {
    personData = []
    setPersonData(personData)
  }

  const viewList = () => {
    setPersonData(persons)

  }

  useEffect(() => {
    setPersonData([])

  }, [])

  return (
    <div className="font color-body">

      <Container className="py-2">
        <DatesCount persons={personData} />
        <Schedules persons={personData} />
        <ActionsRow view={viewList} deletehandle={onDelete} />
      </Container>


    </div>
  );
}

export default App;
