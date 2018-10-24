import axios from 'axios'

const ApiSwipe = base => {
  const client = axios.create({
    baseURL: base
  })

  const key = '71ad81f98fbbab22c9d74948d2899a65027208197291d11e2065c3a9c62fe1f0'
  const signature = 'prmoNrKxBwif+GSp8b1hJ3mQ9sjU3NrJNmlKLyNkR2HelXM+CtB6+PyeZk/cQv6a'

  
  const getAuthHeader = () => {
    return{
      headers:{
        'X-Swp-Api-Key': key,
        'X-Swp-Signature': signature
      }
    }
  }

  const get = endpoint => client.get(endpoint, getAuthHeader())
  const post = endpoint => client.post(endpoint, getAuthHeader())
  const remove = endpoint => client.delete(endpoint, getAuthHeader())
  const create = (endpoint, data) => client.post(endpoint, data, getAuthHeader())
  const update = (endpoint, data) => client.patch(endpoint, data, getAuthHeader())
  const login = (endpoint, user) => client.post(endpoint, user)
  
  return {

    getOrganizations: () => get(`/organizations`),
    createAccount: () => post(`/accounts`)
/*
    getUser: id => get(`/users/${id}`),
    getUsers: () => get(`/users`),
    removeUser: id => remove(`/users/${id}`),
    updateUser: data => update(`/users/${data.id}`, data),
    createUser: data => create(`/users`, data),

    removeRun: id => remove(`/runs/${id}`),
    getRuns: admin => get(`/runs/${admin}`),
    createRun: data => create(`/runs`, data),

    login: user => login(`/users/login`, user)*/

  }
}

export default ApiSwipe