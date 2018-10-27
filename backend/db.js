const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite'
  },
  useNullAsDefault: true
})

const initDB = async () => {
  const usersExist = await knex.schema.hasTable('users')
  if (!usersExist) {
    await knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.string('passwd')
      table.string('role')
      table.string('unit') // metric // imperial
      table.string('timezone')
    })
  }
  const runsExist = await knex.schema.hasTable('runs')
  if (!runsExist) {
    await knex.schema.createTable('runs', table => {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('friendly_name')
      table.integer('duration') // in seconds
      table.timestamp('created') // utc
      table.integer('distance') // meters
    })
  }
  const accountExist = await knex.schema.hasTable('user_account')
  if (!runsExist) {
    await knex.schema.createTable('user_account', table => {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('account_id')
    })
  }
  const totalUsers = await knex('users').select(knex.raw('count(*) as total'))
  if (totalUsers[0].total === 0) {
    await knex.insert({
      name: 'Tulio Faria',
      email: 'tuliofaria@devpleno.com',
      passwd: 'abc123',
      role: 'admin',
      unit: 'metric',
      timezone: 'America/Sao_Paulo'
    }).into('users')
    await knex.insert({
      name: 'Zé da Silva',
      email: 'ze@dominio.com',
      passwd: 'abc123',
      role: 'user',
      unit: 'metric',
      timezone: 'America/Sao_Paulo'
    }).into('users')
  }
  const totalUserAccount = await knex('user_account').select(knex.raw('count(*) as total'))
  if (totalUserAccount[0].total === 0) {
    await knex.insert({
      user_id: 1,
      account_id: '79933b0e0662dce11b8a35772d86fa707f12ea4a69a5d3ff9b69b64a3523b0d5'
    }).into('user_account')
  }
}


initDB()

module.exports = knex
