const mongoose = require('mongoose')
const database =  require('./config/database.json')

async function main() {
  console.log(database.connectionString)
  const connection = await mongoose.connect(database.connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(console.error)
  var db = mongoose.connection
  console.log(db)
}

main()