import { useState } from 'react'

const StatisticLine = ({ text, value }) => (
	<p>
		{text} {value}
	</p>
)

const Statistics = ({
	good,
	neutral,
	bad,
	total,
	average,
	positiveFeddback,
}) => {
	return (
		<>
			<h2>statistics</h2>
			{total !== 0 ? (
				<>
					<StatisticLine text='good' value={good} />
					<StatisticLine text='neutral' value={neutral} />
					<StatisticLine text='bad' value={bad} />
					<StatisticLine text='all' value={total} />
					<StatisticLine text='average' value={average} />
					<StatisticLine text='positive' value={positiveFeddback} />
				</>
			) : (
				<p>No feedback given</p>
			)}
		</>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGood = () => setGood((prev) => prev + 1)
	const handleNeutral = () => setNeutral((prev) => prev + 1)
	const handleBad = () => setBad((prev) => prev + 1)

	const total = () => good + neutral + bad

	const average = () => {
		return (good * 1 + neutral * 0 + bad * -1) / total()
	}

	const positiveFeddback = () => (good / total()) * 100

	return (
		<div>
			<h1>give feedback</h1>
			<button onClick={handleGood}>good</button>
			<button onClick={handleNeutral}>neutral</button>
			<button onClick={handleBad}>bad</button>
			<Statistics
				good={good}
				bad={bad}
				neutral={neutral}
				total={total()}
				average={average().toFixed(2)}
				positiveFeddback={`${positiveFeddback().toFixed(2)}%`}
			/>
		</div>
	)
}

export default App
