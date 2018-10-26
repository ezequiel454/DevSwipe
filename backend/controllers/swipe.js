const swipe = require('@swp/swipe-sdk')

const swp = swipe.init({
  apiKey: process.env.API_KEY,
  secret: process.env.secret,
  sandbox: process.env.sandbox
})

const getOrganization = () => async (req, res) => {
  await swp.getOrganization()
    .then(data => {
      const organization = {
        id: data.organization.id,
        valor: data.organization.balances[0].balance,
        name: data.organization.name
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
    const accounts = data.map(p => p.account)
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
      account: data.account
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
      const asset = data.map(p => p.asset)
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

const createPayment = () => async(req, res) => {
  await swp.makePayment(req.body)
  .then(data => {
    res.send({
      data: data.payment.operations //tratar so o op_code
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
  getOrganization, getAccounts, getAccount, getAssets, getPayment, createAccount, createPayment
}