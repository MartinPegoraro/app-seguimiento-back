import connection from './db.js'
import express from 'express'
import createTable from './models/clientes.models.js'
import clientesRoutes from './routes/clientes.routes.js'

const app = express()

app.use(express.json())

createTable()

app.use('/api', clientesRoutes)

app.listen(3000)

console.log('Server running on port');
