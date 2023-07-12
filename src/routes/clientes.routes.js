import { Router } from "express";
import { getClientes, postClientes, getOneClientes, updateClientes, deleteClientes } from '../controllers/clientes.controller.js'

const router = Router()

router.get('/clientes', getClientes)
router.get('/clientes/:id', getOneClientes)
router.post('/clientes', postClientes)
router.patch('/clientes/:id', updateClientes)
router.delete('/clientes/:id', deleteClientes)



export default router