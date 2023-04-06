import Model from '../models/vendor.js'
import { Op } from 'sequelize'

const getAll = async () => {
  const data = await Model.findAll()

  return data
}

const findId = async (id) => {
  const data = await Model.findOne({ where: { id } })
  return data
}

const find = async (where) => {
  const _where = where 
  const data = Model.findAll({
    where: { _where },
  })
  return data
}

const update = async (id, data) => {
  const _update = await Model.update(data, { where: { id } })
  //comment

  return _update
}

const create = async (data) => {
  const created = await Model.create(data)
  await created.save()

  return created
}

const _delete = async (id) => {
  return await Model.destroy({ where: { id } })
}

export default { getAll, create, findId, find, update, delete: _delete }
