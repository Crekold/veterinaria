import express from "express";

import { showClientes, showClienteById, createCliente, updateCliente, deleteCliente } from "../controllers/cliente.js";


const router = express.Router();


//rutas clientes
router.get('/clientes', showClientes);
router.get('/clientes/:id', showClienteById);
router.post('/clientes', createCliente);
router.put('/clientes/:id', updateCliente);
router.delete('/clientes/:id', deleteCliente);

export default router;