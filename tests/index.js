import ProgressBar from 'progress'

import habbitTests from './habbitTests.js'
import eventTests from './eventTests.js'

function testResults () {
  const tests = [
    habbitTests,
    eventTests
  ].flat()

  const testsBar = new ProgressBar(`\x1b[36mRunning Tests [:bar] :current/${tests.length}`, { total: tests.length })
  const testsTotalCount = tests.length
  let testsFailed = []

  for (let i = 0; i < testsTotalCount; i++) {

    const passedTest = tests[i].test()
    testsBar.tick()

    if(!passedTest) testsFailed.push(tests[i].name)

    if(testsBar.complete) return testsFailed
  }
}

function runTests () {
  const failedTestResults = testResults()
  if(failedTestResults.length === 0) {
    console.log('\x1b[32m%s\x1b[0m', 'All Tests Passed!!')
  } else {
    console.log(`\x1b[31mFailed ${failedTestResults.length} tests.\x1b[0m`)
    failedTestResults.forEach(test => {
      console.log(`\x1b[33m${test}\x1b[0m`)      
    })
  }
}

runTests()