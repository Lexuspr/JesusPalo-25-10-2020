import express from 'express'

const app = express()

app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto: ${app.get('port')}`)
})