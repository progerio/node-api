require('dotenv').config();

module.exports = {

  // "development": {
  //   use_env_variable : 'DATABASE_URL'
  // }, 

  development: {
    username: "postgres",
    password: '',
    database: "books",
    host: "127.0.0.1",
    dialect: "postgres"
    
  },
  test: {
    username: "postgres",
    password: '',
    database: "books_test",
    host: "127.0.0.1",
    dialect: "postgres"
    
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
    
  }
}
