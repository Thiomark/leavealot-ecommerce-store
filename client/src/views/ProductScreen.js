import React, { useEffect, useState} from 'react'
import { Row, Col, Image, ListGroup, Button, Form, Card } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Rating from '../components/Rating'
import Messsage from '../components/Messsage';
import Loader from '../components/Loader';
import {getASingleProduct} from '../actions/productActions'
import {addToCart, removeFromCart} from '../actions/cartAction'

const ProductScreen = ({ match }) => {

    const [qty, setQty] = useState(1)
    const [isItemInCart, setItemInCart] = useState(false)

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const websiteCurreny = useSelector(state => state.siteSettings.websiteCurreny)
    const cart = useSelector(state => state.cart)
    
    const {loading, error, product} = productDetails
    const {cartItems} = cart

    useEffect(() => {
        dispatch(getASingleProduct(match.params.id))
    }, [dispatch, match])

    useEffect(() => {
        const doesItemExiost = cartItems.find(x => x._id === product._id)
        if(doesItemExiost){
            setItemInCart(true)
        }else{
            setItemInCart(false)
        }
    }, [cartItems, product._id])

    const addToCartHandler = () => {
        dispatch(addToCart(product, parseInt(qty, 10)))
    }
    
    const removeFromCartHandler = () => {
        dispatch(removeFromCart(product))
    }

    const productDetailsView = (<Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush' >
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup>     
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                                <strong>{`${websiteCurreny} ${product.price}`}</strong>
                            </Col>
                        </Row>         
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                        </Row>                   
                    </ListGroup.Item>
                    {product.countInStock > 0 && (<ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col>
                                <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map(x => (
                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                ))}
                                </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>)}
                    <ListGroup.Item>
                        {isItemInCart ? (<Button onClick={removeFromCartHandler} className="btn-block" type="button">Remove From Cart</Button>) :
                        <Button onClick={addToCartHandler} disabled={product.countInStock === 0} className="btn-block" type="button">Add To Cart</Button>
                        }
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>)

    // fluid makes it so that it stays with in the div
    // flush removes the padding or margin or border I'm not sure 

    return (
        <>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {loading ? <Loader /> : error ? <Messsage variant='danger'>{error}</Messsage> :  productDetailsView}      
        </>
    )
}

export default ProductScreen
