import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid>
      <Row className='p-3 bg-warning border-bottom border-dark'>
        <Col xs={11}><h1>Diepvries teller</h1></Col>
        <Col xs={1} className='text-center'><h1><i class="fa-solid fa-gears"></i></h1></Col>
      </Row >
    </Container >
  );
}

export default App;
