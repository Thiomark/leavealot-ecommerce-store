import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import {errorMiddleware} from './middleware/errorMiddleware.js'
import path from 'path'
import morgan from 'morgan'

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

import productRouter from './routes/productRouter.js'
import userRouter from './routes/userRouter.js'

app.use(express.json());

app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', userRouter)
// app.all('*', (req, res, next) => {
//     res.status(404).json({
//         success: false,
//         message: `Can't find ${req.originalUrl} on the server`
//     })
// })

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}else{
    app.get('/', (req, res) => {
        res.send('Api is running....')
    })
}

app.use(errorMiddleware)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

