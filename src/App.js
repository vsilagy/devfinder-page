import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import SearchUser from './components/SearchUser';
import SearchDisplay from './components/SearchDisplay';

export default function App() {
	let API = 'https://api.github.com/users/octocat';
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
			<SearchUser setUser={setUser} />
			<SearchDisplay data={data} />
		</div>
	);
}
