import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js';
import generateToken from '../utils/generateToken.js'
// import {check, validationResult} from 'express-validator'

// @route       POST api/v1/users/login
// @desc        login a user
// @access      Public

export const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        const {_id, name, isAdmin} = user
        res.status(200).json({
            _id, name, email, isAdmin, token: generateToken(_id)
        })
    }else{
        res.status(404)
        throw new Error('Invalid email or password')
    }
})

// @route       POST api/v1/users/login
// @desc        login a user
// @access      Public

export const registerUser = asyncHandler(async (req, res) => {
    const {email, name, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        email, name, password
    })

    if(user){
        const {_id, isAdmin} = user
        res.status(201).json({
            _id, name, email, isAdmin, token: generateToken(_id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

// @route       GET api/v1/users/profile
// @desc        login a user
// @access      Private

export const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if(user){
        const {_id, name, isAdmin, email} = user
        res.status(200).json({
            _id, name, email, isAdmin
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @route       PUT api/v1/users/profile
// @desc        Update the User
// @access      Private

export const updateUserProfile = asyncHandler(async (req, res) => {

    let user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        const {_id, name, isAdmin} = updatedUser
        res.json({
            _id, name, email, isAdmin, token: generateToken(_id)
        })

    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

