import fs from 'fs'
import http from 'http'
import https from 'https'
import SYS from './sys.js'
import Server from './Server.js'
import DB from './db/DB.js'

const main = () => {

  const port = normalizePort(process.env.PORT || '80')
  const webService = createServer('http')

  webService.listen(port, () => {
    console.log(`Server is listening on ${port}`)
  })

  connectToDatabase()
}

connectToDatabase = () => {
  const db = new DB()
  db.connect()
}

const createServer = protocol => {
  const server = new Server()

  if (protocol === 'https') {
    return https.createServer({
      key: fs.readFileSync(SYS.key).toString(),
      cert: fs.readFileSync(SYS.cert).toString(),
      ca: fs.readFileSync(SYS.ca).toString()
    }, server.app)
  } else {
    return http.createServer(server.app)
  }
}

const normalizePort = portString => {
  const port = parseInt(portString, 10)

  if (isNaN(port)) return portString
  else if (port >= 0 ) return port
  else return 0
}

main()

export { main, createServer, normalizePort }