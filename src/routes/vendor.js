import express from 'express'
import Controller from '../controllers/vendor.js'

const router = express.Router()

router.get('/all', Controller.getAll)
router.post('/', Controller.create)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.delete)

export default router
