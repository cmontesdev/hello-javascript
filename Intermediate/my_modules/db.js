const usersDb = new Map()

const insertUser = (key, name) => {
    usersDb.set(key, name)
    return { key, name }
}

const getUser = (key) => usersDb.get(key)

const getAllUsers = () => [...usersDb.entries()]

export { insertUser, getUser, getAllUsers }