import Model from '../models/vendor.js'

const getAll = async () => {
  const data = await Model.findAll()

  return data
}

const findId = async (id) => {
  const data = await Model.findOne({ where: { id } })
  return data
}

const update = async (id, data) => {
  const _update = await Model.update(data, { where: { id } })

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

export default { getAll, create, findId, update, delete: _delete }
