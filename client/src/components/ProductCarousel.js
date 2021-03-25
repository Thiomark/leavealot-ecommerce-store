import React, {useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {Image, Carousel} from 'react-bootstrap'
import Messsage from './Messsage'
import {topProducts} from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const topRatedProduct = useSelector(state => state.topRatedProduct)
    const { loading, error, products } = topRatedProduct

    useEffect(() => {
        dispatch(topProducts())
    }, [dispatch])

    return loading ? <Fragment></Fragment> : error ? <Messsage variant='danger'>{error}</Messsage> : (
        <Carousel pause='hover' className='bg-dark'>
            {products.map(product => (<Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`} >
                    <div className="make-plan">
                        <Image src={product.image} alt={product.name} fluid/>
                    </div>
                    <Carousel.Caption className='carousel-caption'>
                        <h2>
                            {product.name} R{product.price}
                        </h2>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>))} 
        </Carousel>
    )
}

export default ProductCarousel
