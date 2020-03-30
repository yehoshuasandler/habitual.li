import HabbitCollection from '../src/core/Collections/HabbitCollection.js'

const singletonHabbitCollectionTest = () => {
  const habbitCollectionInMemory = new HabbitCollection()
  habbitCollectionInMemory.destructor()

  const inputOne = { id: 'XYZ', name: 'New Test' }
  const inputTwo = { id: 'ABC', name: 'Another Test' }
  const expectedOutput = [
    { id: 'XYZ', name: 'New Test' },
    { id: 'ABC', name: 'Another Test' }
  ]

  const habbitCollection = new HabbitCollection()
  habbitCollection.addHabbit(inputOne)

  const secondHabbitCollection = new HabbitCollection()
  secondHabbitCollection.addHabbit(inputTwo)
  const habbits = secondHabbitCollection.getHabbits()

  if (JSON.stringify(expectedOutput) === JSON.stringify(habbits)) {
    return true
  } else {
    return false
  }
}

const addHabbitToCollectionTest = () => {
  const habbitCollectionInMemory = new HabbitCollection()
  habbitCollectionInMemory.destructor()

  const input = { id: 'XYZ', name: 'Test Name' }
  const expectedOutput = [{ id: 'XYZ', name: 'Test Name' }]

  const habbitCollection = new HabbitCollection()
  habbitCollection.addHabbit(input)
  const habbits = habbitCollection.getHabbits()

  if (JSON.stringify(expectedOutput) === JSON.stringify(habbits))
    return true
  else return false
}

const addManyHabbitsToCollectionTest = () => {
  const habbitCollectionInMemory = new HabbitCollection()
  habbitCollectionInMemory.destructor()

  const input = [
    { id: 'XYZ', name: 'New Test' },
    { id: 'ABC', name: 'Another Test' }
  ]
  const expectedOutput = [
    { id: 'XYZ', name: 'New Test' },
    { id: 'ABC', name: 'Another Test' }
  ]
  
  const habbitCollection = new HabbitCollection()
  habbitCollection.addHabbits(input)
  const habbits = habbitCollection.getHabbits()
  
  if (JSON.stringify(expectedOutput) === JSON.stringify(habbits))
    return true
  else return false
}

const editHabbitInCollectionTest = () => {
  const habbitCollectionInMemory = new HabbitCollection()
  habbitCollectionInMemory.destructor()

  const input = [
    { id: 'XYZ', name: 'New Test' },
    { id: 'ABC', name: 'Another Test' }
  ]

  const expectedOutput = [
    { id: 'XYZ', name: 'First Changed Name' },
    { id: 'ABC', name: 'Second Changed Name' }
  ]
  
  const habbitCollection = new HabbitCollection()
  habbitCollection.addHabbits(input)
  habbitCollection.findOneHabbitAndUpdate(
    { id: 'XYZ' },
    { name: 'First Changed Name' }
  )
  habbitCollection.findOneHabbitAndUpdate(
    { name: 'Another Test' },
    { name: 'Second Changed Name' }
  )
  const habbits = habbitCollection.getHabbits()
  
  if (JSON.stringify(expectedOutput) === JSON.stringify(habbits))
    return true
  else return false
}

const findManyHabbitsInCollectionTest = () => {
  const habbitCollectionInMemory = new HabbitCollection()
  habbitCollectionInMemory.destructor()

  const input = [
    { id: 'XYZ', name: 'Test' },
    { id: 'ABC', name: 'Test' },
    { id: 'WER', name: 'Not Gonna Use the T Word' }
  ]
  const expectedOutput = [
    { id: 'XYZ', name: 'Test' },
    { id: 'ABC', name: 'Test' }
  ]
  
  const habbitCollection = new HabbitCollection()
  habbitCollection.addHabbits(input)
  const habbits = habbitCollection.findHabbits({ name: 'Test' })
  
  if (JSON.stringify(expectedOutput) === JSON.stringify(habbits))
    return true
  else return false
}


const findOneHabbitInCollectionTest = () => {
  const habbitCollectionInMemory = new HabbitCollection()
  habbitCollectionInMemory.destructor()

  const input = [
    { id: 'XYZ', name: 'Test' },
    { id: 'ABC', name: 'Test' },
    { id: 'WER', name: 'Not Gonna Use the T Word' }
  ]
  const expectedOutput = { id: 'ABC', name: 'Test' }
  
  const habbitCollection = new HabbitCollection()
  habbitCollection.addHabbits(input)
  const habbit = habbitCollection.findOneHabbit({ id: 'ABC' })

  if (JSON.stringify(expectedOutput) === JSON.stringify(habbit))
    return true
  else return false
}

const findOneHabbitIndexInCollectionTest = () => {
  const habbitCollectionInMemory = new HabbitCollection()
  habbitCollectionInMemory.destructor()

  const input = [
    { id: 'XYZ', name: 'Test' },
    { id: 'ABC', name: 'Test' },
    { id: 'WER', name: 'Not Gonna Use the T Word' }
  ]
  const expectedOutput = 1
  
  const habbitCollection = new HabbitCollection()
  habbitCollection.addHabbits(input)
  const habbitIndex = habbitCollection.findOneHabbitIndex({ id: 'ABC' })

  if (expectedOutput === habbitIndex)
    return true
  else return false
}

const getHabbitsFromCollectionTest = () => {
  const habbitCollectionInMemory = new HabbitCollection()
  habbitCollectionInMemory.destructor()

  const input = [
    { id: 'XYZ', name: 'New Test' },
    { id: 'ABC', name: 'Another Test' }
  ]
  const expectedOutput = [
    { id: 'XYZ', name: 'New Test' },
    { id: 'ABC', name: 'Another Test' }
  ]
  
  const habbitCollection = new HabbitCollection()
  habbitCollection.addHabbits(input)
  const habbits = habbitCollection.getHabbits()
  
  if (JSON.stringify(expectedOutput) === JSON.stringify(habbits))
    return true
  else return false
}

const tests = [
  {
    name: 'Singleton Habbit Collection Validity Test',
    test: singletonHabbitCollectionTest
  },
  {
    name: 'Add Habbit To Collection Test',
    test: addHabbitToCollectionTest
  },
  {
    name: 'Add Many Habbits to Collection Test',
    test: addManyHabbitsToCollectionTest
  },
  {
    name: 'Edit Habbit In Collection Test',
    test: editHabbitInCollectionTest
  },
  {
    name: 'Find Many Habbits in Collection Test',
    test: findManyHabbitsInCollectionTest
  },
  {
    name: 'Find One Habbit in Collection Test',
    test: findOneHabbitInCollectionTest
  },
  {
    name: 'Find One Habbit Index in Collection Test',
    test: findOneHabbitIndexInCollectionTest
  },
  {
    name: 'Get Habbits from Collection Test',
    test: getHabbitsFromCollectionTest
  }
]

export default tests
