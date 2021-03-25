import React, { useState, useEffect} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {getUser} from '../actions/userAction'
import {addAlert} from '../actions/alertAction'

const ProfileScreen = ({history}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const {user, error, loading} = userDetails
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if(error){
            dispatch(addAlert(error, 'danger'))
        }
        if(!userInfo){
            history.push('/login')
        }else{
            if(!user.name){
                dispatch(getUser('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
                setPassword('')
                setPassword2('')
            }
        }
    }, [history, userInfo, dispatch, error, user])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password === password2){
            setEmail('')
            setPassword('')
            setName('')
            setPassword2('')
        }else {
            dispatch(addAlert('Password do not match', 'danger'))
        }
    }

    return (
        <Row>
            <Col md={3}>
            <h3>User Profile</h3>
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
                <Button type='submit' variant='primary' disabled={loading}>{loading ? 'loading...' : 'Save'}</Button>
            </Form>
            </Col>
            <Col md={9}>
                <h3>My Order</h3>
            </Col>    
        </Row>
    )
}

export default ProfileScreen
