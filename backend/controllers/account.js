const getMe = ({ db }) => async(req, res) => {
  const userDB = await db('user_account').select().where('user_id', res.locals.user.id)
  if(userDB){
      res.send(userDB[0].account_id)
  }else{
      res.send({})
  }
}

const create = ({ db }) => async(req, res) => {
const newUser = req.body
const userToInsert = {
  user_id: newUser.user_id,
  account_id: newUser.account_id
}

await db.insert(userToInsert).into('user_account')
res.send(userToInsert)
}

module.exports = {
  getMe,
  create
}