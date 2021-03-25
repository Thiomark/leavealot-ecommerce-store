import React from 'react'
import { Row, Col, Image, ListGroup, Button, Form, Card } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Messsage from '../components/Messsage';
import {addToCart, removeFromCart} from '../actions/cartAction'

const CartScreen = ({ history}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const websiteCurreny = useSelector(state => state.siteSettings.websiteCurreny)
    const {cartItems} = cart

    const checkOutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <>
            <Link to='/' className='btn btn-light my-3'>Go To Products</Link>
            {cartItems.length === 0 ? (<Messsage>Your cart is empty</Messsage>
            ) : (<Row>
                <Col md={9}>
                    <ListGroup variant='flush'>
                    {cartItems.map((item) => (<ListGroup.Item key={item._id}>
                        <Row className="align-items-center">
                            <Col md={2}>
                                <Image src={item.image} alt={item.name} fluid rounded></Image>
                            </Col>
                            <Col md={3}><Link to={`/product/${item._id}`}>{item.name}</Link></Col>
                            <Col md={3}>{`${websiteCurreny} ${item.price}`}</Col>
                            <Col>
                                <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item, Number(e.target.value)))}>
                                    {[...Array(item.countInStock).keys()].map(x => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col>
                                <Button type="button" variant="light" onClick={() => dispatch(removeFromCart(item))}><i className="fas fa-trash"></i></Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>))}
                </ListGroup>
                </Col>
                <Col md={3}>
                    <Card py="3">
                        <ListGroup>
                            <ListGroup.Item>
                                <h2 style={subTitle}>Subtotal ({cartItems.reduce((acc, item) => (acc + item.qty), 0)}) items</h2>
                                <h2 style={subTitle}>{websiteCurreny} {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} items</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button 
                                    type='button' 
                                    className='btn-block' 
                                    disabled={cartItems.length === 0} 
                                    onClick={checkOutHandler}
                                >Proceed To Checkout</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>)
            }      
        </>
    )
}

const subTitle = {
    fontSize: '1.1em'
}

export default CartScreen
