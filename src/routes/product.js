import express from 'express'
import Controller from '../controllers/product.js'

const router = express.Router()

router.get('/', Controller.getAll)
router.post('/', Controller.create)
// router.put('/:id', Controller.update)
router.delete('/:id', Controller.delete)
router.post('/find', Controller.find)

export default router