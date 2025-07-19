import React from 'react';
import Barcode from './Barcode';

function Product({ product }) {
    return (
        <tr>
            <td >{product.program}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td ><Barcode value={product.serial} /></td>
        </tr>
    );
}

export default Product;
