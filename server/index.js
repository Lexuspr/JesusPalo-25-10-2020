import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import todoRoutes from './routes/todo'

const app = express()

app.use(bodyParser.json())

app.use(morgan('dev'))

// Connection to Atlas
mongoose.connect(
    process.env.CONNECTION_STRING,
    { 
        useNewUrlParser: true, 
        useFindAndModify: false,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log(`Database connection error: ${err}`)
        }
        console.log('Connected to Atlas')
    }  
)
// Routes
setTimeout(() => {
    app.use('/todos', todoRoutes)
}, 200)

app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto: ${app.get('port')}`)
})