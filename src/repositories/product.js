import VendorModel from '../models/vendor.js'
import Model from '../models/product.js'

const include = [{ model: VendorModel, as: 'vendor' }]

const getAll = async (where) => {
  let items = [],
    page = 1
  let _where = where || {}

  const count = await Model.count({ where: _where })

  while (page >= 1) {
    let filter = {
      where: _where,
      limit: 100,
      offset: (page - 1) * 100,
      order: [['updatedAt', 'DESC']],
    }

    let res = await Model.findAll(filter)

    items = items.concat(res)

    page = items.length >= count ? -1 : page + 1
  }

  return items.map((item) => item.toJSON())

  // const data = await Model.findAll()

  // return data
}

const findById = async (id) => {
  const data = await Model.findAll({ id })

  return data
}

const find = async (where) => {
  const _where = { ...where }
  const data = await Model.findAll({ where: _where })

  return data
}

const create = async (data) => {
  const created = await Model.create(data, include)

  return created
}

const _delete = async (id) => {
  return await Model.destroy({ where: { id } })
}

export default { getAll, create, findById, find, delete: _delete }
