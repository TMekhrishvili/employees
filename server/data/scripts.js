const getListSQL = 'SELECT * FROM users'
const createSQL = 'INSERT INTO users(Firstname, Lastname) VALUES(?,?)'
const readSQL = 'SELECT id, Firstname, Lastname FROM users WHERE id=?'
const updateSQL = 'UPDATE users SET firstname = ?, lastname = ? WHERE id = ?'
const deleteSQL = 'DELETE FROM users WHERE id=?'

module.exports = { getListSQL, createSQL, readSQL, updateSQL, deleteSQL }