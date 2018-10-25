const swipe = require('@swp/swipe-sdk')

const swp = swipe.init({
  apiKey: process.env.apiKey,
  secret: process.env.secret,
  sandbox: process.env.sandbox
})

const getOrganization = () => async (req, res) => {
  await swp.getOrganization()
    .then(data => {
      res.send({
        data: data
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
    res.send({
      data: data
    })
  })
  .catch(({data, error}) => {
    res.send({
      error: error,
      msg: 'error'
    })
  })
}

const getAccount = () => async (req, res) => {
  let id = req.params.id
  await swp.getAccount(id)
  .then(data => {
    res.send({
      data: data
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
      res.send({
        data: data
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
      data: data
    })
  })
  .catch(({data, error}) => {
    res.send({
      error: error,
      msg: 'error'
    })
  })
}

const createAccount = () => async(req, res) => {
  console.log('aqui')
  await swp.createAccount()
  .then(data => {
    res.send({
      data: data
    })
  })
  .catch(({data, error}) => {
    res.send({
      error: error,
      msg: 'error'
    })
  })
}

const createPayment = () => async(req, res) => {
  const newPayment = req.body
  
  await swp.makePayment(newPayment)
  .then(data => {
    res.send({
      data: data
    })
  })
  .catch(({data, error}) => {
    res.send({
      error: error,
      msg: 'error'
    })
  })
}

module.exports = {
  getOrganization, getAccounts, getAccount, getAssets, getPayment, createAccount, createPayment
}