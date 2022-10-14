let api_uri = process.env.REACT_APP_API_URI
const transactions = api_uri + '/api/transactions'
const auth = api_uri + '/api/auth'
const users = api_uri + '/api/users'

const api = {
  transactions: transactions,
  auth: auth,
  users: users
}
export default api
