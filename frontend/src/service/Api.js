import axios from 'axios'

const Api = base => {
  const client = axios.create({
    baseURL: base
  })

  const getAuthHeader = () => {
    const token = localStorage.getItem('token')
    return{
      headers:{
        Authorization: 'Bearer '+ token
      }
    }
  }

  const get = endpoint => client.get(endpoint, getAuthHeader())
  const remove = endpoint => client.delete(endpoint, getAuthHeader())
  const create = (endpoint, data) => client.post(endpoint, data, getAuthHeader())
  const update = (endpoint, data) => client.patch(endpoint, data, getAuthHeader())
  const login = (endpoint, user) => client.post(endpoint, user)
 
  return {
    getUser: id => get(`/users/${id}`),
    getUsers: () => get(`/users`),
    removeUser: id => remove(`/users/${id}`),
    updateUser: data => update(`/users/${data.id}`, data),
    createUser: data => create(`/users`, data),

    removeRun: id => remove(`/runs/${id}`),
    getRuns: admin => get(`/runs/${admin}`),
    createRun: data => create(`/runs`, data),

    login: user => login(`/users/login`, user),

    getOrganization: () => get(`/swipe/organizations`),
    getUserAccount: id => get(`/account/${id}`),
  }
}

export default Api