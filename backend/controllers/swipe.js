const swipe = require('@swp/swipe-sdk')

const swp = swipe.init({
  apiKey: "8069837431d5923e2ec9fbf73a2dff575ade7c960d415e64b9ddb8d1b00245d8",
  secret: "215988195f72112a4e8163f125f1d74f0fec3d45feaf49e33670536e2fe969f0",
  sandbox: true
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
  await swp.makePayment(req.body)
  .then(data => {
    res.send({
      data: data
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