import express from 'express'
import DB from '../../db/DB.js'
import { HabitModel } from '../dataStructures/dbModels.js'

const router = express.Router()
const db = new DB()

router.post('/', async (request, response) => {
  const habit = {
    name: request.body.name
  }

  const saveRequest = await db.insertOne({
    model: HabitModel,
    document: habit
  })
  
  response.send(saveRequest)
})

router.get('/', async (request, response) => {
  const { name } = request.body

  let query = {}
  if (name) query.name = name

  const findRequest = db.find({
    query: query,
    model: HabitModel
  })

  response.send(findRequest)
})

export default router