import Repository from '../repositories/vendor.js'

export const Vendor = {
  getAll: async () => await Repository.getAll(),
  create: async (data) => await Repository.create(data),
  update: async (id, data) => await Repository.update(id, data),
  delete: async (id) => await Repository.delete(id),
}
