import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import SearchUser from './components/SearchUser';
import SearchDisplay from './components/SearchDisplay';

export default function App() {
	const [user, setUser] = useState('octocat');
	const [data, setData] = useState('');

	useEffect(() => {
		fetchUser();
	}, [user]);

	const fetchUser = async () => {
		const response = await fetch(
			`https://api.github.com/users/${user}`,
		);
		const data = await response.json();
		setData(data);
	};

	return (
		<div className="max-w-screen mx-auto px-4">
			<Nav />
			<SearchUser setUser={setUser} />
			<SearchDisplay data={data} />
		</div>
	);
}
