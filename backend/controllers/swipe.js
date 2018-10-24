const swipe = require('@swp/swipe-sdk')

const swp = swipe.init({
  apiKey: "71ad81f98fbbab22c9d74948d2899a65027208197291d11e2065c3a9c62fe1f0",
  secret: "ZseM1XT7HnpxOq1wcfTrsZo4fbHHf2dUp9FH/lZ3umBCAHH+xf8la0UHCVBGoAYe"
})

const get = () => async (req, res) => {
  console.log('chamou')
  await swp.getOrganization()
    .then(data => {
      res.send({
        data: data
        //x: res.organization.name
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
  get
}