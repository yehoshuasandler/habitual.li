import mongoose from 'mongoose'

const schema = mongoose.Schema({
  name: String
})

const Habits = mongoose.model('Habits', schema)
export default Habits