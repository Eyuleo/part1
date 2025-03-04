import { useState } from 'react'

const Anecdote = ({ anecdote }) => <p>{anecdote}</p>

const Vote = ({ vote }) => <p>has {vote} votes</p>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	]

	const [selected, setSelected] = useState(0)
	const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

	const nextAnecdote = () => {
		let randomIndex = Math.floor(Math.random() * anecdotes.length)
		setSelected(randomIndex)
	}
	const handleVote = () => {
		const newVote = [...vote]
		newVote[selected] += 1
		setVote(newVote)
	}

	const highestVote = Math.max(...vote)
	const highestAnecdote = anecdotes[vote.indexOf(highestVote)]

	return (
		<div>
			<h1>Anecdote of the day</h1>
			<Anecdote anecdote={anecdotes[selected]} />
			<Vote vote={vote[selected]} />
			<Button text='vote' onClick={handleVote} />
			<Button text='next anecdote' onClick={nextAnecdote} />

			<h2>Anecdote with the most vote</h2>
			<Anecdote anecdote={highestAnecdote} />
			<Vote vote={highestVote} />
		</div>
	)
}

export default App
