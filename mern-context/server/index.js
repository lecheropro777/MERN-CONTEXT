import {conn} from './db.js'
import { port } from './config.js'
import app from './app.js'
conn()
app.listen(port)
console.log('Server on port', port)