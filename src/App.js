import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import SearchInput from './components/SearchInput';
import ResultsCard from './components/ResultsCard';

export default function App() {
	let API = 'https://api.github.com/users/octocat';
	const [text, setText] = useState('');
	const [user, setUser] = useState('');
	const [data, setData] = useState('');

	useEffect(() => {
		if (user) {
			API = `https://api.github.com/users/${user}`;
		}
		fetchUser();
	}, [user]);

	const fetchUser = async () => {
		const response = await fetch(API);
		const data = await response.json();
		setData(data);
	};

	return (
		<div className="max-w-screen max-h-screen mx-auto px-4">
			<Nav />
			<SearchInput />
			<ResultsCard data={data} />
		</div>
	);
}
