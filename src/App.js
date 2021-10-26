import React from 'react'
import * as R from 'ramda'
import './App.css'

import sum1toN from '../problems/easy/sum1toN'
import sum1toN3and5 from '../problems/easy/sum1toN3and5'
import prod1toN from '../problems/easy/prod1toN'
import odd from '../problems/easy/odd'
import even from '../problems/easy/even'
const easy = {sum1toN, sum1toN3and5, prod1toN, odd, even}

import totalList from '../problems/medium/totalList'
import digits from '../problems/medium/digits'
import morseCode from '../problems/medium/morseCode'
const medium = {totalList, digits, morseCode}

import equalSum from '../problems/hard/equalSum'
import splitEvery from '../problems/hard/splitEvery'
const hard = {equalSum, splitEvery}

const DELAY = 30
const INITIAL_DELAY = 300

const $ = (data, ...functions) => R.pipe(...functions)(data)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const problems = {...easy, ...medium, ...hard}

const runTest = (fn, args, expected) => {
	const result = fn(...args)
	const success = R.equals(result, expected)
	return [success, result]
}

let results = $(problems, R.map((x) => R.repeat([], R.length(x))))
const resetResults = {...results}

// console.log(results)

function App() {
	const [isRunning, setIsRunning] = React.useState(false)
	const [tick, setTick] = React.useState(0)

	const run = async () => {
		setIsRunning(true)
		results = $(problems, R.map((x) => R.repeat([], R.length(x))))
		setTick(Date.now())
		await sleep(INITIAL_DELAY)

		for (let problemName in problems) {
			const problemTests = problems[problemName]
			for (let idx in problemTests) {
				const [fn, args, expected] = problemTests[idx]
				const [success, result] = runTest(fn, args, expected)
				results[problemName][idx] = [success, result, expected]
				setTick(Date.now())
				await sleep(DELAY)
			}
		}
		setIsRunning(false)
	}


	// console.log(JSON.stringify(results, null, 2))

	return (
		<div className="App">
			<div>
				{!isRunning && <div className="run fw5 fs4" onClick={run}>RUN</div>}
				<div className="group">
					<div className="header fw5 fs7">Easy</div>
					<div>
						{Object.entries(easy).map(([name, tests]) => {
							return <Task key={name} name={name} tests={tests} />
						})}
					</div>
				</div>

				<div className="group">
					<div className="header fw5 fs7">Medium</div>
					<div>
						{Object.entries(medium).map(([name, tests]) => {
							return <Task key={name} name={name} tests={tests} />
						})}
					</div>
				</div>

				<div className="group">
					<div className="header fw5 fs7">Hard</div>
					<div>
						{Object.entries(hard).map(([name, tests]) => {
							return <Task key={name} name={name} tests={tests} />
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

function Task({name, tests}) {
	return (
		<div className="task">
			<div className="task-name fw5 fs6">{name}</div>
			{tests.map((test, idx) => {
				let color = 'purple'
				const [success, result, expected] = results[name][idx]
				if (R.isNil(success)) color = 'purple'
				else if (success) color = 'green'
				else if (!success) color = 'red'

				return (
					<div key={idx} className={`ball ball-${color}`}>
						<div className="tooltip">
							{result && <code>Result: {JSON.stringify(result, null, 2)}</code>}
							{expected && <code>Expected: {JSON.stringify(expected, null, 2)}</code>}
							{!result && !expected && 'Test not yet run'}
						</div>
					</div>
				)
			})}
			
		</div>
	)
}


export default App;

