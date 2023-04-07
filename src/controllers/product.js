import ResponseHandler from '../helpers/responseHandler.js'
import { Product } from '../middlewares/product.js'

export default {
  getAll: async (req, res) => {
    try {
      const data = await Product.getAll()

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const data = await Product.create(req.body)

      return ResponseHandler.success(res, data)
    } catch (error) {
      ResponseHandler.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const data = await Product.find(req.body)

      return ResponseHandler.success(res, data)
    } catch (error) {
      ResponseHandler.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params

      await Product.delete(id)

      return ResponseHandler.success(res)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
