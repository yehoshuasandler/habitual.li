import SYS from '../sys.js'
import db from 'mongoose'

let instance = null

class DB {
  cosntructor () {
    if (!instance) instance = this
    this.connected = false
    return instance
  }

  connect = () => {
    if (!this.connected){
      db.connect(SYS.dbConnectionUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      .then(() => this.connected = true)
      .catch(err => console.log(err))
    }
  }

  disconnect = () => {
    db.disconnect()
  }

  insertOne = async props => {
    const { document, model } = props
    const record = new model(document)
    try {
      const saveRequest = await record.save()
      return saveRequest
    } catch (err) {
      console.log(err)
      return {}
    }
  }
}  

export default DB
