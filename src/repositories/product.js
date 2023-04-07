import VendorModel from '../models/vendor.js'
import Model from '../models/product.js'

const include = [{ model: VendorModel, as: 'vendor' }]

const getAll = async () => {
  const data = await Model.findAll()

  return data
}

const create = async (data) => {
  const created = await Model.create(data, include)

  return created
}

export default { getAll, create }
