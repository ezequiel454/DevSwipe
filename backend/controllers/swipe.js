const swipe = require('@swp/swipe-sdk')

const swp = swipe.init({
  apiKey: process.env.API_KEY,
  secret: process.env.SECRET,
  sandbox: process.env.SANDBOX
})

const getOrganization = () => async (req, res) => {
  await swp.getOrganization()
    .then(data => {
      const organization = {
        id: data.value.id,
        valor: data.value.balances[0].balance,
        asset: data.value.balances[0].asset_id,
        name: data.value.name
      }
      res.send({
        organization: organization
      })
    })
    .catch(({error}) => {
      res.send({
        error: error,
        msg: 'error'
      })
    })
}

const getAccounts = () => async (req, res) => {
  await swp.getAllAccounts()
  .then(data => {
    const accounts = data.map(p => p.value)
    res.send({
      accounts: accounts
    })
  })
  .catch(({error}) => {
    res.send({
      error: error + ' here',
      msg: 'error'
    })
  })
}

const getAccount = () => async (req, res) => {
  let id = req.params.id
  await swp.getAccount(id)
  .then(data => {
    res.send({
      account: data.value
    })
  })
  .catch(({data, error}) => {
    res.send({
      error: error,
      msg: 'error'
    })
  })
}

const getAssets = () => async (req, res) => {
  await swp.getAllAssets()
    .then(data => {
      const asset = data.map(p => p.value)
      res.send({
        asset: asset
      })
    })
    .catch(({error}) => {
      res.send({
        error: error,
        msg: 'error'
      })
    })
}

const getPayment = () => async (req, res) => {
  let id = req.params.id
  await swp.getPayment(id)
  .then(data => {
    res.send({
      payment: data.payment
    })
  })
  .catch(({ error }) => {
    res.send({
      error: error,
      msg: 'error'
    })
  })
}

const createAccount = () => async(req, res) => {
  await swp.createAccount()
  .then(data => {
    res.send({
      data: data
    })
  })
  .catch(({ error }) => {
    res.send({
      error: error,
      msg: 'error'
    })
  })
}

const createTransfer = () => async(req, res) => {
  await swp.makeTransfer(req.body)
  .then(data => {
    res.send({
      data: data.value.operations[0] //tratar so o op_code
    })
  })
  .catch(({data, error}) => {
    res.send({
      data: data,
      error: error,
      msg: 'error'
    })
  })
}

module.exports = {
  getOrganization, getAccounts, getAccount, getAssets, getPayment, createAccount, createTransfer
}