import 'dotenv/config'
import express from 'express'
import vendorRouter from './src/routes/vendor.js'
import productRouter from './src/routes/product.js'

import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

const PORT = process.env.PORT || 5000

var app = express() // the main app
var admin = express() // the sub app
var secret = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(logger('dev'))

app.set('port', PORT)

admin.get('/', function (req, res) {
  console.dir(admin.mountpath) // /admin
  res.send('Admin Homepage')
})

secret.get('/', function (req, res) {
  console.log(secret.mountpath)
  res.send('Admin Secret')
})

admin.use('/secr*t', secret)

app.use(['/adm*n', '/manager'], admin) // mount the sub

// admin.on('mount', function (parent) {
//   console.log('Admin Mounted')
//   console.log(parent)
// })

// admin.get('/', function (req, res) {
//   res.send('Admin Homepage')
// })

app.use('/admin', admin)

app.use('/api/vendor', vendorRouter)
app.use('/api/product', productRouter)

app.listen(PORT, () => console.log(`🚀 App listening on port ${PORT}`))

export default app
