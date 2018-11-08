const swipe = require('@swp/swipe-sdk')

const swp = swipe.init({
  apiKey: process.env.API_KEY,
  secret: process.env.SECRET,
  sandbox: process.env.SANDBOX
})

const getMe = ({ db }) => async(req, res) => {
  const userDB = await db('user_account').select().where('user_id', res.locals.user.id)
  if(userDB.length > 0){
    await swp.getAccount(userDB[0].account_id)
    .then(data => {
      const account = {
        id: data.account.id,
        balance: data.account.balances[0].balance
      }
      res.send({
        account: account
      })
    })
    .catch(() => {
      res.send({
        account: {}
      })
    })
  }else{
    res.send({
      account: {}
    })
  }
}


const create = ({ db }) => async(req, res) => {
  const newUser = req.body
  const userToInsert = {
    user_id: res.locals.user.id,
    account_id: newUser.id
  }

  await db.insert(userToInsert).into('user_account')
  res.send(userToInsert)
}

module.exports = {
  getMe,
  create
}