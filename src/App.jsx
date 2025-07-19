import Product from './Product';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import React, { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container fluid>
      <Row className='p-3 bg-warning border-bottom border-dark'>
        <Col xs={11}><h1>Diepvries teller</h1></Col>
        <Col xs={1} className='text-center'><h1><i className="fa-solid fa-gears"></i></h1></Col>
      </Row >
      <Table striped bordered size='sm' className='mt-3 align-middle text-center'>
        <thead>
          <tr>
            <th style={{ width: '5%' }}>Programma</th>
            <th>Product</th>
            <th>Hoeveelheid</th>
            <th>Barcode</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </tbody>
      </Table>
    </Container >
  );
}

export default App;
