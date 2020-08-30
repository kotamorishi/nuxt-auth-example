const app = require('express')()
module.exports = { path: '/api', handler: app }

const cors = require('cors')
app.use(cors())


app.get('/test', async (req, res) => {
  res.json("OK")
})
