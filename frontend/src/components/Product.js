import React from 'react';
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Header as='div'><strong>{product.name}</strong></Card.Header>
                <Card.Img src={product.image} variant='top' ></Card.Img>
            </a>
            <Card.Body>
               <Card.Text as='div'>
                   <div className='my-3'>
                       {product.rating} from {product.numReviews} reviews
                       <Rating value={product.rating} text ={product.numReviews}/>
                   </div>
               </Card.Text>
                <Card.Text as='h4'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};
export default Product;