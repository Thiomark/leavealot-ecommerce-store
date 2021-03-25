import React, { useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product';
import Loader from '../components/Loader';
import {getAllProducts} from '../actions/productActions'
import {addAlert} from '../actions/alertAction'
import ProductCarousel from '../components/ProductCarousel'

const HomeScreen = ({match}) => {

    const keyword = match.params.keyword

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        if(error){
            dispatch(addAlert(error, 'danger'))
        }
        dispatch(getAllProducts(keyword))
    }, [dispatch, error, keyword])

    return (
        <>
            {!keyword && <ProductCarousel />}
            <h1 style={{paddingTop: '1em'}}>Latest Products</h1>
            {loading ? <Loader /> : (<Row>
                {products.map(product => (<Col key={product._id} sm={12} md={6} lg={4} xl={3}><Product product={product} /></Col>))}    
            </Row> )}
        </>
    )
}

export default HomeScreen
