import React, { useState, useEffect} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {register} from '../actions/userAction'
import FormContainer from '../components/FormContainer'
import {addAlert} from '../actions/alertAction'

const RegisterScreen = ({location, history}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const {userInfo, error, loading} = userRegister

    useEffect(() => {
        if(error){
            dispatch(addAlert(error, 'danger'))
        }
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect, dispatch, error])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password === password2){
            dispatch(register(name, email, password))
            setEmail('')
            setPassword('')
            setName('')
            setPassword2('')
        }else {
            dispatch(addAlert('Password do not match', 'danger'))
        }
    }

    return (
        <FormContainer>
            <h1>Register</h1>
            <Form autoComplete="off" onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Name" 
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        required
                        placeholder="Enter Email" 
                        autoComplete = 'off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        required
                        placeholder="Enter Password" 
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password" 
                        autoComplete="off"
                        required
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </Form.Group>
                <Button type='submit' variant='primary' disabled={loading || (!name)}>{loading ? 'loading...' : 'Sign Up'}</Button>
            </Form>
            <Row className='py-3'>
                <Col>Have an account? <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>Login</Link></Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen
